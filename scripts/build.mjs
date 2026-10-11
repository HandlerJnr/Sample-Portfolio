import {mkdir,readFile,writeFile,cp,rm} from 'node:fs/promises';
import {projects,notes} from '../src/content.js';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
await cp('src','dist/src',{recursive:true});
await cp('public','dist',{recursive:true});
const html=await readFile('index.html','utf8');
const routes=['','about-me','service','case-study','blog','contact','style-guide',...projects.map(p=>`work/${p.id}`),...notes.map(n=>`notes/${n.id}`)];
for(const route of routes){const directory=route?`dist/${route}`:'dist';await mkdir(directory,{recursive:true});const title=projects.find(p=>route===`work/${p.id}`)?.name||notes.find(n=>route===`notes/${n.id}`)?.title||({'about-me':'About','service':'Services','case-study':'Case studies','blog':'Design notes','contact':'Contact','style-guide':'Style guide'})[route]||'Product Designer';await writeFile(`${directory}/index.html`,html.replace('<title>Jamiu Abdulfatai — Product Designer</title>',`<title>${title.replaceAll('&','&amp;')} — Jamiu Abdulfatai</title>`));}
await writeFile('dist/404.html',html);
console.log(`Built ${routes.length} routes. No external build dependencies required.`);
