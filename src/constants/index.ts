import {
  SiAngular,
  SiMysql,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiPrisma,
} from "react-icons/si";

export const myProjects = [
  {
    id: 1,
    title: "Painting E-commerce Platform",
    description:
      "Completely revamped Vendure + Angular 16 storefront (90%+ custom UI/components with TailwindCSS) for a premium art marketplace (1,000+ artworks)",
    subDescription: [
      "Implemented Three.js 3D/360° interactive viewer — dramatically increased engagement & time-on-page.",
      "Heavily customized Vendure headless core: custom channels, faceted search, promotion engine, VNPay integration.",
      "Optimize performance and SEO with Angular Universal SSR, lazy loading, image CDN, and structured data.",
      "Developed full-featured blog/CMS module with personalized recommendations and Google Sign-In."
    ],
    href: "",
    logo: "",
    image: "/assets/projects/project-1.png",
    tags: [
      {
        id: 1,
        name: "Angular 16",
        icon: SiAngular,
      },
      {
        id: 2,
        name: "Vendure",
        path: "/assets/logos/vendure.svg",
      },
      {
        id: 3,
        name: "MySQL",
        icon: SiMysql,
      },
      {
        id: 4,
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        id: 5,
        name: "GraphQL",
        icon: SiGraphql,
      },
      {
        id: 6,
        name: "Three.js",
        path: "/assets/logos/threejs.png",
      },
    ],
  },
  {
    id: 2,
    title: "Booking Management System",
    description:
      "Built advanced recurring booking engine (weekly/monthly rules, holidays, capacity limits, cancellation policies).",
    subDescription: [
      "Revamped entire booking flow with Angular 16 + TailwindCSS → cut drop-off ~40%, significantly improved conversion rate.",
      "Completely eliminated double-bookings (from ~6%) via optimistic locking & real-time validation.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Resolved critical bugs and hardened reservation logic, ensuring 100% booking accuracy during peak hours.",
    ],
    href: "",
    logo: "",
    image: "/assets/images/no-image.png",
    tags: [
      {
        id: 1,
        name: "Angular 16",
        icon: SiAngular,
      },
      {
        id: 2,
        name: "Vendure",
        path: "/assets/logos/vendure.svg",
      },
      {
        id: 3,
        name: "MySQL",
        icon: SiMysql,
      },
      {
        id: 4,
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        id: 5,
        name: "GraphQL",
        icon: SiGraphql,
      },
    ],
  },
  {
    id: 3,
    title: "Beauty Cosmetics E-commerce Platform",
    description:
      "Led full frontend development and deep customization of Vendure’s Angular storefront (Angular 18 + TailwindCSS + PrimeNG) for a 1,000+ SKU beauty marketplace featuring complex shade/color variant selectors.",
    subDescription: [
      "Implemented enterprise-grade promotion system (membership tiers, auto-vouchers, bundles, tiered pricing)",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Added smart filtering, wishlist, personalized recommendations, beauty blog + CMS, social login, VNPay.",
      "Delivers high performance, SEO optimization via Angular Universal SSR, lazy loading, and image optimization",
    ],
    href: "",
    logo: "",
    image: "/assets/images/no-image.png",
    tags: [
      {
        id: 1,
        name: "Angular 18",
        icon: SiAngular,
      },
      {
        id: 2,
        name: "Vendure",
        path: "/assets/logos/vendure.svg",
      },
      {
        id: 3,
        name: "MySQL",
        icon: SiMysql,
      },
      {
        id: 4,
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        id: 5,
        name: "GraphQL",
        icon: SiGraphql,
      },
    ],
  },
  {
    id: 4,
    title: "Real Estate Listing Platform",
    description:
      "Angular 18 + TailwindCSS responsive frontend (public listings, property detail pages, user profiles, and full-featured admin dashboard).",
    subDescription: [
      "Node.js/Express + Prisma + MySQL RESTful API with JWT auth & image processing",
      "Cloudinary multi-image upload with auto-resize & strict validation",
      "Vietnam-tailored schema (districts, project types) + admin approval system",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/project-3.png",
    tags: [
      {
        id: 1,
        name: "Angular 18",
        icon: SiAngular,
      },
      {
        id: 2,
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        id: 3,
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        id: 4,
        name: "TailwindCSS",
        icon: SiTailwindcss,
      },
      {
        id: 5,
        name: "MySQL",
        icon: SiMysql,
      },
    ],
  },
];

export const experiences = [
  {
    title: "TMA Solutions Co., Ltd",
    job: "Frontend Developer Intern",
    date: "02/2023 - 04/2023",
    contents: [
      "📅 Developed an admin dashboard CRUD application using Angular 14 and Node.js/Express, enhancing data management efficiency for 300 users or records.",
      "🎨 Developed a simple API using Node.js (Express) and MySQL, processing 500 requests and enhancing data accessibility for users.",
      "🐞 Get familiar with teamwork processes and Git (Git Flow).",
    ]
  },
  {
    title: "Aegona Co., Ltd",
    job: " Software Engineers",
    date: "11/2023 - 07/2025",
    contents: [
      "💻 Developed and owned two large-scale e-commerce platforms using Angular, TailwindCSS, and Vendure headless commerce (Node.js, GraphQL, NestJS, MySQL).",
      "🖼️ Implemented interactive 3D product viewing (Three.js), significantly improving user engagement on artwork & cosmetics sites.",
      "🔗 Integrated payment gateways (VNPay) and Google Analytics, enabling conversion tracking and data-driven product decisions.",
      "⚡ Led performance optimization initiatives using Angular Universal SSR, lazy-loading, and image optimization.",
      "📝 Mentored 3 interns, conducted 3 code reviews, and established frontend best practices resulting in improved code quality and team efficiency by 20%.",
      "🚀 Responsible for production releases via Jenkins: triggered deployments, passed environment parameters, and tracked rollout progress."
    ]
  },
  {
    title: "Freelance Developer",
    job: "Fullstack Developer",
    date: "07/2025 - 09/2025",
    contents: [
      "💻 Single-handedly built the entire platform from scratch: Angular frontend + pure Node.js RESTful backend + MySQL.",
      "🖼️ Developed property posting flow with Cloudinary multi-image upload, client-side resizing, and strict validation.",
      "⚙️ Designed and implemented admin dashboard for listing approval, featured posts, and analytics.",
      "🗂️ Created flexible, scalable database schema tailored to Vietnamese real estate needs (districts, project types, legal documents).",
    ]
  },
];