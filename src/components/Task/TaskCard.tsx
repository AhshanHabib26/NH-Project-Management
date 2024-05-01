import {
  CalendarDays,
  MessageCircleCode,
  Smile,
  SmilePlus,
  UserRoundPlus,
} from "lucide-react";
import React from "react";

// const data = {
//   id: 1,
//   name: "Design Landing Page",
//   description: "Create wireframes and mockups for the landing page",
//   deadline: "2024-05-15",
//   assignee: "Alice Smith",
//   status: "Done",
// };

interface ITaskProps {
  id: number;
  name: string;
  description: string;
  deadline: string;
  assignee: string;
  status: string;
}

const TaskCard: React.FC<ITaskProps> = ({
  name,
  description,
  deadline,
  assignee,
  status,
}) => {
  return (
    <div className=" shadow border border-gray-200 p-5 rounded-lg">
      <h1 className="text-lg font-semibold text-slate-600">{name}</h1>
      <p className="text-lg  text-slate-600">{description}</p>
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
    </div>
  );
};

export default TaskCard;
