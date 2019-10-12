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
  width: 100%;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  text-align: left;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  font-size: 10px;
  margin: 0 10px;
`;
const Operation = styled.td`
  display: inline-block;
  text-align: left;
  font-size: 10px;
  color: #4d63ff;
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
        height: 160,
        margin: {
          top: 30
        },
        background:{
          color:"#f6f6f6"
        }
      }
    },
    CardTitle: {
      normal: {
        fontSize: 14,
        margin: {
          top: 10
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
        fontSize: 56,
        color: "#f22735"
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
              <Icon iconClass={"lugia-icon-reminder_close_circle"} />
            </Theme>
            <SuccessText>{"提交失败"}</SuccessText>
            <SuccessDesText>
              {"请核对并修改以下信息后，再重新提交。"}
            </SuccessDesText>
          </ContentContainer>
          <Theme config={cardThemeConfig}>
            <Card
              title={"您提交的内容有如下错误："}
              description={
                <CardContentContainer>
                  <TitleContainer>
                    <Icon iconClass={"lugia-icon-reminder_close_circle_o"} />
                    <Title> {"您的账户已被冻结"}</Title>
                    <Operation> {"立即解冻>"}</Operation>
                  </TitleContainer>
                  <TitleContainer>
                    <Icon iconClass={"lugia-icon-reminder_close_circle_o"} />
                    <Title> {"您的账户还不具备申请资格"}</Title>
                    <Operation> {"立即解冻>"}</Operation>
                  </TitleContainer>
                </CardContentContainer>
              }
            />
          </Theme>
          <CardContentContainer>
            <Theme config={buttonView}>
              <Button type={"primary"}>{"返回修改"}</Button>
            </Theme>
          </CardContentContainer>
        </PageContent>
      </Content>
    );
  }
}
