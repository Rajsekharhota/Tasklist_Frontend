import React, { useState } from "react";
import "./Styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { createTasks } from "../Redux/Tasks/task.actions";

const Homepage = () => {
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState({
    title: "",
    description: "",
  });

  const createTaskHandle = (e) => {
    const { name, value } = e.target;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createTasks(tasks));
    setTasks({ title: "", description: "" });
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title..."
            value={tasks.title}
            onChange={createTaskHandle}
            name="title"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description..."
            value={tasks.description}
            onChange={createTaskHandle}
            name="description"
          />
        </Form.Group>
        <Button variant="success" type="submit">
          create
        </Button>
      </Form>
    </div>
  );
};

export default Homepage;
