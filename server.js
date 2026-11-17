"use strict";

import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT) || 3000;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

const routes = new Map([
  ["/", "finalproject/html/index.html"],
  ["/index.html", "finalproject/html/index.html"],
  ["/about.html", "finalproject/html/about.html"],
  ["/contact.html", "finalproject/html/contact.html"],
]);

const server = http.createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  const relativePath = routes.get(pathname) || pathname.replace(/^\/+/, "");

  if (!relativePath) {
    response.writeHead(404);
    response.end("Not Found");
    return;
  }

  const filePath = path.resolve(projectRoot, relativePath);
  if (filePath !== projectRoot && !filePath.startsWith(`${projectRoot}${path.sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const content = await readFile(filePath);
    const extension = path.extname(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    response.end(content);
  } catch {
    response.writeHead(404);
    response.end("Not Found");
  }
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Final project running at http://localhost:${port}`);
});
