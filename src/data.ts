import { Skill, Project, EducationItem, ExperienceItem, CertificateItem } from './types';
import profileImage from './assets/images/avatar_hijab_coder_1782976160774.jpg';
import posVideo from '../assets/POS App.mp4';

export const PERSONAL_INFO = {
  name: "Hind Alaa Fathy",
  title: "Software Engineer & Flutter Developer",
  tagline: "Building Modern Mobile & AI-Powered Experiences.",
  subtitle: "Software Engineer | Flutter Developer | Frontend Developer | AI Enthusiast | AWS & DevOps Learner",
  profileImage: profileImage,
  cvUrl: "#", // placeholder for CV download
  email: "hindalaa26@gmail.com",
  phone: "01009873724", // Updated phone number
  linkedin: "https://linkedin.com/in/hind-alaa-fathy",
  github: "https://github.com/HindAlaa26",
  location: "Egypt",
  aboutText: `I am currently an MSc student in Software Development with AI at Queen's University, Canada. I am focused on expanding my expertise in AI, Cloud Computing, AWS, Docker, and Kubernetes while continuing to build modern, high-performance Flutter applications.

With a deep academic foundation and strong software design principles, I craft premium responsive mobile experiences with advanced state management (Bloc, Cubit, Provider), Firebase integration, and secure REST APIs. I build scalable applications that are performant, accessible, and delight users.`
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "Dart", category: "Languages", proficiency: 95 },
  { name: "Python", category: "Languages", proficiency: 85 },
  
  // Frameworks
  { name: "Flutter", category: "Frameworks", proficiency: 98 },
  { name: "Firebase", category: "Frameworks", proficiency: 90 },
  { name: "REST APIs", category: "Frameworks", proficiency: 95 },
  
  // State Management
  { name: "Bloc", category: "State Management", proficiency: 95 },
  { name: "Cubit", category: "State Management", proficiency: 92 },
  { name: "Provider", category: "State Management", proficiency: 90 },
  
  // Databases
  { name: "SQLite", category: "Databases", proficiency: 88 },
  { name: "Shared Preferences", category: "Databases", proficiency: 95 },
  
  // Cloud
  { name: "AWS", category: "Cloud", proficiency: 70 },
  { name: "Docker", category: "Cloud", proficiency: 75 },
  { name: "Kubernetes", category: "Cloud", proficiency: 65 },
  
  // Tools
  { name: "Git", category: "Tools", proficiency: 90 },
  { name: "GitHub", category: "Tools", proficiency: 92 },
  { name: "VS Code", category: "Tools", proficiency: 95 },
  { name: "Android Studio", category: "Tools", proficiency: 90 },
  { name: "Figma", category: "Tools", proficiency: 85 }
];

