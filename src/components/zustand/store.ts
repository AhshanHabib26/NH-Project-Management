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
        {
          id: 5,
          name: "Backend API Development",
          description:
            "Create RESTful APIs to handle client-server communication",
          deadline: "2024-05-18",
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
    }),
    {
      name: "tasks-store",
    }
  )
);

export { useStore };
