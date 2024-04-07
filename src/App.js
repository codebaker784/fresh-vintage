import React from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { NavBar, SideBar, Footer } from "./components";
import ConfigureRoutes from "./routes/ConfigureRoutes";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <SideBar />
        <ConfigureRoutes />
        <Footer />
      </Router>
    </>
  );
};

export default App;