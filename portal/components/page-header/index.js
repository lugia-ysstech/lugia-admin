/**
 *
 * create by grguang
 *
 *
 */
import React, { Component, } from 'react';
import styled from 'styled-components';
import { Breadcrumb, consts as Widget, Theme, } from '@lugia/lugia-web';

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
  padding-top: 6px;
  color:#666;
`;
const theme = {
  [Widget.Breadcrumb]: {
    BreadcrumbItem: {
      Text: {
        normal: {

          last: {
            color: '#333',
          },
        },
        hover: {
          color: '#4d63ff',
        },
      },

    },
  },

};
export default class PageHeader extends Component {
  render() {
    const { routes = [], title, desc, } = this.props;
    return (
      <Wrap>
        <Theme config={theme}>
          <Breadcrumb routes={routes} />
        </Theme>

        {title && <Title>{title}</Title>}
        {desc && <Description>{desc}</Description>}
      </Wrap>
    );
  }
}
