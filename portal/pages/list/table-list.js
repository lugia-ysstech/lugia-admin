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
  BreadcrumbWrap,
  HeaderContentWrap,
  ContentWrap,
  SecContentWrap,
  SearchBarWrap,
  ButtonWrap,
  AdvanceSearchWrap,
  SearchInputWrap,
  ListContentWrap,
  PaginationWrap,
  PaginationPositionWrap
} from './style/tableListStyle'

const {Row, Col} = Grid;
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
      [Widget.Breadcrumb]: {
        BreadcrumbWrap: {
          normal: {
            width: 220,
            height: 22,
            padding: {
              left: 0,
            },
            margin: {
              left: 14,
              right: 0,
              top: 20,
              bottom: 20,
            },
            background: {
              color: '#F5F5F9',
            },
          },
        },
        BreadcrumbItem: {
          ItemWrap: {
            normal: {
              width: 120,
              padding: {
                left: 0,
              },
              margin: {},
              nth0: {width: 500},
            },
          },
          Text: {
            normal: {
              fontFamily: 'PingFangSC-Regular',
              color: '#999',
              fontSize: 16,
              last: {
                color: '#2A2A2A',
              },
            },
          },
          Separator: {
            normal: {
              color: '#666',
              fontSize: 16,
              margin: {
                top: 6,
                left: 4,
                right: 3,
              },
              last: {
                color: '#4d63ff',
              },
            },
          },
        },
      },
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
          <BreadcrumbWrap>
            <Breadcrumb separator={'>'} lastSeparator={''} theme={config}>
              <Breadcrumb.Item href="a">首页</Breadcrumb.Item>
              <Breadcrumb.Item href="b">列表页</Breadcrumb.Item>
              <Breadcrumb.Item href="c">基础查询表格</Breadcrumb.Item>
            </Breadcrumb>
          </BreadcrumbWrap>
          <HeaderContentWrap>
            <p className={'headerTitle'}>基础查询表格</p>
            <p>常用于对单项大数据表格的查看和查询</p>
          </HeaderContentWrap>
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
