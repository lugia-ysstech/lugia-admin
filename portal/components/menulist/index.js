/**
 *
 * create by szfeng
 *
 * @flow
 */
import React from "react";
import styled from "styled-components";
import { Navmenu, Theme, consts as Widget } from "@lugia/lugia-web";
import logo from "../../assets/images/pro_logo.png";
import menuList from "../../models/menuList";
import { connect } from "@lugia/lugiax/target/lib/index";
import routingConfig from "../../../config/routing.config";

const NavContainer = styled.div`
  display: inline-block;
  background: #000033;
  min-height: ${props => props.menuMinHeight}px;
  height: 100%;
`;

const styles = {
  padding: "20px 20px 10px 5px",
  height: "70px"
};

const Title = styled.div``;

const theme = {
  [Widget.NavMenu]: {
    width: 210,
    paddingLeft: 38
  }
};
class List extends React.Component<any> {
  componentDidMount() {
    const menuMinHeight = document.documentElement.clientHeight;
    this.setState({ menuMinHeight });
  }
  render() {
    const { menuMinHeight = 900 } = this.state || {};
    return (
      <NavContainer menuMinHeight={menuMinHeight}>
        <Title style={{ textAlign: "center" }}>
          <img src={logo} style={styles} />
        </Title>
        <Theme config={theme}>
          <Navmenu
            size={"large"}
            theme={"dark"}
            onSelect={this.props.onSelect}
            inlineType={"ellipse"}
            data={routingConfig}
          />
        </Theme>
      </NavContainer>
    );
  }
}
const MenuList = connect(
  menuList,
  state => {
    return {
      value: state.menuList.get("value")
    };
  },
  mutations => {
    const { menuList } = mutations;
    return {
      onSelect: menuList.onSelect
    };
  }
)(List);

export default () => {
  return <MenuList />;
};
