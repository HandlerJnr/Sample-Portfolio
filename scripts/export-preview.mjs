// Generates a file-openable preview from the real source components.
// It is a derived deliverable; edit src/, never this generated HTML.
import {readFile,writeFile,mkdir} from 'node:fs/promises';
const sources=['src/content.js','src/components/ui.js','src/components/layout.js','src/sections.js','src/pages.js'];
const definitions=(await Promise.all(sources.map(path=>readFile(path,'utf8')))).map(s=>s.replace(/^import .*;\n/gm,'').replace(/^export /gm,'')).join('\n');
const app=(await readFile('src/app.js','utf8')).replace(/^import .*;\n/gm,'').replace("const path = location.pathname.replace(/\\/+$/, '') + '/';","const path = previewPath;");
const css=(await Promise.all(['src/styles/tokens.css','src/styles/site.css'].map(path=>readFile(path,'utf8')))).join('\n');
let html=await readFile('index.html','utf8');
html=html.replace(/<link rel="stylesheet" href="\/src\/styles\/[^\"]+">/g,'').replace('<link rel="icon" href="/favicon.svg" type="image/svg+xml">','');
const script=`${definitions}\nlet previewPath='/';\nfunction renderPreview(){\n${app}\ndocument.querySelectorAll('a[href^="/"]').forEach(a=>{a.href='#'+a.getAttribute('href');});\n}\nwindow.addEventListener('hashchange',()=>{if(location.hash.startsWith('#/')){previewPath=location.hash.slice(1).split('#')[0];renderPreview();window.scrollTo(0,0);}});\nif(location.hash.startsWith('#/'))previewPath=location.hash.slice(1);\nrenderPreview();`;
html=html.replace('</head>',`<style>${css}</style></head>`).replace('<script type="module" src="/src/app.js"></script>',`<script>${script.replace(/<\/script/gi,'<\\/script')}</script>`);
await mkdir('dist',{recursive:true});
await writeFile('dist/preview.html',html);
console.log('Exported file-openable preview from the shared components.');
