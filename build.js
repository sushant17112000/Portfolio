// Wraps portfolio.html (the same file published as the Claude artifact) into a full page for Vercel.
const fs = require('fs');
const body = fs.readFileSync('portfolio.html', 'utf8');
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Sushant Bhat: digital transformation in banking CX and data. Work projects, builds, white papers and thesis.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
</head>
<body>
${body}
</body>
</html>
`;
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', page);
console.log('Built dist/index.html');
