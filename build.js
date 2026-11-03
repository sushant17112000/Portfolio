// Wraps each source page (the same files published as Claude artifacts) into full pages for Vercel.
// portfolio.html -> / (version A), portfolio-b.html -> /b/ (version B)
const fs = require('fs');
function wrap(src){
  const cut = src.indexOf('</style>') + '</style>'.length;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Sushant Bhat: digital transformation in banking CX and data. Work projects, builds, white papers and thesis.">
<meta property="og:title" content="Sushant Bhat Portfolio">
<meta property="og:description" content="Banking CX and data transformation: work projects, builds, white papers and thesis.">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
${src.slice(0, cut)}
</head>
<body>
${src.slice(cut)}
</body>
</html>
`;
}
const out = { 'dist/index.html': 'portfolio.html', 'dist/a/index.html': 'portfolio.html', 'dist/b/index.html': 'portfolio-b.html' };
for (const [dest, srcFile] of Object.entries(out)) {
  if (!fs.existsSync(srcFile)) continue;
  fs.mkdirSync(require('path').dirname(dest), { recursive: true });
  fs.writeFileSync(dest, wrap(fs.readFileSync(srcFile, 'utf8')));
  console.log('Built', dest);
}
