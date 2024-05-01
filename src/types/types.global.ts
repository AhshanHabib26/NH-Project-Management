export type TProjectDataType = {
  id: number;
  name: string;
  description: string;
  tasks: {
    id: number;
    title: string;
    description: string;
    assignee: string;
    status: string;
  }[];
  teamMembers: {
    id: number;
    name: string;
    role: string;
  }[];
  recentActivities: {
    id: number;
    description: string;
  }[];
};

export interface ITaskProps {
  id: number;
  name: string;
  description: string;
  deadline: string;
  assignee: string;
  status: string;
}

export interface ITaskModalProps {
  open: boolean;
  taskId?: number | null;
  onClose: () => void;
}
