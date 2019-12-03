/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import Content from "../../components/content";
import PageContent from "../../components/page-content";
import {
  Theme,
  Button,
  Icon,
  Card,
  Steps,
  Breadcrumb
} from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import { connect } from "@lugia/lugiax";
import success from "../../models/result/success";

const Step = Steps.Step;

const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;
export const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
`;
const SuccessDesTextWrap = styled.div`
  width: 50%;
  line-height: 20px;
  min-width: 740px;
  margin: 10px auto;
  margin-bottom: 0;
  font-size: 14px;
  color: #666;
`;
const SuccessDesText = styled.p`
  line-height: 20px;
`;
const PorcessContentWrap = styled.div`
  width: 940px;
  margin: 0 auto;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 115px;
  display: inline-block;
  text-align: left;
  margin-top: 17px;
  padding-left: 140px;
`;
const DesContainer = styled.table`
  width: 100%;
  table-layout: fixed;
  margin-bottom: 24px;
`;
const TitleContainer = styled.tr`
  display: table-row;
  border-color: inherit;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  width: 200px;
  &.time{
    width: 300px;
  }
  &> span{
    font-weight: 600;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  padding-top: 20px;
  text-align: center;
`;

const cardThemeConfig = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: "100%",
        height: 237,
        margin: {
          top: 24
        },
        padding: {
          left: 0
        },
        border: 'none',
        boxShadow: 'none',
        background: {
          color:"#F8F8F8"
        }
      }
    },
    CardTitle: {
      normal: {
        height: 25,
        font: {
          size: 18,
          weight: 600
        },
        margin: {
          top: 4,
          left: 130
        }
      }
    }
  },
  [Widget.Steps]:{
    StepOutContainer:{
      normal: {
        width: 200,
        margin: {
          left: 30
        }
      }
    }
  },
  [Widget.Step]: {
    StepOutContainer:{
      normal: {
        width: 210
      }
    },
    StepDescription: {
      normal: {
        width:200,
        fontSize: 12,
        color: '#666',
        margin: {
          top: 13
        },
      }
    }
  }
};
const buttonView = {
  [Widget.Button]: {
    Container: {
      normal: {
        width: 80,
        height: 32,
        margin: {
          right: 20
        }
      }
    }
  }
};

const iconTheme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 88,
        color: "#56c22d",
        margin: {
          top: 74
        }
      }
    }
  }
};

 class ResultSuccess extends Component {
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
    return (
      <Content>
        {/*页头*/}
        <BreadcrumbWrap>
          <Breadcrumb separator={'>'} lastSeparator={''} theme={config}>
            <Breadcrumb.Item href="a">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="b">结果页</Breadcrumb.Item>
            <Breadcrumb.Item href="c">成功页</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbWrap>
        {/*页中内容*/}
        <PageContent>
          {/*成功信息*/}
          <ContentContainer>
              <Theme config={iconTheme}>
                <Icon iconClass={"lugia-icon-reminder_check_circle"} />
                <SuccessText>{"提交成功"}</SuccessText>
                <SuccessDesTextWrap>
                  <SuccessDesText>
                    提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。
                  </SuccessDesText>
                  <SuccessDesText>
                    本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容
                  </SuccessDesText>
                </SuccessDesTextWrap>
              </Theme>
          </ContentContainer>
          {/*流程信息*/}
          <PorcessContentWrap>
            <Theme config={cardThemeConfig}>
              <Card
                title={"项目名称"}
                content={
                  <CardContentContainer>
                    <DesContainer>
                      <TitleContainer>
                        <Title>
                          <span>{"项目Id: "}</span>
                          {"12323"}
                        </Title>
                        <Title>
                          <span>{"负责人:  "}</span>
                          {"夹心心"}
                        </Title>
                        <Title className={'time'}>
                          <span>{"生效时间:  "}</span>
                          {"2018-12-12 ~ 2018-12-30"}
                        </Title>
                      </TitleContainer>
                    </DesContainer>
                    <Steps orientation="horizontal" size={'normal'} desAlign={'center'}>
                      <Step
                        title="创建任务"
                        stepStatus="process"
                        description={
                          [
                            <div>{"曲丽丽"}</div>,
                            <div>{"2016-12-12 12:32"}</div>
                          ]
                        }
                      />
                      <Step
                        description={
                          <desContainer>
                            <div>{"周毛毛"}</div>
                          </desContainer>
                        }
                        title="部门初审"
                        stepStatus="next"
                      />
                      <Step
                        title="财务复核"
                        stepStatus="wait"
                      />
                      <Step title="完成" stepStatus="wait"  />
                    </Steps>
                  </CardContentContainer>
                }
              />
            </Theme>
          </PorcessContentWrap>
          {/*页脚*/}
          <FooterContainer>
            <Theme config={buttonView}>
              <Button type={"primary"} shape={'round'} onClick={this.props.goBack}>{"返回列表"}</Button>
              <Button shape={'round'} onClick={this.props.goDetails}>{"查看项目"}</Button>
              <Button shape={'round'} onClick={this.props.doPrint}>{"打印"}</Button>
            </Theme>
          </FooterContainer>
        </PageContent>
      </Content>
    );
  }
}

const SuccessPage = connect(
  success,
  mutations => {
    return {
      goBack: mutations.goBack,
      goDetails: mutations.goDetails,
      doPrint: mutations.doPrint,
    };
  }
)(ResultSuccess);

export default () => {
  return <SuccessPage />;
};
