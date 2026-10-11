// These are the only UI primitives. Pages compose them; they do not duplicate them.
export function escape(value = '') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
export function Button({label,href,variant='dark',external=false,type='button',attributes=''}) {
  const content = `<span class="button-label">${escape(label)}</span><span class="button-disc" aria-hidden="true"><span class="button-motion">↗</span></span>`;
  return href ? `<a class="button button--${variant}" href="${escape(href)}" ${external?'target="_blank" rel="noopener noreferrer"':''} ${attributes}>${content}</a>` : `<button class="button button--${variant}" type="${type}" ${attributes}>${content}</button>`;
}
export const Badge = label => `<span class="badge"><span aria-hidden="true"></span>${escape(label)}</span>`;
export function Heading({label,title,description='',action}) {
  return `<div class="section-heading">${label?Badge(label):''}<div class="section-heading-row"><div><h2>${title}</h2>${description?`<p>${escape(description)}</p>`:''}</div>${action?Button(action):''}</div></div>`;
}
export function PageHero({label,title,description,action,center=false}) {
  return `<section class="page-hero ${center?'page-hero--center':''}"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>${escape(label)}</span></nav><h1>${title}</h1><div class="page-hero-bottom"><p>${escape(description)}</p>${action?Button(action):''}</div></div></section>`;
}
/** Single Card component for all card usages. Variants share one base and tokens. */
export function Card({variant='project',title,description='',image='',imageClass='',href='',category='',meta='',body='',tags=[],label='View Work',attributes=''}) {
  const media=image?`<div class="card-media ${escape(imageClass)}"><img src="${escape(image)}" alt="${escape(title)}" loading="lazy" decoding="async">${href?`<span class="card-hover" aria-hidden="true">${escape(label)}</span>`:''}</div>`:'';
  const content=`${media}<div class="card-copy"><div class="card-title-row"><h3>${escape(title)}</h3>${category?`<span>${escape(category)}</span>`:''}</div>${meta?`<p class="card-meta">${escape(meta)}</p>`:''}${description?`<p>${escape(description)}</p>`:''}${body}${tags.length?`<div class="tags">${tags.map(tag=>`<span>${escape(tag)}</span>`).join('')}</div>`:''}</div>`;
  return `<article class="card card--${escape(variant)}" ${attributes}>${href?`<a class="card-link" href="${escape(href)}" aria-label="${escape(label+': '+title)}">${content}</a>`:content}</article>`;
}
export function Field({name,label,type='text',placeholder='',multiline=false,required=true}) {
  const attrs=`id="${name}" name="${name}" ${required?'required':''} placeholder="${escape(placeholder)}"`;
  return `<div class="field"><label class="sr-only" for="${name}">${escape(label)}</label>${multiline?`<textarea ${attrs} rows="6" maxlength="5000"></textarea>`:`<input type="${type}" ${attrs} maxlength="${type==='email'?254:120}" autocomplete="${type==='email'?'email':name==='name'?'name':'off'}">`}</div>`;
}
export function Stat({value,label,note=''}) { return `<div class="stat"><strong>${escape(value)}</strong><span>${escape(label)}</span>${note?`<small>${escape(note)}</small>`:''}</div>`; }
