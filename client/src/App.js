import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import FacilityCleaning from "./pages/FacilityCleaning";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
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
          <Route
            exact
            path="/facilityandservices"
            component={FacilityCleaning}
          />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
