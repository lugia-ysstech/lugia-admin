import React from "react";
import { createBrowserHistory } from "history";
import { createApp, go, render } from "@lugia/lugiax-router";
import "@lugia/lugia-web/dist/css/global.css";
import Main from "./App";
import PageLoading from "./components/pageloading";

const history = createBrowserHistory();
async function checkAuthorityeData(query) {
  const { value,name=userName } = query;

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
      const result = await checkAuthorityeData({ value: url });
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
  return <App />;
}, "root");
