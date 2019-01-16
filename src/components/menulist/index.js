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
import logo from "../../assets/logo.png";
import menuData from '../../menu'


const NavContainer = styled.div`
  display: inline-block;
  min-height: 1080px;
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
            data={menuData}
            // size={'large'}
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
