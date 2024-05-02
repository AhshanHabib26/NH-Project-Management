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
  updateStatus: (id: number, newStatus: string) => void;
  deleteTask: (id: number) => void;
  handleDrop: (taskId: number, newStatus: string) => void;
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
          deadline: "April 15th 2024",
          assignee: "Alice Smith",
          status: "In Progress",
        },
        {
          id: 2,
          name: "Implement User Authentication",
          description: "Integrate authentication functionality using JWT",
          deadline: "April 20th 2024",
          assignee: "Bob Johnson",
          status: "To Do",
        },
        {
          id: 3,
          name: "Database Schema Design",
          description: "Define database tables and relationships",
          deadline: "March 13th 2024",
          assignee: "Charlie Brown",
          status: "Done",
        },
        {
          id: 4,
          name: "Front-end Development",
          description: "Build user interfaces for main application features",
          deadline: "May 25th 2024",
          assignee: "David Lee",
          status: "In Progress",
        },
        {
          id: 5,
          name: "Backend API Development",
          description:
            "Create RESTful APIs to handle client-server communication",
          deadline: "January 5th 2024",
          assignee: "Eva Martinez",
          status: "To Do",
        },
      ],
      addTask: (newTask) => {
        set((state) => {
          return { tasks: [...state.tasks, newTask] };
        });
      },
      updateStatus: (id, newStatus) => {
        set((state) => {
          const updatedTasks = state.tasks.map((task) => {
            if (task.id === id) {
              return { ...task, status: newStatus };
            }
            return task;
          });

          return { tasks: updatedTasks };
        });
      },
      deleteTask: (id) => {
        set((state) => {
          const updatedTask = state.tasks.filter((task) => task.id !== id);
          return { tasks: updatedTask };
        });
      },
      handleDrop: (taskId, newStatus) => {
        set((state) => {
          const updatedTasks = state.tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, status: newStatus };
            }
            return task;
          });

          return { tasks: updatedTasks };
        });
      },
    }),
    {
      name: "tasks-store",
    }
  )
);

export { useStore };
