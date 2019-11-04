import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import MenuList from "./components/menulist";
import styled from "styled-components";
import Pages from "./pages";
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
    component: Pages
  }
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  overflow: auto;
  height: 100%;
  width: 100%;
  background: #f5f5f9;
`;

export default () => {
  return (
    <React.Fragment>
      {createRoute(firstRouter)}
    </React.Fragment>
  );
};
