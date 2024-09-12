#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");
const glob = require("glob");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const xmlformatter = require("xml-formatter");

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
 * XML tag definitions.
 *
 * @type {{priority: number, changefreq: string}}
 */
const tags = {
  changefreq: "weekly",
  priority: 0.5,
};

/**
 * Language/region codes.
 *
 * @type {string[]}
 */
const langs = ["x-default", "en-us"];

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
 * @returns {Promise<string>}
 */
const generateSitemap = async (hostname, dir) => {
  // Find all regular files.
  const files = glob.sync(`${dir}/**/*.md`);

  // Filter out both non-markdown and Docsify internal files.
  const contentFiles = [apiRef].concat(
    files.filter((file) => isMarkdownFile(file) && !isDocsifyFile(file))
  );

  // Map files to URL entries.
  const urls = contentFiles.map((file) => {
    let url = file.replace(dir, "").replace(".md", "").replace("/README", "/");
    if (url !== apiRef) url = `?${url}`; // https://git.io/JTpz9
    let links = langs.map((lang) => ({ url, lang }));
    return { url, links, ...tags };
  });

  // Create a stream to write to.
  const stream = new SitemapStream({ hostname });

  // Generate.
  const xml = await streamToPromise(Readable.from(urls).pipe(stream));

  // Return the generated XML as a string.
  return xml.toString();
};

(async () => {
  // Generate sitemap.
  const sitemapXML = await generateSitemap(hostname, docsDir);

  // Convert the XML into a human readable format (pretty print).
  const sitemapXMLFormatted = xmlformatter(sitemapXML, {
    collapseContent: true,
  });

  // Write the generated sitemap.
  await fs.writeFile(sitemapFile, sitemapXMLFormatted);
})();
