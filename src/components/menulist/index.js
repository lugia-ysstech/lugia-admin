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
  background: #000033;
  min-height: ${props => props.menuMinHeight}px;
  height: 100%;
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

  componentDidMount() {
    const menuMinHeight = document.documentElement.clientHeight ;
    this.setState({ menuMinHeight });
  }
  render() {
    const {menuMinHeight = 900} = this.state||{};
    return (
      <NavContainer  menuMinHeight={menuMinHeight}>
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
