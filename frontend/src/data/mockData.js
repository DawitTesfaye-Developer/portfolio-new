// Mock data for Dawit Tesfaye's Portfolio
// This file will be replaced with backend API calls later

export const personalInfo = {
  name: "Dawit Tesfaye",
  title: "Software Developer & Computer Science Graduate",
  email: "dawit6825@gmail.com",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/dawit-tesfaye",
  linkedin: "https://linkedin.com/in/dawit-tesfaye",
  bio: "Building full-stack applications, responsive UI, and real digital solutions that make a difference.",
  resumeLink: "#"
};

export const aboutData = {
  intro: "I'm a passionate software developer who believes in the power of technology to transform lives.",
  story: `Born in a rural village in Ethiopia, my journey to becoming a software developer has been one of determination and endless curiosity. Growing up with limited access to technology, I was fascinated by the possibilities that computers could unlock.

After moving to Addis Ababa, I pursued my dream of studying Computer Science, graduating in 2024 with a BSc degree. Throughout my academic journey, I've worked on numerous projects that have shaped my skills in both frontend and backend development.

My goal is to become a full-stack expert and eventually build my own software company that creates solutions for real-world problems, especially those facing communities in developing regions.

I'm driven by the belief that well-crafted software can bridge gaps, create opportunities, and make the impossible possible.`,
  highlights: [
    "BSc in Computer Science (2024)",
    "Full-Stack Development Enthusiast",
    "Problem Solver & Quick Learner",
    "Aspiring Tech Entrepreneur"
  ]
};

export const skillsData = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 75 },
    { name: "TailwindCSS", level: 90 },
    { name: "Bootstrap", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "Firestore", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "REST APIs", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Canva", level: 75 },
    { name: "Android Studio", level: 65 }
  ],
  other: [
    { name: "UI/UX Design", level: 70 },
    { name: "Responsive Design", level: 90 },
    { name: "Problem Solving", level: 95 },
    { name: "Agile/Scrum", level: 75 }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Music School Website",
    description: "A comprehensive platform for a music school featuring course management, student registration, and instructor profiles.",
    problem: "Music schools needed a modern way to showcase their courses and manage student enrollments online.",
    contribution: "Built the entire frontend and integrated Firebase for real-time data management and user authentication.",
    techStack: ["React", "Firebase", "Firestore", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "Drum Machine App",
    description: "An interactive drum machine with customizable sound pads, volume control, and recording capabilities.",
    problem: "Musicians and hobbyists needed an accessible way to create beats without expensive equipment.",
    contribution: "Designed and developed the entire application with focus on responsive design and audio optimization.",
    techStack: ["React", "JavaScript", "Web Audio API", "CSS3"],
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Random Quote Machine",
    description: "A beautifully designed quote generator featuring social sharing and dynamic color themes.",
    problem: "Users wanted daily inspiration with easy sharing to social media platforms.",
    contribution: "Created an elegant UI with smooth animations and integrated Twitter sharing functionality.",
    techStack: ["React", "API Integration", "CSS Animations", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Advanced Calculator",
    description: "A feature-rich calculator with scientific functions, history tracking, and a modern glassmorphism UI.",
    problem: "Standard calculators lacked visual appeal and advanced functionality for everyday users.",
    contribution: "Developed the complete application with focus on mathematical accuracy and beautiful design.",
    techStack: ["JavaScript", "React", "TailwindCSS", "Math.js"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true
  },
  {
    id: 5,
    title: "25+5 Pomodoro Clock",
    description: "A productivity timer implementing the Pomodoro technique with customizable work/break intervals.",
    problem: "Professionals needed a clean, distraction-free timer to boost productivity.",
    contribution: "Built an intuitive interface with audio alerts and session tracking capabilities.",
    techStack: ["React", "JavaScript", "CSS3", "LocalStorage"],
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: false
  },
  {
    id: 6,
    title: "Task Management Dashboard",
    description: "A modern task management application with drag-and-drop functionality and team collaboration features.",
    problem: "Teams needed a simple yet powerful tool to organize and track project progress.",
    contribution: "Developed the frontend with React and implemented real-time updates using Firebase.",
    techStack: ["React", "Firebase", "React DnD", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Software Developer",
    company: "Freelance / Personal Projects",
    period: "2023 - Present",
    description: "Building full-stack web applications, focusing on React frontends and Firebase/Node.js backends. Delivered multiple client projects including e-commerce sites and business dashboards.",
    highlights: [
      "Developed 10+ web applications",
      "Specialized in React and Firebase",
      "Created responsive, mobile-first designs"
    ]
  },
  {
    id: 2,
    title: "Data Management & Call Center",
    company: "Dereja Project",
    period: "2022 - 2023",
    description: "Managed data operations and customer communications, gaining valuable experience in problem-solving and professional communication.",
    highlights: [
      "Handled data management systems",
      "Provided customer support",
      "Improved data processing efficiency"
    ]
  },
  {
    id: 3,
    title: "BSc in Computer Science",
    company: "University (Ethiopia)",
    period: "2020 - 2024",
    description: "Comprehensive education in computer science fundamentals, software engineering principles, and practical project development.",
    highlights: [
      "Strong foundation in algorithms & data structures",
      "Completed multiple academic projects",
      "Graduated with honors"
    ]
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "Project Collaborator",
    role: "Fellow Developer",
    content: "Dawit's dedication to clean code and user experience is remarkable. His ability to solve complex problems while maintaining code quality is impressive.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Academic Mentor",
    role: "University Professor",
    content: "One of the most dedicated students I've mentored. Dawit combines technical skills with creative thinking to deliver exceptional work.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  }
];