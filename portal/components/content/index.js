/**
 *
 * create by grguang
 *
 *
 */
import React, { Component, } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
`;

export default class Content extends Component {
  render() {
    const { children, } = this.props;
    return <Wrap>{children}</Wrap>;
  }
}
