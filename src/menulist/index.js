/**
 *
 * create by szfeng
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import styled from "styled-components";
import { Navmenu, Theme, consts as Widget } from "@lugia/lugia-web";
import logo from "../assets/logo.png";

const data = [
  {
    value: "Dashboard",
    text: "Dashboard",
    icon: "lugia-icon-financial_sad",
    children: [
      {
        value: "/analyse",
        text: "分析页"
      },
      {
        value: "/monitor",
        text: "监控页"
      },
      {
        value: "/desk",
        text: "工作台"
      }
    ]
  },
  { value: "/form", text: "表单页", icon: "lugia-icon-financial_editor" },
  { value: "/list", text: "列表页", icon: "lugia-icon-financial_table" },
  { value: "/detail", text: "详情页", icon: "lugia-icon-financial_sad_o" },
  {
    value: "/result",
    text: "结果页",
    icon: "lugia-icon-reminder_check_circle_o"
  },
  { value: "/abnormal", text: "异常页", icon: "lugia-icon-reminder_warning" },
  { value: "/personal", text: "个人页", icon: "lugia-icon-financial_user" }
];

const NavContainer = styled.div`
  display: inline-block;
  min-height: 850px;
  height: 100%;
  background: #000033;
`;

const styles = {
  padding: "30px"
};

const Title = styled.div``;

const theme = {
  [Widget.NavMenu]: {
    width: 220,
    paddingLeft: 38
  }
};

export default class List extends React.Component<any> {
  render() {
    return (
      <NavContainer>
        <Title>
          <img src={logo} style={styles} />
        </Title>
        <Theme config={theme}>
          <Navmenu
            theme={"dark"}
            onSelect={this.onSelect}
            inlineType={"ellipse"}
            data={data}
          />
        </Theme>
      </NavContainer>
    );
  }

  onSelect = (res: Object) => {
    const { value } = res;
    go({ url: value });
  };
}
