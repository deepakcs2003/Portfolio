import React, { useState, useEffect } from 'react';
import { Code2, Globe, ExternalLink, Github, Calendar, Clock, Tag, CheckSquare, ArrowRight, Layers, Hammer, Eye } from 'lucide-react';

const websiteProjects = [
  {
    name: "DeepShop",
    type: "E-Commerce Platform",
    date: "Jan 2024",
    link: "https://deep-shop.vercel.app",
    description: "A full-stack electronic shopping application with comprehensive admin controls and secure payment processing",
    functionality: [
      "User authentication and role-based access control",
      "Product management and catalog browsing",
      "Shopping cart and checkout system",
      "Secure payment processing integration"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    features: [
      "Admin dashboard for user management",
      "Product upload and editing",
      "User role management",
      "Secure checkout process"
    ],
    category: "E-commerce"
  },
  {
    name: "Hisab",
    type: "Expense Tracker",
    date: "Aug 2024",
    link: "https://hisab-theta.vercel.app/",
    description: "Real-time expense tracking application with comprehensive dashboard and user management",
    functionality: [
      "Monthly expense tracking",
      "User account management",
      "Daily payment entry system",
      "Real-time data updates"
    ],
    technologies: ["React", "Firebase", "Redux", "Material-UI", "Node.js", "MongoDB", "Express"],
    features: [
      "Interactive dashboard",
      "Expense analytics",
      "Multi-user support",
      "Secure authentication"
    ],
    category: "Finance"
  },
  {
    name: "TaskMaster Pro",
    type: "Task Management System",
    date: "Mar 2024",
    link: "#",
    github: "https://github.com/deepakcs2003",
    description: "A sophisticated task management platform with rich features for personal productivity",
    functionality: [
      "JWT-based authentication system",
      "Complete task CRUD operations",
      "Advanced filtering and categorization",
      "Priority management system"
    ],
    technologies: ["React", "Node.js", "JWT", "TailwindCSS", "Redux"],
    features: [
      "Dynamic task status updates",
      "Priority levels (High/Medium/Low)",
      "Category-based organization",
      "Due date tracking and reminders",
      "Drag-and-drop task management"
    ],
    category: "Productivity"
  },
  {
    name: "BlogVerse",
    type: "Blogging Platform",
    date: "Feb 2024",
    link: "#",
    github: "https://github.com/deepakcs2003",
    description: "An interactive blogging platform with rich text editing and real-time comments",
    functionality: [
      "Secure user authentication",
      "Blog post CRUD operations",
      "Real-time commenting system",
      "Rich text editor integration"
    ],
    technologies: ["React", "Node.js", "MongoDB","Express", "JWT"],
    features: [
      "Markdown support",
      "Real-time notifications",
      "Social sharing integration",
      "User profile customization",
      "Content categorization"
    ],
    category: "Social"
  }
];

const mobileProjects = [
  {
    name: "Club_Connect",
    type: "College Club Management",
    date: "2024",
    github: "https://github.com/deepakcs2003",
    link:"https://expo.dev/accounts/wce/projects/wce-club-connect/builds/2b320224-6ae4-4e1d-85b8-bfa0dc302dc2",
    description: "Mobile application for streamlining college club event management and publicity",
    functionality: [
      "Event management system",
      "Role-based access control",
      "Club information portal",
      "Event scheduling and tracking"
    ],
    technologies: ["React Native", "Redux Toolkit", "Firebase", "Express"],
    features: [
      "Club details and events viewing",
      "Role-based navigation",
      "Real-time updates",
      "Event organization tools"
    ],
    category: "Education"
  }
];

const AnimatedTag = ({ children }) => {
  return (
    <span className="px-4 py-2 bg-[#374151] text-[#D1D5DB] rounded-full text-sm transform hover:scale-105 hover:bg-[#4F46E5] transition-all duration-300 cursor-default hover:shadow-glow flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-[#4F46E5]"></span>
      {children}
    </span>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        activeTab === id 
          ? 'bg-[#4F46E5] text-white shadow-glow' 
          : 'text-[#9CA3AF] hover:text-white'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  return (
    <div 
      className={`transform transition-all duration-700 w-full ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#1F2937] rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-[#374151] group hover:border-[#4F46E5] overflow-hidden">
        {/* Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4F46E5] to-[#A855F7]"></div>

        {/* Main Content */}
        <div className="p-8">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-white group-hover:text-[#4F46E5] transition-colors">
                  {project.name}
                </h3>
                <span className="px-3 py-1 bg-[#4F46E5]/20 text-[#4F46E5] rounded-full text-sm font-semibold">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-4 text-[#9CA3AF]">
                <span className="flex items-center gap-2 text-sm">
                  <Calendar size={14} className="text-[#4F46E5]" />
                  {project.date}
                </span>
                <span className="flex items-center gap-2 text-sm">
                  <Tag size={14} className="text-[#4F46E5]" />
                  {project.type}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  className="p-2 rounded-lg bg-[#374151] text-[#A855F7] hover:text-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  aria-label="View GitHub Repository"
                >
                  <Github size={24} />
                </a>
              )}
              {project.link && (
                <a 
                  href={project.link} 
                  className="p-2 rounded-lg bg-[#374151] text-[#A855F7] hover:text-[#4F46E5] transition-all duration-300 hover:scale-105 hover:shadow-glow"
                  aria-label="View Live Project"
                >
                  <ExternalLink size={24} />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Expand Button */}
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#374151] text-[#D1D5DB] hover:text-white transition-all duration-300 hover:bg-[#4F46E5] hover:shadow-glow"
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'Show less' : 'View details'}
            <ArrowRight size={16} className={`transform transition-transform duration-300 group-hover/btn:translate-x-1 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>

          {/* Expandable Content */}
          <div className={`grid transition-all duration-500 ease-in-out ${
            isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0'
          }`}>
            <div className="overflow-hidden">
              {/* Tabs */}
              <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                <TabButton id="features" label="Features" icon={CheckSquare} />
                <TabButton id="tech" label="Technologies" icon={Hammer} />
                <TabButton id="details" label="Core Details" icon={Layers} />
              </div>

              {/* Tab Content */}
              <div className="bg-[#1a1a1a]/50 rounded-lg p-6">
                {activeTab === 'features' && (
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#9CA3AF] hover:text-white transition-colors group/item">
                        <CheckSquare size={20} className="mt-1 text-[#4F46E5] group-hover/item:text-[#A855F7] transition-colors" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'tech' && (
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <AnimatedTag key={index}>{tech}</AnimatedTag>
                    ))}
                  </div>
                )}

                {activeTab === 'details' && (
                  <ul className="space-y-3">
                    {project.functionality.map((func, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#9CA3AF] hover:text-white transition-colors group/item">
                        <Layers size={20} className="mt-1 text-[#4F46E5] group-hover/item:text-[#A855F7] transition-colors" />
                        <span>{func}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const allProjects = [...websiteProjects, ...mobileProjects];

  const filteredProjects = activeFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category.toLowerCase() === activeFilter);

  const categories = ['all', ...new Set(allProjects.map(p => p.category.toLowerCase()))];

  return (
    <div className="min-h-screen bg-[#000000] text-white p-4 mt-10 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#4F46E5] to-[#A855F7] text-transparent bg-clip-text animate-gradient">
            Projects Portfolio
          </h1>
          <p className="text-[#9CA3AF] text-lg">
            Explore my recent development projects
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-[#4F46E5] text-white shadow-glow'
                  : 'bg-[#374151] text-[#D1D5DB] hover:bg-[#4F46E5] hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS
const style = `
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
  }

  .shadow-glow {
    box-shadow: 0 0 15px rgba(79, 70, 229, 0.3);
  }
`;

export default Projects;