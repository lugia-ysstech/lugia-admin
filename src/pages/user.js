/**
 *
 * create by lyq
 *
 * @flow
 */
import React, { Component, } from 'react';
import { Button, Input, Pagination, Table, } from '@lugia/lugia-web';
import styled from 'styled-components';
import { connect, } from '@lugia/lugiax';
import user from '../models/user';

const Container = styled.div`
  padding: 20px 50px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  margin: 10px 10px;
`;

class User extends Component {
  render() {
    const { total, limit, currentPage, formData, columns, } = this.props;
    return (
      <Container>
        <Container>
          <InputWrapper>
            <Input size={'default'} placeholder={'请输入姓名'} onChange={this.props.onChangeName} />
          </InputWrapper>
          <InputWrapper>
            <Input size={'default'} placeholder={'请输入年龄'} onChange={this.props.onChangeAge} />
          </InputWrapper>
          <InputWrapper>
            <Input
              size={'default'}
              placeholder={'请输入电话号码'}
              onChange={this.props.onChangePhone}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              size={'default'}
              placeholder={'请输入邮箱'}
              onChange={this.props.onChangeEmail}
            />
          </InputWrapper>
          <Button type="primary" onClick={this.props.doRequest}>
            搜索
          </Button>
        </Container>
        <Table columns={columns} data={formData} />
        <Container>
          <Pagination
            defaultCurrent={currentPage}
            total={total}
            pageSize={limit}
            onChange={this.props.changePage}
          />
        </Container>
      </Container>
    );
  }
}

const UserList = connect(
  user,
  state => {
    return {
      searchInfo: state.get('searchInfo'),
      formData: Array.isArray(state.get('formData'))
        ? state.get('formData')
        : state.get('formData').toJS(),
      currentPage: state.get('currentPage'),
      total: state.get('total'),
      limit: state.get('limit'),
      columns: state.get('columns').toJS(),
    };
  },
  mutations => {
    return {
      doRequest: mutations.asyncDoRequest,
      doDelete: mutations.asyncDoDelete,
      changePage: mutations.asyncChangePage,
      onChangeAge: mutations.onChangeAge,
      onChangePhone: mutations.onChangePhone,
      onChangeName: mutations.onChangeName,
      onChangeEmail: mutations.onChangeEmail,
    };
  }
)(User);

export default () => {
  return (
    <div>
      <UserList />
    </div>
  );
};
