import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    let data = await axios.post("http://localhost:4000/user/register", {
      name,
      email,
      password,
    });
    let { message, status } = data.data;
    if (status === 1) {
      //alert(message)
      navigate("/login");
    } else {
      alert(message);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSignup();
  };
  return (
    <>
      <div className="page-header">Signup</div>
      <div className="form-container">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Name</strong>
            </Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter Name"
              className="w-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
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
            Sign up
          </Button>
        </Form>
      </div>
    </>
  );
};

export default SignupPage;
