/**
 *
 * create by grguang
 *
 *
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin: 0 20px 20px;
  padding: 20px;
  background: #fff;
`;

export default class PageContent extends Component {
  render() {
    const { children } = this.props;
    return <Wrap>{children}</Wrap>;
  }
}
