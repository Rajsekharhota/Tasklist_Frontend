import React from "react";
import "./index.css";
import AllRoutes from "./routes/AllRoutes";
import NavbarComponent from "./components/Homepage/Navbar/Navbar";

function App() {
  return (
    <div>
      <NavbarComponent />

      <AllRoutes />
    </div>
  );
}

export default App;
