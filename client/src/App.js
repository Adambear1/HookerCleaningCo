import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FacilityCleaning from "./pages/FacilityCleaning";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/facilitycleaning" component={FacilityCleaning} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
