import React, { useState } from "react";
import { List, Typography, Divider } from "antd";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    date: '',
    name: '',
    description: '',
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      date: '',
      name: '',
      description: '',
    });
  };

  const pendingTodo = [];
  const completedTodo = [];
  todos.forEach((item) => {
    if (item.isComplete) {
      completedTodo.push(item);
    } else {
      pendingTodo.push(item);
    }
  });

  return (
    <div className="todo-list">
      <div className="todo-section">
        <Typography.Title level={4}>Pending Tasks</Typography.Title>
        <List
          locale={{ emptyText: "Todo list is empty" }}
          dataSource={pendingTodo}
          renderItem={(todo, index) => (
            <TodoListItem
              key={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              submitUpdate={submitUpdate}
              edit={edit}
              setEdit={setEdit}
            />
          )}
        />
      </div>

      {completedTodo.length > 0 && (
        <div className="todo-section">
          <Typography.Title level={4}>Completed Tasks</Typography.Title>
          <Divider />
          <List
            dataSource={completedTodo}
            renderItem={(todo, index) => (
              <TodoListItem
                key={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default TodoList;
