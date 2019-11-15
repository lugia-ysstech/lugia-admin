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
  padding:18px 20px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.4;
  // margin-bottom: 10px;
`;
const Description = styled.div`
  font-size: 14px;
  line-height: 1.4;
  padding-top: 4px;
  color:#666;
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
