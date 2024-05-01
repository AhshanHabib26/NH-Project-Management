import {
  CalendarDays,
  MessageCircleCode,
  Smile,
  SmilePlus,
  UserRoundPlus,
} from "lucide-react";
import React from "react";

const data = {
  id: 1,
  name: "Design Landing Page",
  description: "Create wireframes and mockups for the landing page",
  deadline: "2024-05-15",
  assignee: "Alice Smith",
  status: "Done",
};

const TaskCard = () => {
  return (
    <div className=" shadow p-5 rounded-lg">
      <h1 className="text-lg font-semibold text-slate-600">{data.name}</h1>
      <p className="text-lg  text-slate-600">{data.description}</p>
      <div className=" flex items-center justify-between">
        <div className=" flex items-center">
          <CalendarDays size={18} color="#363636" />
          <p className=" text-lg  text-slate-600 ml-2">{data.deadline}</p>
        </div>
        <div className=" flex items-center">
          <UserRoundPlus size={18} color="#363636" />
          <p className=" text-lg  text-slate-600 ml-2">{data.assignee}</p>
        </div>
        <div className=" flex items-center">
          {data.status === "To Do" ? (
            <MessageCircleCode size={18} color="#363636" />
          ) : data.status === "In Progress" ? (
            <SmilePlus size={18} color="#363636" />
          ) : (
            <Smile size={18} color="#363636" />
          )}

          <p
            className={`${
              data.status === "In Progress"
                ? "text-amber-500"
                : data.status === "To Do"
                ? "text-red-500"
                : "text-green-700"
            } text-lg ml-2`}
          >
            {data.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
