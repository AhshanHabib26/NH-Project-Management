"use client";

import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React from "react";
import { ITaskModalProps } from "@/types/types.global";

const TaskModal: React.FC<ITaskModalProps> = ({ open, onClose }) => {
  return (
    <div>
      <Modal
        centered={true}
        title="Add Task"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical">
          <Form.Item
            name="task-name"
            label="Task Name"
            style={{ marginBottom: "8px" }}
          >
            <Input placeholder="Task Name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            style={{ marginBottom: "8px" }}
          >
            <Input placeholder="Description" />
          </Form.Item>
          <Form.Item
            name="deadline"
            label="Deadline"
            style={{ width: "100%", marginBottom: "8px" }}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="assignee"
            label="Assignee"
            style={{ marginBottom: "8px" }}
          >
            <Input placeholder="Assignee" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
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
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskModal;
