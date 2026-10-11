import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {projects,notes} from '../src/content.js';
import {Card,Button,escape} from '../src/components/ui.js';
import {Home,About,ServicePage,CasePage,BlogPage,Contact,ProjectPage,NotePage,StyleGuide} from '../src/pages.js';
const routes=new Set(['/','/about-me/','/service/','/case-study/','/blog/','/contact/','/style-guide/',...projects.map(p=>`/work/${p.id}/`),...notes.map(n=>`/notes/${n.id}/`)]);
const pages=[Home(),About(),ServicePage(),CasePage(),BlogPage(),Contact(),StyleGuide(),...projects.map(ProjectPage),...notes.map(NotePage)];
for(const html of pages){for(const [,href] of html.matchAll(/href="(\/[^"#]*\/?)"/g)){assert(routes.has(href),`Unknown internal route ${href}`);}assert(!/undefined|\[object Object\]/.test(html),'Missing content');}
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length);
assert.equal(new Set(notes.map(n=>n.id)).size,notes.length);
assert(Card({title:'Test',variant:'project'}).includes('card--project'));
assert(escape('<script>')==='&lt;script&gt;');
assert(Button({label:'Open',href:'https://example.com',external:true}).includes('rel="noopener noreferrer"'));
for(const html of pages){for(const [,tag,attrs] of html.matchAll(/<(a|img)\b([^>]+)>/g)){if(tag==='a'&&attrs.includes('target="_blank"'))assert(attrs.includes('noopener'),'External link needs noopener');if(tag==='img')assert(/alt="[^"]+"/.test(attrs),'Image needs alt text');}}
const css=await readFile('src/styles/tokens.css','utf8');assert(css.includes('--color-accent')&&css.includes('--radius-card'));
console.log(`Validated ${pages.length} page renderers, internal routes, content, image descriptions and shared primitives.`);
