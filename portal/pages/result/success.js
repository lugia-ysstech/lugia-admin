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
  Tabs,
  Avatar,
  Input,
  Button,
  Select,
  Icon,
  Card,
  Steps
} from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";

const Step = Steps.Step;

const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
  margin-top: 20px;
`;
const TitleContainer = styled.tr`
  display: table-row;
  border-color: inherit;
`;
const DesContainer = styled.table`
  width: 100%;
  table-layout: fixed;
  margin-bottom: 20px;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  width: 33%;
`;
const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;
const SuccessDesText = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: gray;
  margin-bottom: 40px;
`;

const buttonView = {
  [Widget.Button]: {
    Container: {
      normal: {
        margin: {
          right: 10
        }
      }
    }
  }
};

const cardThemeConfig = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: "100%",
        height: 260,
        margin: {
          top: 30
        },
        background: {
          color:"#f6f6f6"
        }
      }
    },
    CardTitle: {
      normal: {
        height: 30,
        fontSize: 20,
        margin: {
          top: 20
        }
      }
    }
  },
  [Widget.Step]: {
    StepDescription: {
      normal: {
        width:200
      }
    }
  }
};

const iconTheme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 56,
        color: "#56c22d",
      }
    }
  }
};

export default class Demo extends Component {
  render() {
    return (
      <Content>
        <PageContent>
          <ContentContainer>
              <Theme config={iconTheme}>
                <Icon iconClass={"lugia-icon-reminder_check_circle"} />
              </Theme>
            <SuccessText>{"提交成功"}</SuccessText>
            <SuccessDesText>
              {
                "提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。"
              }
            </SuccessDesText>
          </ContentContainer>
          <Theme config={cardThemeConfig}>
            <Card
              title={"项目名称"}
              content={
                <CardContentContainer>
                  <DesContainer>
                    <TitleContainer>
                      <Title> {"项目Id:  23421"}</Title>
                      <Title> {"负责人:  23421"}</Title>
                      <Title> {"生效时间 : 2016-12-12 ~ 2017-12-12"}</Title>
                    </TitleContainer>
                  </DesContainer>
                  <Steps orientation="horizontal" stepType={"dot"} desAlign={'center'}>
                    <Step
                      title="创建项目"
                      stepStatus="finish"
                      description={
                        [
                          <div>{"曲丽丽"}</div>,
                          <div>{"2016-12-12 12:32"}</div>]
                      }
                    />
                    <Step
                      description={
                        <desContainer>
                          <div>{"周毛毛"}</div>
                        </desContainer>
                      }
                      title="部门初审"
                      stepStatus="finish"
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
          <CardContentContainer>
            <Theme config={buttonView}>
              <Button type={"primary"}>{"返回列表"}</Button>
              <Button>{"查看项目"}</Button>
              <Button>{"打印"}</Button>
            </Theme>
          </CardContentContainer>
        </PageContent>
      </Content>
    );
  }
}
