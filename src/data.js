// const categories = [
//     { id: 1, name: "development", image: '/development.jpg' },
//     { id: 2, name: "design", image: '/design.jpg' },
//     { id: 3, name: "sales", image: '/sales.jpg' },
// ];

// export default categories

const portfolio = [
  {
    id: 1,
    name: "development",
    description: "Web and software development projects",
    image: "/development.jpg",
    items: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack e-commerce solution",
        image: "/development.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Project management tool",
        image: "/development.jpg",
        technologies: ["Vue.js", "Express", "PostgreSQL"],
      },
    ],
  },
  {
    id: 2,
    name: "design",
    description: "UI/UX and graphic design work",
    image: "/design.jpg",
    items: [
      {
        id: 1,
        title: "Brand Identity",
        description: "Complete brand design system",
        image: "/development.jpg",
        technologies: ["Figma", "Adobe Creative Suite"],
      },
      {
        id: 2,
        title: "Mobile App UI",
        description: "User interface design",
        image: "/development.jpg",
        technologies: ["Sketch", "Principle"],
      },
    ],
  },
  {
    id: 3,
    name: "sales",
    description: "Sales and marketing projects",
    image: "/sales.jpg",
    items: [
      {
        id: 1,
        title: "Marketing Campaign",
        description: "Digital marketing strategy",
        image: "/development.jpg",
        technologies: ["Google Analytics", "Social Media"],
      },
      {
        id: 2,
        title: "Sales Dashboard",
        description: "Analytics and reporting tool",
        image: "/development.jpg",
        technologies: ["Tableau", "Power BI"],
      },
    ],
  },
];

export default portfolio;