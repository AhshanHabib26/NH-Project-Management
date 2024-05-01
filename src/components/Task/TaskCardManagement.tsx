"use client";

import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useStore } from "../zustand/store";
import { Input, Select } from "antd";
import { ITaskProps } from "@/types/types.global";

const TaskCardManagement = () => {
  const { tasks } = useStore();

  const [filteredTasks, setFilteredTasks] = useState<ITaskProps[]>(tasks);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFilterByStatus = (status: string) => {
    setFilteredTasks(tasks.filter((task) => task.status === status));
  };

  const handleSearchQuery = (query: string) => {
    setSearchQuery(query);
    const filtered = tasks.filter(
      (task) =>
        task.name.toLowerCase().includes(query.toLowerCase()) ||
        task.deadline.includes(query) ||
        task.assignee.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
  };

  return (
    <div>
      <div className=" flex items-center justify-between mb-5">
        <div className=" w-1/2">
          <Input
            size="large"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e.target.value)}
            placeholder="Search Here..."
          />
        </div>
        <div>
          <Select
            size="large"
            placeholder= "Filter By Status"
            onChange={(value) => handleFilterByStatus(value)}
            style={{ width: 220 }}
            options={[
              { value: "In Progress", label: "In Progress" },
              { value: "To Do", label: "To Do" },
              { value: "Completed", label: "Completed" },
            ]}
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredTasks.map((task) => (
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
    </div>
  );
};

export default TaskCardManagement;
