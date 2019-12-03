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
  Breadcrumb
} from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import { connect } from "@lugia/lugiax";
import failed from "../../models/result/failed";

const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;
const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const CardOutWrap = styled.div`
  width: 80%;
  min-width: 600px;
  height: 133px;
  margin: 20px auto;
  background: #F8F8F8;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
  position: relative;
  top: -14px;
`;
const TitleContainer = styled.div`
  width: 100%;
  vertical-align: inherit;
  border-color: inherit;
  color: #333;
  text-align: left;
  margin:15px 0;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  font-size: 14px;
  margin: 0 10px;
`;
const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  line-height: 33px;
  color: #333;
`;
const SuccessDesText = styled.div`
  line-height: 20px;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 122px;
  text-align: center;
`;

class failedDemo extends Component {
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
    const cardThemeConfig = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: "100%",
            height: '100%',
            background:{
              color:"#f6f6f6"
            },
            padding: {
              top: 4,
              right: 141,
              left: 141,
            },
            border: 'none',
            boxShadow: 'none'
          },
        },
        CardTitle: {
          normal: {
            fontSize: 18,
            font:{
              weight: 600
            },
            margin: {
              top: 0
            }
          }
        }
      },
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 10,
            color: "#f22735"
          }
        }
      }
    };
    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 88,
            color: "#f22735",
            margin: {
              top: 76
            }
          }
        }
      }
    };
    const buttonView = {
      [Widget.Button]: {
        Container: {
          normal: {
            width: 80,
            height: 32
          }
        }
      }
    };

    return (
      <Content>
        {/*页头*/}
        <BreadcrumbWrap>
          <Breadcrumb separator={'>'} lastSeparator={''} theme={config}>
            <Breadcrumb.Item href="a">首页</Breadcrumb.Item>
            <Breadcrumb.Item href="b">结果页</Breadcrumb.Item>
            <Breadcrumb.Item href="c">失败页</Breadcrumb.Item>
          </Breadcrumb>
        </BreadcrumbWrap>
        {/*内容*/}
        <PageContent>
          <ContentContainer>
            <Theme config={iconTheme}>
              <Icon iconClass={"lugia-icon-reminder_close_circle"} />
              <SuccessText>{"提交失败"}</SuccessText>
              <SuccessDesText>
                {"请核对并修改以下信息后，再重新提交。"}
              </SuccessDesText>
            </Theme>
          </ContentContainer>
          <CardOutWrap>
            <Theme config={cardThemeConfig}>
              <Card
                title={"您提交的内容有如下错误："}
                description={
                  <CardContentContainer>
                    <TitleContainer>
                      <Icon iconClass={"lugia-icon-reminder_close_circle_o"} />
                      <Title> {"您的账户已被冻结"}</Title>
                    </TitleContainer>
                    <TitleContainer>
                      <Icon iconClass={"lugia-icon-reminder_close_circle_o"} />
                      <Title> {"您的账户还不具备申请资格"}</Title>
                    </TitleContainer>
                  </CardContentContainer>
                }
              />
            </Theme>
          </CardOutWrap>
          <FooterWrap>
            <Theme config={buttonView}>
              <Button type={"primary"} shape={'round'} onClick={this.props.goBack}>{"返回修改"}</Button>
            </Theme>
          </FooterWrap>
        </PageContent>
      </Content>
    );
  }
}

const FailedPage = connect(
  failed,
  mutations => {
    return {
      goBack: mutations.goBack,
    };
  }
)(failedDemo);

export default () => {
  return <FailedPage />;
};
