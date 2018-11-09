/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Button, Theme, consts as Widget } from "@lugia/lugia-web";

const theme = {
  [Widget.Button]: {
    width: 150
  }
};

export default class Header extends React.Component<any> {
  render() {
    return (
      <div>
        <Theme config={theme}>
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
        </Theme>
      </div>
    );
  }

  onClick = () => {
    go({ url: "/404" });
  };
}
