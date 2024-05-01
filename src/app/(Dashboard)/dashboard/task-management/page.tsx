import TaskCard from "@/components/Task/TaskCard";
import React from "react";

const TaskManagementPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Task Management</h1>
      <TaskCard />
    </div>
  );
};

export default TaskManagementPage;
