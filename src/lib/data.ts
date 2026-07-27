export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  color: string;
  year: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    client: "NeoBank",
    category: "Banking App",
    description: "A comprehensive banking dashboard that simplifies financial management with intuitive visualizations and seamless transaction tracking.",
    image: "/projects/fintech.svg",
    color: "#E8F4FD",
    year: "2024",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    client: "MedCare",
    category: "Healthcare",
    description: "A patient-centric mobile application that streamlines appointment booking, health tracking, and telemedicine consultations.",
    image: "/projects/healthcare.svg",
    color: "#E8FDF4",
    year: "2024",
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "StyleHub",
    category: "E-commerce",
    description: "A modern e-commerce experience with personalized recommendations, seamless checkout, and engaging product discovery.",
    image: "/projects/ecommerce.svg",
    color: "#FDF4E8",
    year: "2023",
  },
  {
    id: "saas-product",
    title: "SaaS Product Design",
    client: "FlowSync",
    category: "SaaS",
    description: "A collaborative workflow platform that enhances team productivity with smart automation and real-time collaboration features.",
    image: "/projects/saas.svg",
    color: "#F4E8FD",
    year: "2023",
  },
  {
    id: "travel-app",
    title: "Travel Booking App",
    client: "Wanderlust",
    category: "Travel",
    description: "An immersive travel planning experience with AI-powered recommendations and seamless booking integration.",
    image: "/projects/travel.svg",
    color: "#FDE8E8",
    year: "2023",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    client: "FitPro",
    category: "Health & Fitness",
    description: "A comprehensive fitness companion that tracks workouts, nutrition, and wellness goals with gamified motivation.",
    image: "/projects/fitness.svg",
    color: "#E8FDE8",
    year: "2023",
  },
];

export const services: Service[] = [
  {
    id: "branding",
    title: "Branding",
    description: "Creating distinctive brand identities that resonate with your target audience and stand out in the market. From logo design to comprehensive brand guidelines.",
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description: "Crafting intuitive and visually stunning user interfaces backed by thorough research and user-centered design principles.",
  },
  {
    id: "mobile-app-design",
    title: "Mobile App Design",
    description: "Designing seamless mobile experiences for iOS and Android that users love to interact with, following platform-specific guidelines.",
  },
  {
    id: "design-systems",
    title: "Design Systems",
    description: "Building scalable and consistent design systems that streamline development and ensure cohesive user experiences across products.",
  },
];

export const clients = [
  { name: "Google", logo: "/clients/google.svg" },
  { name: "Apple", logo: "/clients/apple.svg" },
  { name: "Microsoft", logo: "/clients/microsoft.svg" },
  { name: "Amazon", logo: "/clients/amazon.svg" },
  { name: "Meta", logo: "/clients/meta.svg" },
  { name: "Netflix", logo: "/clients/netflix.svg" },
];

export const socialLinks = [
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const navLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export const skills = [
  "UI/UX Design",
  "Product Design",
  "Design Systems",
  "Prototyping",
  "User Research",
  "Wireframing",
  "Visual Design",
  "Interaction Design",
];

export const tools = [
  "Figma",
  "Sketch",
  "Adobe XD",
  "Framer",
  "Principle",
  "After Effects",
  "Illustrator",
  "Photoshop",
];

export const experience = [
  {
    role: "UI/UX Designer",
    company: "Baarez Technology Solutions",
    period: "Oct 2024 - Present",
    description: "Leading end-to-end UI/UX design for hospitality and enterprise solutions, including PMS platforms and dashboards. Collaborating cross-functionally with remote teams to deliver scalable, user-centered product experiences.",
  },
  {
    role: "Product Designer",
    company: "BIS Technology",
    period: "Apr 2024 - Oct 2024",
    description: "Owned product design for AI-driven platforms, shaping user flows and interface systems from concept to delivery. Established design system foundations and contributed to strategic product decisions.",
  },
  {
    role: "UI/UX Designer",
    company: "Digimeta.dev",
    period: "Jan 2023 - Apr 2024",
    description: "Designed mobile apps, web platforms, and fundraiser dashboards for Web3 startups—including Pocket Donation App and Flaimed dating ecosystem. Delivered high-impact landing pages and motion design assets.",
  },
];
