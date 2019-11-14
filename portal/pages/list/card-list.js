/**
 *
 * create by Shine Lee
 *
 *@flow
 */
import React, { Component } from "react";
import Content from "../../components/content";
import { Breadcrumb, consts as Widget, Grid, Progress, Button, Theme, Icon} from "@lugia/lugia-web";
import styled from "styled-components";

import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';

const {Row, Col} = Grid;

//上部图表
const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const FirstContentWrap = styled.div`
  width: 100%;
`;
const GraphContentWrap = styled.div`
  background: #fff;
  margin: 0 14px;
  border-radius: 4px;
`;
const SecContainer = styled.div`
  padding: 24px 18px;
  font-size: 12px;
  text-align: center;
`;
const ListItemTop = styled.div`
  width: 100%;
  line-height: 43.5px;
  display: flex;
  justify-content: space-between;
`;
const ListItemTopLeft = styled.div`
  min-width: 120px;
  font-size: 14px;
  text-align: left;
  line-height: 20px;
  font-family: PingFangSC-Medium;
  color: #333;
  > p: nth-child(2) {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    color: #999;
  }
`;
const ListItemTopRight = styled.div`
  min-width: 120px;
  line-height: 50px;
  font-size: 36px;
  font-family: PingFangSC-Semibold;
  vertical-align: bottom;
  color: #4D68FF;
`;
const ListItemBottom = styled.div`
  width: 100%;
  line-height: 20px;
`;
const ItemInforProgress = styled.div`
  width: 100%;
  text-align: left;
  > Progress {
    height: 6px;
    margin: 0;
  }
  > button {
    background: none;
    border: none;
  }
`;

//下部列表
const SecContentWrap = styled.div`
  width: 100%;
`;
//表头
const ListHeader = styled.div`
  width: 100%;
  height: 55px;
  color: #333;
  padding: 22px 14px 0;
`;
const ListHeaderMark = styled.div`
   width: 6px;
   height: 20px;
   background: #4D68FF;
   border-radius: 3px;
   display: inline-block;
`;
const ListHeaderContent = styled.p`
   font-size: 18px;
   line-height: 25px;
   color: #333;
   font: PingFangSC-Medium;
   display: inline-block;
   vertical-align: bottom;
   margin-left: 6px;
`;
//列表区域
const ListContentWrap = styled.div`
  background: #fff;
  margin: 0 14px;
  border-radius: 4px;
  background: #F5F5F9;
`;
const ListContent = styled.div`
  font: PingFangSC-Regular;
  font-size: 14px;
  > Row {
    margin-bottom: 20px;
  }
`;
const CardContainer = styled.div`
  text-align: center;
  width: 100%;
  height: 254px;
  padding: 26px;
  background: #fff;
`;
const CardHeaderWrap = styled.div`
  width: 100%; 
  > p {
    height: 25px;
    line-height: 25px;
    font-size: 18px;
    color: #333;
  }
`;
const IconWrap = styled.div`
  margin:0 auto 12px;;
  width: 40px;
  height: 40px;
  line-height: 40px;
`;
const CardContentWrap = styled.div`
  width: 100%;
  padding: 16px;
  line-height: 20px;
  font-size: 14px;
  color: #666;
  > p: nth-child(1) {
    margin-bottom: 12px;
  }
`;
const CardEditorBarWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  text-align: center;
  > button {
    width: 90px;
    height: 32px;
    color: #666;
    margin-right: 10px;
  } 
  & > button: nth-child(2) {
    margin-right: 0;
  }
`;
const RowWall = styled.div`
  width: 100%;
  height: 20px;
`;

export default class BasicList extends Component {
  constructor(props){
    super(props);
    this.state = null;
  }
  render() {
    const config = {
      [Widget.Breadcrumb]: {
        BreadcrumbWrap: {
          normal: {
            width: 185,
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
              nth0: { width: 500 },
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
    };

    const view = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            margin: {
              left: 10,
              right: 10,
              top: 10,
              bottom: 10,
            },
            fontSize: 20,
          },
          hover: {
            color: '#4d63ff',
          },
        },
      },
    };

    return(
      <Content>
        {/*页头*/}
        <BreadcrumbWrap>
          <Breadcrumb separator={'>'} lastSeparator={''} theme={config}>
            <Breadcrumb.Item href="a">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="b">列表页</Breadcrumb.Item>
            <Breadcrumb.Item href="c">卡片列表</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbWrap>

        {/*上部图表*/}
        <FirstContentWrap>
          <GraphContentWrap>
            <Row
              gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
              type="flex"
              justify="spaceBetween"
              align="middle"
            >
              <Col span={6}>
                <SecContainer>
                  <ListItemTop>
                    <ListItemTopLeft>
                      <p>总收入</p>
                      <p>所有项目收入</p>
                    </ListItemTopLeft>
                    <ListItemTopRight>
                      <span style = {{fontSize:16 }}>¥</span>
                      <span>109</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={60} status="active" size="small" />
                      <button>设置</button>
                    </ItemInforProgress>
                  </ListItemBottom>
                </SecContainer>
              </Col>
              <Col span={6}>
                <SecContainer>
                  <ListItemTop>
                    <ListItemTopLeft>
                      <p>今年新用户</p>
                      <p>新的注册用户</p>
                    </ListItemTopLeft>
                    <ListItemTopRight>
                      <span>1899</span>
                      <span style = {{fontSize:16 }}> &nbsp;&nbsp;人</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={80} status="active" size="small" />
                      <button>设置</button>
                    </ItemInforProgress>
                  </ListItemBottom>
                </SecContainer>
              </Col>
              <Col span={6}>
                <SecContainer>
                  <ListItemTop>
                    <ListItemTopLeft>
                      <p>本月新订单</p>
                      <p>本月新增订单数</p>
                    </ListItemTopLeft>
                    <ListItemTopRight>
                      <span/>
                      <span>785</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={80} status="active" size="small" />
                      <button>设置</button>
                    </ItemInforProgress>
                  </ListItemBottom>
                </SecContainer>
              </Col>
              <Col span={6}>
                <SecContainer>
                  <ListItemTop>
                    <ListItemTopLeft>
                      <p>用户反馈待处理</p>
                      <p>待处理的数量</p>
                    </ListItemTopLeft>
                    <ListItemTopRight>
                      <span/>
                      <span>10</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={20} status="active" size="small" />
                      <button>设置</button>
                    </ItemInforProgress>
                  </ListItemBottom>
                </SecContainer>
              </Col>
            </Row>
          </GraphContentWrap>
        </FirstContentWrap>

        {/*下部列表*/}
        <SecContentWrap>
          {/*表头*/}
          <ListHeader>
            <ListHeaderMark />
            <ListHeaderContent>卡片列表</ListHeaderContent>
          </ListHeader>
          {/*列表项*/}
          <ListContentWrap>
            <ListContent>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
                type="flex"
                justify="spaceBetween"
                align="middle"
              >
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_excle' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_word' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_group' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_word' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
              </Row>
              <RowWall/>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
                type="flex"
                justify="spaceBetween"
                align="middle"
              >
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_file_unknown' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_histogram' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_filing_cabinet' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap>
                        <Theme config={view}>
                          <Icon iconClass='lugia-icon-financial_add_pic' />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>吱吱</span></p>
                      <p>上传时间:&nbsp; <span>2018-08-08</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
              </Row>
            </ListContent>
          </ListContentWrap>
        </SecContentWrap>
      </Content>
    )}
}
