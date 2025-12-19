// Profile data for Dawit Tesfaye Hatau's Portfolio
// Based on actual profile information

export const personalInfo = {
  name: "Dawit Tesfaye",
  fullName: "Dawit Tesfaye Hatau",
  title: "Full-Stack & Mobile Developer",
  tagline: "Code-Crafter & Design Thinker",
  email: "dm7980757@gmail.com",
  phone: "+251900760914",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/dawit-tesfaye",
  linkedin: "https://www.linkedin.com/in/dawit-tesfaye-hatau-60a17b311",
  bio: "Full-Stack & Mobile App Developer with a passion for building beautiful, functional web and mobile applications. Computer Science graduate specializing in Learning Experience Design.",
  resumeLink: "#"
};

export const aboutData = {
  intro: "I'm a passionate software developer and certified Learning Experience Designer who believes in the power of technology to transform lives.",
  story: `I'm Dawit Tesfaye Hatau, a Computer Science graduate from MWU (2021-2024) with a strong passion for software development and design thinking.

My journey in tech has been exciting and diverse - from frontend development to full-stack solutions, and even venturing into mobile app development with React Native. I've had the privilege of working with various companies and on freelance projects that have shaped my skills.

I specialize in creating responsive, user-friendly web applications using modern technologies like React.js, Next.js, Node.js, and Firebase. My experience in Learning Experience Design adds a unique perspective to how I approach user interfaces and interactions.

Based in Addis Ababa, Ethiopia, I'm constantly learning and building. My goal is to create software solutions that make a real difference in people's lives.`,
  highlights: [
    "BSc in Computer Science (MWU 2024)",
    "Meta Frontend Professional Certified",
    "Learning Experience Designer",
    "Full-Stack & Mobile Developer"
  ],
  languages: [
    { name: "Afan Oromo", level: "Native" },
    { name: "Amharic", level: "Full Professional" },
    { name: "English", level: "Professional Working" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Bootstrap", level: 85 },
    { name: "HTML/CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "Laravel", level: 70 },
    { name: "REST APIs", level: 85 }
  ],
  mobile: [
    { name: "React Native", level: 80 },
    { name: "Mobile UI/UX", level: 75 }
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 }
  ],
  other: [
    { name: "LX Design", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "Problem Solving", level: 90 },
    { name: "Network Admin", level: 70 }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Music School Website",
    description: "A comprehensive platform for a music school featuring course management, student registration, and instructor profiles with modern UI.",
    problem: "Music schools needed a modern way to showcase their courses and manage student enrollments online.",
    contribution: "Built the entire frontend with React and integrated Firebase for real-time data management and authentication.",
    techStack: ["React.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true,
    category: "frontend"
  },
  {
    id: 2,
    title: "Resume Developer Website",
    description: "A professional resume and portfolio website showcasing developer skills, experience, and projects with modern design and smooth animations.",
    problem: "Developers needed a clean, professional way to present their resume and portfolio to potential employers.",
    contribution: "Designed and developed the complete website with responsive design, smooth animations, and modern UI/UX principles.",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    liveDemo: "https://resume-developer-website.vercel.app",
    github: "#",
    featured: true,
    category: "frontend"
  },
  {
    id: 3,
    title: "Random Quote Machine",
    description: "A beautifully designed quote generator featuring social sharing and dynamic color themes.",
    problem: "Users wanted daily inspiration with easy sharing to social media platforms.",
    contribution: "Created an elegant UI with smooth animations and integrated Twitter sharing functionality.",
    techStack: ["React.js", "Bootstrap", "API Integration"],
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: false,
    category: "frontend"
  },
  {
    id: 4,
    title: "Advanced Calculator",
    description: "A feature-rich calculator with scientific functions, history tracking, and a modern glassmorphism UI.",
    problem: "Standard calculators lacked visual appeal and advanced functionality for everyday users.",
    contribution: "Developed the complete application with focus on mathematical accuracy and beautiful design.",
    techStack: ["JavaScript", "React.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true,
    category: "frontend"
  },
  {
    id: 5,
    title: "25+5 Pomodoro Clock",
    description: "A productivity timer implementing the Pomodoro technique with customizable work/break intervals.",
    problem: "Professionals needed a clean, distraction-free timer to boost productivity.",
    contribution: "Built an intuitive interface with audio alerts and session tracking capabilities.",
    techStack: ["React.js", "JavaScript", "CSS3"],
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: false,
    category: "frontend"
  },
  {
    id: 6,
    title: "Full-Stack Web Application",
    description: "A modern full-stack application with user authentication, real-time database, and responsive design.",
    problem: "Businesses needed custom web solutions with secure authentication and data management.",
    contribution: "Developed both frontend and backend, implementing secure authentication and RESTful APIs.",
    techStack: ["Next.js", "Node.js", "MongoDB", "Firebase"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    liveDemo: "#",
    github: "#",
    featured: true,
    category: "fullstack"
  }
];

export const experienceData = [
  {
    id: 1,
    title: "Link Hunter",
    company: "HorizoNova Company",
    period: "May 2025 - Present",
    location: "Addis Ababa, Ethiopia",
    description: "Currently working on link building and digital marketing strategies, contributing to the company's online presence and SEO efforts.",
    highlights: [
      "Digital marketing strategies",
      "Link building campaigns",
      "SEO optimization"
    ],
    type: "work"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "Freelance",
    period: "Apr 2024 - Feb 2025",
    location: "Remote",
    description: "Worked on various client projects ranging from web development to mobile applications. Built custom solutions using modern frameworks and technologies.",
    highlights: [
      "Built custom web applications",
      "Client project management",
      "React & Node.js development"
    ],
    type: "work"
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Prodigy InfoTech",
    period: "Dec 2024",
    location: "Addis Ababa, Ethiopia",
    description: "Contributed to full-stack development projects, working with modern web technologies and frameworks.",
    highlights: [
      "Full-stack development",
      "Modern web technologies",
      "Team collaboration"
    ],
    type: "work"
  },
  {
    id: 4,
    title: "Data Management & Call Center",
    company: "Dereja",
    period: "Sep 2024 - Dec 2024",
    location: "Ethiopia",
    description: "Handled data management, data cleaning operations, and customer communications, ensuring data quality and efficient customer support.",
    highlights: [
      "Data cleaning & management",
      "Customer support",
      "Process optimization"
    ],
    type: "work"
  },
  {
    id: 5,
    title: "Frontend Developer",
    company: "Self-employed",
    period: "Jun 2021 - Jun 2024",
    location: "Ethiopia",
    description: "Built numerous frontend projects while studying at MWU. Focused on learning modern frameworks and building practical applications.",
    highlights: [
      "React.js development",
      "Multiple project completions",
      "Continuous learning"
    ],
    type: "work"
  },
  {
    id: 6,
    title: "Network Administrator",
    company: "Ambo University",
    period: "Jun 2023 - Aug 2023",
    location: "Ambo, Ethiopia",
    description: "Managed network infrastructure and provided technical support for the university's IT systems.",
    highlights: [
      "Network infrastructure management",
      "Technical support",
      "System administration"
    ],
    type: "work"
  }
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor's Degree in Computer Science",
    school: "MWU (Madda Walabu University)",
    period: "2021 - 2024",
    description: "Comprehensive education in computer science fundamentals, software engineering, and practical project development."
  },
  {
    id: 2,
    degree: "Meta Frontend Professional Certificate",
    school: "Coursera",
    period: "December 2024",
    description: "Professional certification in frontend development from Meta, covering React, modern JavaScript, and web development best practices."
  }
];

export const certificationsData = [
  "Meta Frontend Professional Certificate",
  "Introduction to Frontend Development",
  "Learning Experience Designer",
  "Learning Experience Design",
  "DAAP Training Certificate",
  "Junior Backend Development"
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