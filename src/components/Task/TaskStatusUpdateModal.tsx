import { ITaskModalProps } from "@/types/types.global";
import { Button, Form, Modal, Select } from "antd";
import React, { useState } from "react";
import { useStore } from "../zustand/store";

const TaskStatusUpdateModal: React.FC<ITaskModalProps> = ({
  open,
  taskId,
  onClose,
}) => {
  const [status, setStatus] = useState<string | undefined>(undefined);
  const { updateStatus } = useStore();

  const handleSubmit = (values: any) => {
    console.log(values);
    if (taskId !== null && taskId !== undefined) {
      updateStatus(taskId, values.status);
    }
    onClose();
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  return (
    <div>
      <Modal
        centered={true}
        title="Status Update"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="status" style={{ marginBottom: "8px" }}>
            <Select
              placeholder="Select status"
              onChange={handleStatusChange}
              value={status}
            >
              <Select.Option value="To Do">To Do</Select.Option>
              <Select.Option value="In Progress">In Progress</Select.Option>
              <Select.Option value="Done">Done</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item style={{ marginBottom: "8px", marginTop: "15px" }}>
            <Button type="primary" htmlType="submit">
              Update Status
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskStatusUpdateModal;
