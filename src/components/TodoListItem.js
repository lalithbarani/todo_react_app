import React from "react";
import { Collapse, Row, Col, Space, Typography } from "antd";
import TodoForm from "./TodoForm";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import './Todo.css'; // Assuming you have CSS for styling

const { Panel } = Collapse;
const { Text } = Typography;

function TodoListItem({
  todo,
  completeTodo,
  removeTodo,
  submitUpdate,
  edit,
  setEdit,
}) {
  const customPanelHeader = (
    <Row justify="space-between" align="middle" style={{ width: '100%' }}>
      <Col>
        <Text style={{ textDecoration: todo.isComplete ? "line-through" : "none" }}>
          {todo.name}
        </Text>
      </Col>
      <Col>
        <Space>
          <RiCheckboxBlankCircleLine
            onClick={() => completeTodo(todo.id)}
            style={{ color: todo.isComplete ? "green" : "grey", cursor: "pointer" }}
          />
          <MdModeEditOutline
            onClick={() => setEdit({ id: todo.id, date: todo.date, name: todo.name, description: todo.description })}
            style={{ cursor: "pointer" }}
          />
          <MdDeleteOutline
            onClick={() => removeTodo(todo.id)}
            style={{ cursor: "pointer" }}
          />
        </Space>
      </Col>
    </Row>
  );

  return (
    <Collapse style={{ marginBottom: 16 }}>
      <Panel header={customPanelHeader} key="1">
        <div className="todo-item">
          {edit.id === todo.id ? (
            <TodoForm edit={edit} onSubmit={submitUpdate} />
          ) : (
            <Space direction="vertical">
              <p>{todo.description}</p>
              <p>{todo.date}</p>
            </Space>
          )}
        </div>
      </Panel>
    </Collapse>
  );
}

TodoListItem.defaultProps = {
  edit: { id: null, date: '', name: '', description: '' },
};

export default TodoListItem;
