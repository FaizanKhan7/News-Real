import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./science.module.css";
import Header from "../Header/header";
class ScienceNews extends Component {
  render() {
    return (
      <>
        <Header />
        <div className={styles.scienceStyle}>
          <h1> hello science </h1>
        </div>
      </>
    );
  }
}

function ScienceRoutes() {
  return (
    <Switch>
      <Route path="/science" exact component={ScienceNews} />
    </Switch>
  );
}

export default ScienceRoutes;
