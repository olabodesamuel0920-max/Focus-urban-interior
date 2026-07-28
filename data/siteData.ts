export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospitality" | "Office";
  location: string;
  year: string;
  area: string;
  duration: string;
  isConceptDemo: boolean;
  image: string;
  aspectRatio?: string;
  shortDesc: string;
  overview: string;
  conceptNote: string;
  clientType: string;
  features: string[];
  materials: string[];
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  testimonialDemo?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: "Architecture" | "Interiors" | "Execution" | "Styling";
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  keyActivities: string[];
  deliverable: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
  author: string;
}

export const siteConfig = {
  studioName: "Focus Urban Interiors",
  tagline: "Designed for Comfort. Crafted for Living.",
  location: "Lagos, Nigeria",
  locationNote: "Studio consultations strictly by appointment",
  addressPlaceholder: "Lagos, Nigeria · By Appointment",
  phonePlaceholder: "+234 (0) 700 FOCUS STUDIO",
  phoneRaw: "+2340000000000",
  emailPlaceholder: "hello@focusurbaninteriors.com",
  whatsAppPlaceholder: "+2340000000000",
  whatsAppLink: "https://wa.me/2340000000000?text=Hello%20Focus%20Urban%20Interiors%2C%20I%20would%20like%20to%20book%20a%20design%20consultation.",
  businessHours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM WAT" },
    { days: "Saturday", hours: "By Appointment Only" },
    { days: "Sunday & Public Holidays", hours: "Closed" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com", handle: "@focusurbaninteriors" },
    { name: "LinkedIn", href: "https://linkedin.com", handle: "Focus Urban Interiors" },
    { name: "Pinterest", href: "https://pinterest.com", handle: "Focus Urban Interiors" },
  ],
  disclaimer: "Representative spatial concepts and architectural visualisations prepared for Focus Urban Interiors client presentation.",
};

