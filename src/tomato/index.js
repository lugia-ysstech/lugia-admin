/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { createRoute, Link } from "@lugia/lugiax-router";
import { Button } from "@lugia/lugia-web";

export default () => {
  return [
    <h1>番茄工作法 🍅</h1>,
    <Link to="/tomato/history">
      <Button>历史任务</Button>
    </Link>,
    " ",
    <Link to="/tomato/now">
      <Button type="warning">当前任务</Button>
    </Link>,
    createRoute({
      "/tomato/history": {
        render: async () => import("./pages/history")
      },
      "/tomato": {
        render: () => import("./pages/now"),
        exact: true
      },
      "/tomato/now": {
        render: () => import("./pages/now")
      }
    })
  ];
};
