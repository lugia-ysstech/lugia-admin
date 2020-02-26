/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import { Button, consts as Widget, Input, Radio, Theme, } from '@lugia/lugia-web';
import styled from 'styled-components';
import '../App.css';
import '../assets/iconfonts/index.css';
import loginBg from '../assets/images/backgroundPic.png';
import { getColorCalculate, } from '../components/utils/colorFunction';
import login from '../models/login';
import { connect, } from '@lugia/lugiax';

const LoginContainer = styled.div`
  min-height: ${props => props.height}px;
  background: url(${loginBg}) no-repeat center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInfoBox = styled.div`
  width: 440px;
  height: 600px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0 16px;
  background: #fff;
  padding: 75px 50px 50px;
  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif;
  text-align: center;
`;

const WelcomeTitle = styled.div`
  font-size: 30px;
  height: 42px;
  color: #50575d;
  line-height: 42px;
`;

const Slogen = styled.div`
  font-size: 14px;
  height: 20px;
  color: #50575d;
  line-height: 20px;
  margin: 14px 0 56px;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: inline-block;
  position: relative;
  margin-bottom: 20px;
`;

const ForgotPwd = styled.div`
  width: 73px;
  height: 18px;
  font-size: 14px;
  color: #747e90;
  display: inline-block;
  padding-left: 16px;
  border-left: 1px solid #ccc;
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 10;
  cursor: pointer;
`;

const RemindIcon = styled.div`
  display: inline-block;
  position: absolute;
  left: 4px;
  top: -6px;
  font-size: 14px;
  color: #333;
`;

const AutoWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: left;
`;

const Register = styled.div`
  font-size: 14px;
  color: #747e90;
  margin-bottom: 76px;
`;

const GoRegister = styled.span`
  font-size: 14px;
  color: #4d63ff;
  text-decoration: underline;
  cursor: pointer;
`;

const QuickLoginWrapper = styled.div`
  width: 100%;
  font-size: 36px;
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const getColor = props => {
  const { type, } = props;
  switch (type) {
    case 'wechat':
      return '#50B674';
    case 'QQ':
      return '#68A5E1';
    case 'weibo':
      return '#EA5D5C';
    case 'dingding':
      return '#5DA6FB';
    default:
      return '#333';
  }
};

const getHoverColor = props => {
  return `${getColorCalculate(getColor(props), -40, 'hex')};`;
};

const QuickLoginIcon = styled.i`
  color: ${getColor};
  cursor: pointer;
  &:hover {
    color: ${getHoverColor};
  }
`;

class Login extends React.Component<> {
  componentDidMount() {
    const windowHeight = document.documentElement.clientHeight;
    this.setState({ windowHeight, });
  }

  render() {
    const { windowHeight = 900, } = this.state || {};
    const { autoSignIn, } = this.props;
    const theme = {
      [Widget.Input]: {
        Input: {
          normal: {
            width: 340,
            height: 40,
            borderRadius: 20,
            padding: {
              left: 30,
              right: 0,
            },
          },
        },
        InputSuffix: { normal: { fontSize: 36, }, },
      },
      [Widget.Button]: {
        Container: {
          normal: {
            margin: {
              top: 18,
              bottom: 24,
              left: 0,
              right: 0,
            },
            width: 340,
          },
        },
      },
    };
    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 36,
          },
        },
      },
    };
    return (
      <LoginContainer height={windowHeight}>
        <LoginInfoBox>
          <WelcomeTitle>欢迎使用洛奇亚</WelcomeTitle>
          <Slogen>这里有一句slogen - 大概长度就这样</Slogen>
          <Theme config={theme}>
            <InputWrapper>
              <Input
                prefix={<RemindIcon className="iconfont  icon-user1" />}
                size={'large'}
                placeholder={'手机号或邮箱账号 -- admin'}
                onChange={this.props.onChangeUserName}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                prefix={<RemindIcon className="iconfont  icon-mima" />}
                size={'large'}
                type={'password'}
                placeholder={'密码  --123'}
                onChange={this.props.onChangePassWord}
              />
              <ForgotPwd>忘记密码</ForgotPwd>
            </InputWrapper>
            <AutoWrapper>
              <Radio
                value="1"
                checked={autoSignIn}
                onChange={(e, val) => this.props.onChangeAutoSignIn(val)}
              >
                自动登录
              </Radio>
            </AutoWrapper>
            <div>
              <Button type="primary" size="large" shape="round" onClick={this.props.doLogin}>
                登 录
              </Button>
            </div>
          </Theme>
          <Register>
            还没有lugia账号？ <GoRegister onClick={this.props.goRegister}>马上注册</GoRegister>{' '}
          </Register>
          <Theme config={iconTheme}>
            <QuickLoginWrapper>
              <QuickLoginIcon className="iconfont  icon-logo-wechat" type="wechat" />
              <QuickLoginIcon className="iconfont  icon-QQ" type="QQ" />
              <QuickLoginIcon className="iconfont  icon-logo-weibo" type="weibo" />
              <QuickLoginIcon className="iconfont  icon-dingding" type="dingding" />
            </QuickLoginWrapper>
          </Theme>
        </LoginInfoBox>
      </LoginContainer>
    );
  }
}

const LoginPage = connect(
  login,
  state => {
    return {
      loginInfo: state.get('loginInfo'),
      autoSignIn: state.get('autoSignIn'),
    };
  },
  mutations => {
    return {
      doLogin: mutations.asyncDoLogin,
      onChangeUserName: mutations.onChangeUserName,
      onChangePassWord: mutations.onChangePassWord,
      onChangeAutoSignIn: mutations.onChangeAutoSignIn,
      showMessage: mutations.showMessage,
      goRegister: mutations.goRegister,
    };
  }
)(Login);

export default () => {
  return <LoginPage />;
};
