import create from "zustand";
import { persist } from "zustand/middleware";

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

export type Actions = {
  addTask: (newTask: ITask) => void;
};

export type StoreType = IState & Actions;

const useStore = create<StoreType>()(
  persist(
    (set) => ({
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
      ],
      addTask: (newTask) => {
        set((state) => {
          return { tasks: [...state.tasks, newTask] };
        });
      },
    }),
    {
      name: "tasks-store",
    }
  )
);

export { useStore };
