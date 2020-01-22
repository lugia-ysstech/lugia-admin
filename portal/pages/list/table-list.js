/**
 *
 * create by Shine Lee
 *
 *@flow
 */
import React, { Component } from "react";
import { Breadcrumb, consts as Widget, Grid, Button,  Input, Table, Pagination } from "@lugia/lugia-web";
import {
  Content,
  HeaderWrap,
  ContentWrap,
  SecContentWrap,
  SearchBarWrap,
  ButtonWrap,
  AdvanceSearchWrap,
  SearchInputWrap,
  ListContentWrap,
  PaginationWrap,
  PaginationPositionWrap
} from './style/tableListStyle';
import PageHeader from "../../components/page-header";

const {Row, Col} = Grid;
const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "列表页"
  },
  {
    title: "查询表格页"
  }
];
const columns = [{
  title: '用户ID', dataIndex: 'nameID', width: 100,
}, {
  title: '用户名', dataIndex: 'name', key:'name', width: 100,
}, {
  title: '邮箱', dataIndex: 'email', key:'email', width: 200,
}, {
  title: '手机号', dataIndex: 'phoneNum', key:'phoneNum', width: 200,
}, {
  title: '创建时间', dataIndex: 'createTime', key:'createTime', width: 200,
}, {
  title: '状态', dataIndex: 'status', key:'status', width: 200,
}];

const data = [
  { nameID: '00031', name: "李彦斌", email: '13887767283@163.com', phoneNum: '13887767283', createTime: '2013-03-12',status: '运行', key:'1' },
  { nameID: '00032', name: "张翠霞", email: '283749301@qq.com', phoneNum: '15932535355', createTime: '2013-03-14',status: '已禁用', key:'2' },
  { nameID: '00033', name: "王老五", email: '13887767283@163.com', phoneNum: '13887767283', createTime: '2013-03-12',status: '运行', key:'3' },
  { nameID: '00034', name: "李西风", email: '283749301@qq.com', phoneNum: '15932535355', createTime: '2013-03-14',status: '已禁用', key:'4' },
  { nameID: '00035', name: "李彦斌", email: '13887767283@163.com', phoneNum: '13887767283', createTime: '2013-03-12',status: '运行', key:'5' },
];

export default class TableList extends Component {
  constructor(props){
    super(props);
    this.state = {
      holdClassName: '',
      unholdClassName: 'unfold'
    };
    this.handleHoldSearchClick = this.handleHoldSearchClick.bind(this);
    this.handleUnholdSearchClick = this.handleUnholdSearchClick.bind(this);
  }
  render() {
    const config = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 230,
            height: 32,
            margin: {
              right: 10
            }
          }
        }
      },
      [Widget.Button]: {
        Container: {
          normal: {
            width: 80,
            margin:{
              right: 10
            }
          }
        }
      },
    };
    return (
      <Content>

        {/*页头*/}
        <HeaderWrap>
          <PageHeader routes={routes} title={"基础查询表格"} desc={'常用于对单项大数据表格的查看和查询'} />
        </HeaderWrap>

        {/*内容*/}
        <ContentWrap>
          <SecContentWrap>
            <SearchBarWrap className={this.state.holdClassName}>
              <label>查询名称: </label>
              <Input placeholder="请输入要查询表格的名称" theme={config}/>
              <ButtonWrap>
                <Button type="primary" theme={config}>搜索</Button>
              </ButtonWrap>
              <AdvanceSearchWrap onClick = {this.handleHoldSearchClick}>
                <a>高级搜索 <span>&lt;</span></a>
              </AdvanceSearchWrap>
            </SearchBarWrap>
            <SearchBarWrap className={this.state.unholdClassName}>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
                type="flex"
                justify="spaceBetween"
                align="middle"
              >
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
                type="flex"
                justify="spaceBetween"
                align="middle"
              >
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
                <Col span={8}>
                  <SearchInputWrap>
                    <label>查询名称: </label>
                    <Input placeholder="请输入要查询表格的名称" theme={config}/>
                  </SearchInputWrap>
                </Col>
              </Row>
              <ButtonWrap>
                <Button type="primary" theme={config}>搜索</Button>
              </ButtonWrap>
              <AdvanceSearchWrap  onClick={this.handleUnholdSearchClick}>
                <a>收起 <span>&gt;</span></a>
              </AdvanceSearchWrap>
            </SearchBarWrap>
            <ListContentWrap>
              <Table columns={columns} data={data} tableStyle="linear"/>
            </ListContentWrap>
            <PaginationWrap>
              <PaginationPositionWrap>
                <Pagination showQuickJumper defaultCurrent={1} total={300} theme={config}/>
              </PaginationPositionWrap>
            </PaginationWrap>
          </SecContentWrap>
        </ContentWrap>
      </Content>
    )
  }
  handleHoldSearchClick(){
    this.setState(() => ({
      holdClassName: 'fold',
      unholdClassName: ''
    }))
  }
  handleUnholdSearchClick(){
    this.setState(() => ({
      holdClassName: '',
      unholdClassName: 'unfold'
    }))
  }
}
