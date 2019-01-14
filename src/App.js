import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "./components/header";
import MnueList from "./components/menulist";
import "./App.css";
import styled from "styled-components";
import menu from  './menu'

const ContentContainer = styled.div`
  flex: 1;
`;

export default () => {
  console.info("init main");
  const {router} = menu;
  return (
    <div className="app">
      <MnueList />
      <ContentContainer>
        <Header />
        {createRoute(
          router
        )}
      </ContentContainer>
    </div>
  );
};

const styles = {
  padding: "30px"
};
