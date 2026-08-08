// src/data/team.ts
//
// Single source of truth for the Team page.
// To update: open the intake form's admin panel, hit "Copy all as JSON array",
// and paste the result in place of the array below.

export interface TeamMember {
  name: string;
  role: string;
  experienceYears?: string;
  specialties: string[];
  bio: string;
  highlights?: string[];
  education?: string;
  linkedin?: string;
  portfolio?: string;
  email?: string;
  photo?: string; // URL, or empty string to fall back to an initials avatar
  funFact?: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    name: "Bishal Jarnal",
    role: "Full-Stack Engineer",
    experienceYears: "5",
    specialties: ["Node.js", "React", "TypeScript", "PostgreSQL", "AWS"],
    bio: "Bishal builds high-scale backend systems and secure client-facing apps, with a focus on architecture that holds up under real load.",
    highlights: [
      "Re-architected a legacy booking platform into Node.js microservices handling 1M+ transactions/day at 99.9% uptime",
      "Built and shipped an AI assistant on the OpenAI API for a UK fintech platform",
    ],
    education: "B.Sc. Computer Science & IT, Tribhuvan University",
    linkedin: "#",
    portfolio: "#",
    photo: "",
  },
  {
    name: "Habin Bhandari",
    role: "Senior Android Developer",
    experienceYears: "6+",
    specialties: ["Kotlin", "Java", "Android", "Jetpack Compose"],
    bio: "Habin builds and maintains scalable Android applications, focusing on clean architecture, reliable integrations, and mentoring junior developers across the full mobile development lifecycle.",
    highlights: [
      "Maintained and enhanced production Android applications with new features, API integrations, payment systems, and performance improvements",
      "Led migration and development of modern Android UI using Jetpack Compose while maintaining existing Java/Kotlin codebases",
    ],
    education: "B.E. Electronics and Communication, T.U.",
    linkedin: "#",
    portfolio: "#",
    photo: "",
  },
  {
    name: "Ashish Rajbanshi",
    role: "Mobile Engineer",
    experienceYears: "6+",
    specialties: [
      "App Architecture",
      "iOS",
      "Android",
      "Payment Systems",
      "SDK Development",
    ],
    bio: "Ashish builds mobile experiences that stay out of the user's way, working end-to-end across app architecture, native iOS/Android integration, and payment systems.",
    highlights: [
      "Currently developing a payment SDK powering transactions and rewards for native iOS and Android apps",
      "Builds secure, production-grade payment flows deployed to real users at scale",
    ],
    education: "B.E. Electronics Engineering, Tribhuvan University",
    linkedin: "#",
    portfolio: "#",
    photo: "",
  },
  {
    name: "Sandesh Paudel",
    role: "Senior Data Scientist",
    experienceYears: "5+",
    specialties: [
      "Artificial Intelligence",
      "Machine Learning",
      "Statistics",
      "Predictive Modeling",
      "Recommendation Systems",
      "Forecasting",
      "Risk Modeling",
      "Data Analytics",
    ],
    bio: "Sandesh is experienced in building data-driven solutions using Artificial Intelligence, Machine Learning, and Statistics, helping businesses turn data into better decisions.",
    highlights: [
      "Works with businesses to identify opportunities and build systems that improve decision-making, customer understanding, revenue, and operational efficiency",
      "Works across the complete data journey — from collecting and preparing data, to developing models, to deploying analytics solutions used in real business environments",
    ],
    education: "B.E. Computer Engineering",
    linkedin: "#",
    portfolio: "#",
    photo: "",
  },
] satisfies TeamMember[];