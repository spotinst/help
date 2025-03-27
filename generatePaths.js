const fs = require("fs");
const path = require("path");

const DOCS_DIR = path.join(__dirname, "src/docs");
const OUTPUT_FILE = path.join(__dirname, "src/docs/paths.json");

function getAllMarkdownFiles(dir, baseDir = "/") {
  let results = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(baseDir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getAllMarkdownFiles(fullPath, relativePath));
    } else if (file.endsWith(".md")) {
      results.push(relativePath.replace(/\\/g, "/"));
    }
  });

  return results;
}

const paths = getAllMarkdownFiles(DOCS_DIR);

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(paths, null, 2));

console.log(`Generated paths.json with ${paths.length} entries.`);
