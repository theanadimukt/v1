export const skills = [
  "Laravel",
  "PHP",
  "Node.js",
  "React",
  "TypeScript",
  "Livewire",
  "Alpine.js",
  "Filament",
  "MySQL",
  "PostgreSQL",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "Azure",
  "AWS",
  "Elasticsearch",
  "Microsoft Graph",
  "Tailwind CSS",
  "Angular",
];

export interface Job {
  company: string;
  role: string;
  dates: string;
  location: string;
  type?: string;
  bullets: string[];
  tech: string[];
}

export const jobs: Job[] = [
  {
    company: "Syntura",
    role: "Full Stack Developer",
    dates: "Apr 2022 – Present",
    location: "Greater London",
    bullets: [
      "Led backend development of an in-house CRM and ticketing platform, fully decommissioning Microsoft 365 CRM and consolidating sales and customer operations into a tailored internal system.",
      "Designed and maintained 150+ production REST APIs using Laravel and Node.js powering admin and customer portals across a multi-service architecture.",
      "Integrated third-party services including Azure, AWS, Dropbox, Microsoft Graph, SendGrid, Elasticsearch, and RabbitMQ into core backend services.",
      "Contributed to migrating a large React codebase from JavaScript to TypeScript and improving state management using Redux to increase maintainability.",
      "Configured Kubernetes-based deployments across multiple environments, managing queue workers, schedulers, and ingress routing for production workloads.",
    ],
    tech: [
      "Laravel",
      "PHP",
      "Node.js",
      "React",
      "TypeScript",
      "Kubernetes",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
    ],
  },
  {
    company: "SMVS",
    role: "Volunteer Full Stack Developer",
    dates: "Sep 2024 – Jul 2025",
    location: "London",
    type: "Volunteer",
    bullets: [
      "Built a production-grade event and guest management system for a large temple inauguration serving 500+ volunteers and 200+ overseas guests.",
      "Designed and developed admin, volunteer, and guest-facing portals using the TALL stack to manage registrations, allocations, and operational workflows.",
      "Developed a guest pickup and drop-off coordination module connecting volunteers with assigned guests, improving real-time visibility of transport activities.",
      "Integrated Twilio to send automated schedule updates, reminders, and coordination messages, replacing manual spreadsheets and reducing coordination errors.",
    ],
    tech: [
      "Laravel",
      "Filament",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "Twilio",
    ],
  },
  {
    company: "Waltham International College",
    role: "Full Stack Developer",
    dates: "Jan 2022 – Apr 2022",
    location: "Greater London",
    bullets: [
      "Developed internal web applications for academic and administrative workflows using Laravel and Angular, supporting daily operations across staff teams.",
      "Gathered requirements from non-technical stakeholders and translated unclear operational needs into structured technical solutions.",
      "Built and maintained backend APIs and frontend modules to manage student records, reporting, and internal processes.",
    ],
    tech: ["Laravel", "Angular", "MySQL"],
  },
  {
    company: "ByteParity Technologies",
    role: "Full Stack Developer",
    dates: "Jan 2017 – Feb 2021",
    location: "Greater Ahmedabad Area",
    bullets: [
      "Delivered full-stack web applications for enterprise clients using Laravel, Drupal, Angular, React, and Node.js across MEAN and MERN stack projects.",
      "Led SAP data migration into a Drupal-based platform for a Fortune 100 client, ensuring structured data mapping and minimal business disruption during transition.",
      "Acted as technical lead for a small development team, managing task allocation, code reviews, and serving as the primary technical contact for clients.",
      "Conducted internal training sessions to onboard developers to Laravel and modern JavaScript frameworks, improving team delivery consistency.",
    ],
    tech: ["Laravel", "Drupal", "Angular", "React", "Node.js", "MySQL"],
  },
  {
    company: "Vrinsoft Technologies",
    role: "Web Developer",
    dates: "Jun 2015 – Aug 2016",
    location: "Ahmedabad",
    bullets: [
      "Developed PHP-based web applications using MVC architecture for multiple client projects across different domains.",
      "Integrated payment gateways including PayPal and Stripe and developed REST APIs to support frontend features.",
    ],
    tech: ["PHP", "MySQL", "REST APIs", "Stripe", "PayPal"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  featured: boolean;
  github?: string;
  external?: string;
  tag?: string;
}

export const projects: Project[] = [
  {
    title: "Syntura Internal CRM Platform",
    description:
      "Led the full backend development of a bespoke CRM and ticketing system that replaced Microsoft 365 CRM across the entire organisation. Built across a multi-service Laravel architecture with 150+ REST APIs, queue-based workflows, and integrations with Azure, AWS, Microsoft Graph, SendGrid, and Elasticsearch. Reduced key API response times by ~30%.",
    tech: [
      "Laravel",
      "React",
      "TypeScript",
      "Kubernetes",
      "RabbitMQ",
      "Elasticsearch",
      "Azure",
    ],
    featured: true,
    tag: "Enterprise SaaS",
  },
  {
    title: "SMVS Event & Guest Management System",
    description:
      "Designed and delivered a production-grade event management platform for a large-scale temple inauguration. The system handled registrations, volunteer task scheduling, guest allocations, and real-time pickup/drop-off coordination for 500+ volunteers and 200+ international guests. Integrated Twilio for automated messaging.",
    tech: ["Laravel", "Filament", "Livewire", "Alpine.js", "MySQL", "Twilio"],
    featured: true,
    tag: "Volunteer Project",
  },
  {
    title: "SAP → Drupal Migration",
    description:
      "Led a complex SAP data migration into a Drupal-based platform for a Fortune 100 client, ensuring structured data mapping and minimal business disruption.",
    tech: ["Drupal", "PHP", "SAP", "MySQL"],
    featured: false,
  },
  {
    title: "150+ REST API Suite",
    description:
      "Designed and maintained a large suite of production REST APIs powering multiple admin and customer portals across a distributed multi-service architecture at Syntura.",
    tech: ["Laravel", "Node.js", "MySQL", "Redis"],
    featured: false,
  },
  {
    title: "College Management System",
    description:
      "Built internal web applications for academic and administrative workflows, managing student records, reporting tools, and operational processes for college staff.",
    tech: ["Laravel", "Angular", "MySQL"],
    featured: false,
  },
];

export const social = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hausofsagar",
    icon: "linkedin",
  },
];
