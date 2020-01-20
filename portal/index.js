import React from "react";
import { createBrowserHistory } from "history";
import { createApp, go, render } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import Main from "./App";
import PageLoading from "./components/pageloading";
import RoutingConfig from "../config/routing.config";
import Authenticate from "./authenticate";
import Security from "./models/security";
import doRequest from "./components/utils/requestFunction";
const history = createBrowserHistory();
async function checkAuthorityData(query) {
  const resp = await fetch("/api/checkAuthority", {
    method: "Post",
    body: JSON.stringify({ query }),
    headers: new Headers({ "Content-Type": "application/json" })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .then(error => {
      return error;
    });
  return resp;
}

async function getAllRouteData() {
  let allRouteData = Security.getState().get("allRouteData").toJS
    ? Security.getState()
        .get("allRouteData")
        .toJS()
    : Security.getState().get("allRouteData");

  if (allRouteData.length === 0) {
    const { routeData } = await doRequest("/api/routeMock", {
      method: "POST"
    });
    allRouteData = routeData;
    Security.mutations.setAllRouteData(routeData);
  }

  return allRouteData;
}

function getFilterRouteData(accessIds, allRouteData) {
  const filterData = [];
  allRouteData &&
    allRouteData.forEach(item => {
      const { children, id } = item;
      let singleFilterData;

      const hasPermission = accessIds.indexOf(id) !== -1;
      if (hasPermission) {
        singleFilterData = item;
      }

      const childrenMap = children && getFilterRouteData(accessIds, children);
      if (childrenMap && childrenMap.length > 0) {
        singleFilterData = item;
        singleFilterData.children = childrenMap;
      }

      singleFilterData && filterData.push(singleFilterData);
    });
  return filterData;
}

function setFilterRouteData(filterRouteData) {
  Security.mutations.setRouteData(filterRouteData);
}

const App = createApp(
  {
    "/": {
      component: Main
    }
  },
  history,
  {
    loading: PageLoading,
    async onBeforeGo({ url }) {
      if (url === "/404") {
        return true;
      }

      const isLoginPage =
        url === "/login" ||
        url === "/register/register" ||
        url === "/register/registerSuccess";
      if (isLoginPage) {
        return true;
      }

      const token = window.localStorage.getItem("token");
      if (!(token || isLoginPage)) {
        window.localStorage.setItem("originUrl", url);
        go({ url: "/login" });
      }

      const { authenticateSwitch } = Authenticate;
      let filterRouteData = RoutingConfig;
      if (authenticateSwitch) {
        const allRouteData = await getAllRouteData();

        const { accessIds } = await doRequest("/api/userAccessIdsAndApiUrls", {
          method: "POST"
        });

        filterRouteData = getFilterRouteData(accessIds, allRouteData);
        setFilterRouteData(filterRouteData);
      }

      if (
        JSON.stringify(filterRouteData).indexOf(url) === -1 &&
        url !== "/404"
      ) {
        go({ url: "/404" });
        return false;
      }

      const result = await checkAuthorityData({
        value: url,
        name: "admin"
      });
      const { status } = result;

      if (
        url === "/Dashboard" ||
        url === "/" ||
        url === "/500" ||
        url === "/403" ||
        url === "/404" ||
        url === "/login" ||
        url === "/register" ||
        status === 200
      ) {
        return true;
      }
      if (status === 500) {
        go({ url: "/500" });
      }
      if (status === 403) {
        go({ url: "/403" });
      }
    }
  }
);

render(() => {
  // window.onbeforeunload = () => {
  //   window.localStorage.clear();
  // };
  return <App />;
}, "root");
