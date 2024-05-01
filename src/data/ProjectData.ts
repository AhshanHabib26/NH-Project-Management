const projectsData = [
  {
    id: 1,
    name: "Website Redesign",
    description:
      "Redesigning the company's website to improve user experience.",
    tasks: [
      {
        id: 101,
        title: "Design Landing Page",
        description: "Create mockups for the landing page.",
        assignee: "John Doe",
        status: "In Progress",
      },
      {
        id: 102,
        title: "Implement Responsive Design",
        description: "Ensure the website layout works well on all devices.",
        assignee: "Jane Smith",
        status: "Completed",
      },
    ],
    teamMembers: [
      {
        id: 201,
        name: "John Doe",
        role: "UI/UX Designer",
      },
      {
        id: 202,
        name: "Jane Smith",
        role: "Frontend Developer",
      },
      {
        id: 203,
        name: "David Johnson",
        role: "Project Manager",
      },
    ],
    recentActivities: [
      {
        id: 301,
        description: "Task 101 assigned to John Doe",
      },
      {
        id: 302,
        description: "Task 102 completed by Jane Smith",
      },
    ],
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Building a new mobile app for iOS and Android platforms.",
    tasks: [
      {
        id: 103,
        title: "Wireframe Creation",
        description: "Create wireframes for the app's user interface.",
        assignee: "Emily Johnson",
        status: "Pending",
      },
      {
        id: 104,
        title: "Backend Development",
        description: "Develop backend APIs to support app functionality.",
        assignee: "Mark Brown",
        status: "In Progress",
      },
    ],
    teamMembers: [
      {
        id: 204,
        name: "Emily Johnson",
        role: "UI/UX Designer",
      },
      {
        id: 205,
        name: "Mark Brown",
        role: "Backend Developer",
      },
      {
        id: 206,
        name: "Sophia Williams",
        role: "iOS Developer",
      },
    ],
    recentActivities: [
      {
        id: 303,
        description: "Task 103 created",
      },
      {
        id: 304,
        description: "Task 104 assigned to Mark Brown",
      },
    ],
  },
  {
    id: 3,
    name: "Product Launch",
    description: "Launching a new product in the market.",
    tasks: [
      {
        id: 105,
        title: "Market Research",
        description: "Conduct market research to identify target audience.",
        assignee: "Alice Johnson",
        status: "Completed",
      },
      {
        id: 106,
        title: "Marketing Strategy",
        description: "Develop marketing strategy for product launch.",
        assignee: "Bob Smith",
        status: "In Progress",
      },
    ],
    teamMembers: [
      {
        id: 207,
        name: "Alice Johnson",
        role: "Marketing Specialist",
      },
      {
        id: 208,
        name: "Bob Smith",
        role: "Marketing Manager",
      },
      {
        id: 209,
        name: "Chris Lee",
        role: "Product Manager",
      },
    ],
    recentActivities: [
      {
        id: 305,
        description: "Market Research completed by Alice Johnson",
      },
      {
        id: 306,
        description: "Marketing Strategy assigned to Bob Smith",
      },
    ],
  },
  {
    id: 4,
    name: "E-commerce Platform Upgrade",
    description:
      "Upgrading the existing e-commerce platform with new features.",
    tasks: [
      {
        id: 107,
        title: "Database Migration",
        description: "Migrate data to the new database schema.",
        assignee: "Michael Brown",
        status: "In Progress",
      },
      {
        id: 108,
        title: "Implement Payment Gateway",
        description: "Integrate a new payment gateway for online transactions.",
        assignee: "Jennifer Davis",
        status: "Pending",
      },
    ],
    teamMembers: [
      {
        id: 210,
        name: "Michael Brown",
        role: "Database Administrator",
      },
      {
        id: 211,
        name: "Jennifer Davis",
        role: "Backend Developer",
      },
      {
        id: 212,
        name: "Daniel Wilson",
        role: "Frontend Developer",
      },
    ],
    recentActivities: [
      {
        id: 307,
        description: "Database Migration started by Michael Brown",
      },
      {
        id: 308,
        description: "Implement Payment Gateway assigned to Jennifer Davis",
      },
    ],
  },
  {
    id: 5,
    name: "Internal Training Program",
    description: "Developing a training program for employees.",
    tasks: [
      {
        id: 109,
        title: "Curriculum Design",
        description: "Design the curriculum for various training modules.",
        assignee: "Sarah Wilson",
        status: "Completed",
      },
      {
        id: 110,
        title: "Content Development",
        description: "Develop content for training materials.",
        assignee: "Kevin Johnson",
        status: "In Progress",
      },
    ],
    teamMembers: [
      {
        id: 213,
        name: "Sarah Wilson",
        role: "Training Specialist",
      },
      {
        id: 214,
        name: "Kevin Johnson",
        role: "Content Developer",
      },
      {
        id: 215,
        name: "Emma White",
        role: "HR Manager",
      },
    ],
    recentActivities: [
      {
        id: 309,
        description: "Curriculum Design completed by Sarah Wilson",
      },
      {
        id: 310,
        description: "Content Development assigned to Kevin Johnson",
      },
    ],
  },
];

export const getAllProjectsData = () => {
  return projectsData;
};
