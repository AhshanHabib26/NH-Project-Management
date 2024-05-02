export const handleDragNDropUtilityFunc = (
  e: React.DragEvent<HTMLDivElement>,
  newStatus: string,
  handleDrop: (taskId: number, status: string) => void
) => {
  e.preventDefault();
  const taskId = parseInt(e.dataTransfer.getData("taskId"), 10);
  const status = e.currentTarget.getAttribute("data-status");
  handleDrop(taskId, status || newStatus);
};