export const PROJECTS: Project[] = [
  {
    id: "edu-vista",
    title: "Edu Vista App",
    description: "A comprehensive learning management system featuring real-time progress tracking, course modules, video streaming, and collaborative study groups.",
    longDescription: "Edu Vista is a cutting-edge educational platform built to provide an exceptional learning experience. Integrating rich media playback, real-time analytics for courses, offline video synchronization, and responsive state management using Bloc, it bridges the gap between students and premium knowledge bases.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-bz666GZcOhXBcCehjFu0sYQyjoYdu7p4kgAxfusbT5VZHdKkPdA1D5LkrFVUBtV87iDOKhmTPP-vYdDiyk6wcnH-oAaX8tnwsZ4OAbXs0mJ34PVfRnhJ-YUaeAU3QmNFGbIhpQTPAx9hrF1EKvPQhUHNpXDiXNflbwv9vmFIsdHLfKPcw2d5SqssCxtLr5Ntco8eZcJ8MsTnoMtzSuO4UwO6oU6kC7utgA0BhTp1rJvfbJoK8V_te22fL_nzkLlq8CyE815_MVu",
    tags: ["Flutter", "Firebase", "Bloc", "REST APIs", "Video Streaming"],
    githubUrl: "https://github.com/HindAlaa26/Edu_vista",
    liveUrl: "#",
    category: "Mobile",
    featured: true,
    videoUrl: "https://www.youtube.com/embed/8MYZqlW_MTo",
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-bz666GZcOhXBcCehjFu0sYQyjoYdu7p4kgAxfusbT5VZHdKkPdA1D5LkrFVUBtV87iDOKhmTPP-vYdDiyk6wcnH-oAaX8tnwsZ4OAbXs0mJ34PVfRnhJ-YUaeAU3QmNFGbIhpQTPAx9hrF1EKvPQhUHNpXDiXNflbwv9vmFIsdHLfKPcw2d5SqssCxtLr5Ntco8eZcJ8MsTnoMtzSuO4UwO6oU6kC7utgA0BhTp1rJvfbJoK8V_te22fL_nzkLlq8CyE815_MVu",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2H6f8GCqdziXmdAsllebyLgoSOeN_MbFEBgfgplocO1s3hNVQ7hnyyP2tbVWJEbMdYrq-ujJINLd5OMttA1ISKQnc3gYUmUom8kPmsJ7c74FslNpH0vZYREpxP5tNrDM4LRMAyeME6FI4vtNSIOyD-ZtoPmLvNscXC_lI73JcBipMm_6E9w7EAJrEGPaDpqAAoALAFgyb8e2SXZHlyCHcBPBj50NVai0Fatgkq4UE7kZdU7NGEeRV_biWkVa6V5QWiInMjVUfYMU"
    ]
  },
  {
    id: "pos-system",
    title: "Point of Sale App",
    description: "High-performance retail terminal with real-time inventory tracking, offline synchronization capabilities, and advanced analytics reporting.",
    longDescription: "This POS application leverages secure local databases and intelligent cache layers to ensure that transactions are never lost, even in completely offline environments. Includes real-time receipt generation, barcode scanning Integration, and comprehensive sales reports.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF2EvS6QDKG95IEVTT3m8ViiMBImVoeAUIzErdDa5plI9OM-NhYzLQyeCgpKAnWFRGT8KZQAXDrqsHE7YHWKNUzhYxouthozhCzeocxfeqlQxV4nUIjBptG_WqPJ_SctOyanCM8Ix7qhI704CxqSqvYbU06EruKc28-C_-b5TZyKoxLObH4VFr0VjctEKdGzaPFB4ZGWb7fyGOmBZmN3mJGs2dPSFDKEjGA2vlUqzKuxsrrlKRt7KCACBZfeRGjSFfgIkoWVoQPPwO",
    tags: ["Flutter", "SQLite", "Cubit", "State Management", "Data Analytics"],
    githubUrl: "https://github.com/HindAlaa26/Point-Of-Sale-App",
    liveUrl: "#",
    category: "Mobile",
    featured: true,
    videoUrl: posVideo,
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF2EvS6QDKG95IEVTT3m8ViiMBImVoeAUIzErdDa5plI9OM-NhYzLQyeCgpKAnWFRGT8KZQAXDrqsHE7YHWKNUzhYxouthozhCzeocxfeqlQxV4nUIjBptG_WqPJ_SctOyanCM8Ix7qhI704CxqSqvYbU06EruKc28-C_-b5TZyKoxLObH4VFr0VjctEKdGzaPFB4ZGWb7fyGOmBZmN3mJGs2dPSFDKEjGA2vlUqzKuxsrrlKRt7KCACBZfeRGjSFfgIkoWVoQPPwO",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvcqnj53Txf4C3GKTXXcN-5LwSYvCI_NxO5H01gqExDbypuSvyj52Fw1GYnktXaicGhgv4wfmfWMhRrgZVULjiPE9rKwizZ1yfyP6z6MWTl6AH-KdK1jEtlPKmAtgvoxJRSbecgeVSzqQf6OXM9IPy3qe3PR9humtbPoSYz9SyoncAgQaaU_fDaw3anba2J_g_waia5WPH-3JrZMUaDGnpdOSYbynj6C2dM_fWsHXthiT_U3Js2UbYLPcYvSDvKwjEL5EYNaDMrFIP"
    ]
  },
  {
    id: "news-app",
    title: "News App",
    description: "A sleek, clean global news aggregator supporting personalized feed configuration, dark mode, and content bookmarking.",
    longDescription: "An elegant, award-winning news client built using Dart and Clean Architecture. It leverages multiple REST endpoints to compile real-time worldwide news, utilizing advanced caching algorithms and beautiful animations to deliver an immersive reading experience.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHJw5GD60jnEOG41NtF4ii6hdnDNzSAEuz6UTvMp9C2sTWOWRa7O8PwrKZRs6NvhzMZ3Kz9qok1UnF8yRyXQDKwjt_4LcFo4GqxQh-pi4LLtq8P9GVuD4NC6jcL-SZ2bBhu3nev_HDa7_GmGa_vUvR6o5CRqLPSic3XZJ72dFnQN6X5dqcJ-4gMNgFCq67wbQon-y9uE9OnrbdMnLKFDlsZUs6y_GAqIw_MVn-z6HtuJ_N5ktHBtar5yNYtYpOfvDMdmAWIOCC6BLZ",
    tags: ["Flutter", "REST APIs", "Provider", "Clean Architecture"],
    githubUrl: "https://github.com/HindAlaa26/News-App",
    liveUrl: "#",
    category: "Mobile",
    featured: false,
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHJw5GD60jnEOG41NtF4ii6hdnDNzSAEuz6UTvMp9C2sTWOWRa7O8PwrKZRs6NvhzMZ3Kz9qok1UnF8yRyXQDKwjt_4LcFo4GqxQh-pi4LLtq8P9GVuD4NC6jcL-SZ2bBhu3nev_HDa7_GmGa_vUvR6o5CRqLPSic3XZJ72dFnQN6X5dqcJ-4gMNgFCq67wbQon-y9uE9OnrbdMnLKFDlsZUs6y_GAqIw_MVn-z6HtuJ_N5ktHBtar5yNYtYpOfvDMdmAWIOCC6BLZ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBP3_xsCsO7RSfpFV2hw3Iu0qsihb8So7SHeVjCyLFc8XP_iHOHtZ_wOOZbeIaigvYUPlY0ttNBJw00SKTWahunSK2DzKOyP53sWqKBCgVl9qeGTxxhiwybNcu_UQf1SKegcif9askm4h_rvslk9wzm3mayyOQueBm7hGjyfjyPj5T125EY6Ldk8kalK6QDNbae7tokPa50bFK_-ARih2r06G-DferhR07L2Q6DW5FNlAuxg3Rsxos9e4xGBgmO1mDESSfxxnu1ZHHF"
    ]
  },
  {
    id: "todo-app",
    title: "Todo App",
    description: "A minimalist daily planner and tasks manager prioritizing productivity, clean gesture interactions, and local caching.",
    longDescription: "Focus Todo combines beautiful micro-interactions with absolute local data safety using Shared Preferences and SQLite databases. Styled with an obsidian-dark glassmorphic theme to match executive workflows.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvcqnj53Txf4C3GKTXXcN-5LwSYvCI_NxO5H01gqExDbypuSvyj52Fw1GYnktXaicGhgv4wfmfWMhRrgZVULjiPE9rKwizZ1yfyP6z6MWTl6AH-KdK1jEtlPKmAtgvoxJRSbecgeVSzqQf6OXM9IPy3qe3PR9humtbPoSYz9SyoncAgQaaU_fDaw3anba2J_g_waia5WPH-3JrZMUaDGnpdOSYbynj6C2dM_fWsHXthiT_U3Js2UbYLPcYvSDvKwjEL5EYNaDMrFIP",
    tags: ["Flutter", "SQLite", "Shared Preferences", "State Management"],
    githubUrl: "https://github.com/HindAlaa26/Todo-App",
    liveUrl: "#",
    category: "Mobile",
    featured: false,
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCvcqnj53Txf4C3GKTXXcN-5LwSYvCI_NxO5H01gqExDbypuSvyj52Fw1GYnktXaicGhgv4wfmfWMhRrgZVULjiPE9rKwizZ1yfyP6z6MWTl6AH-KdK1jEtlPKmAtgvoxJRSbecgeVSzqQf6OXM9IPy3qe3PR9humtbPoSYz9SyoncAgQaaU_fDaw3anba2J_g_waia5WPH-3JrZMUaDGnpdOSYbynj6C2dM_fWsHXthiT_U3Js2UbYLPcYvSDvKwjEL5EYNaDMrFIP",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF2EvS6QDKG95IEVTT3m8ViiMBImVoeAUIzErdDa5plI9OM-NhYzLQyeCgpKAnWFRGT8KZQAXDrqsHE7YHWKNUzhYxouthozhCzeocxfeqlQxV4nUIjBptG_WqPJ_SctOyanCM8Ix7qhI704CxqSqvYbU06EruKc28-C_-b5TZyKoxLObH4VFr0VjctEKdGzaPFB4ZGWb7fyGOmBZmN3mJGs2dPSFDKEjGA2vlUqzKuxsrrlKRt7KCACBZfeRGjSFfgIkoWVoQPPwO"
    ]
  },
  {
    id: "movie-app",
    title: "Movie App",
    description: "A rich catalog browser connecting with TMDb API to present trending cinema, dynamic reviews, and custom watchlists.",
    longDescription: "MovieDB Explorer utilizes custom UI overlays and dark mode aesthetics to deliver a premium theatrical feel. Fully integrated with external movie APIs, complete with smooth category switching and fluid image transitions.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2H6f8GCqdziXmdAsllebyLgoSOeN_MbFEBgfgplocO1s3hNVQ7hnyyP2tbVWJEbMdYrq-ujJINLd5OMttA1ISKQnc3gYUmUom8kPmsJ7c74FslNpH0vZYREpxP5tNrDM4LRMAyeME6FI4vtNSIOyD-ZtoPmLvNscXC_lI73JcBipMm_6E9w7EAJrEGPaDpqAAoALAFgyb8e2SXZHlyCHcBPBj50NVai0Fatgkq4UE7kZdU7NGEeRV_biWkVa6V5QWiInMjVUfYMU",
    tags: ["Flutter", "REST APIs", "Cubit", "TMDb Integration"],
    githubUrl: "https://github.com/HindAlaa26/movie-app",
    liveUrl: "#",
    category: "Mobile",
    featured: false,
    videoUrl: "https://www.youtube.com/embed/GfVnboj8M9Y",
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj2H6f8GCqdziXmdAsllebyLgoSOeN_MbFEBgfgplocO1s3hNVQ7hnyyP2tbVWJEbMdYrq-ujJINLd5OMttA1ISKQnc3gYUmUom8kPmsJ7c74FslNpH0vZYREpxP5tNrDM4LRMAyeME6FI4vtNSIOyD-ZtoPmLvNscXC_lI73JcBipMm_6E9w7EAJrEGPaDpqAAoALAFgyb8e2SXZHlyCHcBPBj50NVai0Fatgkq4UE7kZdU7NGEeRV_biWkVa6V5QWiInMjVUfYMU",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-bz666GZcOhXBcCehjFu0sYQyjoYdu7p4kgAxfusbT5VZHdKkPdA1D5LkrFVUBtV87iDOKhmTPP-vYdDiyk6wcnH-oAaX8tnwsZ4OAbXs0mJ34PVfRnhJ-YUaeAU3QmNFGbIhpQTPAx9hrF1EKvPQhUHNpXDiXNflbwv9vmFIsdHLfKPcw2d5SqssCxtLr5Ntco8eZcJ8MsTnoMtzSuO4UwO6oU6kC7utgA0BhTp1rJvfbJoK8V_te22fL_nzkLlq8CyE815_MVu"
    ]
  },
  {
    id: "xo-game",
    title: "X/O Game",
    description: "An elegant interactive tic-tac-toe game featuring clean, responsive physics-like UI, single-player AI, and multi-player mode.",
    longDescription: "An incredibly responsive client-side puzzle game utilizing custom flutter canvas elements, fluid win-detection animations, and smart single-player mechanics that challenge the user.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP3_xsCsO7RSfpFV2hw3Iu0qsihb8So7SHeVjCyLFc8XP_iHOHtZ_wOOZbeIaigvYUPlY0ttNBJw00SKTWahunSK2DzKOyP53sWqKBCgVl9qeGTxxhiwybNcu_UQf1SKegcif9askm4h_rvslk9wzm3mayyOQueBm7hGjyfjyPj5T125EY6Ldk8kalK6QDNbae7tokPa50bFK_-ARih2r06G-DferhR07L2Q6DW5FNlAuxg3Rsxos9e4xGBgmO1mDESSfxxnu1ZHHF",
    tags: ["Flutter", "Dart", "Game Logic", "UI Animations"],
    githubUrl: "https://github.com/HindAlaa26/X_O-Game",
    liveUrl: "#",
    category: "Games",
    featured: false,
    mockupType: "mobile",
    screenshots: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBP3_xsCsO7RSfpFV2hw3Iu0qsihb8So7SHeVjCyLFc8XP_iHOHtZ_wOOZbeIaigvYUPlY0ttNBJw00SKTWahunSK2DzKOyP53sWqKBCgVl9qeGTxxhiwybNcu_UQf1SKegcif9askm4h_rvslk9wzm3mayyOQueBm7hGjyfjyPj5T125EY6Ldk8kalK6QDNbae7tokPa50bFK_-ARih2r06G-DferhR07L2Q6DW5FNlAuxg3Rsxos9e4xGBgmO1mDESSfxxnu1ZHHF",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHJw5GD60jnEOG41NtF4ii6hdnDNzSAEuz6UTvMp9C2sTWOWRa7O8PwrKZRs6NvhzMZ3Kz9qok1UnF8yRyXQDKwjt_4LcFo4GqxQh-pi4LLtq8P9GVuD4NC6jcL-SZ2bBhu3nev_HDa7_GmGa_vUvR6o5CRqLPSic3XZJ72dFnQN6X5dqcJ-4gMNgFCq67wbQon-y9uE9OnrbdMnLKFDlsZUs6y_GAqIw_MVn-z6HtuJ_N5ktHBtar5yNYtYpOfvDMdmAWIOCC6BLZ"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-msc",
    institution: "Queen's University, Canada",
    degree: "Master of Science (MSc) in Software Development with AI",
    period: "Current Student",
    details: [
      "Deepening academic and practical expertise in advanced Software Development methodologies and artificial intelligence integration.",
      "Expanding knowledge in Cloud Computing, AWS, Docker, Kubernetes, and machine learning architectures while continuing to build modern, native-performance mobile apps."
    ]
  },
  {
    id: "edu-digilians",
    institution: "Digilians",
    degree: "Software Development with AI",
    period: "Completed",
    details: [
      "Comprehensive curriculum focusing on core software engineering practices, algorithmic patterns, and AI-driven workflows.",
      "Designed and deployed interactive mobile prototypes leveraging intelligent APIs and modern clean architectures."
    ]
  },
  {
    id: "edu-bsc",
    institution: "Kafr Elsheikh University",
    department: "Bioinformatics Department, Faculty of Computers and Information",
    degree: "Bachelor of Science in Computers and Information",
    grade: "Very Good with Honors",
    gpa: "3.59 / 4.00",
    period: "Graduated",
    details: [
      "Solid theoretical fundamentals in Algorithm Design, Database Management Systems, Software Architectures, and Object-Oriented Analysis.",
      "Graduation project concentrated on custom algorithms and mobile frameworks with an outstanding grade."
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "exp-gdsc-flutter",
    organization: "Google Developer Student Clubs (GDSC)",
    role: "Flutter Committee Lead",
    period: "2023 - Present",
    details: [
      "Led and mentored a group of over 50 student developers in mobile application concepts using Flutter.",
      "Designed and delivered weekly interactive workshops covering asynchronous Dart operations, REST APIs integration, and advanced state managers like Bloc and Provider.",
      "Orchestrated local mobile application hackathons, building modern community tools."
    ],
    iconName: "smartphone"
  },
  {
    id: "exp-gdsc-uiux",
    organization: "Google Developer Student Clubs (GDSC)",
    role: "UI/UX Committee Member",
    period: "2022 - 2023",
    details: [
      "Created high-fidelity prototypes and established comprehensive glassmorphic design systems in Figma.",
      "Cooperated directly with engineering branches to assure pixel-perfect layout execution and outstanding responsive interfaces across mobile and web."
    ],
    iconName: "palette"
  },
  {
    id: "exp-msp",
    organization: "Microsoft Student Partner (MSP) Tech Club",
    role: "Technical Member",
    period: "2021 - 2022",
    details: [
      "Contributed directly to full-stack tech bootcamps, guiding newcomers on version control systems (Git & GitHub) and basic coding frameworks.",
      "Supported organizing Microsoft Azure and modern web workshops to accelerate tech literacy in student circles."
    ],
    iconName: "groups"
  }
];

export const CERTIFICATIONS: CertificateItem[] = [
  { id: "cert-flutter-adv", title: "Flutter Advanced", issuer: "Udemy", tags: ["Mobile", "State Management"] },
  { id: "cert-flutter-basics", title: "Flutter Basics", issuer: "Google Partner", tags: ["Mobile", "Dart"] },
  { id: "cert-mobile-dev", title: "Mobile Application Development", issuer: "ITI Training", tags: ["Android", "iOS", "Flutter"] },
  { id: "cert-aws-concepts", title: "AWS Concepts", issuer: "Amazon Web Services", tags: ["Cloud", "S3", "EC2"] },
  { id: "cert-docker", title: "Docker Containerization", issuer: "Docker Inc.", tags: ["DevOps", "Microservices"] },
  { id: "cert-k8s", title: "Kubernetes Orchestration", issuer: "Cloud Native Computing Foundation", tags: ["DevOps", "Scaling"] },
  { id: "cert-bus-english", title: "Business English", issuer: "British Council", tags: ["Communication", "Professional"] },
  { id: "cert-employability", title: "Employability Skills", issuer: "Career Development Center", tags: ["Soft Skills", "Leadership"] }
];
