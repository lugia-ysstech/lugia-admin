/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Button } from "@lugia/lugia-web";

export default class Header extends React.Component<any> {
  render() {
    return (
      <div>
        <Link to="/tomato">
          <Button type="primary" shape="round">
            番茄钟
          </Button>
        </Link>
        <Link to="/todo">
          <Button type="primary" shape="round">
            To Do List
          </Button>
        </Link>
        <Link to="/404">
          <Button type="primary" shape="round" onClick={this.onClick}>
            404
          </Button>
        </Link>
      </div>
    );
  }

  onClick = () => {
    go({ url: "/404" });
  };
}
