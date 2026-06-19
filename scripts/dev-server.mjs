import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import rsvpHandler from '../api/rsvp.js';

const root = process.argv[2] ?? '.';
const port = Number(process.env.PORT ?? 5173);
const types = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
]);

async function readJsonBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  const rawBody = Buffer.concat(chunks).toString('utf8');
  return rawBody ? JSON.parse(rawBody) : undefined;
}

function createVercelLikeResponse(response) {
  return {
    setHeader: (...args) => response.setHeader(...args),
    status(code) {
      response.statusCode = code;
      return this;
    },
    json(payload) {
      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      response.end(JSON.stringify(payload));
    },
  };
}

createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://localhost:${port}`);

  if (url.pathname === '/api/rsvp') {
    try {
      request.body = await readJsonBody(request);
      await rsvpHandler(request, createVercelLikeResponse(response));
    } catch (error) {
      response.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ message: 'Local API error', error: error.message }));
    }
    return;
  }

  let pathname = decodeURIComponent(url.pathname);

  if (pathname === '/') {
    pathname = '/index.html';
  }

  const safePath = normalize(pathname).replace(/^\.\.(\/|\\|$)/, '');
  const filePath = join(root, safePath);

  try {
    const body = await readFile(filePath);
    response.writeHead(200, { 'Content-Type': types.get(extname(filePath)) ?? 'application/octet-stream' });
    response.end(body);
  } catch {
    const fallback = await readFile(join(root, 'index.html'));
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(fallback);
  }
}).listen(port, '0.0.0.0', () => {
  console.log(`Invitation preview running at http://localhost:${port}`);
});
