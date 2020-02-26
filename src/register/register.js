/**
 *
 * create by lyq
 *
 * @flow
 */
import React from 'react';
import { Button, consts as Widget, Input, Theme, } from '@lugia/lugia-web';
import styled from 'styled-components';
import '../App.css';
import '../assets/iconfonts/index.css';
import loginBg from '../assets/images/backgroundPic.png';
import { getColorCalculate, } from '../components/utils/colorFunction';
import register from '../models/register';
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
  min-width: 73px;
  height: 18px;
  font-size: 14px;
  color: #747e90;
  display: inline-block;
  padding-left: 16px;
  border-left: 1px solid #ccc;
  position: absolute;
  right: 14px;
  top: 12px;
  z-index: 10;
  cursor: pointer;
`;

const RemindIcon = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => (props.type === 'phone' ? '0px' : '4px')};
  top: -6px;
  font-size: ${props => (props.type === 'phone' ? '12px' : '14px')};
  color: #333;
`;

const AutoWrapper = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: left;
`;

const Login = styled.div`
  font-size: 14px;
  color: #747e90;
  margin-bottom: 76px;
`;

const GoLogin = styled.span`
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
  &:hover {
    color: ${getHoverColor};
  }
`;

class Register extends React.Component<> {
  componentDidMount() {
    const windowHeight = document.documentElement.clientHeight;
    this.setState({ windowHeight, });
  }

  render() {
    const { windowHeight = 900, } = this.state || {};
    const iconTheme = {
      [Widget.Icon]: {
        fontSize: 36,
      },
    };
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
    return (
      <Theme config={theme}>
        <LoginContainer height={windowHeight}>
          <LoginInfoBox>
            <WelcomeTitle>欢迎加入洛奇亚</WelcomeTitle>
            <Slogen>这里有一句slogen - 大概长度就这样</Slogen>
            {this.getElement()}
            <Login>
              已经有lugia账号了？ <GoLogin onClick={this.props.goLogin}>返回登录</GoLogin>{' '}
            </Login>
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
      </Theme>
    );
  }

  getElement = () => {
    const { isRegister, } = this.props;
    const theme = {
      [Widget.Input]: {
        width: 340,
        height: 40,
        borderRadius: 20,
        padding: {
          left: 16,
          right: 0,
        },
      },
      [Widget.Button]: {
        margin: {
          top: 18,
          bottom: 24,
          left: 0,
          right: 0,
        },
        width: 340,
      },
    };
    let children;
    if (isRegister) {
      const {
        passWordInfo: { passWord, repeatPassword, },
      } = this.props;
      children = (
        <Theme config={theme}>
          <InputWrapper>
            <Input
              prefix={<RemindIcon className="iconfont  icon-mima" />}
              size={'large'}
              placeholder={'请输入密码'}
              onChange={this.props.onChangePassWord}
            />
            {/*<RemindIcon className='iconfont  icon-user' />*/}
          </InputWrapper>
          <InputWrapper>
            <Input
              prefix={<RemindIcon className="iconfont  icon-mima" />}
              size={'large'}
              type={'password'}
              placeholder={'请再次输入密码'}
              onChange={this.props.onChangeRepeatPassword}
            />
          </InputWrapper>
          <div>
            <Button type="primary" size="large" shape="round" onClick={this.props.doSavePassWord}>
              完 成
            </Button>
          </div>
        </Theme>
      );
    } else {
      children = (
        <Theme config={theme}>
          <InputWrapper>
            <Input
              prefix={<RemindIcon type="phone">+86</RemindIcon>}
              size={'large'}
              placeholder={'请输入您要注册的手机号'}
              onChange={this.props.onChangeCellPhone}
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              size={'large'}
              type={'password'}
              placeholder={'请输入验证码'}
              onChange={this.props.onChangeIdentifyCode}
            />
            <ForgotPwd>获取验证码</ForgotPwd>
          </InputWrapper>
          <div>
            <Button type="primary" size="large" shape="round" onClick={this.props.doRegister}>
              注 册
            </Button>
          </div>
        </Theme>
      );
    }
    return children;
  };
}

const RegisterPage = connect(
  register,
  state => {
    return {
      isRegister: state.get('isRegister'),
      passWordInfo: state.get('passWordInfo'),
    };
  },
  mutations => {
    return {
      doRegister: mutations.asyncDoRegister,
      doSavePassWord: mutations.asyncDoSavePassWord,
      onChangeCellPhone: mutations.onChangeCellPhone,
      onChangeIdentifyCode: mutations.onChangeIdentifyCode,
      onChangeRepeatPassword: mutations.onChangeRepeatPassword,
      onChangePassWord: mutations.onChangePassWord,
      goLogin: mutations.goLogin,
    };
  }
)(Register);

export default () => {
  return <RegisterPage />;
};
