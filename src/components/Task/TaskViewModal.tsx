"use client";

import { Modal } from "antd";
import { useStore } from "../zustand/store";
import {
  CalendarDays,
  MessageCircleCode,
  Smile,
  SmilePlus,
  UserRoundPlus,
} from "lucide-react";

interface ITaskModalProps {
  open: boolean;
  taskId: number | null;
  onClose: () => void;
}

const TaskViewModal: React.FC<ITaskModalProps> = ({
  open,
  taskId,
  onClose,
}) => {
  const tasks = useStore((state) => state.tasks);
  const task = tasks.find((task) => task.id === taskId);

  return (
    <div>
      <Modal title={task?.name} open={open}  onCancel={onClose} onOk={onClose}>
        <div>
          <h1 className="text-lg  text-slate-600">{task?.description}</h1>
          <div>
            <div className=" flex items-center justify-between mt-3">
              <div className=" flex items-center">
                <CalendarDays size={18} color="#363636" />
                <p className=" text-lg  text-slate-600 ml-2">
                  {task?.deadline}
                </p>
              </div>
              <div className=" flex items-center">
                <UserRoundPlus size={18} color="#363636" />
                <p className=" text-lg  text-slate-600 ml-2">
                  {task?.assignee}
                </p>
              </div>
              <div className=" flex items-center">
                {task?.status === "To Do" ? (
                  <MessageCircleCode size={18} color="#363636" />
                ) : task?.status === "In Progress" ? (
                  <SmilePlus size={18} color="#363636" />
                ) : (
                  <Smile size={18} color="#363636" />
                )}

                <p
                  className={`${
                    task?.status === "In Progress"
                      ? "text-amber-500"
                      : task?.status === "To Do"
                      ? "text-red-500"
                      : "text-green-700"
                  } text-lg ml-2`}
                >
                  {task?.status}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskViewModal;
