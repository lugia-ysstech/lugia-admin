/**
 *
 * create by lyq
 *
 * @flow
 */
import React, { Component } from "react";
import { Input,Table,Button,Pagination } from "@lugia/lugia-web";
import styled from 'styled-components';
import { bindTo, connect } from "@lugia/lugiax";
import user from "../models/user";


const Container = styled.div`
  padding:20px 50px;
`;

const InputWrapper = styled.div`
  display: inline-block;
  margin:10px 10px;
`;


class User extends Component {

  render() {
    const {total, limit,currentPage,formData,columns} = this.props;
    return <Container>
      <Container>
        <InputWrapper>
          <Input size={'default'} placeholder={'请输入姓名'} onChange={this.props.onChangeName}/>
        </InputWrapper>
        <InputWrapper>
          <Input size={'default'} placeholder={'请输入年龄'} onChange={this.props.onChangeAge}/>
        </InputWrapper>
        <InputWrapper>
          <Input size={'default'} placeholder={'请输入电话号码'} onChange={this.props.onChangePhone}/>
        </InputWrapper>
        <InputWrapper>
          <Input size={'default'} placeholder={'请输入邮箱'} onChange={this.props.onChangeEmail}/>
        </InputWrapper>
        <Button type="primary" onClick={this.props.doRequest}>搜索</Button>
      </Container>
      <Table columns={columns} data={formData}/>
      <Container>
        <Pagination defaultCurrent={currentPage} total={total} pageSize={limit} onChange={this.props.changePage}/>
      </Container>

    </Container>;
  }

}

const UserList = connect(
  user,
  state => {
    return { searchInfo: state.user.get('searchInfo'),
      formData: Array.isArray(state.user.get('formData'))?state.user.get('formData'):state.user.get('formData').toJS(),
      currentPage: state.user.get('currentPage'),
      total: state.user.get('total'),
      limit: state.user.get('limit'),
      columns: state.user.get('columns').toJS(),
    };
  },
  mutations => {
    const { user } = mutations;
    return {
      doRequest: user.asyncDoRequest,
      doDelete:user.asyncDoDelete,
      changePage:user.asyncChangePage,
      onChangeAge:user.onChangeAge,
      onChangePhone:user.onChangePhone,
      onChangeName:user.onChangeName,
      onChangeEmail:user.onChangeEmail,
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
