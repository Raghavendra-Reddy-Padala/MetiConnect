import { Users, BookOpen, Code, Brain, Target, TrendingUp, MessageSquare, Lightbulb, Book, Globe, Bookmark } from 'lucide-react';

export const mentors = [
  
  {
    id: 1,
    name: " Dr. Jayaprakash Narayan",
    title: "Founder Lok Satta Party",
    company: "Lok Satta Party",
    expertise: ["Politics", "Civils", "Entrepreneurship"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 999,
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/53/Dr._Jayaprakash_Narayan.jpg",
    availability: "Limited availability",
    bio: ""
  },
  {
    id: 3,
    name: "Vamshi Kurapati",
    title: "Founder HashPro",
    company: "HashPro",
    expertise: ["Consultant", "Brand Building", "Entrepreneurship"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 999,
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHzoJOTbxHnLQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725955152062?e=1746662400&v=beta&t=_-39fbzDup_lHE8pYDLWOc4q1dSFmAXy-z02wS1_mHQ",
    availability: "Limited availability",
    bio: "Founder @ HashPro | Consultant | Brand Building | Entrepreneurship | Speaker | Mentor | Startup Advisor | Blockchain | NFT | DeFi | Web3 | DAO | Metaverse"
  },
  {
    id: 2,
    name: "Bhargav Sai",
    title: "Business Analyst",
    company: "People Tech Group",
    expertise: ["Business Analyst", "Scrum Master", " Analytical Problem Solver", "Agile Scrum Business Analyst", "Scrum Master"],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 999,
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQHQBtQF1NLSdg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711138882908?e=1746662400&v=beta&t=wLLTOjSqJrgjbRaMaYNv4ChW15adyqPiRiVVl0SKoBg",
    availability: "Limited availability",
    bio: "🚀 Passionate Agile Scrum Business Analyst & Product Owner🚴‍♂️ Joining forces with People Tech Group, I am currently spearheading an exciting project centered around Electric Bikes and groundbreaking smart clusters for various OEMs. As an Agile Scrum Business Analyst and Scrum Master, I thrive on collaborating with diverse internal cross-functional teams to deliver exceptional results."
  },
 
  {
    id: 4,
    name: "Swathi Rusheetha",
    title: "Entrepreneur",
    company: " Knowvation Learnings",
    expertise: ["entrepreneurship", "Leadership qualitiees", "Business Development"],
    rating: 4.9,
    reviews: 128,
    hourlyRate: 999,
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEFY8nHCHuQvw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729704363274?e=1746662400&v=beta&t=7EPgnvsltqwWIUz1t4Koxzvd3JDlo2EpeBzXdu0vBmQ",
    availability: "Available next week",
    bio: "Founder, CEO @ Knowvation Learnings | Empowering the Future Innovators…Founder, CEO @ Knowvation Learnings | Empowering the Future Innovators with Tech Education | Community of Tech Enthusiast"
  },
  {
    id: 5,
    name: "Karthik Nagapuri ",
    title: "AI Engineer",
    company: "EvolveX",
    expertise: ["AI Enginnering", "Startup Founder", "entrepreneurship"],
    rating: 4.8,
    reviews: 95,
    hourlyRate: 999,
    imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQFSbAXjIvCXtQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711258537681?e=1746662400&v=beta&t=VEE23rgkwXNoZcQ3l6qUizk89EFxDuHW4S2tKD74HxM",
    availability: "Available tomorrow",
    bio: "Building EvolveX | Jagriti Yatra | AI Engineer"
  },
  {
    id: 6,
    name: "Madhulash Babu",
    title: "Director at EDODWAJA ",
    company: "EDODWAJA ",
    expertise: ["Entrepreneur ", "Innovator ", ""],
    rating: 4.9,
    reviews: 156,
    hourlyRate: 499,
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGrTkeosK28gA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1697140033615?e=1746662400&v=beta&t=kDN2PNSU5oA84OH89Ni9UIFdcwnFJgi_iDAEYMhG8DU",
    availability: "Limited availability",
    bio: "As the founder and CEO of Edodwaja, I am on a mission to revolutionize the way students learn in India. Our innovative Lab on Wheels concept brings fully equipped futuristic labs to schools and colleges, making learning more accessible and engaging for students.Prior to starting Edodwaja, I pursued a Bachelor of Technology degree and MBA However, my passion for education and my desire to make a difference led me pursue entrepreneurship."
  }
];

export const categories = [
  {
    id: 1,
    name: "Software Development",
    icon: Code,
    count: 450
  },
  {
    id: 2,
    name: "Data Science",
    icon: Brain,
    count: 280
  },
  {
    id: 3,
    name: "UX/UI Design",
    icon: Target,
    count: 320
  },
  {
    id: 4,
    name: "Product Management",
    icon: TrendingUp,
    count: 180
  },
  {
    id: 5,
    name: "Business Strategy",
    icon: BookOpen,
    count: 220
  }
];

export const communities = [
  {
    id: 'web-dev',
    name: 'Web Development',
    members: 1583,
    description: 'A community for web developers to share knowledge and resources.',
    topics: ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'],
    icon: Code,
    activeDiscussions: 42,
    weeklyMeetups: true
  },
  {
    id: 'data-science',
    name: 'Data Science',
    members: 1247,
    description: 'Discuss data science techniques, share projects, and learn together.',
    topics: ['Python', 'Machine Learning', 'Data Visualization', 'Statistics'],
    icon: Bookmark,
    activeDiscussions: 35,
    weeklyMeetups: true
  },
  {
    id: 'system-design',
    name: 'System Design',
    members: 982,
    description: 'Learn about designing scalable systems and architecture patterns.',
    topics: ['Architecture', 'Scalability', 'Databases', 'Cloud'],
    icon: Users,
    activeDiscussions: 28,
    weeklyMeetups: false
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    members: 864,
    description: 'Everything about cloud platforms, infrastructure, and deployment.',
    topics: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker'],
    icon: Globe,
    activeDiscussions: 31,
    weeklyMeetups: false
  },
  {
    id: 'devops',
    name: 'DevOps & CI/CD',
    members: 753,
    description: 'Discuss DevOps practices, CI/CD pipelines, and automation tools.',
    topics: ['CI/CD', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible'],
    icon: Book,
    activeDiscussions: 24,
    weeklyMeetups: true
  },
  {
    id: 'product-management',
    name: 'Product Management',
    members: 689,
    description: 'Share insights on product development, user research, and roadmapping.',
    topics: ['Agile', 'User Stories', 'Roadmapping', 'UX Research'],
    icon: Lightbulb,
    activeDiscussions: 19,
    weeklyMeetups: false
  }
];

export const mockAnalytics = {
  sessionStats: {
    totalSessions: 156,
    completionRate: 94,
    averageRating: 4.8,
    totalHours: 234
  },
  revenueStats: {
    totalRevenue: 12580,
    monthlyGrowth: 15,
    averageSessionPrice: 85,
    topEarningTopic: "System Design"
  },
  learningProgress: {
    completedMilestones: 12,
    activeCourses: 3,
    skillsImproved: 8,
    nextMilestone: "Advanced System Design"
  },
  popularTopics: [
    { name: "React", sessions: 45 },
    { name: "System Design", sessions: 38 },
    { name: "Machine Learning", sessions: 32 },
    { name: "Cloud Architecture", sessions: 28 }
  ]
};

export const mockUsers = {
  mentors: [
    {
      email: "mentor@example.com",
      password: "mentor123",
      role: "mentor",
      name: "David Chen",
      title: "Senior Software Engineer",
      expertise: ["React", "System Design", "JavaScript"],
      yearsOfExperience: 10
    }
  ],
  mentees: [
    {
      email: "mentee@example.com",
      password: "mentee123",
      role: "mentee",
      name: "Alex Johnson",
      interests: ["Web Development", "Machine Learning"],
      level: "Intermediate"
    }
  ]
};

export const upcomingSessions = [
  {
    id: 1,
    mentorName: "Dr. Sarah Chen",
    topic: "Introduction to Neural Networks",
    date: "2024-03-25T14:00:00",
    duration: 60,
    status: "scheduled"
  },
  {
    id: 2,
    mentorName: "James Wilson",
    topic: "System Design Interview Prep",
    date: "2024-03-26T10:00:00",
    duration: 90,
    status: "scheduled"
  }
];