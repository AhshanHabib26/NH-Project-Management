"use client";

import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import React, { useState } from "react";
import { ITaskModalProps } from "@/types/types.global";
import { Moment } from "moment";
import { useStore } from "../zustand/store";

const TaskModal: React.FC<ITaskModalProps> = ({ open, onClose }) => {
  const { tasks, addTask } = useStore();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Moment | null>(null);
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState<string | undefined>(undefined);

  const handleSubmit = (values: any) => {
    if (deadline) {
      const formattedDeadline = deadline.format("MMMM Do YYYY");
      const updatedValues = {
        ...values,
        id: tasks.length + 1,
        deadline: formattedDeadline,
      };
      addTask(updatedValues);
    }
    onClose();
  };

  const handleDateChange = (date: Moment | null) => {
    setDeadline(date);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
  };

  return (
    <div>
      <Modal
        centered={true}
        title="Add Task"
        open={open}
        onCancel={onClose}
        footer={null}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            label="Task Name"
            style={{ marginBottom: "8px" }}
          >
            <Input
              placeholder="Task Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            style={{ marginBottom: "8px" }}
          >
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="deadline"
            label="Deadline"
            style={{ width: "100%", marginBottom: "8px" }}
          >
            <DatePicker
              style={{ width: "100%" }}
              value={deadline}
              onChange={handleDateChange}
            />
          </Form.Item>
          <Form.Item
            name="assignee"
            label="Assignee"
            style={{ marginBottom: "8px" }}
          >
            <Input
              placeholder="Assignee"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            style={{ marginBottom: "8px" }}
          >
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
              Add Task
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TaskModal;
