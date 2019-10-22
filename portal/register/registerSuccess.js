/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import Content from "../components/content";
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
import { connect } from "@lugia/lugiax";
import registerSuccess from "../models/registerSuccess";

const TitleContainer = styled.div`
  height: 40px;
  display: inline-block;
`;
const Title = styled.span`
  position: relative;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 24px;
  margin-left: 10px;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
  margin-top: 80px;
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

const iconTheme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 56,
        color: "#56c22d"
      }
    }
  }
};

class SuccessDemo extends Component {
  render() {
    const { registerInfo } = this.props;
    const account =
      registerInfo && registerInfo.account
        ? registerInfo.account
        : "123456@lugia.com";
    return (
      <div>
        <CardContentContainer>
          <TitleContainer>
            <img
              style={{
                height: 40,
                lineHeight: "40px",
                verticalAlign: "middle"
              }}
              src={
                "https://lugia.oss-cn-beijing.aliyuncs.com/static/lugia-logo.3376ef06.png"
              }
            />
          </TitleContainer>
          <Title> Lugia Design</Title>
          <SuccessDesText>
            Lugia Design 是大中华区最具影响力的 Web 设计规范
          </SuccessDesText>
        </CardContentContainer>

        <Content>
          <CardContentContainer>
            <Theme config={iconTheme}>
              <Icon iconClass={"lugia-icon-reminder_check_circle"} />
            </Theme>
            <SuccessText>{`你的账户: ${account} 注册成功`}</SuccessText>
            <SuccessDesText>
              {
                "激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。"
              }
            </SuccessDesText>
          </CardContentContainer>
          <CardContentContainer>
            <Theme config={buttonView}>
              <Button type={"primary"} onClick={this.props.goEmail}>
                {"查看邮箱"}
              </Button>
              <Button onClick={this.props.onBack}>{"返回首页"}</Button>
            </Theme>
          </CardContentContainer>
        </Content>
      </div>
    );
  }
}
const RegisterSuccessPage = connect(
  registerSuccess,
  state => {
    return {
      registerInfo: state.get("registerInfo")
    };
  },
  mutations => {
    return {
      onBack: mutations.onBack,
      goEmail: mutations.goEmail
    };
  }
)(SuccessDemo);

export default () => {
  return <RegisterSuccessPage />;
};
