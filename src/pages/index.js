import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "../components/header";
import MnueList from "../components/menulist";
import "../App.css";
import styled from "styled-components";
import router from  '../router'

const ContentContainer = styled.div`
  flex: 1;
`;

export default () => {
  console.info("init pages",router);
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
