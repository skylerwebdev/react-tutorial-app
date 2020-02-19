import React from "react";
import { Route as R, Switch as S } from "react-router-dom";
import Home from "../pages/user/Home";
import About from "../pages/user/About";
const AppRouter = () => {
  return (
    <S>
      <R exact path="/" component={Home} />
      <R path="/about" component={About} />
    </S>
  );
};

export default AppRouter;
