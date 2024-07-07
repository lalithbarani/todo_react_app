import React from "react";
import { Form, Input, DatePicker, Button } from "antd";

const TodoForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit({
      id: Date.now(),
      ...values,
      date: values.date.format('YYYY-MM-DD'), // Format the date to a string
      isComplete: false,
    });
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="date"
        rules={[{ required: true, message: "Please select a date!" }]}
      >
        <DatePicker placeholder="Select Date" />
      </Form.Item>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input the task name!" }]}
      >
        <Input placeholder="Task Name" />
      </Form.Item>
      <Form.Item
        name="description"
        rules={[{ required: true, message: "Please input the task description!" }]}
      >
        <Input.TextArea placeholder="Task Description" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
