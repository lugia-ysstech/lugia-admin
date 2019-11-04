import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";

import styled from "styled-components";
import Pages from "./pages";

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
    component: Pages
  }
};

export default () => {
  return (
    <React.Fragment>
      {createRoute(firstRouter)}
    </React.Fragment>
  );
};
