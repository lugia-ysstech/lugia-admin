/**
 *
 * create by Shine Lee
 *
 *@flow
 */
import React, { Component } from "react";
import Content from "../../components/content";
import { Breadcrumb, consts as Widget, Button, Radio, Input, Icon, Avatar, Theme, Progress } from "@lugia/lugia-web";
import styled from "styled-components";

import GChartOne from "./charts/basicChartOne";
import GChartTwo from "./charts/basicChartTwo";
import GChartThree from "./charts/basicChartThree";

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
const SecContainer = styled.div`
  height: 258px;  
  width: 30%;
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

//列表项
//控制条
const ListContentWrap = styled.div`
  background: #fff;
  margin: 0 14px;
  border-radius: 4px;
`;
const ActionBar = styled.div`
  height: 65px;
  padding: 20px 14px;
  display: flex;
  justify-content: space-between;
  > Button {
    width: 120px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid #ccc;
    text-align: center;
    font: PingFangSC-Regular;
    line-height: 22px;
    color: #666;
  }
`;
const ActionBarLeftWrap = styled.div`
  display: flex;
  justify-content: right;
  font-size: 14px;
`;
const InputWrapper = styled.div`
  margin-left: 8px;
  display: inline-block;
  font-size: 14px;
`;
//列表区域
const ListContent = styled.div`
  padding: 14px 14px;
  font: PingFangSC-Regular;
  font-size: 14px;
`;
const ListItemWrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 14px 14px;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  justify-content: space-between;
`;
const ItemHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const AvatarWrap = styled.div`
  min-width: 200px;
`;
const AvatarInfor = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 150px;
  height: 43px;
  margin-left: 7px;
  > p {
    line-height: 20px;
  }
`;
const ItemApplicantInfor = styled.div`
  width: 305px;
  display: flex;
  justify: space-between;
`;
const ItemApplicantName = styled.div`
  width: 100px;
  & > p {
    line-height: 20px;
    text-align: center;
  }
`;
const ItemApplicantTime = styled.div`
    & > p {
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
  width: 188px;
  height: 16px;
`;
const ItemInforEditor = styled.div`
  color: blue;
  & > span: nth-child(2) {
    color: red;
  }
`;

class SearchIcon extends React.Component<IconProps> {
  static displayName = Widget.SearchIcon;
  render() {
    return (
      <Icon
        iconClass="lugia-icon-financial_search"
        key="refresh"
        {...this.props}
      />
    );
  }
}

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
      [Widget.Button]: {
        ButtonText: {
          normal: {
            font: {size: 16, weight: 500},
          }
        }
      },
      [Widget.RadioGroup]: {
        Container: {
          normal: {
            // width: 209,
            height: 32
          }
        },
        //单个按钮属性设置失效
        Radio: {
          theme: {
            Container: {
              normal: {
                width: 70
              }
            }
          }
        }
      },
      [Widget.Input]: {
        Container: {
          normal: {
            width: 176,
            height: 32,
            fontSize: 14
          }
        },
        InputPrefix: {
          normal: {
            fontSize: 12
          }
        }
      }
    };
    const view = {
      [Widget.Avatar]: {
        Container: { normal: { background: { color: "#e2e2e2" }, margin: 0 } }
      }
    };
    return(
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
            <SecContainer>
              <GChartOne/>
            </SecContainer>
            <SecContainer>
              <GChartTwo/>
            </SecContainer>
            <SecContainer>
              <GChartThree/>
            </SecContainer>
          </GraphContentWrap>
        </FirstContentWrap>

        {/*下部列表*/}
        <SecContentWrap>
          {/*表头*/}
          <ListHeader>
            <ListHeaderMark />
            <ListHeaderContent>申请列表</ListHeaderContent>
          </ListHeader>
          {/*列表项*/}
          <ListContentWrap>
            <ActionBar>
              <Theme config={config}>
                <Button>
                  <span style={{fontSize: 26,verticalAlign: 'text-bottom'}}>+ </span>
                  新增申请
                </Button>
              </Theme>
              <ActionBarLeftWrap>
                <Theme config={config}>
                  <RadioGroup childType="button" onChange={this.onChange} defaultValue="1">
                    <RadioButton value="1">全部</RadioButton>
                    <RadioButton value="2">已完成</RadioButton>
                    <RadioButton value="3">未完成</RadioButton>
                  </RadioGroup>
                  <InputWrapper>
                    <Input viewClass="register" prefix={<SearchIcon />} placeholder={'搜索内容'} />
                  </InputWrapper>
                </Theme>
              </ActionBarLeftWrap>
            </ActionBar>
            <ListContent>
              <ListItemWrap>
                <ItemHeader>
                  <AvatarWrap>
                    <Theme config={view}>
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
              <ListItemWrap>
                <ItemHeader>
                  <AvatarWrap>
                    <Theme config={view}>
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
                      <Avatar shape={"square"} size={"large"} name={"lugia"} />
                      <AvatarInfor>
                        <p>标题一</p>
                        <p>ysstech.com</p>
                      </AvatarInfor>
                    </Theme>
                  </AvatarWrap>
                  <ItemApplicantInfor>
                    <ItemApplicantName>
                      <p>申请人</p>
                      <p>洛奇亚</p>
                    </ItemApplicantName>
                    <ItemApplicantTime>
                      <p>申请时间</p>
                      <p>2018-08-08 12:00:00</p>
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
        </SecContentWrap>

      </Content>
    )}
}
