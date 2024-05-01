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

const TaskCard: React.FC<ITaskProps> = ({
  id,
  name,
  description,
  deadline,
  assignee,
  status,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null);

  const handleTaskView = (taskId: number) => {
    setSelectedTaskId(taskId);
    setIsModalOpen(true);
  };

  return (
    <div className=" shadow border border-gray-200 p-5 rounded-lg">
      <h1 className="text-lg font-semibold text-slate-600">{name}</h1>
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
        <Eye size={20} onClick={() => handleTaskView(id)} />
        <SquarePen size={20} className="mx-3" />
        <Trash2 size={20} />
      </div>
      <TaskViewModal
        open={isModalOpen}
        taskId={selectedTaskId}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TaskCard;
