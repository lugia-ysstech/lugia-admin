/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Theme, consts as Widget, Icon, Avatar } from "@lugia/lugia-web";
import styled from "styled-components";
import Avator from "../assets/mega.png";

const LoginContainer = styled.div`
  height: 60px;
  background: #ffffff;
  position: relative;
`;



export default class Header extends React.Component<> {
  render() {
    return (
      <LoginContainer>
        login
      </LoginContainer>
    );
  }


}
