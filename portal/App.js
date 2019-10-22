import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import { Redirect } from "@lugia/lugiax-router";
import register from "./models/register";

export const firstRouter = {
  "/register/register": {
    exact: true,
    render: async () => import("./register/register")
  },
  "/register/registerSuccess": {
    exact: true,
    render: async () => import("./register/registerSuccess")
  },
  "/login": {
    exact: true,
    render: async () => import("./login")
  },
  "/": {
    // exact: true,
    render: async () => import("./pages")
  }
};

export default () => {
  return <React.Fragment>{createRoute(firstRouter)}</React.Fragment>;
};
