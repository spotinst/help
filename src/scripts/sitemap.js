#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

/**
 * Hostname.
 *
 * @type {string}
 */
const hostname = "https://docs.spot.io";

/**
 * Relative path to the `/src` directory.
 *
 * @type {string}
 */
const srcDir = "src";

/**
 * Relative path to the `/docs` directory.
 *
 * @type {string}
 */
const docsDir = path.join(srcDir, "docs");

/**
 * Relative path to the output file.
 *
 * @type {string}
 */
const sitemapFile = path.join(srcDir, "sitemap.xml");

/**
 * Path to the API Reference page.
 *
 * @type {string}
 */
const apiRef = "/api";

/**
 * Walks the file tree rooted at root and returns all walked regular files.
 *
 * @param root
 * @returns {Promise<*>}
 */
const walk = async (root) => {
  let files = await fs.readdir(root);

  files = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(root, file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) return walk(filePath);
      else if (stats.isFile()) return { path: filePath, ...stats };
    })
  );

  return files.reduce((all, folderContents) => all.concat(folderContents), []);
};

/**
 * Returns a boolean indicates whether a file is of type Markdown.
 *
 * @param file
 * @returns {boolean}
 */
const isMarkdownFile = (file) => path.extname(path.basename(file)) === ".md";

/**
 * Returns a boolean indicates whether a file is an internal Docsify file.
 *
 * @param file
 * @returns {boolean}
 */
const isDocsifyFile = (file) => path.basename(file).startsWith("_");

/**
 * Generates a sitemap.
 *
 * @param hostname
 * @param dir
 * @returns {Promise<Buffer>}
 */
const generateSitemap = async (hostname, dir) => {
  // Find all regular files.
  const files = await walk(dir);

  // Filter out both non-markdown and internal files.
  const contentFiles = files.filter((file) => isMarkdownFile(file.path) && !isDocsifyFile(file.path));

  // Map files to sitemap objects.
  const links = [
    {
      url: apiRef,
      changefreq: "daily",
    },
  ].concat(
    ...contentFiles.map((file) => ({
      url: file.path.replace(dir, "").replace(".md", "").replace("/README", ""),
      lastmod: file.mtime,
    }))
  );

  // Create a stream to write to.
  const stream = new SitemapStream({ hostname });

  // Generate the XML string.
  return streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
};

(async () => {
  // Generate the XML string.
  const sitemapXML = await generateSitemap(hostname, docsDir);

  // Write the generated sitemap.
  await fs.writeFile(sitemapFile, sitemapXML);
})();
