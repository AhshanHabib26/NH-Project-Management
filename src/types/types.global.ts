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