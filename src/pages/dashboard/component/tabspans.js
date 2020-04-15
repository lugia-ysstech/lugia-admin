/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import styled from 'styled-components';

const TabsPanWrap = styled.div`
  flex: 1;
  margin: 0 10px;
  cursor: pointer;
  padding: 10px;
`;

const Title = styled.div`
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
`;

const TextWrap = styled.div`
  flex: 1;
  & h3 {
    font-size: 14px;
    color: #ccc;
    font-weight: 100;
    line-height: 32px;
  }

  & p {
    font-size: 28px;
  }
`;

const CircleWrap = styled.div`
  width: 60px;
  padding-top: 10px;
  margin-left: 10px;
`;

const CircleContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const OutCircle = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: #ccc;
  overflow: hidden;
  border-radius: 50%;
`;

const InCircle = styled.div`
  height: 60%;
  width: 60%;
  position: absolute;
  left: 20%;
  top: 20%;
  background: #fff;
  border-radius: 50%;
`;

export default class Basic extends Component {
  render() {
    const { value = 0 } = this.props;

    return (
      <TabsPanWrap>
        <Title>Stores 1</Title>
        <Content>
          <TextWrap>
            <h3>转化率</h3>
            <p>{value + '%'}</p>
          </TextWrap>
          <CircleWrap>
            <CircleContainer>
              <OutCircle>
                <InCircle />
              </OutCircle>
            </CircleContainer>
          </CircleWrap>
        </Content>
      </TabsPanWrap>
    );
  }
}
