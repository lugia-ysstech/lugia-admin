/**
 *
 * create by grguang
 *
 *
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Breadcrumb } from "@lugia/lugia-web";

const Wrap = styled.div`
  margin: 8px 0 20px ;
  background: #fff;
  padding: 16px 20px 0;
`;
const Title = styled.div`
  // font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;

export default class PageHeader extends Component {
  render() {
    const { routes = [], title, desc } = this.props;
    return (
      <Wrap>
        <Breadcrumb routes={routes} />
        {title && <Title>{title}</Title>}
        {desc && <Description>{desc}</Description>}
      </Wrap>
    );
  }
}
