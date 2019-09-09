/**
 *
 * create by grguang
 *
 *
 */
import React, { Component } from "react";
import styled from "styled-components";
import Contetn from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import TableForm from "../../components/table-list-form";
const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "列表页"
  },
  {
    title: "查询表格"
  }
];

export default class TableList extends Component {
  render() {
    return (
      <Contetn>
        <PageHeader routes={routes} title={"查询表格"} />
        <PageContent>
          <TableForm />
        </PageContent>
      </Contetn>
    );
  }
}
