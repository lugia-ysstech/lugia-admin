/**
 *
 * create by Shine Lee
 *
 *@flow
 */
import React, { Component } from 'react';
import Content from '../../components/content';
import {
  Avatar,
  Breadcrumb,
  Button,
  consts as Widget,
  Progress,
  Radio,
  Theme,
} from '@lugia/lugia-web';
import styled from 'styled-components';

import GChartLeft from './charts/basicChartOne';
import GChartMiddle from './charts/basicChartTwo';
import GChartRight from './charts/basicChartThree';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

//上部图表
const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const FirstContentWrap = styled.div`
  width: 100%;
`;
const GraphContentWrap = styled.div`
  height: 258px;
  background: #fff;
  margin: 0 14px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;
const SingleGraphContainer = styled.div`
  height: 258px;
  width: 30%;
`;

//下部列表

//列表项
//控制条
const ListContentWrap = styled.div`
  background: #fff;
  margin: 30px 14px 0;
  border-radius: 4px;
`;
const ActionBar = styled.div`
  height: 65px;
  padding: 20px 14px 13px;
  display: flex;
  justify-content: space-between;
`;
const ListHeader = styled.div`
  width: 100%;
  height: 32px;
  color: #333;
`;
const ListHeaderMark = styled.div`
  width: 6px;
  height: 20px;
  margin-bottom: 4px;
  background: #4d68ff;
  border-radius: 3px;
  display: inline-block;
`;
const ListHeaderContent = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 32px;
  color: #333;
  font: PingFangSC-Medium;
  display: inline-block;
  vertical-align: bottom;
  margin-left: 6px;
`;
const ActionBarLeftWrap = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
  > button {
    width: 96px;
    height: 32px;
    font: PingFangSC-Regular;
    > span {
      > span {
        line-height: 32px;
        color: #4d63ff;
        .jiahao {
          font-size: 25px;
          vertical-align: bottom;
        }
      }
    }
  }
`;
//列表区域
const ListContent = styled.div`
  padding: 0px 14px;
  font: PingFangSC-Regular;
  font-size: 14px;
`;
const ListItemWrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 14px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
`;
const ItemHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const AvatarWrap = styled.div`
  min-width: 300px;
`;
const AvatarInfor = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 43px;
  margin-left: 14px;
  >p: nth-child(1) {
    color: #333;
    line-height: 20px;
  }
  >p: nth-child(2) {
    color: #999;
    line-height: 20px;
  }
`;
const ItemApplicantInfor = styled.div`
  width: 305px;
  margin-right: 40px;
  display: flex;
  justify: space-between;
`;
const ItemApplicantName = styled.div`
  width: 100px;
  margin-right: 40px;
  >p: nth-child(1) {
    color: #666;
    line-height: 20px;
    text-align: center;
  }
  >p: nth-child(2) {
    color: #333;
    line-height: 20px;
    text-align: center;
  }
`;
const ItemApplicantTime = styled.div`
  >p: nth-child(1) {
    color: #666;
    line-height: 20px;
    text-align: left;
  }
  >p: nth-child(2) {
    color: #333;
    line-height: 20px;
    text-align: left;
  }
`;
const ItemInfor = styled.div`
  width: 455px;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;
const ItemInforProgress = styled.div`
  width: 210px;
  height: 16px;
`;
const ItemInforEditor = styled.div`
  color: blue;
  margin-right: 20px;
  &>span: nth-child(2) {
    color: red;
  }
`;

