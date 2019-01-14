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

const columns=[{
  title: 'Name', dataIndex: 'name', key:'name', width: 100,
}, {
  title: 'Age', dataIndex: 'age', key:'age', width: 100,
}, {
  title: 'Phone', dataIndex: 'phone', key:'phone', width: 200,
}, {
  title: 'Operations', dataIndex: '', key:'operations', render: () => <a href="javascript:;">Delete</a>,
}];


class User extends Component {

  render() {
    const {total, currentPage,formData} = this.props;
    console.log('----',formData);
    // const {} = this.props;
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
        <Button type="primary" onClick={this.props.doRequest}>搜索</Button>
      </Container>
      <Table columns={columns} data={formData}/>
      <Container>
        <Pagination defaultCurrent={currentPage} total={total}/>
      </Container>

    </Container>;
  }

}

const UserList = connect(
  user,
  state => {
    return { searchInfo: state.user.get('searchInfo'),
      formData: state.user.get('formData'),
      currentPage: state.user.get('currentPage'),
      total: state.user.get('total')
    };
  },
  mutations => {
    const { user } = mutations;
    return {
      transformQuery: user.asyncTransformQuery,
      doRequest: user.asyncDoRequest,
      onChangeAge:user.onChangeAge,
      onChangePhone:user.onChangePhone,
      onChangeName:user.onChangeName
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
