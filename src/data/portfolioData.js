export const personalDetails = {
  name: "Aswin Narayanan T",
  shortName: "Aswin",
  title: "Python Developer",
  targetRoles: [
    "Python Developer",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
  ],
  roleSubtitle: "Python • Software • Full Stack • Backend Developer",
  location: "Kerala, India",
  phone: "+91 70343 27569",
  email: "aswinmalamakkavu@gmail.com",
  links: {
    github: "https://github.com/AswinNarayananT",
    linkedin: "https://linkedin.com/in/aswin-nt",
  },
  summary:
    "Software Developer with specialized expertise in Python, Django, Django REST Framework, FastAPI, Flask, and full-stack React. Proficient in OOPS, REST APIs, PostgreSQL, MongoDB, and AWS EC2. Experienced in Celery/Redis async processing, WebSockets, and building high-performance, scalable web applications.",
  status: "Actively Looking for Roles: Python | Software | Full Stack | Backend",
};

export const stats = [
  { label: "Production Projects", value: "4+", description: "Distributed & full-stack apps" },
  { label: "Core Frameworks", value: "Django & FastAPI", description: "High-throughput REST & async" },
  { label: "Async & Caching", value: "Celery + Redis", description: "Concurrency & task pipelines" },
  { label: "Cloud Deployment", value: "AWS EC2 + Nginx", description: "Production hosted & configured" },
];