export default class BasicList extends Component {
  constructor(props) {
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
      [Widget.Button]: {
        Container: {
          normal: {
            border: {
              width: 1,
              style: 'solid',
              color: '#4D63FF',
            },
          },
        },
        ButtonText: {
          normal: {
            font: { size: 14, weight: 500 },
            color: '#4D63FF',
          },
        },
      },
      [Widget.RadioGroup]: {
        Container: {
          normal: {
            width: 210,
            height: 32,
            font: {
              size: 14,
            },
            margin: {
              left: 20,
              right: -20,
            },
          },
        },
        //单个按钮属性设置失效
        Radio: {
          theme: {
            Container: {
              normal: {
                width: 70,
              },
            },
          },
        },
      },
      [Widget.Input]: {
        Container: {
          normal: {
            width: 176,
            height: 32,
            fontSize: 14,
          },
        },
        InputPrefix: {
          normal: {
            fontSize: 12,
          },
        },
      },
    };
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: '#e2e2e2' }, margin: 0 } },
      },
    };
    return (
      <Content>
        {/*页头*/}
        <BreadcrumbWrap>
          <Breadcrumb separator={'>'} lastSeparator={''} theme={config}>
            <Breadcrumb.Item href="a">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="b">列表页</Breadcrumb.Item>
            <Breadcrumb.Item href="c">标准列表</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbWrap>

        {/*上部图表*/}
        <FirstContentWrap>
          <GraphContentWrap>
            <SingleGraphContainer>
              <GChartLeft />
            </SingleGraphContainer>
            <SingleGraphContainer>
              <GChartMiddle />
            </SingleGraphContainer>
            <SingleGraphContainer>
              <GChartRight />
            </SingleGraphContainer>
          </GraphContentWrap>
        </FirstContentWrap>
        {/*下部列表*/}
        <ListContentWrap>
          <ActionBar>
            <Theme config={config}>
              <ListHeader>
                <ListHeaderMark />
                <ListHeaderContent>申请列表</ListHeaderContent>
              </ListHeader>
              <ActionBarLeftWrap>
                <Button>
                  <span className={'jiahao'}>+ </span>
                  新增申请
                </Button>
                <RadioGroup childType="button" onChange={this.onChange} defaultValue="1">
                  <RadioButton value="1">全部</RadioButton>
                  <RadioButton value="2">已完成</RadioButton>
                  <RadioButton value="3">未完成</RadioButton>
                </RadioGroup>
              </ActionBarLeftWrap>
            </Theme>
          </ActionBar>
          <ListContent>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia mega Desion</p>
                      <p>lugia mega交互设计师</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>夹心心</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2019/04/18 14:23:04</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={80} showType="inside" status="active" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia Web</p>
                      <p>负责lugia web全栈前端设计</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>李软软</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2019/03/08 11:40:22</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={70} showType="inside" status="error" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia scripts</p>
                      <p>lugia scripts架构</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>阵风风</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2018/12/08 21:23:51</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={100} showType="inside" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia admin</p>
                      <p>lugia admin样式</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>果冻冻</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2017/12/08 12:01:12</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={60} showType="inside" status="active" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia mega desktop </p>
                      <p>lugia mega桌面应用功能研发</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>翠霞霞</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2017/08/18 14:10:41</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={80} showType="inside" status="active" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>洛奇亚组件库</p>
                      <p>lugia组件库研发</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>瑞光光</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2017/04/14 10:31:43</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={80} showType="inside" status="active" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
            <ListItemWrap>
              <ItemHeader>
                <AvatarWrap>
                  <Theme config={view}>
                    <Avatar shape={'square'} size={'large'} name={'lugia'} />
                    <AvatarInfor>
                      <p>Lugia web design</p>
                      <p>lugia web官网交互设计</p>
                    </AvatarInfor>
                  </Theme>
                </AvatarWrap>
                <ItemApplicantInfor>
                  <ItemApplicantName>
                    <p>申请人</p>
                    <p>雨萌萌</p>
                  </ItemApplicantName>
                  <ItemApplicantTime>
                    <p>申请时间</p>
                    <p>2014/03/17 05:12:30</p>
                  </ItemApplicantTime>
                </ItemApplicantInfor>
              </ItemHeader>
              <ItemInfor>
                <ItemInforProgress>
                  <Progress percent={30} showType="inside" status="active" />
                </ItemInforProgress>
                <ItemInforEditor>
                  <span>编辑 | </span>
                  <span>删除</span>
                </ItemInforEditor>
              </ItemInfor>
            </ListItemWrap>
          </ListContent>
        </ListContentWrap>
      </Content>
    );
  }
}
