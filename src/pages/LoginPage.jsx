import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { getUser } from "../Redux/Users/user.actions";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { auth, token } = useSelector((state) => state.userReducer);
  console.log(auth, token);

  if (auth) {
    navigate("/tasks");
  }

  const handleLogin = () => {
    dispatch(getUser({ email, password }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  return (
    <>
      <div className="page-header">Login</div>
      <div className="form-container">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Email address</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className="w-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="off"
              className="w-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
