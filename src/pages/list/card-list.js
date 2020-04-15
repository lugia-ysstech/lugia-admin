/**
 *
 * create by Shine Lee
 *
 *@flow
 */
import React, { Component } from 'react';
import Content from '../../components/content';
import { Button, consts as Widget, Grid, Icon, Progress, Theme } from '@lugia/lugia-web';
import styled from 'styled-components';
import PageHeader from '../../components/page-header';

import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';

const {Row, Col} = Grid;

//上部图表
const FirstContentWrap = styled.div`
  width: 100%;
`;
const GraphContentWrap = styled.div`
  background: #fff;
  margin: 0 14px;
  border-radius: 4px;
`;
const SecContainer = styled.div`
  padding: 24px 18px 34px;
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
  font-weight: 600;
  font-family: PingFangSC-Semibold;
  vertical-align: bottom;
  color: #4D68FF;
  display: flex;
  justify-content: flex-end;
  >.smallFont {
    font-size:16px;
    box-sizing: border-box;
    padding-top: 6px;
  }
`;
const ListItemBottom = styled.div`
  width: 100%;
  line-height: 20px;
`;
const ItemInforProgress = styled.div`
  width: 100%;
  text-align: left;
  > div {
    height: 6px;
    margin-right: 10px;
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

//列表区域
const ListContentWrap = styled.div`
  background: #fff;
  margin: 30px 12px;
  border-radius: 4px;
  background: #F5F5F9;
`;
const ListContent = styled.div`
  font: PingFangSC-Regular;
  font-size: 14px;
  > Row {
    margin-bottom: 20px;
  };
  >div {
    >div {
      padding: 0 15px 30px;
    }
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
  };
  >h3 {
    font-size: 18px;
  }
`;
const IconWrap = styled.div`
  margin:0 auto 12px;;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.excle {
    color: #4D68FF;
  };
  &.pic {
    color: #FAAD14;
  };
  &.person {
    color: #FAAD14;
  };
  &.word {
    color: #7C9EFE;
  };
  &.wenhao {
    color: #FAAD14;
  };
  &.tubiao{
    color: #9DD1FF;
  };
  &.wenjian{
    color: #7C9EFE;
  };
  &.fengjing{
    color: #6FBDFF;
  };
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
const routes = [
  {
    path: '/dashboard/analyse',
    title: '首页',
  },
  {
    title: '列表页',
  },
  {
    title: '卡片列表页',
  },
];

export default class BasicList extends Component {
  constructor(props){
    super(props);
    this.state = null;
  }
  render() {

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
            fontSize: 34,
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
        <PageHeader routes={routes} title={'卡片列表页'} />
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
                      <span className={'smallFont'}>¥</span>
                      <span>109</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={60} status="active" size="small" />
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
                      <span className={'smallFont'}> &nbsp;&nbsp;人</span>
                    </ListItemTopRight>
                  </ListItemTop>
                  <ListItemBottom>
                    <ItemInforProgress>
                      <Progress percent={80} status="active" size="small" />
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
                    </ItemInforProgress>
                  </ListItemBottom>
                </SecContainer>
              </Col>
            </Row>
          </GraphContentWrap>
        </FirstContentWrap>

        {/*下部列表*/}
        <SecContentWrap>
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
                      <IconWrap className={'excle'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_excle" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia用户手册</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>夹心心</span></p>
                      <p>上传时间:&nbsp; <span>2019/04/19</span></p>
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
                      <IconWrap className={'pic'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_word" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia logo</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>雨萌萌</span></p>
                      <p>上传时间:&nbsp; <span>2019/02/12</span></p>
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
                      <IconWrap className={'person'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_group" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia用户调研报告</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>果冻冻</span></p>
                      <p>上传时间:&nbsp; <span>2018/12/30</span></p>
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
                      <IconWrap className={'word'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_word" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品发行工作单</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>翠霞霞</span></p>
                      <p>上传时间:&nbsp; <span>2018/11/09</span></p>
                    </CardContentWrap>
                    <CardEditorBarWrap>
                      <Button type="primary" shape="round">下载</Button>
                      <Button shape="round">删除</Button>
                    </CardEditorBarWrap>
                  </CardContainer>
                </Col>
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
                type="flex"
                justify="spaceBetween"
                align="middle"
              >
                <Col span={6}>
                  <CardContainer>
                    <CardHeaderWrap>
                      <IconWrap className={'wenhao'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_file_unknown" />
                        </Theme>
                      </IconWrap>
                      <h3>Bug错误汇总报告</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>瑞光光</span></p>
                      <p>上传时间:&nbsp; <span>2018/08/02</span></p>
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
                      <IconWrap className={'tubiao'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_histogram" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia产品计划表</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>阵风风</span></p>
                      <p>上传时间:&nbsp; <span>2018/07/28</span></p>
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
                      <IconWrap className={'wenjian'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_filing_cabinet" />
                        </Theme>
                      </IconWrap>
                      <h3>Lugia Desktop</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>李软软</span></p>
                      <p>上传时间:&nbsp; <span>2018/06/14</span></p>
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
                      <IconWrap className={'fengjing'}>
                        <Theme config={view}>
                          <Icon iconClass="lugia-icon-financial_add_pic" />
                        </Theme>
                      </IconWrap>
                      <h3>lugia数据总计</h3>
                    </CardHeaderWrap>
                    <CardContentWrap>
                      <p>上传人: &nbsp; <span>李显显</span></p>
                      <p>上传时间:&nbsp; <span>2018/06/09</span></p>
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
    );
}
}
