"use client";

import { ITaskProps } from "@/types/types.global";
import {
  CalendarDays,
  Eye,
  MessageCircleCode,
  Smile,
  SmilePlus,
  SquarePen,
  Trash2,
  UserRoundPlus,
} from "lucide-react";
import React, { useState } from "react";
import TaskViewModal from "./TaskViewModal";
import TaskStatusUpdateModal from "./TaskStatusUpdateModal";
import { useStore } from "../zustand/store";
import { Tooltip } from "antd";

const TaskCard: React.FC<ITaskProps> = ({
  id,
  name,
  deadline,
  assignee,
  status,
}) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isStatusUpdateModalOpen, setIsStatusUpdateModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);
  const { deleteTask, handleDrop } = useStore();

  const handleTaskView = (taskId: number) => {
    setSelectedTaskId(taskId);
    setIsViewModalOpen(true);
  };

  const handleTaskStatusUpdate = (taskId: number) => {
    setIsStatusUpdateModalOpen(true);
    setSelectedTaskId(taskId);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("taskId", id.toString());
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);
    handleDrop(taskId, "Done");
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDragDrop}
      className=" shadow border border-gray-200 p-5 rounded-lg"
    >
      <Tooltip title="Grab and Move To Change Status" color="purple-inverse" key="blue">
        <h1 className="text-lg font-semibold text-slate-600 cursor-grab">
          {name}
        </h1>
      </Tooltip>
      <div className=" flex items-center justify-between mt-3">
        <div className=" flex items-center">
          <CalendarDays size={18} color="#363636" />
          <p className=" text-lg  text-slate-600 ml-2">{deadline}</p>
        </div>
        <div className=" flex items-center">
          <UserRoundPlus size={18} color="#363636" />
          <p className=" text-lg  text-slate-600 ml-2">{assignee}</p>
        </div>
        <div className=" flex items-center">
          {status === "To Do" ? (
            <MessageCircleCode size={18} color="#363636" />
          ) : status === "In Progress" ? (
            <SmilePlus size={18} color="#363636" />
          ) : (
            <Smile size={18} color="#363636" />
          )}

          <p
            className={`${
              status === "In Progress"
                ? "text-amber-500"
                : status === "To Do"
                ? "text-red-500"
                : "text-green-700"
            } text-lg ml-2`}
          >
            {status}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end mt-5 cursor-pointer">
        <Tooltip title="Preview Task" color="blue" key="blue">
          <Eye size={20} onClick={() => handleTaskView(id)} />
        </Tooltip>

        <Tooltip title="Update Task Status" color="orange" key="blue">
          <SquarePen
            size={20}
            className="mx-3"
            onClick={() => handleTaskStatusUpdate(id)}
          />
        </Tooltip>

        <Tooltip title="Delete Task" color="red" key="blue">
          <Trash2 size={20} onClick={() => deleteTask(id)} />
        </Tooltip>
      </div>
      <TaskViewModal
        open={isViewModalOpen}
        taskId={selectedTaskId}
        onClose={() => setIsViewModalOpen(false)}
      />
      <TaskStatusUpdateModal
        open={isStatusUpdateModalOpen}
        taskId={selectedTaskId}
        onClose={() => setIsStatusUpdateModalOpen(false)}
      />
    </div>
  );
};

export default TaskCard;
