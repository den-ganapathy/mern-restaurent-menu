import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RestoHome from "./components/restoHome/RestoHome";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={RestoHome} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
