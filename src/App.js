import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "./header";
import Todo from "./todo";
import Tomato from "./tomato";
import NotAccess from "./access/NotAccess";
import "./App.css";

export default () => {
  console.info("init main");

  return (
    <div style={styles}>
      <Header />
      {createRoute({
        "/todo": {
          exact: true,
          component: Todo
        },
        "/tomato": {
          component: Tomato
        },
        "/404": {
          component: NotAccess,
          exact: true
        }
      })}
    </div>
  );
};

const styles = {
  width: "500px",
  margin: "100px auto"
};
