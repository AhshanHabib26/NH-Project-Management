import React from "react";
import { useStore } from "../zustand/store";
import { handleDragNDropUtilityFunc } from "@/utils/actions/handleDragNDrop";

const DragStatusButton = () => {
  const { handleDrop } = useStore();
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragDrop = (
    e: React.DragEvent<HTMLDivElement>,
    newStatus: string
  ) => {
    handleDragNDropUtilityFunc(e, newStatus, handleDrop);
  };

  return (
    <div className="mt-12">
      <h1 className="text-center text-lg my-5 pb-1 text-slate-500 font-semibold italic border-b border-dashed border-orange-200 select-none">
        To Change Task Status Then Drag and Place it on The Desaire Button
      </h1>
      <div className=" grid grid-cols-3 gap-5 max-w-6xl mx-auto">
        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, "To Do")}
          data-status="To Do"
        >
          <h1 className=" border bg-red-500 text-xl text-center text-white p-3 rounded-md select-none">
            To Do
          </h1>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, "In Progress")}
          data-status="In Progress"
        >
          <h1 className=" border bg-orange-500 text-xl text-center text-white p-3 rounded-md select-none">
            In Progress
          </h1>
        </div>

        <div
          onDragOver={handleDragOver}
          onDrop={(e) => handleDragDrop(e, "Done")}
          data-status="Done"
        >
          <h1 className=" border bg-green-600 text-xl text-center text-white p-3 rounded-md select-none">
            Done
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DragStatusButton;
