import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  height: calc(100vh - 62px);
  overflow: hidden;
`;

export default class Pages extends React.Component<any, any> {
  render() {
    const url = window.location.pathname;
    return (
      <Box>
        <iframe src={`/${url}`} width={'100%'} height={'100%'} frameborder={0} />
      </Box>
    );
  }
}