export const studioPhilosophy = {
  headline: "We believe the most luxurious spaces are not only seen — they are felt.",
  intro: "Focus Urban Interiors is a Lagos-based interior architecture and spatial design practice dedicated to creating refined, functional, and timeless environments for private residences, commercial environments, and boutique hospitality spaces.",
  paragraphs: [
    "Rooted in the vibrant architectural rhythm of Lagos, our studio balances structural precision with warmth. We curate light, material texture, proportion, and bespoke craftsmanship to turn spatial briefs into serene living environments.",
    "Every space tells a story. Our approach elevates daily living by eliminating visual clutter, honoring natural materials, and designing custom solutions tailored specifically to contemporary tropical urban life.",
  ],
  pillars: [
    {
      title: "Warm Minimalism",
      description: "Restrained palettes enriched with natural textures, quiet timber, travertine, and soft ambient light.",
    },
    {
      title: "Architectural Precision",
      description: "Rigorous detail from layout geometry and joinery drawings to custom lighting integrated into spatial structures.",
    },
    {
      title: "Local & Global Craft",
      description: "Collaborating with master West African artisans and international specialists to deliver bespoke quality.",
    },
    {
      title: "Turnkey Leadership",
      description: "Single-point project coordination ensuring initial vision translates seamlessly into site execution.",
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: "terracotta-residence",
    slug: "terracotta-residence",
    title: "The Terracotta Residence",
    category: "Residential",
    location: "Lekki, Lagos",
    year: "Spatial Concept 2025",
    area: "650 sq.m",
    duration: "6 Months",
    isConceptDemo: true,
    image: "/images/project-bedroom.webp",
    aspectRatio: "lg:col-span-7 lg:h-[680px]",
    shortDesc: "A warm, earthy residential interior celebrating natural clay tones, acoustic slatted wood, and soft ambient cove lighting.",
    overview: "The Terracotta Residence explores modern luxury through the lens of warm earth tones, tactile surfaces, and serene spatial proportions. Designed as a private retreat in Lekki, the interior balances open-plan family gathering areas with intimate private suites.",
    conceptNote: "Spatial Concept Design prepared to showcase layout composition, custom joinery, and warm ambient lighting direction.",
    clientType: "Private Residence Client",
    features: [
      "Custom acoustic timber paneling in primary lounge",
      "Integrated architectural cove lighting system",
      "Hand-finished micro-cement wall treatments",
      "Bespoke Italian leather and linen loose furniture",
    ],
    materials: ["Terracotta Clay", "Raw Oak Wood", "Brushed Brass", "Warm Travertine Marble"],
    gallery: [
      "/images/project-bedroom.webp",
      "/images/hero-chair.webp",
      "/images/hallway.webp",
    ],
    beforeImage: "/images/process-detail.webp",
    afterImage: "/images/project-bedroom.webp",
    testimonialDemo: {
      quote: "The spatial composition brought a serene, restorative calm to our family residence. Every detail feels intentional and deeply comfortable.",
      author: "Private Client Representative",
      role: "Private Residence, Lekki",
    },
  },
  {
    id: "contour-house",
    slug: "contour-house",
    title: "Contour House",
    category: "Residential",
    location: "Ikoyi, Lagos",
    year: "Spatial Concept 2025",
    area: "820 sq.m",
    duration: "8 Months",
    isConceptDemo: true,
    image: "/images/project-minimal.webp",
    aspectRatio: "lg:col-span-5 lg:h-[520px] lg:mt-24",
    shortDesc: "Waterfront luxury residence emphasizing sweeping architectural sightlines, minimalist stone floors, and organic geometry.",
    overview: "Situated along the Ikoyi waterfront, Contour House is a study in spatial openness and architectural restraint. Floor-to-ceiling glass reveals tropical greenery outside while indoors, natural stone and warm wood soften geometric lines.",
    conceptNote: "Spatial Concept Design created for architectural presentation.",
    clientType: "Private Villa Client",
    features: [
      "Monolithic kitchen island crafted from honed quartzite",
      "Custom floating staircase with brass reveal details",
      "Seamless indoor-outdoor living terrace integration",
      "Automated architectural solar shading louvers",
    ],
    materials: ["Honed Quartzite", "Smoked Teak Wood", "Neutral Bouclé Fabric", "Black Anodized Metal"],
    gallery: [
      "/images/project-minimal.webp",
      "/images/brand-scene.webp",
      "/images/hero-chair.webp",
    ],
    beforeImage: "/images/process-detail.webp",
    afterImage: "/images/project-minimal.webp",
    testimonialDemo: {
      quote: "The seamless harmony between natural light and architectural materials exceeds expectations.",
      author: "Private Villa Client",
      role: "Waterfront Residence, Ikoyi",
    },
  },
  {
    id: "quiet-geometry",
    slug: "quiet-geometry",
    title: "Quiet Geometry Executive Suite",
    category: "Office",
    location: "Victoria Island, Lagos",
    year: "Spatial Concept 2025",
    area: "420 sq.m",
    duration: "4 Months",
    isConceptDemo: true,
    image: "/images/project-office.webp",
    aspectRatio: "lg:col-span-5 lg:h-[560px]",
    shortDesc: "Sophisticated corporate workspace blending acoustic privacy, executive conference lounges, and sculptural architectural lighting.",
    overview: "Designed for a modern financial headquarters in Victoria Island, Quiet Geometry elevates office interior design into an inspiring environment for focus, high-level negotiations, and collaborative creative work.",
    conceptNote: "Spatial Concept Design prepared to showcase commercial & office spatial layout competence.",
    clientType: "Corporate Executive Client",
    features: [
      "Custom acoustic fabric wall cladding and sound baffles",
      "Executive boardroom with integrated smart AV technology",
      "Private executive lounge with bar and lounge seating",
      "Sculptural bronze linear LED suspension fixtures",
    ],
    materials: ["Walnut Wood Veneer", "Acoustic Wool Felt", "Dark Slate Marble", "Satin Bronze"],
    gallery: [
      "/images/project-office.webp",
      "/images/urban-night.webp",
      "/images/brand-scene.webp",
    ],
    beforeImage: "/images/process-detail.webp",
    afterImage: "/images/project-office.webp",
    testimonialDemo: {
      quote: "Our board members and international guests consistently comment on the poise and functional elegance of the executive floor.",
      author: "Managing Partner",
      role: "Corporate Executive Client, Victoria Island",
    },
  },
  {
    id: "amber-lounge",
    slug: "amber-lounge",
    title: "Amber Lounge & Hospitality Space",
    category: "Hospitality",
    location: "Banana Island, Lagos",
    year: "Spatial Concept 2025",
    area: "580 sq.m",
    duration: "5 Months",
    isConceptDemo: true,
    image: "/images/project-lounge.webp",
    aspectRatio: "lg:col-span-7 lg:h-[710px] lg:-mt-10",
    shortDesc: "High-end hospitality lounge featuring warm amber lighting, plush velvet seating pockets, and bespoke bar joinery.",
    overview: "Amber Lounge sets a new benchmark for boutique hospitality design in Lagos. Immersed in warm lighting, rich timber, and custom leather seating, the space creates an atmosphere of exclusive luxury and comfortable relaxation.",
    conceptNote: "Spatial Concept Design designed for hospitality and leisure showcase.",
    clientType: "Boutique Hospitality Client",
    features: [
      "Custom backlit onyx bar counter with brass trims",
      "Private VIP seating nooks with acoustic curtains",
      "Custom sound system integration and ambient light scenes",
      "Handmade local ceramics and curated African art pieces",
    ],
    materials: ["Amber Backlit Onyx", "Deep Mahogany Wood", "Rust Velvet", "Polished Copper"],
    gallery: [
      "/images/project-lounge.webp",
      "/images/urban-night.webp",
      "/images/hero-chair.webp",
    ],
    beforeImage: "/images/process-detail.webp",
    afterImage: "/images/project-lounge.webp",
    testimonialDemo: {
      quote: "The lighting and mood design created an immediate signature identity for our venue.",
      author: "Hospitality Director",
      role: "Boutique Hospitality Client, Lagos",
    },
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "residential-interiors",
    title: "Residential Interiors",
    tagline: "Bespoke living environments designed around comfort and personal rituals.",
    category: "Interiors",
    description: "Full-scale interior architecture for luxury private homes, penthouses, and waterfront villas in Lagos and beyond. We oversee every element from layout optimization to final art placement.",
    deliverables: [
      "Spatial planning & furniture layouts",
      "Custom joinery & millwork design",
      "Material selection & finish schedules",
      "Lighting & electrical ceiling plans",
    ],
    iconName: "Home",
  },
  {
    id: "commercial-interiors",
    title: "Commercial Interiors",
    tagline: "Brand-aligned corporate environments built for focus, culture, and impression.",
    category: "Architecture",
    description: "Designing high-performance commercial spaces, corporate headquarters, and retail environments that inspire teams and communicate prestige to clients.",
    deliverables: [
      "Brand identity spatial integration",
      "Acoustic & lighting engineering layout",
      "Executive suite & reception design",
      "Ergonomic furniture specification",
    ],
    iconName: "Building2",
  },
  {
    id: "hospitality-design",
    title: "Hospitality Design",
    tagline: "Atmospheric spaces for boutique hotels, fine dining, and private lounges.",
    category: "Architecture",
    description: "Immersive interior design for hospitality venues that demand distinct mood, flawless operational flow, and memorable sensory experiences for guests.",
    deliverables: [
      "Concept narrative & mood boards",
      "Custom bar & banquet seating joinery",
      "Durability-tested upholstery specs",
      "Dynamic lighting scene controls",
    ],
    iconName: "Utensils",
  },
  {
    id: "office-design",
    title: "Office Design",
    tagline: "Modern workspaces engineered for productivity, collaboration, and wellbeing.",
    category: "Interiors",
    description: "Transforming office footprints into modern, flexible environments featuring private focus pods, collaborative lounges, and executive meeting rooms.",
    deliverables: [
      "Space efficiency analysis",
      "Hybrid work zone planning",
      "Acoustic paneling solutions",
      "Integrated technology furniture",
    ],
    iconName: "Briefcase",
  },
  {
    id: "space-planning",
    title: "Space Planning",
    tagline: "Architectural optimization of layouts, circulation, and natural light flows.",
    category: "Architecture",
    description: "Rigorous 2D and 3D layout engineering to maximize spatial efficiency, sightlines, natural ventilation, and human movement throughout any building floorplate.",
    deliverables: [
      "Detailed 2D CAD floorplans",
      "Circulation & zone mapping",
      "Furniture placement optimization",
      "Building code & clearance review",
    ],
    iconName: "Layout",
  },
  {
    id: "furniture-selection",
    title: "Furniture Selection",
    tagline: "Curated loose furniture, bespoke joinery, and international design sourcing.",
    category: "Styling",
    description: "Selecting and procuring high-end furniture from leading international design houses as well as commissioning bespoke, custom-built pieces from skilled local craftsmen.",
    deliverables: [
      "Furniture procurement schedules",
      "Custom upholstery & fabric testing",
      "Bespoke table & cabinet designs",
      "International freight & white-glove delivery",
    ],
    iconName: "Armchair",
  },
  {
    id: "interior-styling",
    title: "Interior Styling",
    tagline: "The final layer: curated art, soft furnishings, ceramics, and tactile details.",
    category: "Styling",
    description: "Bringing spaces to life with art curation, decorative objects, window treatments, rugs, and botanical styling that add warmth, personality, and editorial poise.",
    deliverables: [
      "Art curation & gallery hanging",
      "Drapery & soft textiles styling",
      "Decorative ceramics & accessory sourcing",
      "Turnkey styling installation",
    ],
    iconName: "Sparkles",
  },
  {
    id: "lighting-design",
    title: "Lighting Design",
    tagline: "Architectural light layering that enhances mood, form, and spatial depth.",
    category: "Interiors",
    description: "Designing multi-layered lighting schemes—combining ambient cove illumination, targeted accent spotlights, task lighting, and statement decorative fixtures.",
    deliverables: [
      "Architectural lighting plans",
      "Fixture specification schedules",
      "Dimming scene configuration",
      "Custom decorative light fixtures",
    ],
    iconName: "Lightbulb",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    tagline: "Transforming existing spaces into contemporary architectural masterpieces.",
    category: "Execution",
    description: "Structural and aesthetic remodeling of existing residential and commercial properties, modernizing layouts, services, finishes, and spatial character.",
    deliverables: [
      "Demolition & structural assessment",
      "MEP (Mechanical, Electrical, Plumbing) redesign",
      "Surface & finish replacements",
      "Quality assurance site inspections",
    ],
    iconName: "Hammer",
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Projects",
    tagline: "Seamless end-to-end design and delivery under unified management.",
    category: "Execution",
    description: "Complete end-to-end delivery where our studio handles concept design, technical drawings, contractor management, procurement, installation, and hand-over.",
    deliverables: [
      "Single-point project responsibility",
      "Comprehensive master schedule",
      "Vendor & contractor supervision",
      "Move-in ready final handover",
    ],
    iconName: "KeyRound",
  },
  {
    id: "3d-visualisation",
    title: "3D Visualisation",
    tagline: "Photorealistic 3D renders and virtual walkthroughs before construction.",
    category: "Interiors",
    description: "Creating ultra-realistic 3D visual renderings and digital material walk-throughs allowing clients to experience and refine every texture and light angle prior to build.",
    deliverables: [
      "High-resolution 3D stills",
      "360-degree virtual walkthroughs",
      "Material & lighting simulations",
      "Design revision iterations",
    ],
    iconName: "Box",
  },
  {
    id: "project-management",
    title: "Project Management",
    tagline: "Rigorous oversight of budgets, timelines, site quality, and trades.",
    category: "Execution",
    description: "Professional site coordination ensuring contractors adhere strictly to technical drawings, material specifications, safety standards, and project deadlines.",
    deliverables: [
      "Weekly site audit reports",
      "Budget tracking & variation logs",
      "Contractor quality control",
      "Milestone completion sign-offs",
    ],
    iconName: "CheckSquare",
  },
];

export const processStagesData: ProcessStage[] = [
  {
    step: "01",
    title: "Consultation",
    subtitle: "Discovery & Brief Definition",
    description: "We initiate every project with an in-depth consultation to understand your lifestyle, aesthetic aspirations, spatial requirements, budget, and project timeline.",
    keyActivities: [
      "In-person or virtual design consultation",
      "Site survey & dimensional measurement",
      "Lifestyle & functional requirement mapping",
      "Budget alignment & project scope agreement",
    ],
    deliverable: "Project Brief & Comprehensive Engagement Proposal",
  },
  {
    step: "02",
    title: "Concept",
    subtitle: "Creative Direction & Narrative",
    description: "Our studio distills the brief into a unified spatial narrative, exploring color palettes, mood boards, material swatches, and initial 2D layout sketches.",
    keyActivities: [
      "Mood boards & material texture curation",
      "Conceptual space planning & circulation studies",
      "Color story & lighting direction definition",
      "Client concept presentation & alignment",
    ],
    deliverable: "Approved Design Concept & Spatial Direction Deck",
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Detailed Architecture & Visualisation",
    description: "We translate the approved concept into precise 2D architectural drawings, bespoke joinery details, lighting plans, and photorealistic 3D visualisations.",
    keyActivities: [
      "Detailed 2D floor plans, elevations & sections",
      "Custom millwork & joinery construction details",
      "Photorealistic 3D visual renderings",
      "Fixtures, furniture & equipment (FF&E) specification",
    ],
    deliverable: "Complete Design Package & Photorealistic 3D Renders",
  },
  {
    step: "04",
    title: "Development",
    subtitle: "Technical Specs & Procurement",
    description: "We refine technical documentation, produce bill of quantities, select finishes, finalize contractor quotes, and place orders for long-lead custom items.",
    keyActivities: [
      "Technical working drawings & MEP coordination",
      "Bill of Quantities (BOQ) & itemized cost schedule",
      "Material sampling & prototype review",
      "Vendor order placement & tracking",
    ],
    deliverable: "Approved Technical Package & Procurement Schedule",
  },
  {
    step: "05",
    title: "Execution",
    subtitle: "Site Coordination & Craftsmanship",
    description: "Our project managers oversee site work, coordinating artisans, MEP engineers, joiners, and finish specialists to ensure flawless execution.",
    keyActivities: [
      "On-site project management & quality control",
      "Contractor & trade coordination meetings",
      "Milestone inspections & quality audits",
      "Custom joinery & fixture installation",
    ],
    deliverable: "Weekly Progress Reports & Completed Site Construction",
  },
  {
    step: "06",
    title: "Final Reveal",
    subtitle: "Styling & White-Glove Handover",
    description: "Every element is cleaned, styled with artwork and accessories, thoroughly inspected, and presented to the client as a complete, move-in ready experience.",
    keyActivities: [
      "Art curation & window treatment installation",
      "Deep cleaning & white-glove furniture arrangement",
      "Final snag list resolution",
      "Formal client walkthrough & key handover",
    ],
    deliverable: "Turnkey Move-in Ready Interior & Maintenance Manual",
  },
];

export const journalArticlesData: JournalArticle[] = [
  {
    slug: "quiet-materials-lagos-interiors",
    title: "Why Quiet Materials Create Lasting Rooms",
    category: "Materials & Tactility",
    date: "October 2025",
    readTime: "4 min read",
    excerpt: "Exploring how honed stone, warm timber, and micro-cement create timeless serenity amidst the energetic pace of Lagos.",
    image: "/images/project-minimal.webp",
    author: "Studio Editorial Team",
    content: [
      "In a fast-paced metropolis like Lagos, the home should serve as a sanctuary—a place where sensory noise recedes, allowing mind and body to reset. Achieving this quietude requires a deliberate material philosophy.",
      "Rather than relying on high-gloss synthetics or trendy surface treatments, we champion quiet, tactile materials: honed travertine, acoustic slatted teak, brushed brass, and natural linen fabrics.",
      "These materials absorb light rather than reflecting glare, creating a soft warmth that shifts gracefully throughout the day as sunlight moves across the room.",
    ],
  },
  {
    slug: "designing-calm-tropical-minimalism",
    title: "Designing Calm in the Rhythm of Lagos",
    category: "Architecture & Lifestyle",
    date: "November 2025",
    readTime: "5 min read",
    excerpt: "Balancing tropical ventilation, natural shade, and contemporary minimalism for comfortable urban residences.",
    image: "/images/urban-night.webp",
    author: "Founder / Creative Director",
    content: [
      "Designing luxury residences in West Africa requires deep respect for climate, humidity, and light. True architectural luxury is not merely decorative; it is thermal, acoustic, and spatial.",
      "By combining generous ceiling heights, deep window overhangs, and breathable natural textiles, spaces remain naturally cool while framed views connect occupants to outdoor gardens.",
      "The result is warm tropical minimalism—interiors that feel expansive, grounded, and unmistakably suited to contemporary Nigerian life.",
    ],
  },
  {
    slug: "language-of-architectural-lighting",
    title: "The Language of Architectural Lighting",
    category: "Lighting & Atmosphere",
    date: "December 2025",
    readTime: "6 min read",
    excerpt: "How indirect cove lighting, warm light temperatures, and concealed fixtures transform spatial perception after dark.",
    image: "/images/project-lounge.webp",
    author: "Lighting Design Specialist",
    content: [
      "Lighting is the invisible hand of interior architecture. It defines proportion, highlights texture, and sets emotional tone long after dusk.",
      "We avoid harsh overhead grid lights in favor of layered illumination: low-level perimeter coves, warm 2700K ambient washes, and focused accent spots that highlight architectural art objects.",
      "When light is thoughtfully integrated into ceiling reveals and joinery, spaces feel intimate, moody, and luxuriously serene.",
    ],
  },
];

export const demoTestimonials = [
  {
    quote: "Focus Urban Interiors transformed our space into a serene, light-filled haven. Their attention to material texture and execution detail was exemplary.",
    author: "Private Client Representative",
    role: "Private Residence · Lekki",
  },
  {
    quote: "The studio's understanding of contemporary workspace culture allowed us to build an executive suite that instills confidence and quiet pride.",
    author: "Managing Partner",
    role: "Commercial Suite · Victoria Island",
  },
  {
    quote: "From initial spatial concepts to white-glove handover, the project was managed with exceptional clarity, discipline, and aesthetic poise.",
    author: "Hospitality Director",
    role: "Boutique Venue · Ikoyi",
  },
];
