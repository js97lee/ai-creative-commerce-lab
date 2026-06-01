import fs from "fs";
import path from "path";

const out = path.join(process.cwd(), "out");

function copyHtmlToDir(htmlPath) {
  const dir = htmlPath.replace(/\.html$/, "");
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(htmlPath, path.join(dir, "index.html"));
}

// /lab
if (fs.existsSync(path.join(out, "lab.html"))) {
  copyHtmlToDir(path.join(out, "lab.html"));
}

// /lab/week-*
const labDir = path.join(out, "lab");
if (fs.existsSync(labDir)) {
  for (const file of fs.readdirSync(labDir)) {
    if (file.endsWith(".html")) {
      copyHtmlToDir(path.join(labDir, file));
    }
  }
}

console.log("GitHub Pages directory indexes created");
