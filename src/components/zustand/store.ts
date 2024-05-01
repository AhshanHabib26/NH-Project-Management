import create from "zustand";

interface ITask {
  id: number;
  name: string;
  description: string;
  deadline: string;
  assignee: string;
  status: string;
}

interface IState {
  tasks: ITask[];
}

const useStore = create<IState>((set) => ({
  tasks: [
    {
      id: 1,
      name: "Design Landing Page",
      description: "Create wireframes and mockups for the landing page",
      deadline: "2024-05-15",
      assignee: "Alice Smith",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Implement User Authentication",
      description: "Integrate authentication functionality using JWT",
      deadline: "2024-05-20",
      assignee: "Bob Johnson",
      status: "To Do",
    },
    {
      id: 3,
      name: "Database Schema Design",
      description: "Define database tables and relationships",
      deadline: "2024-05-12",
      assignee: "Charlie Brown",
      status: "Completed",
    },
    {
      id: 4,
      name: "Front-end Development",
      description: "Build user interfaces for main application features",
      deadline: "2024-05-25",
      assignee: "David Lee",
      status: "In Progress",
    },
    {
      id: 5,
      name: "Backend API Development",
      description: "Create RESTful APIs to handle client-server communication",
      deadline: "2024-05-18",
      assignee: "Eva Martinez",
      status: "To Do",
    },
    {
      id: 6,
      name: "Testing and Bug Fixing",
      description: "Conduct unit tests and fix reported bugs",
      deadline: "2024-05-28",
      assignee: "Frank Wilson",
      status: "To Do",
    },
    {
      id: 7,
      name: "Documentation",
      description: "Write user and developer documentation",
      deadline: "2024-05-22",
      assignee: "Grace Adams",
      status: "To Do",
    },
    {
      id: 8,
      name: "Deployment",
      description: "Prepare application for deployment on production server",
      deadline: "2024-05-30",
      assignee: "Henry Wang",
      status: "To Do",
    },
    {
      id: 9,
      name: "User Acceptance Testing",
      description: "Gather feedback from users and make necessary improvements",
      deadline: "2024-05-27",
      assignee: "Ivy Garcia",
      status: "In Progress",
    },
    {
      id: 10,
      name: "Final Review and Sign-off",
      description: "Review the project and obtain approval for deployment",
      deadline: "2024-06-02",
      assignee: "Jack Miller",
      status: "To Do",
    },
  ],
}));

export { useStore };
