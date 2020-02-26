/**
 *
 * create by grguang
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import Abnormal from '../../components/abnormal/403';

const PageWrapper = styled.div`
  width: 100%,
  height: 100%
  border: 1px solid red;
  display: flex;
  align-items: center;
  >div{
    padding: 0
  }
`;

export default class Pages extends React.Component {
  render(){
    return (
      <PageWrapper>
        <Abnormal />
      </PageWrapper>
    );

  }


}
