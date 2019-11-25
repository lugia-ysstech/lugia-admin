/**
 *
 * create by ligx
 *
 * @flow
 */
import React from "react";
import { go, Link } from "@lugia/lugiax-router";
import { Icon, Avatar, Popover ,Theme, consts as Widget,Input} from "@lugia/lugia-web";
import { getBorder, getBoxShadow,getBorderRadius } from '@lugia/theme-utils';
import styled from "styled-components";

const HeaderContainer = styled.div`
  height: 60px;
  background: #ffffff;
  position: relative;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  z-index: 100;
`;

const SwitchMenuListButton = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #999999;
`;

const ActionListContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 60px;
`;

const InputWrap = styled.div`
  height: 32px;
  border-radius: 30px;
  padding: 0 10px;
  display: inline-block;
  position: relative;
  top: 54%;
  transform: translateY(-60%);
`;


const InputContainer = styled.div`
  display: inline-block;
`;

const CommonIconWrap = styled.div`
  width: 24px;
  height: 24px;
  font-size: 21px;
  color: #999999;
  display: inline-block;
  position: relative;
  top: 50%;
  margin-left: 26px;
  transform: translateY(-50%);
`;

const AvatarWrap = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  vertical-align: top;
  cursor: pointer;
  margin-left: 26px;
`;

const theme= {
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 32,
        width: 32,
        boxShadow:' 0 0 1px 1px  red'
      },
    },
  },
};
const inputTheme= {
  [Widget.Input]: {
    Container: {
      normal: {
        height: 32,
        width: 200,
        borderRadius:getBorderRadius(28),
        border: getBorder({width: 1,color:'transparent'}),
        background: {
          color: '#f5f5f9'
        }
      },
      hover: {
        borderRadius:getBorderRadius(28)
      },
    },
    Placeholder: {
      normal: {
        color: '#ccc',
      },
    },
    InputPrefix: {
      normal: {
        fontSize: 14,
      },
    },
  },
};
const iconTheme= {
  [Widget.Icon]: {
    Icon: {
      normal: {

      },
      hover: {
        color: '#4d63ff'
      },
    },
  },
};

export default class Header extends React.Component<> {
  render() {
    return (
      <HeaderContainer>
        <SwitchMenuListButton>
          <Icon iconClass="lugia-icon-direction_menu_food" />
        </SwitchMenuListButton>
        <ActionListContainer>
          <InputWrap>
            <InputContainer>
              <Theme config={inputTheme}>
                <Input placeholder={"站内搜索"}  prefix={<Icon
                  iconClass="lugia-icon-financial_search"
                />} />
              </Theme>
            </InputContainer>
          </InputWrap>

          <Theme config={iconTheme}>
            <CommonIconWrap>
              <Popover
                placement="bottom"
                action={"hover"}
                description={[
                  <div onClick={e => this.goDoc()}>使用文档</div>
                ]}
                showClearButton={false}
              >
                <div>
                  <Icon iconClass="lugia-icon-financial_folder_open" />
                </div>
              </Popover>
            </CommonIconWrap>

            <CommonIconWrap>
              <Popover
                placement="bottom"
                action={"hover"}
                description={
                  <div onClick={e => this.goPersonalCenter()}>个人中心</div>
                }
                showClearButton={false}
              >
                <div>
                  <Icon iconClass="lugia-icon-financial_home" />
                </div>
              </Popover>
            </CommonIconWrap>

            <CommonIconWrap>
              <Popover
                placement="bottom"
                action={"hover"}
                description={[
                  <div onClick={e => this.goSetting()}>个人设置</div>,
                ]}
                showClearButton={false}
              >
                <div>
                  <Icon iconClass="lugia-icon-financial_setting" />
                </div>
              </Popover>
            </CommonIconWrap>
          </Theme>

          <AvatarWrap>
            <Theme config={theme}>
              <Popover
                placement="bottom"
                action={"hover"}
                description={[
                  <div onClick={e => this.onClick()}>退出登陆</div>
                ]}
                showClearButton={false}
              >
                <div>
                  <Avatar
                    shape={"circle"}
                    src="http://192.168.102.73:8081/BigFrontend/Work/ued/lugia/raw/master/lugiaweb%E7%BB%84%E4%BB%B6/%E5%A4%B4%E5%83%8F/32.jpg"
                    msgNum={99}
                    size={"small"}
                    type={'img'}
                  />
                </div>
              </Popover>
            </Theme>

          </AvatarWrap>
        </ActionListContainer>
      </HeaderContainer>
    );
  }

  onClick = () => {
    go({ url: "/login" });
  };
  goDoc = () => {
    go({ url: "/login" });
  };
  goPersonalCenter = () => {
    go({ url: "/login" });
  };
  goSetting = () => {
    go({ url: "/login" });
  };
}
