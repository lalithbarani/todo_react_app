import React, { useState } from "react";
import { Modal, Button } from "antd";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
console.log("t",todos);
  const addTodo = (todo) => {
    if (!todo.name || !todo.description || !todo.date) return;
    setTodos([todo, ...todos]);
    setIsModalOpen(false); // Close the modal after adding a task
  };

  const removeTodo = (id) => {
    const removeArray = todos.filter((todo) => todo.id !== id);
    setTodos(removeArray);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.name || !newValue.description || !newValue.date) return;
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <section className="main-container">
      <h1 className="todolist-header">
        TODO List
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          style={{ marginLeft: "10px" }}
        >
          Add Task
        </Button>
      </h1>
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <Modal
        title="Add New Task"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <TodoForm onSubmit={addTodo} />
      </Modal>
    </section>
  );
};

export default Todo;
