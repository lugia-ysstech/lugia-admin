import React, { Component } from "react";
import { createRoute } from "@lugia/lugiax-router";
import Header from "./header";
import Todo from "./todo";
import Tomato from "./tomato";
import NotAccess from "./access/NotAccess";
import logo from "./assets/logo.png";
import MnueList from "./menulist";
import "./App.css";
import styled from "styled-components";

import Analyse from "./content/Dashboard/analyse";
import Monitor from "./content/Dashboard/monitor";
import Desk from "./content/Dashboard/desk";
import Form from "./content/form";
import List from "./content/list";
import Detail from "./content/detail";
import Result from "./content/result";
import Abnormal from "./content/abnormal";
import Personal from "./content/personal";

const ContentContainer = styled.div`
  flex: 1;
`;

export default () => {
  console.info("init main");

  return (
    <div className="app">
      <MnueList />
      <ContentContainer>
        <Header />
        {createRoute({
          "/analyse": {
            exact: true,
            component: Analyse
          },
          "/monitor": {
            exact: true,
            component: Monitor
          },
          "/desk": {
            exact: true,
            component: Desk
          },
          "/form": {
            exact: true,
            component: Form
          },
          "/list": {
            exact: true,
            component: List
          },
          "/detail": {
            exact: true,
            component: Detail
          },
          "/result": {
            exact: true,
            component: Result
          },
          "/abnormal": {
            exact: true,
            component: Abnormal
          },
          "/personal": {
            exact: true,
            component: Personal
          }
        })}
      </ContentContainer>
    </div>
  );
};

const styles = {
  padding: "30px"
};
