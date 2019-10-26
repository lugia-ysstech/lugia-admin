import React from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "../components/header";
import "../App.css";
import styled from "styled-components";
import router from "../router";

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: auto;
  flex: 1;
`;

export default () => {
  return (
    <ContentContainer>
      <Header />
      <Content>{createRoute(router)}</Content>
    </ContentContainer>
  );
};
