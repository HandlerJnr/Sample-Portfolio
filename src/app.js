import {projects,notes,person} from './content.js';
import {Header,Footer} from './components/layout.js';
import {Home,About,ServicePage,CasePage,BlogPage,Contact,ProjectPage,NotePage,StyleGuide,NotFound} from './pages.js';
const path = location.pathname.replace(/\/+$/, '') + '/';
const routes={'/':Home,'/about-me/':About,'/service/':ServicePage,'/case-study/':CasePage,'/blog/':BlogPage,'/contact/':Contact,'/style-guide/':StyleGuide};
let render=routes[path],title=path==='/'?'Product Designer':path.split('/')[1].replaceAll('-',' ');
if(path.startsWith('/work/')) {const p=projects.find(p=>path===`/work/${p.id}/`); if(p){render=()=>ProjectPage(p);title=p.name;}}
if(path.startsWith('/notes/')) {const n=notes.find(n=>path===`/notes/${n.id}/`); if(n){render=()=>NotePage(n);title=n.title;}}
document.title=`${title.charAt(0).toUpperCase()+title.slice(1)} — ${person.name}`;
document.getElementById('app').innerHTML=Header(path)+`<main id="main">${(render||NotFound)()}</main>`+Footer();

const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.primary-navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('is-open');}
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',expanded);menu.setAttribute('aria-label',expanded?'Close navigation':'Open navigation');nav.classList.toggle('is-open',expanded);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
window.matchMedia('(min-width: 992px)').addEventListener('change',event=>{if(event.matches)closeMenu();});

document.querySelectorAll('[data-accordion]').forEach(details=>details.addEventListener('toggle',()=>{if(details.open)document.querySelectorAll('[data-accordion]').forEach(other=>{if(other!==details)other.open=false;});}));
const tabs=[...document.querySelectorAll('[data-tab]')];
function selectTab(index){tabs.forEach((tab,i)=>{tab.classList.toggle('is-active',i===index);tab.setAttribute('aria-selected',i===index);tab.tabIndex=i===index?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=i!==index;});}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>selectTab(i));tab.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(i+1)%tabs.length;else if(event.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();selectTab(next);tabs[next].focus();}});});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{const category=button.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('is-active',b===button);b.setAttribute('aria-pressed',b===button);});let count=0;document.querySelectorAll('.project-grid .card--project').forEach((card,i)=>{const visible=category==='All'||projects[i].category===category;card.hidden=!visible;if(visible)count++;});document.querySelector('[data-filter-status]').textContent=`Showing ${count} ${category==='All'?'':category+' '}projects`;}));
const form=document.getElementById('contact-form');
form?.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=`Portfolio enquiry from ${data.get('name')}`;const body=`Hi Jamiu,\n\n${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;location.href=`mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;const status=document.getElementById('form-status');status.hidden=false;status.textContent=`An email draft was requested. If your email app did not open, email ${person.email} directly. Nothing has been sent from this page.`;});

// Progressive enhancement: content remains visible if IntersectionObserver is unavailable.
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.05});document.querySelectorAll('.section-heading,.card,.experience-row').forEach(element=>{element.classList.add('reveal');observer.observe(element);});}
