/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { consts as Widget, Table, Theme } from '@lugia/lugia-web';

const columns = [
  {
    title: '排名',
    dataIndex: 'list',
    key: 'list',
    width: 100,
  },
  {
    title: '搜索关键词',
    dataIndex: 'keyword',
    key: 'keyword',
    width: 100,
  },
  {
    title: '用户数',
    dataIndex: 'users',
    key: 'users',
    width: 100,
  },
  {
    title: '周涨幅',
    dataIndex: 'rise',
    key: 'rise',
    width: 100,
  },
];

const data = [
  { list: '1', keyword: '搜索关键词-0', users: '37', rise: '64%' },
  { list: '2', keyword: '搜索关键词-1', users: '37', rise: '46%' },
  { list: '3', keyword: '搜索关键词-2', users: '463', rise: '37%' },
  { list: '4', keyword: '搜索关键词-3', users: '8', rise: '47%' },
];

const TableWrap = styled.div`
  padding: 0 20px;
`;

const view = {
  [Widget.Table]: {
    height: 300,
  },
};

export default class Demo extends Component {
  render() {
    return (
      <TableWrap>
        <Theme config={view}>
          <Table columns={columns} data={data} />
        </Theme>
      </TableWrap>
    );
  }

  componentDidMount() {}
}
