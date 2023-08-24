import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../Redux/Users/user.actions";
const NavbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.userReducer);
  const handleLogout = () => {
    dispatch(logoutUser(navigate)); // Dispatch the logout action
  };
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" className="header">
        <Container>
          <Navbar.Brand
            href="#home"
            onClick={() => {
              navigate("/");
            }}
          >
            Task App
          </Navbar.Brand>
          <div className="float-right">
            {auth ? (
              <>
                <Button className="me-3 nav-buttons" onClick={handleLogout}>
                  Logout
                </Button>
                <Button
                  className="me-3 nav-buttons"
                  onClick={() => {
                    navigate("/tasks");
                  }}
                >
                  All Tasks
                </Button>
              </>
            ) : (
              <>
                <Button
                  className="me-3 nav-buttons"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
                <Button
                  className="me-3 nav-buttons"
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Signup
                </Button>
              </>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
