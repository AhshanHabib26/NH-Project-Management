import { ITaskModalProps } from "@/types/types.global";
import { Button, Form, Modal, Select } from "antd";
import React from "react";

const TaskStatusUpdateModal: React.FC<ITaskModalProps> = ({
  open,
  taskId,
  onClose,
}) => {
  return (
    <div>
      <Modal
        centered={true}
        title="Status Update"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item
            name="status"
            style={{ marginBottom: "8px" }}
          >
            <Select placeholder="Select status">
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
