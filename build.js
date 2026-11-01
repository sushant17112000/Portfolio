// Wraps portfolio.html (the same file published as the Claude artifact) into a full page for Vercel.
// Everything up to the end of the first </style> goes into <head>; the rest becomes <body>.
const fs = require('fs');
const src = fs.readFileSync('portfolio.html', 'utf8');
const cut = src.indexOf('</style>') + '</style>'.length;
const head = src.slice(0, cut);
const body = src.slice(cut);
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Sushant Bhat: digital transformation in banking CX and data. Work projects, builds, white papers and thesis.">
<meta property="og:title" content="Sushant Bhat Portfolio">
<meta property="og:description" content="Banking CX and data transformation: work projects, builds, white papers and thesis.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${head}
</head>
<body>
${body}
</body>
</html>
`;
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', page);
console.log('Built dist/index.html');
