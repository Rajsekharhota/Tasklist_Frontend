import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteTasks, updateTasks } from "../../Redux/Tasks/task.actions";
import { useDispatch } from "react-redux";

const TasksCard = ({ title, description, _id }) => {
  const dispatch = useDispatch();

  const updateTask = () => {
    dispatch(updateTasks(_id, { title, description }));
  };
  return (
    <>
      <Card
        style={{
          width: "18rem",
          margin: "19px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div>
            <Button onClick={updateTask} className="me-2">
              Update
            </Button>
            <Button
              onClick={() => {
                dispatch(deleteTasks(_id));
              }}
              className="me-2"
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default TasksCard;