export const skillCategories = [
  {
    id: "backend",
    name: "Core & Backend",
    description: "Architecting high-performance APIs, business logic, and robust microservices",
    icon: "Server",
    skills: [
      { name: "Python", level: "Expert", highlight: true },
      { name: "OOPS", level: "Advanced", highlight: true },
      { name: "Django", level: "Advanced", highlight: true },
      { name: "DRF", level: "Advanced", highlight: true },
      { name: "FastAPI", level: "Advanced", highlight: true },
      { name: "Flask", level: "Intermediate", highlight: false },
      { name: "REST APIs", level: "Expert", highlight: true },
    ],
  },
  {
    id: "databases",
    name: "Databases & In-Memory",
    description: "Designing relational schemas, NoSQL document stores, and distributed caching",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", highlight: true },
      { name: "MongoDB", level: "Intermediate", highlight: false },
      { name: "Redis", level: "Advanced", highlight: true },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Building reactive, accessible, and intuitive user interfaces",
    icon: "Layout",
    skills: [
      { name: "React.js", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Advanced", highlight: true },
      { name: "TypeScript", level: "Intermediate", highlight: false },
      { name: "Redux Toolkit", level: "Advanced", highlight: false },
      { name: "Tailwind CSS", level: "Advanced", highlight: true },
      { name: "HTML5", level: "Expert", highlight: false },
      { name: "CSS3", level: "Advanced", highlight: false },
      { name: "Bootstrap", level: "Intermediate", highlight: false },
    ],
  },
  {
    id: "devops",
    name: "Cloud, DevOps & Tools",
    description: "Automating workflows, deploying to AWS EC2, and integrating payment & real-time engines",
    icon: "CloudCog",
    skills: [
      { name: "AWS EC2", level: "Advanced", highlight: true },
      { name: "Nginx", level: "Advanced", highlight: true },
      { name: "Gunicorn", level: "Advanced", highlight: false },
      { name: "Celery", level: "Advanced", highlight: true },
      { name: "WebSocket", level: "Advanced", highlight: true },
      { name: "Git", level: "Advanced", highlight: false },
      { name: "Stripe", level: "Intermediate", highlight: false },
      { name: "Razorpay", level: "Intermediate", highlight: false },
      { name: "ZegoCloud", level: "Intermediate", highlight: false },
      { name: "Vercel", level: "Intermediate", highlight: false },
    ],
  },
];

export const projects = [
  {
    id: "findmyseat",
    title: "FindMySeat",
    subtitle: "Real-Time Event Ticketing Platform",
    category: "Full Stack & Distributed",
    featured: true,
    description:
      "A high-concurrency event ticketing system engineered with an interactive 2D seat selection canvas, distributed Redis atomic locks to prevent race conditions during checkout, and a transactional PostgreSQL database.",
    highlights: [
      "Custom 2D interactive venue seat builder and booking canvas in React",
      "Redis distributed seat locking mechanism with TTL to eliminate double bookings",
      "Robust PostgreSQL schema with ACID transaction isolation for order fulfillment",
      "Secure payment checkout workflow and ticket generation pipeline",
    ],
    techStack: ["React.js", "Redis", "PostgreSQL", "Python", "REST APIs", "Tailwind CSS"],
    repos: {
      frontend: "https://github.com/AswinNarayananT/findmyseat-frontend",
      backend: "https://github.com/AswinNarayananT/findmyseat-backend",
    },
    metrics: "Zero race condition seat locks • Sub-100ms API response",
    badge: "Distributed Concurrency",
    gradient: "from-indigo-500/20 via-sky-500/10 to-transparent",
    accentColor: "indigo",
  },
  {
    id: "teamsync",
    title: "Team Sync",
    subtitle: "Collaborative Project Management Suite",
    category: "Real-Time & Async",
    featured: true,
    description:
      "Comprehensive collaborative workspace powering real-time task coordination through WebSockets, offloaded asynchronous tasks with Celery/Redis, tiered Stripe billing, and end-to-end AWS EC2 deployment.",
    highlights: [
      "Built resilient RESTful microservices with Django REST Framework (DRF)",
      "Instant WebSocket channels for real-time team chats and project status broadcasts",
      "Celery worker pool backed by Redis for background email notifications and heavy analytics",
      "Integrated Stripe webhooks for automated recurring subscriptions",
      "Production deployment on AWS EC2 behind Nginx reverse proxy and Gunicorn WSGI",
    ],
    techStack: ["Django REST Framework", "WebSockets", "Celery", "Redis", "Stripe", "AWS EC2", "Nginx", "React.js"],
    repos: {
      frontend: "https://github.com/AswinNarayananT/Teamsync-frontend",
      backend: "https://github.com/AswinNarayananT/Teamsync-backend",
    },
    metrics: "WebSocket instant updates • Async task pipeline • AWS EC2 Hosted",
    badge: "Real-Time & Scalable",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "emerald",
  },
  {
    id: "opticoasis",
    title: "OpticOasis",
    subtitle: "Eyewear E-Commerce Architecture",
    category: "E-Commerce",
    featured: true,
    description:
      "A complete e-commerce solution developed following the Django MVT architectural pattern. Features secure Razorpay payment processing, two-factor OTP verification for auth, inventory control, and coupon management.",
    highlights: [
      "Architected using Django Model-View-Template (MVT) for clean separation of concerns",
      "Automated phone/email OTP verification flow for enhanced customer account security",
      "Integrated Razorpay payment gateway API with transaction status verification",
      "Comprehensive admin dashboard for inventory tracking, sales analytics, and order dispatch",
    ],
    techStack: ["Django MVT", "Python", "Razorpay", "PostgreSQL", "OTP Verification", "Bootstrap"],
    repos: {
      github: "https://github.com/AswinNarayananT/OpticOasis-ecommerse-webapp",
    },
    metrics: "Secure OTP flow • End-to-End Razorpay Gateway integration",
    badge: "Django MVT & Payments",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "amber",
  },
  {
    id: "blogbox",
    title: "BlogBox",
    subtitle: "High-Performance Content Management Engine",
    category: "Asynchronous APIs",
    featured: true,
    description:
      "A modern, asynchronous Content Management System powered by FastAPI. Incorporates Cloudinary for cloud media transformation and hosting, JWT bearer token security, and interactive OpenAPI documentation.",
    highlights: [
      "Ultra-fast asynchronous REST API endpoints leveraging FastAPI and Pydantic schemas",
      "Stateless JWT authentication and role-based access control (RBAC)",
      "Seamless media pipeline with Cloudinary SDK for automatic optimization and CDN storage",
      "Auto-generated Swagger UI and Redoc API specifications for rapid frontend integration",
    ],
    techStack: ["FastAPI", "Python", "Cloudinary", "JWT Auth", "PostgreSQL", "React.js"],
    repos: {
      frontend: "https://github.com/AswinNarayananT/BlogBox-frontend",
      backend: "https://github.com/AswinNarayananT/BlogBox-backend",
    },
    metrics: "Async I/O • Cloudinary CDN • OpenAPI Spec",
    badge: "Async FastAPI Core",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    accentColor: "purple",
  },
];

export const educationAndCertifications = {
  education: [
    {
      institution: "Brototype",
      program: "Full Stack Web Development",
      period: "2024 - Present",
      type: "Professional Engineering Boot Camp",
      description:
        "Intensive, project-driven software development training focusing on production-grade Python/Django backends, modern React applications, system design, data structures, and distributed architectures.",
      skillsAcquired: ["Distributed Systems", "Django REST Framework", "Microservices", "Clean Code & Design Patterns"],
      current: true,
    },
    {
      institution: "University of Calicut",
      program: "B.Sc. Mathematics",
      period: "2019 - 2022",
      type: "Undergraduate Degree",
      description:
        "Graduated with a strong foundation in analytical thinking, discrete mathematics, calculus, computational logic, and problem solving, providing a rigorous mathematical grounding for complex software algorithms.",
      skillsAcquired: ["Discrete Mathematics", "Computational Logic", "Quantitative Problem Solving", "Algorithm Analysis"],
      current: false,
    },
  ],
  certifications: [
    {
      title: "Advanced Python Training",
      organization: "ATEES Industrial Training",
      period: "Aug 2022 - Apr 2023",
      certificateUrl: "https://drive.google.com/file/d/12Di2RWwoxkoRl2hxr04SxjrUXhmBwHqF/view?usp=sharing",
      description:
        "Comprehensive industrial certification covering object-oriented programming (OOPS), core Python internals, database integration, and building modular backend applications.",
      credentialId: "ATEES-IND-PY-2023",
      verified: true,
    },
  ],
};

export const backendHighlights = [
  {
    title: "Concurrency & Race Condition Mitigation",
    tech: "Redis Distributed Locking (Redlock pattern)",
    project: "FindMySeat",
    description:
      "Solved simultaneous seat reservation conflicts by implementing short-lived atomic Redis locks with TTL. Guarantees single-user checkout reservation even under spike traffic.",
  },
  {
    title: "Asynchronous Workflows & Task Queues",
    tech: "Celery + Redis Broker",
    project: "Team Sync",
    description:
      "Decoupled resource-heavy operations like transactional email dispatches, file processing, and report generation into background worker pools, keeping API response times consistently under 60ms.",
  },
  {
    title: "Real-Time WebSocket Communication",
    tech: "Django Channels & WebSockets",
    project: "Team Sync",
    description:
      "Implemented bi-directional event broadcasts for live team chat and kanban card synchronizations without polling overhead.",
  },
  {
    title: "Cloud Infrastructure & Production Hosting",
    tech: "AWS EC2, Nginx & Gunicorn WSGI",
    project: "Team Sync & Production Deployments",
    description:
      "Provisioned Ubuntu AWS EC2 cloud instances configured with Nginx reverse proxy, SSL/TLS encryption, and Gunicorn WSGI/ASGI application workers for stable 24/7 web hosting.",
  },
];
