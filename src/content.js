// Content is independent of layout. Editing an item updates every place it appears.
const repo = 'https://raw.githubusercontent.com/HandlerJnr/Abdulfatai-Portfolio/main';
export const asset = path => `${repo}/${path}`;
export const person = {
  first: 'Jamiu', last: 'Abdulfatai', name: 'Jamiu Abdulfatai',
  role: 'Product Designer', location: 'Brighton, UK',
  email: 'aabdulfataijamiu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jamiudesign/',
  github: 'https://github.com/HandlerJnr',
  cv: asset('Abdulfatai_Jamiu_CV.pdf'),
  portrait: asset('assets/personal/portrait-transparent.png'),
  intro: 'I turn complex fintech, SaaS and AI workflows into clear, usable experiences. From the first flow to the product that ships.',
  bio: 'I’m Jamiu Abdulfatai, a product designer based in Brighton, UK. I work close to founders, product and engineering: mapping journeys, building reusable systems and reviewing implementation so the reasoning survives handoff.',
  availability: 'Open to placement & projects'
};
export const projects = [
  {id:'horal',name:'Horal',category:'Marketplace',type:'Mobile + web',image:asset('projects/horal-buy-sell.webp'),second:asset('projects/horal-web-discovery.webp'),imageClass:'phone',
    title:'Designing trust into a marketplace.',summary:'Buyer discovery, escrow-protected checkout and the seller operations behind every order.',role:'End-to-end product designer',status:'Live · Web, iOS & Android',
    problem:'Buyers need confidence to transact with independent sellers, while sellers need the tools to manage inventory, fulfil orders and receive payouts.',
    process:'I designed the buyer and seller journeys as one connected system, from search and product evaluation to checkout, escrow status, communication and fulfilment.',
    solution:'Verification, protected payments and transaction status make safety visible. A separate seller experience gives operational depth without crowding the shopping journey.',
    result:'A live marketplace across web, iOS and Android, with escrow, KYC, chat, inventory, orders and seller payouts.',url:'https://www.horal.ng/',source:'https://jamiudesigns.vercel.app/work/horal/',
    decisions:[['Make verification part of the decision','Trust signals sit with the store, where a buyer is evaluating a seller.'],['Turn escrow into a journey','Payment protection connects to order progress and delivery, rather than stopping at a checkout badge.'],['Design both sides','Buyer confidence depends on seller tools that make fulfilment and payouts manageable.']]},
  {id:'pay4me',name:'Radius / Pay4Me',category:'Fintech',type:'Mobile + web',image:asset('projects/pay4me-hero.jpg'),second:asset('projects/pay4me-features.jpg'),
    title:'Cross-border payments. Real deadlines.',summary:'Education payments designed around sponsorship, verification, trust and deadline visibility.',role:'Product designer',status:'Live product · Designed in 2025',
    problem:'Tuition, SEVIS and visa fees cross borders against hard deadlines. The person paying is often a parent or relative, rather than the student.',
    process:'I designed the mobile payment experience and marketing site, including sponsored payments, verification, transaction tracking, currency visibility and support.',
    solution:'Sponsored payments became a first-class journey. The website earns trust before installation, while the app keeps currency, verification and support visible.',
    result:'A product shaped around a family funding someone else’s education. Company-level traction is distinct from evidence of individual design impact.',source:'https://jamiudesigns.vercel.app/work/pay4me/',
    decisions:[['Design for the sponsor','Payer and beneficiary are modelled as different people.'],['Build trust before install','The marketing site does the credibility work before someone commits to a download.'],['Keep context visible','Currency and verification status are everyday payment context, not hidden settings.']]},
  {id:'bizinc',name:'Bizinc',category:'Marketplace',type:'SaaS + marketplace',image:asset('projects/bizinc-studio.jpg'),second:asset('projects/bizinc-wireframes.jpg'),
    title:'One business. Two sides of the experience.',summary:'Customer discovery and booking connected with the tools businesses use to operate.',role:'UI/UX Intern → Product Designer → UI/UX Manager',status:'Live product · April 2024 – May 2026',
    problem:'Customers need to discover and choose businesses. Owners need to manage the identity and services those customers see, within an already live platform.',
    process:'I mapped the journeys separately, then reconciled them into one site map. My work covered Business Profile 2.0, marketplace interfaces, booking, operator tools and a component library.',
    solution:'Business View and Client View share one identity with deliberate differences. Discovery cards support comparison before someone opens a profile.',
    result:'A live two-sided marketplace and progression into design-team leadership. Reported product metrics do not isolate the effect of individual design changes.',source:'https://jamiudesigns.vercel.app/work/bizinc/',
    decisions:[['One profile, two views','Owner controls and customer navigation serve different tasks while sharing one business identity.'],['Support a shortlist','Service, location, proximity and opening status help visitors compare businesses.'],['Carry decisions into delivery','A component library and clear handoff connect the design to implementation.']]},
  {id:'vista-itss',name:'Vista Digital Banking',category:'Fintech',type:'Multi-market banking',image:asset('projects/vista-studio.jpg'),second:asset('projects/vista-screens.jpg'),
    title:'One system. Four local markets.',summary:'Corporate and retail banking journeys across four localised West African subsidiaries.',role:'UI/UX Designer · ITSS',status:'Four-market product scope',
    problem:'Corporate users can act for several legal entities, currencies and countries. Four subsidiaries also have different languages, regulations and local requirements.',
    process:'Requirements-led discovery with product and engineering informed corporate workflows, account organisation and a shared design system with localisation built in.',
    solution:'Entity context stays prominent, approvals are treated as work, and account views support larger portfolios. Language selection appears before sign-in.',
    result:'A shared banking system serving The Gambia, Guinea, Sierra Leone and Burkina Faso. Post-launch adoption and task-completion data were not available to me.',source:'https://jamiudesigns.vercel.app/work/vista-itss/',
    decisions:[['Make the entity visible','Legal entity context appears beneath identity before a transaction starts.'],['Approvals are work','Pending payment approvals are primary tasks, rather than a notification badge.'],['Localise the shared system','Language, currency and local rules remain explicit within consistent patterns.']]},
  {id:'kremor-ai',name:'Kremor AI',category:'AI & SaaS',type:'Generative commerce',image:asset('projects/kremor-studio.jpg'),second:asset('projects/kremor-workspace.jpg'),
    title:'From a prompt to a real garment.',summary:'A generative workspace, a storefront and the operations that turn an idea into clothing.',role:'UI/UX Designer · Design & Research Lead',status:'Contract · June 2024 – July 2026',
    problem:'Someone may have an occasion or fabric in mind without the vocabulary to prompt a generator. A generated image still needs a route to a real garment.',
    process:'I designed the storefront, creative workspace and role-based operations end to end, alongside evaluation of 96+ complex AI interaction tasks.',
    solution:'Quick actions and plain-language openers support creative exploration. Connected operations cover measurements, artisans, approvals and production.',
    result:'Three connected surfaces share one design system. The workshop role model remains a design assumption to validate.',source:'https://jamiudesigns.vercel.app/work/kremor-ai/',
    decisions:[['Give people a first move','Phrased openers and quick actions help someone who has a feeling but no prompt vocabulary.'],['Design for iteration','The workspace supports continued exploration rather than one-shot generation.'],['Connect digital to physical','Production tools carry the design towards measurements, approval and craftsmanship.']]},
  {id:'settle',name:'Settle',category:'Service design',type:'Student experience',image:asset('projects/settle-dependency.jpg'),second:asset('projects/settle-dependency.jpg'),
    title:'The first 30 days, in the right order.',summary:'A dependency-aware service experience for international students arriving in the UK.',role:'Product designer · Research, UX, UI, prototype',status:'Self-initiated · Research in progress',
    problem:'Arrival tasks depend on one another. Enrolment and a term-time address may unlock a bank letter, which then unlocks a bank account.',
    process:'I framed the problem, designed the study and developed the survey, interview guide and competitive review. The dependency model is a hypothesis, not a research finding.',
    solution:'Show the next unlocked step, explain what is blocking another task and attach a document checklist to each appointment.',
    result:'Study design and a problem model exist. Research is still open, and no measured outcomes are claimed.',source:'https://jamiudesigns.vercel.app/work/settle/',
    decisions:[['Design the dependency','The relationship between tasks matters as much as each task itself.'],['Make blocked steps useful','Explain what unlocks the next action, so a dead end becomes a direction.'],['Test the model','Interviews reconstruct real arrival sequences rather than asking people to confirm mine.']]}
];
export const services = [
  {title:'UI/UX DESIGN',description:'I turn requirements and complex workflows into interfaces people can understand and use.',bullets:['Journey mapping, wireframes & prototypes','Interaction design & usability review'],image:projects[3].second},
  {title:'DESIGN SYSTEMS',description:'Shared components, clear rules and consistent patterns that work across products and teams.',bullets:['Reusable Figma components & tokens','Documentation & developer handoff'],image:projects[2].image},
  {title:'WEB & MOBILE DESIGN',description:'Connected experiences across screens, with the same product thinking behind each one.',bullets:['Responsive web & mobile journeys','Implementation review & front-end prototypes'],image:projects[0].second},
  {title:'AI PRODUCT DESIGN',description:'I design around what people want to achieve, how they explore and what happens when the model gets it wrong.',bullets:['Generative interaction & evaluation','LangGraph & open-source AI integration'],image:projects[4].second}
];
export const strengths = [
  {title:'Product ownership',text:'I follow the work from requirements and early flows to design systems, handoff and implementation review.'},
  {title:'Close collaboration',text:'I work with founders, product and engineering to make the constraints and decisions clear before they become screens.'},
  {title:'Continuous learning',text:'My MSc in User Experience Design at the University of Brighton builds on my product work and aerospace background.'},
  {title:'Systems thinking',text:'Multi-role marketplaces and multi-market banking taught me to design the rules behind the interface as carefully as the interface itself.'}
];
export const skills = [
  {title:'UI / UX Design',text:'Clear journeys, purposeful interaction and a strong visual system.',tags:['Figma','Wireframing','Prototyping','Interaction']},
  {title:'Product Thinking',text:'Requirements, constraints and different user roles brought into one product.',tags:['Journeys','Service design','Agile','Handoff']},
  {title:'AI & Research',text:'Product research and model evaluation alongside thoughtful AI interaction.',tags:['Evaluation','LangGraph','Hugging Face','Research']},
  {title:'Front-End Development',text:'Working skills that help me prototype and collaborate with engineering.',tags:['HTML','CSS','JavaScript','React']}
];
export const experience = [
  {name:'Bizinc',role:'UI/UX Intern → Product Designer → UI/UX Manager',time:'2024 – 2026',tag:'Product & leadership'},
  {name:'Kremor AI',role:'UI/UX Designer · Design & Research Lead',time:'2024 – 2026',tag:'Design & AI evaluation'},
  {name:'University of Brighton',role:'MSc User Experience Design · Ongoing',time:'2026',tag:'Postgraduate study'},
  {name:'Aerospace Engineering',role:'Completed with distinction',time:'June 2026',tag:'Education'}
];
export const notes = [
  {id:'trust-before-install',title:'Trust starts before someone installs the app.',category:'Fintech',image:projects[1].image,lead:'What Radius / Pay4Me taught me about where reassurance belongs.',paragraphs:['When a family is about to send education fees across a border, the first decision happens before the payment screen. They have to decide whether they trust the company at all.','That moved part of the design problem into the marketing site. The app could not reassure someone who had already decided against downloading it. Credibility, coverage and a clear explanation of the product needed to come first.','The second decision was structural: the person paying might not be the student. Sponsored payment needed its own journey, with both people represented clearly.'],project:'pay4me'},
  {id:'one-system-many-roles',title:'One system can serve very different people.',category:'Product design',image:projects[2].image,lead:'The shared identity behind a two-sided marketplace.',paragraphs:['A business owner and a customer can use the same platform for very different reasons. One manages a profile and its services. The other decides whether that business is right for them.','At Bizinc, I mapped those journeys separately before bringing them into one site map. Business View and Client View could share the same identity without sharing every control.','That is how I think about consistency: keep the system coherent while respecting the job each person came to do.'],project:'bizinc'},
  {id:'beyond-the-prompt',title:'An AI product needs more than a prompt box.',category:'AI & UX',image:projects[4].image,lead:'Connecting creative confidence with the work behind the result.',paragraphs:['Someone can know the occasion they are dressing for without knowing how to describe a garment. A blank prompt box asks for vocabulary before the product has helped them find it.','For Kremor, quick actions and phrased openers gave people a starting point. Iteration mattered too: a design needed to be explored and resumed, rather than generated once and forgotten.','The result also had to become clothing. Measurements, approval, artisans and production were part of the product problem, so I designed those operations alongside the creative workspace.'],project:'kremor-ai'}
];
