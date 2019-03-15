import { Redirect } from "@lugia/lugiax-router/target/lib";
import React from "react";
import routingConfig from "./routing.config";

const getRouters = (routingConfig, routes) => {
  const rout = routes || {};
  routingConfig.forEach(item => {
    const { component, value, path } = item;
    if (component) {
      rout[value] = {
        exact: true,
        component: component
      };
    } else if (path) {
      rout[value] = {
        exact: true,
        render: () => import(`${path}`)
      };
    } else {
      const { children } = item;
      rout[value] = {
        exact: true,
        render: async () => {
          return () => (
            <Redirect
              to={{
                pathname: getIndexRouter(children)
              }}
            />
          );
        }
      };

      if (children) {
        return getRouters(children, rout);
      }
    }
  });
  return rout;
};

function getIndexRouter(routingConfig) {
  if (!routingConfig || routingConfig.length === 0) {
    return "/404";
  }
  return routingConfig[0].value;
}

export default {
  "/": {
    exact: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: getIndexRouter(routingConfig)
          }}
        />
      );
    }
  },
  ...getRouters(routingConfig),
  "/404": {
    render: async () => import("./components/abnormal/404")
  },
  "/403": {
    render: async () => import("./components/abnormal/403")
  },
  "/500": {
    render: async () => import("./components/abnormal/500")
  },
  NotFound: {
    isHidden: true,
    render: async () => {
      return () => (
        <Redirect
          to={{
            pathname: "/abnormal/404"
          }}
        />
      );
    }
  }
};
