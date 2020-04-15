import React from 'react';
import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
`;

//表头
export const HeaderWrap = styled.div`
  width: 100%;
`;
export const BreadcrumbWrap = styled.div`
  width: 100%;
`;
export const HeaderContentWrap = styled.div`
  width: 100%;
  padding: 0 0 22px 14px;
  font-size: 16px;
  color: #666;
  line-height: 22px;
  & .headerTitle {
    font-size: 18px;
    color: #333;
    line-height: 25px;
    margin-bottom: 4px;
  }
`;

//内容
export const ContentWrap = styled.div`
  width: 100%;
  padding: 0 14px;
`;
export const SecContentWrap = styled.div`
  width: 100%;
  min-width: 1000px;
  padding: 20px 25px;
  border-radius: 5px;
  background: #fff;
  & > .fold {
    display: none;
  }
  & > .unfold {
    display: none;
  }
`;
export const SearchBarWrap = styled.div`
  width: 100%;
  padding: 15px 0 20px 0;
  border-bottom: 1px solid #e8e8e8;
  > label {
    line-height: 20px;
    font-size: 14px;
    color: #333;
  }
`;
export const SearchInputWrap = styled.div`
  width: 350px;
  padding-bottom: 20px;
`;
export const ButtonWrap = styled.div`
  display: inline-block;
  line-height: 32px;
`;
export const AdvanceSearchWrap = styled.div`
  display: inline-block;
  width: 80px;
  line-height: 32px;
  > a {
    font-size: 14px;
    color: blue;
    > span {
      display: inline-block;
      transform: rotateZ(-90deg);
    }
  }
`;
export const ListContentWrap = styled.div`
  width: 100%;
`;
export const PaginationWrap = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 25px;
  position: relative;
`;
export const PaginationPositionWrap = styled.div`
  position: absolute;
  right: 0;
`;
