import React from "react";
import { createRoute, Redirect } from "@lugia/lugiax-router";
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
  "/404": {
    render: async () => import("./components/abnormal/404")
  },
  "/": {
    // exact: true,
    component: Pages
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/404"
          }}
        />
      );
    }
  }
};

export default () => {
  return <React.Fragment>{createRoute(firstRouter)}</React.Fragment>;
};
