import React from "react";
// import Component
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";

// import router
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
      <Router >
        <Header />
        <AnimRoutes />
      </Router>
  );
};

export default App;
