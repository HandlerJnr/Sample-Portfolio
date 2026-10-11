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

// Original extended portfolio documents and artwork.
export const collections = {
  "credentials": [
    {
      "title": "References",
      "cards": [
        {
          "title": "Letter of recommendation",
          "description": "Covers the progression from UI/UX intern to designer to UI/UX Manager leading other designers and interns, and the rebuild of the Bizinc platform interface from scratch.",
          "meta": "9 December 2025 · Michael Fulton II — Chief Executive Officer, Bizinc",
          "image": "/credentials/previews/bizinc-ceo-reference.jpg",
          "links": [
            {
              "href": "/credentials/files/bizinc-ceo-reference.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/bizinc-ceo-reference.jpg"
          ]
        },
        {
          "title": "Letter of recommendation",
          "description": "Covers the dual role — UI/UX design alongside AI model evaluation: forensic benchmarking, dataset annotation and qualitative evaluation of LLM and generative image output.",
          "meta": "27 July 2026 · Saheed Alabi — Founder, Kremor AI",
          "image": "/credentials/previews/kremor-founder-reference.jpg",
          "links": [
            {
              "href": "/credentials/files/kremor-founder-reference.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/kremor-founder-reference.jpg"
          ]
        },
        {
          "title": "Academic reference",
          "description": "Seven years as academic mentor, covering the solar-powered drone final-year project and the move from physics into design and AI.",
          "meta": "30 April 2026 · Adamu Muhammad Aminu, MNIP — Department of Physics, Federal University Dutsin-Ma",
          "image": "/credentials/previews/academic-reference.jpg",
          "links": [
            {
              "href": "/credentials/files/academic-reference.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/academic-reference.jpg"
          ]
        }
      ]
    },
    {
      "title": "Awards & recognition",
      "cards": [
        {
          "title": "Most Outstanding Intern of the Year",
          "description": "Names the Vista Bank project UI/UX work and the Jasper Report design template as the contributions it was awarded for.",
          "meta": "6 November 2023 · ITSS — Information Technology Solution Services, Geneva",
          "image": "/credentials/previews/itss-most-outstanding-intern.jpg",
          "links": [
            {
              "href": "/credentials/files/itss-most-outstanding-intern.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/itss-most-outstanding-intern.jpg"
          ]
        },
        {
          "title": "Finalist — Synergy Africa Design Quest 2023",
          "description": "Independent design recognition, judged competition",
          "meta": "25 October 2023 · Synergyy",
          "image": "/credentials/previews/synergy-africa-design-quest.jpg",
          "links": [
            {
              "href": "/credentials/files/synergy-africa-design-quest.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/synergy-africa-design-quest.jpg"
          ]
        },
        {
          "title": "1st runner-up team — Hult Prize",
          "description": "Team placement in an international entrepreneurship competition",
          "meta": "11 January 2021 · Hult Prize Foundation, Federal University Dutsin-Ma",
          "image": "/credentials/previews/hult-prize-runner-up.jpg",
          "links": [
            {
              "href": "/credentials/files/hult-prize-runner-up.jpg",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/hult-prize-runner-up.jpg"
          ]
        }
      ]
    },
    {
      "title": "Design certifications",
      "cards": [
        {
          "title": "UI/UX Design internship programme",
          "description": "Completed structured UI/UX design programme",
          "meta": "15 Feb – 15 Mar 2024 · Zidio Development",
          "image": "/credentials/previews/zidio-uiux-internship.jpg",
          "links": [
            {
              "href": "/credentials/files/zidio-uiux-internship.jpg",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/zidio-uiux-internship.jpg"
          ]
        },
        {
          "title": "User Interface Design with Figma",
          "description": "Assessed competence in the primary design tool",
          "meta": "24 March 2024 · Alison — CPD certified",
          "image": "/credentials/previews/alison-ui-design-figma.jpg",
          "links": [
            {
              "href": "/credentials/files/alison-ui-design-figma.jpg",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/alison-ui-design-figma.jpg"
          ]
        },
        {
          "title": "UI/UX Design using Adobe XD",
          "description": "Assessed competence in UI/UX tooling",
          "meta": "24 March 2024 · Alison — CPD certified",
          "image": "/credentials/previews/alison-uiux-adobe-xd.jpg",
          "links": [
            {
              "href": "/credentials/files/alison-uiux-adobe-xd.jpg",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/alison-uiux-adobe-xd.jpg"
          ]
        },
        {
          "title": "Front-End Development — CSS",
          "description": "Front-end fluency behind the HTML/CSS handoff work",
          "meta": "March 2024 · Great Learning Academy",
          "image": "/credentials/previews/great-learning-css.jpg",
          "links": [
            {
              "href": "/credentials/files/great-learning-css.jpg",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/great-learning-css.jpg"
          ]
        }
      ]
    },
    {
      "title": "AI & product practice",
      "cards": [
        {
          "title": "Introduction to Agents",
          "description": "Course completion recognising rigour, calibration and clarity in AI agent evaluation.",
          "meta": "7 October 2026 · Mercor",
          "image": "/credentials/files/mercor-introduction-to-agents.jpg",
          "links": [
            {
              "href": "/credentials/files/mercor-introduction-to-agents.jpg",
              "label": "Read document"
            },
            {
              "href": "https://work.mercor.com/learn/verify/MRC-2026-Z59T2U63",
              "label": "Verify with issuer"
            }
          ],
          "gallery": [
            "/credentials/files/mercor-introduction-to-agents.jpg"
          ]
        },
        {
          "title": "AI Voice Agents: Automation with Vapi, ElevenLabs, n8n & MCP",
          "description": "Applied grounding for the AI product work",
          "meta": "19 October 2025 · Udemy — 12.5 hours",
          "image": "/credentials/previews/udemy-ai-voice-agents.jpg",
          "links": [
            {
              "href": "/credentials/files/udemy-ai-voice-agents.jpg",
              "label": "Read document"
            },
            {
              "href": "https://ude.my/UC-b80d563a-c1d1-4e47-8dd0-0d37800a4ec9",
              "label": "Verify with issuer"
            }
          ],
          "gallery": [
            "/credentials/previews/udemy-ai-voice-agents.jpg"
          ]
        },
        {
          "title": "Build AI Apps Fast: Master Langflow Step by Step",
          "description": "Applied grounding for the AI product work",
          "meta": "3 October 2025 · Udemy — 3.5 hours",
          "image": "/credentials/previews/udemy-langflow.jpg",
          "links": [
            {
              "href": "/credentials/files/udemy-langflow.jpg",
              "label": "Read document"
            },
            {
              "href": "https://ude.my/UC-0ba83af4-e18b-44a5-a405-fd65f551bb30",
              "label": "Verify with issuer"
            }
          ],
          "gallery": [
            "/credentials/previews/udemy-langflow.jpg"
          ]
        },
        {
          "title": "Vibe Coding Bootcamp: Build Any App, Game or Website with AI",
          "description": "Applied grounding for AI-assisted build workflows",
          "meta": "3 October 2025 · Udemy — 4 hours",
          "image": "/credentials/previews/udemy-vibe-coding.jpg",
          "links": [
            {
              "href": "/credentials/files/udemy-vibe-coding.jpg",
              "label": "Read document"
            },
            {
              "href": "https://ude.my/UC-c6f10d39-a5bd-42b6-a204-e8000bea1ae4",
              "label": "Verify with issuer"
            }
          ],
          "gallery": [
            "/credentials/previews/udemy-vibe-coding.jpg"
          ]
        },
        {
          "title": "Project Management Foundations",
          "description": "Delivery and stakeholder practice behind the manager role",
          "meta": "4 June 2024 · LinkedIn Learning — 3h 32m",
          "image": "/credentials/previews/project-management-foundations.jpg",
          "links": [
            {
              "href": "/credentials/files/project-management-foundations.pdf",
              "label": "Read document"
            }
          ],
          "gallery": [
            "/credentials/previews/project-management-foundations.jpg"
          ]
        }
      ]
    },
    {
      "title": "Language",
      "cards": [
        {
          "title": "English — C1 Advanced (63/100)",
          "description": "Reading C2, Writing C1, Listening and Speaking B2.",
          "meta": "29 March 2026 · EF SET",
          "image": "/credentials/previews/efset-english-c1.jpg",
          "links": [
            {
              "href": "/credentials/files/efset-english-c1.pdf",
              "label": "Read document"
            },
            {
              "href": "https://cert.efset.org/5JQS8h",
              "label": "Verify with issuer"
            }
          ],
          "gallery": [
            "/credentials/previews/efset-english-c1.jpg"
          ]
        }
      ]
    }
  ],
  "brand": [
    {
      "title": "Brand guidelines",
      "cards": [
        {
          "title": "Shortlet Lagos — Brand Guideline",
          "description": "Purpose, vision, values and audience; icon-only and full logo variants with background, one-colour, clearspace and misuse rules; a partnership lock-up; primary and secondary palettes; the Lato type scale; business card and letterhead; and rules for placing the logo on photography.",
          "meta": "Shortlet Lagos · 23 PAGES",
          "image": "/brand/pages/shortlet-lagos-brand-guide/p01.jpg",
          "links": [
            {
              "href": "/brand/files/shortlet-lagos-brand-guide.pdf",
              "label": "Open full PDF"
            }
          ],
          "gallery": [
            "/brand/pages/shortlet-lagos-brand-guide/p01.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p02.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p03.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p04.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p05.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p06.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p07.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p08.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p09.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p10.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p11.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p12.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p13.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p14.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p15.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p16.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p17.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p18.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p19.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p20.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p21.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p22.jpg",
            "/brand/pages/shortlet-lagos-brand-guide/p23.jpg"
          ]
        },
        {
          "title": "Female Rise — Brand Guideline",
          "description": "Brand definition — values, voice and a Magician/Explorer archetype; a logo built from the female symbol and a sunrise, with variants, responsiveness and misuse; colour, gradients and Helvetica Now Display typography; business card, letterhead and ID card; a pattern and visual-element language with use cases; imagery direction; and brand giveaways.",
          "meta": "Female Rise · 33 PAGES",
          "image": "/brand/pages/female-rise-brand-guide/p01.jpg",
          "links": [
            {
              "href": "/brand/files/female-rise-brand-guide.pdf",
              "label": "Open full PDF"
            }
          ],
          "gallery": [
            "/brand/pages/female-rise-brand-guide/p01.jpg",
            "/brand/pages/female-rise-brand-guide/p02.jpg",
            "/brand/pages/female-rise-brand-guide/p03.jpg",
            "/brand/pages/female-rise-brand-guide/p04.jpg",
            "/brand/pages/female-rise-brand-guide/p05.jpg",
            "/brand/pages/female-rise-brand-guide/p06.jpg",
            "/brand/pages/female-rise-brand-guide/p07.jpg",
            "/brand/pages/female-rise-brand-guide/p08.jpg",
            "/brand/pages/female-rise-brand-guide/p09.jpg",
            "/brand/pages/female-rise-brand-guide/p10.jpg",
            "/brand/pages/female-rise-brand-guide/p11.jpg",
            "/brand/pages/female-rise-brand-guide/p12.jpg",
            "/brand/pages/female-rise-brand-guide/p13.jpg",
            "/brand/pages/female-rise-brand-guide/p14.jpg",
            "/brand/pages/female-rise-brand-guide/p15.jpg",
            "/brand/pages/female-rise-brand-guide/p16.jpg",
            "/brand/pages/female-rise-brand-guide/p17.jpg",
            "/brand/pages/female-rise-brand-guide/p18.jpg",
            "/brand/pages/female-rise-brand-guide/p19.jpg",
            "/brand/pages/female-rise-brand-guide/p20.jpg",
            "/brand/pages/female-rise-brand-guide/p21.jpg",
            "/brand/pages/female-rise-brand-guide/p22.jpg",
            "/brand/pages/female-rise-brand-guide/p23.jpg",
            "/brand/pages/female-rise-brand-guide/p24.jpg",
            "/brand/pages/female-rise-brand-guide/p25.jpg",
            "/brand/pages/female-rise-brand-guide/p26.jpg",
            "/brand/pages/female-rise-brand-guide/p27.jpg",
            "/brand/pages/female-rise-brand-guide/p28.jpg",
            "/brand/pages/female-rise-brand-guide/p29.jpg",
            "/brand/pages/female-rise-brand-guide/p30.jpg",
            "/brand/pages/female-rise-brand-guide/p31.jpg",
            "/brand/pages/female-rise-brand-guide/p32.jpg",
            "/brand/pages/female-rise-brand-guide/p33.jpg"
          ]
        }
      ]
    },
    {
      "title": "Pitch decks & collateral",
      "cards": [
        {
          "title": "Female Rise Capital — Investor deck",
          "description": "Problem, solution, market opportunity, business model, competitive advantage, roadmap, projections, the ask and the founder — for a microfinance platform serving women-led SMEs in Africa.",
          "meta": "Female Rise Capital · 11 PAGES",
          "image": "/brand/pages/female-rise-pitch-deck/p01.jpg",
          "links": [
            {
              "href": "/brand/files/female-rise-pitch-deck.pdf",
              "label": "Open full PDF"
            }
          ],
          "gallery": [
            "/brand/pages/female-rise-pitch-deck/p01.jpg",
            "/brand/pages/female-rise-pitch-deck/p02.jpg",
            "/brand/pages/female-rise-pitch-deck/p03.jpg",
            "/brand/pages/female-rise-pitch-deck/p04.jpg",
            "/brand/pages/female-rise-pitch-deck/p05.jpg",
            "/brand/pages/female-rise-pitch-deck/p06.jpg",
            "/brand/pages/female-rise-pitch-deck/p07.jpg",
            "/brand/pages/female-rise-pitch-deck/p08.jpg",
            "/brand/pages/female-rise-pitch-deck/p09.jpg",
            "/brand/pages/female-rise-pitch-deck/p10.jpg",
            "/brand/pages/female-rise-pitch-deck/p11.jpg"
          ]
        },
        {
          "title": "Coworthy Capital — Investor deck",
          "description": "Problem, opportunity, solution, how it works, investment model, member benefits, property criteria, business model, roadmap and team — for a real-estate investment cooperative built around Lagos shortlets.",
          "meta": "Coworthy Capital · 12 PAGES",
          "image": "/brand/pages/coworthy-capital-pitch-deck/p01.jpg",
          "links": [
            {
              "href": "/brand/files/coworthy-capital-pitch-deck.pdf",
              "label": "Open full PDF"
            }
          ],
          "gallery": [
            "/brand/pages/coworthy-capital-pitch-deck/p01.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p02.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p03.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p04.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p05.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p06.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p07.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p08.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p09.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p10.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p11.jpg",
            "/brand/pages/coworthy-capital-pitch-deck/p12.jpg"
          ]
        },
        {
          "title": "Synqit — Pitch deck",
          "description": "Problem and solution side by side, the MVP release, future features, roadmap, customer-acquisition strategy, revenue outlook and the team — for the Web3 partnership platform whose product design is a case study on this site.",
          "meta": "Synqit · 9 PAGES",
          "image": "/brand/pages/synqit-pitch-deck/p01.jpg",
          "links": [
            {
              "href": "/brand/files/synqit-pitch-deck.pdf",
              "label": "Open full PDF"
            }
          ],
          "gallery": [
            "/brand/pages/synqit-pitch-deck/p01.jpg",
            "/brand/pages/synqit-pitch-deck/p02.jpg",
            "/brand/pages/synqit-pitch-deck/p03.jpg",
            "/brand/pages/synqit-pitch-deck/p04.jpg",
            "/brand/pages/synqit-pitch-deck/p05.jpg",
            "/brand/pages/synqit-pitch-deck/p06.jpg",
            "/brand/pages/synqit-pitch-deck/p07.jpg",
            "/brand/pages/synqit-pitch-deck/p08.jpg",
            "/brand/pages/synqit-pitch-deck/p09.jpg"
          ]
        }
      ]
    }
  ],
  "system": [
    {
      "title": "Foundations",
      "cards": [
        {
          "title": "Colour",
          "description": "Ten-step ramps from 50 to 900 across primary, grey, success, danger, warning and info, plus black and white alpha scales for overlays and dividers.",
          "meta": "",
          "image": "/system/colors.jpg",
          "links": [
            {
              "href": "/system/colors.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/colors.jpg"
          ]
        },
        {
          "title": "Semantic styles, in the file",
          "description": "The published styles as they exist in Figma: Brand Primary, Neutral, Error, Warning and Success as groups, a Body to Header text scale, and Shadow Sm through XL.",
          "meta": "",
          "image": "/system/figma-semantic.jpg",
          "links": [
            {
              "href": "/system/figma-semantic.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/figma-semantic.jpg"
          ]
        },
        {
          "title": "Typeface",
          "description": "Inter, with the reasoning recorded — variable weights, tall x-height, tabular numerals and a slashed zero for interfaces that display figures. Credited to its maker in the sheet.",
          "meta": "",
          "image": "/system/font.jpg",
          "links": [
            {
              "href": "/system/font.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/font.jpg"
          ]
        },
        {
          "title": "Elevation",
          "description": "A shadow scale used as depth hierarchy, so a dropdown, a card and a modal never sit at the same visual altitude.",
          "meta": "",
          "image": "/system/shadow.jpg",
          "links": [
            {
              "href": "/system/shadow.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/shadow.jpg"
          ]
        },
        {
          "title": "Token naming",
          "description": "The colour and effect styles as named tokens — accent, dark and opacity tones on a numeric scale, with elevation as its own set.",
          "meta": "",
          "image": "/system/figma-tokens.jpg",
          "links": [
            {
              "href": "/system/figma-tokens.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/figma-tokens.jpg"
          ]
        },
        {
          "title": "Iconography",
          "description": "The icon set organised into semantic categories — navigation, actions, media, design tools — so an icon is chosen by meaning rather than by scrolling.",
          "meta": "",
          "image": "/system/icons.jpg",
          "links": [
            {
              "href": "/system/icons.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/icons.jpg"
          ]
        },
        {
          "title": "Icon grid",
          "description": "Stroke weight, bounding box and optical sizing held constant across the set.",
          "meta": "",
          "image": "/system/icons-set.jpg",
          "links": [
            {
              "href": "/system/icons-set.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/icons-set.jpg"
          ]
        }
      ]
    },
    {
      "title": "Components",
      "cards": [
        {
          "title": "Button group",
          "description": "Default, hover, focus, press, selected and disabled — crossed with giant, large and medium — plus segmented groups from five items down to two, and icon-only variants.",
          "meta": "",
          "image": "/system/button-group.jpg",
          "links": [
            {
              "href": "/system/button-group.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/button-group.jpg"
          ]
        },
        {
          "title": "Input",
          "description": "Empty, placeholder, focused, filled, success and error, each with label and helper text, so validation is designed rather than bolted on.",
          "meta": "",
          "image": "/system/input.jpg",
          "links": [
            {
              "href": "/system/input.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/input.jpg"
          ]
        },
        {
          "title": "Dropdown",
          "description": "Closed, open, selected and multi-select states with overflow behaviour.",
          "meta": "",
          "image": "/system/dropdown.jpg",
          "links": [
            {
              "href": "/system/dropdown.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/dropdown.jpg"
          ]
        },
        {
          "title": "Alert",
          "description": "Success, warning, error and information, with and without actions.",
          "meta": "",
          "image": "/system/alert.jpg",
          "links": [
            {
              "href": "/system/alert.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/alert.jpg"
          ]
        },
        {
          "title": "Card",
          "description": "Content, media and action layouts at each density.",
          "meta": "",
          "image": "/system/card.jpg",
          "links": [
            {
              "href": "/system/card.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/card.jpg"
          ]
        },
        {
          "title": "List",
          "description": "Row anatomy — leading media, text block, trailing action, dividers and states.",
          "meta": "",
          "image": "/system/list.jpg",
          "links": [
            {
              "href": "/system/list.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/list.jpg"
          ]
        },
        {
          "title": "Tabs",
          "description": "Underline and pill variants, with active, hover and disabled states.",
          "meta": "",
          "image": "/system/tab.jpg",
          "links": [
            {
              "href": "/system/tab.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/tab.jpg"
          ]
        },
        {
          "title": "Top navigation",
          "description": "Desktop and compact arrangements with search, actions and account.",
          "meta": "",
          "image": "/system/navbar-top.jpg",
          "links": [
            {
              "href": "/system/navbar-top.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/navbar-top.jpg"
          ]
        },
        {
          "title": "Bottom navigation",
          "description": "Mobile bar at three, four and five items, with active and badged states.",
          "meta": "",
          "image": "/system/navbar-bottom.jpg",
          "links": [
            {
              "href": "/system/navbar-bottom.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/navbar-bottom.jpg"
          ]
        },
        {
          "title": "Context menu",
          "description": "Grouped items, dividers, icons, shortcuts, submenus and destructive actions.",
          "meta": "",
          "image": "/system/context-menu.jpg",
          "links": [
            {
              "href": "/system/context-menu.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/context-menu.jpg"
          ]
        },
        {
          "title": "Action sheet",
          "description": "Mobile sheet with grouped and destructive actions and a cancel affordance.",
          "meta": "",
          "image": "/system/action-sheet.jpg",
          "links": [
            {
              "href": "/system/action-sheet.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/action-sheet.jpg"
          ]
        },
        {
          "title": "Dialog",
          "description": "Confirmation, form and message dialogs with header, body and action rows.",
          "meta": "",
          "image": "/system/popup.jpg",
          "links": [
            {
              "href": "/system/popup.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/popup.jpg"
          ]
        },
        {
          "title": "Pagination",
          "description": "Numbered, truncated and compact variants with first, last and disabled edges.",
          "meta": "",
          "image": "/system/pagination.jpg",
          "links": [
            {
              "href": "/system/pagination.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/pagination.jpg"
          ]
        },
        {
          "title": "Page control",
          "description": "Dot indicators at each count, with active and overflow handling.",
          "meta": "",
          "image": "/system/page-control.jpg",
          "links": [
            {
              "href": "/system/page-control.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/page-control.jpg"
          ]
        },
        {
          "title": "Breadcrumbs",
          "description": "Depth, truncation and the current-page state.",
          "meta": "",
          "image": "/system/breadcrumbs.jpg",
          "links": [
            {
              "href": "/system/breadcrumbs.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/breadcrumbs.jpg"
          ]
        },
        {
          "title": "Stepper",
          "description": "Incrementer with minimum, maximum and disabled bounds.",
          "meta": "",
          "image": "/system/stepper.jpg",
          "links": [
            {
              "href": "/system/stepper.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/stepper.jpg"
          ]
        },
        {
          "title": "Progress",
          "description": "Determinate and indeterminate, with and without a value label.",
          "meta": "",
          "image": "/system/progress-bar.jpg",
          "links": [
            {
              "href": "/system/progress-bar.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/progress-bar.jpg"
          ]
        },
        {
          "title": "Loader",
          "description": "Spinner sizes and placement rules for inline and blocking waits.",
          "meta": "",
          "image": "/system/loader.jpg",
          "links": [
            {
              "href": "/system/loader.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/loader.jpg"
          ]
        },
        {
          "title": "Toggle",
          "description": "On, off, focused and disabled at each size.",
          "meta": "",
          "image": "/system/toggle.jpg",
          "links": [
            {
              "href": "/system/toggle.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/toggle.jpg"
          ]
        },
        {
          "title": "Radio",
          "description": "Selected, unselected, focused, disabled and error.",
          "meta": "",
          "image": "/system/radio.jpg",
          "links": [
            {
              "href": "/system/radio.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/radio.jpg"
          ]
        },
        {
          "title": "Avatar",
          "description": "Image, initial and fallback at each size, with status and grouped stacks.",
          "meta": "",
          "image": "/system/avatar.jpg",
          "links": [
            {
              "href": "/system/avatar.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/avatar.jpg"
          ]
        },
        {
          "title": "Tooltip",
          "description": "Placement on all four sides with arrow alignment and overflow.",
          "meta": "",
          "image": "/system/tooltip.jpg",
          "links": [
            {
              "href": "/system/tooltip.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/tooltip.jpg"
          ]
        }
      ]
    },
    {
      "title": "Systems in production",
      "cards": [
        {
          "title": "Bizinc — Local Deals, documented for front-end development",
          "description": "Handoff documentation rather than a component sheet: an overview, the components in play, numbered interaction specs, empty and error states, responsive behaviour across mobile and desktop, and a prototype link. Written so the build matches the design without a meeting.",
          "meta": "",
          "image": "/system/bizinc-local-deals.jpg",
          "links": [
            {
              "href": "/system/bizinc-local-deals.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/bizinc-local-deals.jpg"
          ]
        },
        {
          "title": "Bizinc — Sidebar documentation",
          "description": "V2 sub-components: vertical menu item and sidebar button across default, hover, active and focused, the menu at six through two items, and the collapsed and expanded states of the whole shell.",
          "meta": "",
          "image": "/system/bizinc-sidebar.jpg",
          "links": [
            {
              "href": "/system/bizinc-sidebar.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/bizinc-sidebar.jpg"
          ]
        },
        {
          "title": "Bizinc — Style guide",
          "description": "The product's own foundation: brand colour with hex values, a Poppins scale from H1 to small, and button variants annotated with border weights and fill rules for the developers building them.",
          "meta": "",
          "image": "/system/bizinc-style-guide.jpg",
          "links": [
            {
              "href": "/system/bizinc-style-guide.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/bizinc-style-guide.jpg"
          ]
        },
        {
          "title": "Chalant AI — Navigation components",
          "description": "Badge, nav item, logo, button, avatar and sidebar, each with expanded and collapsed variants — and the sidebar resolved three times for the learner, trainer and admin roles from one component.",
          "meta": "",
          "image": "/system/chalant-components.jpg",
          "links": [
            {
              "href": "/system/chalant-components.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/chalant-components.jpg"
          ]
        },
        {
          "title": "Bizinc — Layout grid, applied",
          "description": "The same page checked against the published web grid at three widths. Columns are a rule the layout is measured against, not a decoration.",
          "meta": "",
          "image": "/system/figma-grid.jpg",
          "links": [
            {
              "href": "/system/figma-grid.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/figma-grid.jpg"
          ]
        },
        {
          "title": "Shortlet Lagos — Foundation and input states",
          "description": "Input documented through placeholder, typing, filled, success and error, alongside the iconography foundation — heroicons, specified at 2px stroke and a 24×24 box with usage rules.",
          "meta": "",
          "image": "/system/figma-foundation.jpg",
          "links": [
            {
              "href": "/system/figma-foundation.jpg",
              "label": "View full sheet"
            }
          ],
          "gallery": [
            "/system/figma-foundation.jpg"
          ]
        }
      ]
    }
  ],
  "ai": [
    {
      "title": "What the work includes.",
      "cards": [
        {
          "title": "AI interactions evaluated",
          "description": "Complex tasks reviewed on Kremor AI through benchmarking, annotation and qualitative evaluation.",
          "meta": "",
          "image": "",
          "links": [],
          "gallery": []
        },
        {
          "title": "Operational roles designed",
          "description": "Role-based Kremor AI flows with permissions, confirmation gates and audit visibility.",
          "meta": "",
          "image": "",
          "links": [],
          "gallery": []
        },
        {
          "title": "Agent orchestration",
          "description": "Hands-on experience working with graph-based agent flows and orchestration patterns.",
          "meta": "",
          "image": "",
          "links": [],
          "gallery": []
        },
        {
          "title": "Open-source AI integration",
          "description": "Experience integrating open-source AI models and agents into product workflows.",
          "meta": "",
          "image": "",
          "links": [],
          "gallery": []
        },
        {
          "title": "Built into the workflow",
          "description": "AI output is paired with confirmation, permissions, review states or explicit validation where the task requires it.",
          "meta": "",
          "image": "",
          "links": [],
          "gallery": []
        }
      ]
    },
    {
      "title": "Evaluation & research",
      "cards": [
        {
          "title": "Evaluate the output before designing around it.",
          "description": "I worked across forensic benchmarking, dataset annotation and qualitative evaluation of LLM and generative-image output alongside the product design work.",
          "meta": "KREMOR AI · MODEL EVALUATION",
          "image": "/projects/kremor-workspace.jpg",
          "links": [
            {
              "href": "/work/kremor-ai/",
              "label": "Read Kremor AI"
            }
          ],
          "gallery": [
            "/projects/kremor-workspace.jpg"
          ]
        },
        {
          "title": "Keep hypotheses separate from findings.",
          "description": "Settle uses official guidance to ground a dependency model while participant research is still ongoing. The page labels what is sourced, what is hypothesised and what still needs validation.",
          "meta": "SETTLE · RESEARCH IN PROGRESS",
          "image": "/projects/settle-dependency.jpg",
          "links": [
            {
              "href": "/work/settle/",
              "label": "See the research approach"
            }
          ],
          "gallery": [
            "/projects/settle-dependency.jpg"
          ]
        }
      ]
    },
    {
      "title": "AI product design",
      "cards": [
        {
          "title": "Give people a first move.",
          "description": "Prompt scaffolding, conversational starting points, five operational roles, confirmation gates and audit history make an open-ended AI experience more controllable.",
          "meta": "GENERATIVE UX · KREMOR AI",
          "image": "/projects/kremor-admin.jpg",
          "links": [
            {
              "href": "/work/kremor-ai/",
              "label": "Explore the decisions"
            }
          ],
          "gallery": [
            "/projects/kremor-admin.jpg"
          ]
        },
        {
          "title": "Make judgement part of the task.",
          "description": "Learners manage AI agents, review generated work and remain responsible for what leaves the system instead of treating automation as automatic approval.",
          "meta": "HUMAN REVIEW · CHALANT AI",
          "image": "/projects/chalant-review.jpg",
          "links": [
            {
              "href": "/work/chalant-ai/",
              "label": "Read Chalant AI"
            }
          ],
          "gallery": [
            "/projects/chalant-review.jpg"
          ]
        },
        {
          "title": "Connect conversation to a real task.",
          "description": "The AI-assisted search-to-booking concept explores conversational discovery, but stays clearly labelled as a proposal until live availability and booking impact are validated.",
          "meta": "PROPOSAL · BIZINC",
          "image": "/projects/bizinc-home.jpg",
          "links": [
            {
              "href": "/work/bizinc/#search-to-booking",
              "label": "See the proposal and limits"
            }
          ],
          "gallery": [
            "/projects/bizinc-home.jpg"
          ]
        }
      ]
    },
    {
      "title": "Agents & delivery",
      "cards": [
        {
          "title": "Academic Proofreader",
          "description": "A careful academic editing workflow for students and researchers: minimal changes, preserved citations and author approval before substantial rewrites. Returns edited text, significant changes and questions to review. It does not promise AI-detector scores.",
          "meta": "PLUGIN I BUILT · PUBLIC RELEASE IN PREPARATION",
          "image": "",
          "links": [
            {
              "href": "/academic-proofreader/",
              "label": "Explore the plugin"
            }
          ],
          "gallery": []
        },
        {
          "title": "Orchestration & open-source integration",
          "description": "Technical work complements the product design rather than replacing it.",
          "meta": "TECHNICAL PRACTICE",
          "image": "",
          "links": [
            {
              "href": "/credentials/#ai-product",
              "label": "View supporting credentials"
            }
          ],
          "gallery": []
        },
        {
          "title": "Use the tool around the task.",
          "description": "I use AI tools to support research synthesis, design exploration, functional prototyping and workflow automation, with human review before the work becomes a claim or shipped experience.",
          "meta": "TOOLS SUPPORT THE METHOD",
          "image": "",
          "links": [
            {
              "href": "/credentials/#references",
              "label": "Read the supporting references"
            }
          ],
          "gallery": []
        }
      ]
    }
  ],
  "logos": [
    {
      "title": "UXD · 2026/27",
      "cards": [
        {
          "title": "Uxd Cap",
          "image": "/logos/images/uxd-cap.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-cap.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Logo",
          "image": "/logos/images/uxd-logo.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-logo.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Board",
          "image": "/logos/images/uxd-board.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-board.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Tote",
          "image": "/logos/images/uxd-tote.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-tote.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Badge",
          "image": "/logos/images/uxd-badge.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-badge.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Shirt",
          "image": "/logos/images/uxd-shirt.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-shirt.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Lanyard",
          "image": "/logos/images/uxd-lanyard.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-lanyard.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Social",
          "image": "/logos/images/uxd-social.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-social.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Merch",
          "image": "/logos/images/uxd-merch.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-merch.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Id",
          "image": "/logos/images/uxd-id.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-id.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Uxd Social Compact",
          "image": "/logos/images/uxd-social-compact.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/uxd-social-compact.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        }
      ]
    },
    {
      "title": "HERLUX",
      "cards": [
        {
          "title": "Herlux Studio",
          "image": "/logos/images/herlux-studio.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-studio.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Herlux Primary",
          "image": "/logos/images/herlux-primary.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-primary.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Herlux Reverse",
          "image": "/logos/images/herlux-reverse.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-reverse.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Herlux Wordmark Light",
          "image": "/logos/images/herlux-wordmark-light.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-wordmark-light.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Herlux Wordmark Dark",
          "image": "/logos/images/herlux-wordmark-dark.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-wordmark-dark.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        },
        {
          "title": "Herlux Applications",
          "image": "/logos/images/herlux-applications.jpg",
          "description": "",
          "meta": "",
          "links": [
            {
              "href": "/logos/images/herlux-applications.jpg",
              "label": "View full artwork"
            }
          ],
          "gallery": []
        }
      ]
    }
  ]
};

export const extendedProjects = [
  {
    "id": "chalant-ai",
    "name": "Chalant AI",
    "image": "/projects/chalant-tasks.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Chalant AI is a learning platform for people who need to work with AI rather than merely read about it. Alongside courses, live sessions and voice learning sits the AI Manager Path — a simulated workspace where learners run a team of AI agents, assign real tasks, review the output and answer for the quality. I led end-to-end product design across the learner and admin experiences."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I led the end-to-end product design for both sides of the platform: the learner's AI Manager Path with its team of five agents, the review queue and confidence system, the SOP library, task management and export centre, and the administrator's course builder, analytics and revenue surfaces. I designed the progression system and the single design system that keeps learner and operator inside one product rather than two."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "The skill people actually need around AI is not prompting — it is management: deciding what to delegate, judging whether the result is good enough, and knowing when a confident-sounding output should be rejected. That judgement cannot be transferred by watching a video, because the failure mode being trained against is precisely the one a passive learner exhibits: accepting plausible work without checking it. So the platform had to teach through practice with consequences, while remaining a product an administrator could run as a business — which meant one system serving a learner who wants to progress and an operator who needs to see engagement, revenue and where courses are failing."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "Quick Approve is the whole tension in a single control. The product exists to teach people not to accept plausible AI output without checking it, so a shortcut that lets them do exactly that is the obvious thing to delete. Deleting it makes the exercise dishonest: in real work the shortcut always exists, and a tool that forbids it trains compliance rather than judgement. Keeping it meant accepting that learners can take the easy path, and designing the surrounding signals — confidence score, estimated review time, SOP compliance — so that taking it is a decision they can watch themselves make. The same tension runs through the progression system: XP and streaks sustain a path measured in weeks, but rewarding throughput inside a product about careful review would teach precisely the wrong habit, which is why progression sits in the sidebar as ambient context instead of driving the work."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "What skill actually needs teaching — the finding was that it is management and judgement, not prompt writing.",
          "The failure mode being trained against is accepting plausible output without checking it, which is exactly what a passive learner does.",
          "The lesson became a workspace with consequences rather than a module, and Quick Approve was deliberately kept so the trade-off stays real.",
          "Whether the platform actually improves calibrated trust — the central claim, and the one that most needs measuring."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "A learning product where the curriculum is the work itself: agents to delegate to, confidence scores and SOPs to judge against, a review step that cannot be skipped structurally, and exports that turn practice into deliverables. Learner and operator share one design system, and the same principle runs through both — surface the evidence, name the confidence, and leave the judgement with the person."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "The human checkpoint is structural rather than advisory: Needs Review is its own column, so work cannot reach Done without passing through a person. Quality is anchored to versioned SOPs rather than to taste, learner and operator share one design system instead of splitting into two disconnected apps, and the Export Centre turns a training exercise into artefacts a learner can actually use at work."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "The obvious study is whether a learner's approval accuracy improves across sessions — comparing what they approve early against what they approve after working through the SOP library — and whether Quick Approve use falls as judgement develops. That would turn the product's central claim into something measured rather than argued."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "synqit",
    "name": "Synqit",
    "image": "/projects/synqit-laptop.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Synqit is a business-driven partnership platform for startups, investment platforms, Web3 projects and crypto companies — a structured way to find, vet and form strategic partnerships instead of cold-messaging across Twitter, Discord, Telegram and LinkedIn. I led the entire design process across three user roles: businesses and startups looking for partners, investors and project owners looking for opportunities, and the teams and executives who manage the resulting collaborations. The pitch deck the product was raised on is on the brand page."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I led the entire design process. I interviewed founders, Web3 teams and investors, built personas for the three roles, defined the partnership request as the core object of the product, and designed the matchmaking, business profile, request-approval and messaging systems around it. I mapped the information architecture, designed the dashboard and mobile-first interface, and ran usability testing with real businesses to refine the trust signals that shipped."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "Startups, Web3 projects and investment platforms struggle to find and connect with the right partners for three reasons that compound each other: there is no basis for trust in a partnership with an unknown company, communication is scattered across multiple channels, and negotiations drag because nothing is structured. Existing networking products treat a connection as a one-sided act — anyone can message anyone — which is precisely why they fill with noise and why credible teams stop answering. The product had to give businesses control over who they partner with, make credibility visible before a request is accepted, and move the conversation somewhere structured once it is."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "The hard part was deciding what a partnership is, mechanically, before anything could be designed. A follow is too weak — it commits nobody. An open inbox is too weak in the other direction — it makes the credible party do the filtering. The model that held was the friend request: a partnership is proposed, the other side reviews the proposer's profile and history, and only an acceptance unlocks messaging. That one decision shaped the whole architecture, and it came with a cost: it adds a step and a wait to every connection, in a space where founders are used to firing off a DM. The tension was to keep that deliberate friction — because it is the product's entire answer to the trust problem — while making everything around it fast. The three roles pulled against each other too: a startup wants to be found, an investor wants to filter, and an executive wants to see the state of every partnership at once, and they all share one dashboard."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "Primary research — interviews, personas and usability testing",
          "Why business networking fails in this space: no basis for trust, communication scattered across channels, and negotiations that drag because nothing is structured.",
          "An open inbox makes the credible party do the filtering, which is why credible teams stop answering. Control over who you partner with is the product.",
          "The partnership request became the core object — reviewed against a real profile — and chat was made a consequence of acceptance rather than a starting point.",
          "How the accept rate moves as profiles get richer, which is the real test of whether visible credibility works."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "A partnership-driven platform rather than another networking feed: requests are reviewed against a real profile before anything is accepted, chat exists only between partners who both said yes, matchmaking does the first pass of relevance, and a structured dashboard keeps every active partnership visible. Trust signals — verified profiles and transparent partnership histories — became part of the product rather than something users had to establish for themselves on other channels."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "Testing the request and messaging flows with real businesses shaped the trust signals that shipped. Partnership discovery and onboarding improved threefold against the scattered, manual process the platform replaced. The MVP shipped with AI-powered matching, verified requests, premium visibility and direct messaging, and the full presentation is on Behance; the pitch deck it was raised on is readable on the brand page."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "The request-approval model is the product's bet, so the number I would watch is the accept rate on requests and how it moves as profiles get richer — if credibility is visible, acceptance should rise. I would also test whether the three roles actually want one dashboard or three, since the shared layout was a decision made for coherence and it deserves to be checked against how an investor and a founder really use it."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "shortlet-lagos",
    "name": "Shortlet Lagos",
    "image": "/projects/shortlet-laptop.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Shortlet Lagos runs two products against one portfolio of apartments: guests book short stays, and investors buy shares in the same rental properties from ₦50,000 upward. I owned end-to-end UX/UI design and research across both — discovery, search, filtering and booking on the guest side, and the property marketplace on the investment side."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I owned the end-to-end UX and UI across both sides of the product: guest discovery, search, filtering and booking on mobile, and the fractional investment marketplace on desktop — property listings, share mechanics and entry pricing. I built the responsive component set both sides share, and designed the brand identity the platform sits inside."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "The same apartment has to read two completely different ways depending on who is looking at it. To a guest it is somewhere to sleep next weekend, judged on photos, location and whether the dates are free — a decision made in minutes, usually on a phone. To an investor it is an asset, judged on yield, entry price and what happens to the money afterwards — a decision made slowly, at a desk, and one that carries real risk. Fractional property investment also has a credibility problem before it has a usability one: asking someone to put money into a share of a building they will never hold the keys to means the interface has to make the mechanics obvious rather than exciting. Designing both without letting the marketing energy of the booking side leak into the investment side was the core problem."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "The same apartment has to read two ways. A guest decides in minutes, on a phone, on photos, location and whether the dates are free. An investor decides slowly, at a desk, on yield and entry price and what happens to the money afterwards, with real risk attached. The pull throughout was to let the booking side's marketing energy carry across into the investment side, because that energy converts — and that is exactly where it would do damage, since making an investment decision feel effortless is not the same as making it clear. Holding the two apart while keeping them recognisably one company was the constant tension, and it is why the investment side leads with the buying mechanic and the entry price rather than with projected returns."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "Product-design-led, with research into how guests shortlist",
          "Which signals drive trust in a short-let listing, and what an investor needs before a fractional share is comprehensible.",
          "The two decisions have opposite tolerances — the energy that converts a booking is the energy that undermines an investment decision.",
          "The two entry points were kept deliberately separate, and the investment side leads with the buying mechanic and the ₦50,000 minimum before it discusses return.",
          "Whether people actually understand what a fractional share is — comprehension, not conversion, is the right measure here."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "One platform serving two audiences with genuinely different decisions to make — a mobile booking journey reduced to the four questions a stay depends on, and a fractional investment marketplace that leads with its mechanics and its entry price rather than with projected returns. Both sit on a shared responsive component set. The product is live at shortlet-lagos.com."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "The product is live at shortlet-lagos.com. The guest search is reduced to the four inputs a stay actually depends on, and the investment side leads with the buying mechanic and the minimum entry price before it discusses return — so someone can rule themselves in or out before they sign up rather than after. Both sides ship on one responsive component set, and the brand they sit inside is mine too: the 23-page Shortlet Lagos brand guideline is readable in full on the brand page."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "The question I most want answered is whether people understand what they are buying. A share in a rental property is not an intuitive instrument, and comprehension rather than conversion is the right measure of whether that page works — a short comprehension test with first-time investors would settle it. I would also check whether guests who arrive to book ever discover the investment side at all, since the two entry points are deliberately separate."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "arete",
    "name": "Arete",
    "image": "/projects/arete-cover.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Arete is a connected healthcare ecosystem rather than a doctor-booking app. It brings care discovery, consultations, medical records, insurance coverage, prescriptions and pharmacy fulfilment into one experience, designed for accessibility, localisation and low-connectivity environments. I was the end-to-end product designer, covering UX, UX writing, UI and prototyping across the patient, provider, HMO and pharmacy surfaces."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I designed the connected healthcare ecosystem end to end — UX strategy, information architecture, user flows, UX writing, UI design, the design system and interactive prototyping. I designed the seven-step care journey, the onboarding and identity flows, the HMO coverage module, prescription and pharmacy fulfilment, and the status and edge-case system that holds the whole thing together."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "Getting medical advice is only one part of a patient's journey. Someone also has to understand whether care is covered, find a provider their plan will accept, receive a prescription, locate the medication and keep taking it afterwards — and each of those steps usually lives in a different place, run by a different organisation. The product had to bring those disconnected steps into one understandable experience without hiding the detail that clinicians and insurers require, and it had to do it for patients, doctors and nurses, community health workers, HMO teams, pharmacies and administrators at once."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "The four things a patient needs are run by different organisations with different systems and different obligations, so presenting them as one journey is a claim the underlying services do not make on their own — and the risk is a product that feels seamless right up to the moment it hands you off and stops helping. Coverage is where that hurts most: eligibility language has to be plain enough to act on and precise enough not to promise something an insurer will later refuse, and getting it wrong in either direction costs the patient. The context tightened it further. Multilingual users, low-connectivity environments and high-stakes tasks ruled out clever interactions and icon-only affordances, and writing for people who are unwell ruled out most of the reassuring tone a product designer reaches for by default — reassurance that overstates is worse than silence."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "Where a telemedicine product stops helping — the finding was that most stop at the booking, while the patient's problem continues into coverage, prescription and fulfilment.",
          "Coverage is the point of highest risk: language has to be plain enough to act on and precise enough not to promise what an insurer will later refuse.",
          "The journey was designed past the consultation, and Skip for Now was kept throughout so an uninsured patient is never blocked from reaching a doctor.",
          "Whether patients read a coverage state as actionable — untested, and the most consequential unknown in the product."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "A healthcare product designed as a chain rather than a set of features: the patient journey continues past the consultation into coverage, prescription and fulfilment, and the moments where it could break — an unverified plan, an out-of-stock medicine, a failed OTP, a removed HMO — are designed states rather than dead ends. One system of colour, type and components holds the patient, provider, HMO and pharmacy surfaces together, and the whole experience is built for legibility, localisation and low connectivity rather than assuming ideal conditions."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "The seven-step journey is designed end to end rather than stopping at the booking, where most telemedicine products stop. The status vocabulary and edge cases are specified alongside the happy paths, the HMO module keeps Skip for Now available so coverage never blocks access to care, and the design system defines a palette, four type sizes and reusable field, card, alert, button and status patterns across all four surfaces. The full case study is published on Behance."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "Eligibility comprehension is the thing to test first — whether a patient reads a coverage state as something they can act on rather than a status they have to interpret — and it needs real patients rather than colleagues. I would then validate the hand-off points with an actual insurer and pharmacy, since the journey's credibility rests on partners the design cannot control, and test the low-connectivity assumptions on real networks rather than on a design file."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "archi-tek",
    "name": "Archi-Tek",
    "image": "/projects/architek-prompt.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Archi-Tek is a text-to-design tool for architecture. Describe a building in plain language and it generates concept sketches, schematic plans or detailed models — then hands you the result as a real CAD file you can keep working in. I designed the end-to-end product: the prompt experience, the design-type system, the preview and export flow, and the 3D editor."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I designed the end-to-end product: the prompt experience and its starting points, the design-type system that makes fidelity an explicit choice, the results gallery, the preview and export flow, and the 3D editor interface. I set the principle the product rests on — that the output has to leave as a working CAD file rather than an image."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "Generative AI is good at producing a convincing picture of a building. That is precisely what an architect cannot use. A render is a dead end: it cannot be dimensioned, measured, revised or handed to an engineer. Meanwhile the tools that do produce workable geometry — CAD and 3D modelling suites — carry a learning curve measured in months, which puts early-stage massing and client-facing concepts out of reach for the people who most need them quickly. The design problem was to sit a conversational interface on top of real architectural output, without either half undermining the other: the chat could not feel like a toy, and the output could not be a JPEG."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "Generative models are good at producing a convincing picture of a building, which is the one thing an architect cannot use — a render cannot be dimensioned, revised or handed to an engineer. Putting a conversational front end onto real geometry meant neither half could undermine the other: the chat could not feel like a toy, and the output could not be a JPEG. The sharper constraint was capability. The in-product 3D editor did not exist yet, so the interface had to communicate the workflow it belongs to without implying it was available — which is why it is staged in the UI as coming soon rather than presented as working. Overstating it would have been the easier design and the wrong one."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "What makes generative output unusable in architecture — the finding was that a render cannot be dimensioned, revised or handed to an engineer.",
          "Fidelity is a decision the user should make, not one the model should guess: a quick massing study and a dimensioned model have different tolerances for error.",
          "The interface asks for design type up front in plain language, and export formats sit beside the generated design so the nature of the output is unambiguous.",
          "Whether an exported DWG is genuinely workable — the claim the whole product rests on, and untested."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "An AI design assistant that behaves like a drafting collaborator rather than an image generator: fidelity chosen deliberately, options compared side by side, and every result leaving the product as an editable CAD file. The flow moves from a sentence, through a design-type decision and a compared set of options, to a downloadable model — with an editor waiting for the work that follows."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "Fidelity is a decision the user makes rather than one the model guesses. Results are presented as comparable named options instead of a single answer, and the export formats — DWG, OBJ, SKP and PDF — sit beside the generated design, so the nature of the output is unambiguous before anyone invests time in it. The full presentation is published on Behance."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "This needs practising architects and a real file. The test that matters is whether an exported DWG opens in AutoCAD and survives being edited — if the geometry is not workable, the clarity of the interface counts for nothing. I would also check whether the three fidelity levels match how architects actually think about early-stage work, or whether they are a designer's categories rather than a practitioner's."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "loan-investment-app",
    "name": "Loan & Investment App",
    "image": "/projects/loan-home.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "A Nigerian fintech super-app that combines lending, investing, everyday banking, property insurance and bill payments in a single product. I designed the mobile experience across those journeys — the home dashboard, the loan flow, and the investment and transaction surfaces — with an emphasis on stating plainly what money is doing at every step."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I designed the mobile experience across five financial products — the home dashboard and single balance, the loan request flow and its empty states, the investment and equity purchase journey, transaction and payment design, and the mobile design system that holds them together as one institution rather than four bolted-together apps."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "Most people end up running their financial life across four or five apps: one to borrow, one to save, one to invest, another for bills and insurance. Consolidating them is easy to propose and difficult to design well. Each product carries its own risk profile, its own regulatory language and its own vocabulary, and stacking them tends to produce one of two failures — a dashboard so dense that nothing is findable, or an interface so friendly that it quietly obscures what a decision actually costs. Investing raises the stakes further: a product that makes buying equities feel as frictionless as ordering food has not removed complexity, it has hidden risk. The problem was to hold five financial products in one app while keeping each one legible enough to be trusted with real money."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "Making investing feel as easy as ordering food is the obvious way to grow the product and the fastest way to do harm — friction removed from a risk decision does not remove the risk, it hides it. Every simplification had to be checked against whether it made the money clearer or merely made the screen calmer. That is why a projected return is labelled indicative value at maturity and stated gross of withholding tax at the moment of commitment rather than in a footnote, and why the minimum investment and the wallet balance appear before the button instead of arriving as an error after it. The competing pull was consolidation itself: five products in one app tends to produce either a dashboard too dense to navigate or a friendliness that flattens the difference between borrowing and investing, which are not the same kind of decision at all."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "Where consolidation helps and where it harms — specifically whether simplifying an investment decision makes it clearer or merely calmer.",
          "Friction removed from a risk decision does not remove the risk, it hides it. Borrowing and investing are not the same kind of decision and should not feel identical.",
          "Projections are labelled indicative value at maturity and stated gross of withholding tax at the point of commitment, and constraints like the ₦100,000 minimum appear before the button rather than as an error after it.",
          "Whether people read those labels as estimates rather than promises."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "A super-app that earns the breadth it claims: five financial products sharing one balance, one visual language and one standard of disclosure. Constraints appear before commitment, projections are labelled as projections, and empty states teach rather than stall — so consolidation makes the user's financial picture clearer instead of merely shorter."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "One balance anchors the home screen rather than five. Constraints are surfaced before commitment rather than reported as failures afterwards, projections are labelled as estimates with tax status stated at the point of decision, and empty states explain the product rather than reporting zero. The full presentation is published on Behance."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "I would test whether people actually read indicative value at maturity as an estimate rather than a promise — that phrase is carrying a lot of weight, and its comprehension is testable in minutes. I would also check whether masking the balance by default helps or irritates in daily use, since it trades a small constant cost against a privacy benefit that only matters occasionally."
        ],
        "images": []
      }
    ]
  },
  {
    "id": "project-management-dashboard",
    "name": "Reporting Portal",
    "image": "/projects/pm-dashboard-laptop.jpg",
    "sections": [
      {
        "title": "01 The short version",
        "paragraphs": [
          "Reporting Portal is a project management dashboard built around a KPI-first overview: a key-metrics row for total projects, tasks due, at-risk and critical items; a filter bar across project, team, date range and status; and a task board moving work through To Do, In Progress, Review and Done alongside upcoming milestones. It ships in light and dark themes and adapts down to mobile. This is a selected project rather than a full case study — the complete presentation is published on Behance."
        ],
        "images": []
      },
      {
        "title": "02 What I owned",
        "paragraphs": [
          "I designed the reporting portal's dashboard and information architecture: the key-metrics row, the filter model, the four-state task board, the milestone view and the responsive layout, in both light and dark themes."
        ],
        "images": []
      },
      {
        "title": "03 The challenge",
        "paragraphs": [
          "A reporting dashboard is opened to answer one question — what needs attention today — but it is usually built to answer a different one: how much work exists. Totals are easy to produce and reassuring to look at, and they tell a manager nothing they can act on. The design problem was to decide what earns the top of the screen when the person reading it is scanning, not studying, and often doing it on a phone between meetings."
        ],
        "images": []
      },
      {
        "title": "04 The tricky part",
        "paragraphs": [
          "Prioritising risk means accepting an uncomfortable default: the dashboard opens by showing what is going wrong. That is the honest view and it is not the one a stakeholder demoing the tool tends to want, so the metrics row had to earn its order — total projects stays, because context matters, but tasks due, at-risk and critical sit alongside it rather than beneath it. The second constraint was breadth: four filter dimensions, four task states, milestones and two themes all had to survive being compressed onto a phone without becoming a stack of disconnected cards."
        ],
        "images": []
      },
      {
        "title": "05 Discovery to design decisions",
        "paragraphs": [
          "What belongs above the fold on a dashboard whose users are scanning rather than reading.",
          "Totals are reassuring and useless; the useful figures are the ones that imply an action — what is due, what is at risk, what is critical.",
          "The key-metrics row leads with tasks due, at-risk and critical items rather than a project count, and milestones sit beside the board rather than in a separate view.",
          "Whether the four task states match how teams really move work, or whether they need a blocked state."
        ],
        "images": []
      },
      {
        "title": "07 What changed",
        "paragraphs": [
          "A dashboard that opens on the work needing attention rather than on a summary of everything: risk and due-date pressure at the top, a four-state board that surfaces work waiting on a person, milestones in the same view, and a filter model that answers a manager's real questions. It holds up in light and dark and down to a phone."
        ],
        "images": []
      },
      {
        "title": "08 The evidence",
        "paragraphs": [
          "The metrics row leads with tasks due, at-risk and critical items rather than totals; Review exists as its own column so blocked work is visible; and the layout survives both themes and a mobile breakpoint. The full presentation is published on Behance."
        ],
        "images": []
      },
      {
        "title": "09 What I’d test next",
        "paragraphs": [
          "Test whether managers can identify the day's at-risk items within a few seconds of opening the dashboard, and whether four task states are sufficient in practice or whether teams need a blocked state distinct from Review."
        ],
        "images": []
      }
    ]
  }
];
