"use client"

import React from "react";
import TaskCard from "./TaskCard";
import { useStore } from "../zustand/store";

const TaskCardManagement = () => {
  const { tasks } = useStore();


  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          deadline={task.deadline}
          assignee={task.assignee}
          status={task.status}
        />
      ))}
    </div>
  );
};

export default TaskCardManagement;
