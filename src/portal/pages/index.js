import React from 'react';
import { createRoute } from '@lugia/lugiax-router';
import Header from '../components/header';
import MenuList from '../components/menulist';
import '../../App.css';
import styled from 'styled-components';
import router from '../../router';
import { topNav } from '../../config/router/nav.config.json';

const Container = styled.div`
  margin: 0 auto;
  background: #f5f5f9;
  height: 100%;
  ${() => (topNav ? '' : 'display: flex')}
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${() => (topNav ? '' : 'overflow: auto')}
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  ${() => (topNav ? '' : 'overflow: auto')}
  flex: 1;
  padding: 0 4px;
  color: #333;
`;

export default () => {
  return (
    <Container>
      <MenuList />
      <ContentContainer>
        <Header />
        <Content>{createRoute(router)}</Content>
      </ContentContainer>
    </Container>
  );
};
