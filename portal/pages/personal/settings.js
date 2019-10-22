/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import PageContent from "../../components/page-content";
import Content from "../../components/content";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import {
  Theme,
  Tabs,
  Avatar,
  Input,
  Button,
  Select,
  Switch,
  Icon,
  Divider,
  Upload
} from "@lugia/lugia-web";
import { connect } from "@lugia/lugiax";
import setting from "../../models/personal/center";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: inline-flex;
`;
const InnerContainer = styled.div`
  width: 400px;
  height: 1000px;
  display: block;
`;
const RightContainer = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
`;
const TabsContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const OutContainer = styled.ul`
  height: 100%;
  list-style: none;
`;
const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 0;
  height: 80px;
`;
const ItemInnerContainer = styled.div`
  flex: 1 1;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: block;
  font-size: 14px;
  margin: 10px 0;
`;
const OperationText = styled.div`
  flex: 0 0 auto;
  margin-left: 48px;
  padding: 0;
  list-style: none;
  height: 25px;
  line-height: 25px;
  color: #4d63ff;
`;
const TitleText = styled.div`
  display: block;
  height: 25px;
  line-height: 25px;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;

class Setting extends Component {
  render() {
    const {
      onEmailChange,
      onNameChange,
      onPersonDescChange,
      onStreetChange,
      onAreaCodeChange,
      onTelNumberChange,
      onCountryChange,
      onProvinceChange,
      onCityChange
    } = this.props;
    const safeItems = [
      {
        title: "账户密码",
        desc: "当前密码强度 :强",
        operationText: "修改"
      },
      {
        title: "密保手机",
        desc: "已绑定手机 :123456789123",
        operationText: "修改"
      },
      {
        title: "密保问题",
        desc: "未设置密保问题,密保问题可有效保护账户安全",
        operationText: "设置"
      },
      {
        title: "备用邮箱",
        desc: "已绑定邮箱 :123456897@125.com",
        operationText: "修改"
      },
      {
        title: "MFA设备",
        desc: "未绑定MFA设备,绑定后.可以二次确认",
        operationText: "绑定"
      }
    ];
    const idItems = [
      {
        icon: "lugia-icon-financial_tools",
        title: "绑定淘宝",
        desc: "当前未绑定淘宝 ",
        operationText: "绑定"
      },
      {
        icon: "lugia-icon-financial_group",
        title: "绑定支付宝",
        desc: "当前未绑定淘宝 ",
        operationText: "绑定"
      },
      {
        icon: "lugia-icon-financial_pic_left",
        title: "绑定钉钉",
        desc: "当前未绑定淘宝 ",
        operationText: "绑定"
      }
    ];
    const msgItems = [
      {
        title: "账户密码",
        desc: "其他用户的消息将以站内信的形式通知 ",
        hasSwitch: true
      },
      {
        title: "账户密码",
        desc: "其他用户的消息将以站内信的形式通知 ",
        hasSwitch: true
      },
      {
        title: "账户密码",
        desc: "其他用户的消息将以站内信的形式通知 ",
        hasSwitch: true
      }
    ];

    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 40,
            padding: 10
          }
        }
      }
    };
    const avatarConfig = {
      [Widget.Avatar]: {
        SrcAvatar: { normal: { width: 160, height: 160 } }
      }
    };

    const getItem = data => () => {
      return data.map(item => {
        const { title, desc, operationText, icon, hasSwitch } = item;
        const leftIcon = icon ? (
          <Theme config={iconTheme}>
            <Icon iconClass={icon} />
          </Theme>
        ) : null;
        const Operation = operationText ? (
          <OperationText> {operationText}</OperationText>
        ) : hasSwitch ? (
          <Switch />
        ) : null;
        return [
          <ItemContainer>
            {leftIcon}
            <ItemInnerContainer>
              <TitleText>{title}</TitleText>
              <TitleText>{desc}</TitleText>
            </ItemInnerContainer>
            {Operation}
          </ItemContainer>,
          <Divider />
        ];
      });
    };
    const getInputItem = data => () => {
      return data.map(item => {
        const {
          hasTitle = true,
          title,
          inputPlaceholder,
          inputConfig,
          onChange
        } = item;
        return [
          hasTitle && <Title> {title}</Title>,
          <ItemInnerContainer>
            <Theme config={inputConfig}>
              <Input placeholder={inputPlaceholder} onChange={onChange} />
            </Theme>
          </ItemInnerContainer>
        ];
      });
    };
    const getSelectItem = data => () => {
      return data.map(item => {
        const {
          hasTitle = true,
          title,
          selectData,
          selectDefaultValue,
          selectConfig
        } = item;
        return [
          hasTitle && <Title> {title}</Title>,
          <ItemInnerContainer>
            <Theme config={selectConfig}>
              <SelectContainer>
                <Select
                  createPortal
                  data={selectData}
                  displayField={"label"}
                  defaultValue={selectDefaultValue}
                />
              </SelectContainer>
            </Theme>
          </ItemInnerContainer>
        ];
      });
    };
    const emailData = [
      {
        title: "邮箱",
        inputPlaceholder: "lugia-design@ysstech.com",
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 310
              }
            }
          }
        },
        onChange: onEmailChange
      }
    ];
    const nameData = [
      {
        title: "昵称",
        inputPlaceholder: "lugia",
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 310
              }
            }
          }
        },
        onChange: onNameChange
      }
    ];
    const desData = [
      {
        title: "个人简介",
        inputPlaceholder: "个人简介",
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 310,
                height: 100
              }
            },
            margin: {
              top: 10,
              bottom: 10
            }
          }
        },
        onChange: onPersonDescChange
      }
    ];
    const streetData = [
      {
        title: "街道地址",
        inputPlaceholder: "达美中心T2 16层",
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 310
              }
            }
          }
        },
        onChange: onStreetChange
      }
    ];
    const telAreaCodeData = [
      {
        title: "联系电话",
        inputPlaceholder: "010",
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 60
              }
            }
          }
        },
        onChange: onAreaCodeChange
      }
    ];
    const telNumberData = [
      {
        inputPlaceholder: "88088888",
        hasTitle: false,
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 240
              }
            }
          }
        },
        onChange: onTelNumberChange
      }
    ];
    const countryData = [
      {
        title: "国家/地区:",
        selectDefaultValue: "中国",
        selectData: [
          { value: "中国", label: "中国" },
          { value: "中国", label: "中国" }
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 310
                }
              }
            }
          }
        },
        onChange: onCountryChange
      }
    ];
    const provinceData = [
      {
        title: "所在省市:",
        selectDefaultValue: "北京市",
        selectData: [{ value: "北京市", label: "北京市" }],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 130
                }
              }
            }
          }
        },
        onChange: onProvinceChange
      }
    ];
    const cityData = [
      {
        selectDefaultValue: "朝阳区",
        hasTitle: false,
        selectData: [
          { value: "朝阳区", label: "朝阳区" },
          { value: "丰台区", label: "丰台区" }
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 150
                }
              }
            }
          }
        },
        onChange: onCityChange
      }
    ];

    const settingContent = [
      <Container>
        <InnerContainer>
          <h2>基本设置</h2>
          {getInputItem(emailData)()}
          {getInputItem(nameData)()}
          {getInputItem(desData)()}
          {getSelectItem(countryData)()}
          <SelectContainer>
            <SelectContainer>{getSelectItem(provinceData)()}</SelectContainer>
            <SelectContainer>{getSelectItem(cityData)()}</SelectContainer>
          </SelectContainer>

          {getInputItem(streetData)()}
          <SelectContainer>
            <SelectContainer>{getInputItem(telAreaCodeData)()}</SelectContainer>
            <SelectContainer>{getInputItem(telNumberData)()} </SelectContainer>
          </SelectContainer>

          <Button onClick={this.props.doUpdateUserInfo} type={"primary"}>
            更新基本信息
          </Button>
        </InnerContainer>
        <InnerContainer>
          <Theme config={avatarConfig}>
            <RightContainer>
              <Avatar
                type={"img"}
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              />
            </RightContainer>
            <RightContainer>
              <Upload
                areaType={'button'}
                icon={"lugia-icon-financial_download"}
                onClick={this.props.doUpdateAvatar}
              >
                更换头像
              </Upload>
            </RightContainer>
          </Theme>
        </InnerContainer>
      </Container>
    ];
    const defaultData = [
      {
        title: "基本设置",
        content: settingContent
      },

      {
        title: "安全设置",
        content: <OutContainer>{getItem(safeItems)()}</OutContainer>
      },
      {
        title: "账号绑定",
        content: <OutContainer> {getItem(idItems)()}</OutContainer>
      },
      {
        title: "新消息通知",
        content: <OutContainer> {getItem(msgItems)()}</OutContainer>
      }
    ];
    const config = {
      [Widget.Tabs]: {
        TitleContainer: {
          normal: {
            width: 1330,
            height: 1500
          }
        },
        ContentBlock: {
          normal: {
            width: 600
          }
        },
        TabHeader: {
          DefaultTabPan: {
            normal: {
              height: 40
            }
          }
        }
      }
    };
    return (
      <Content>
        <PageContent>
          <Theme config={config}>
            <TabsContainer>
              <Tabs tabType={"line"} tabPosition={"left"} data={defaultData} />
            </TabsContainer>
          </Theme>
        </PageContent>
      </Content>
    );
  }
}

const SettingPage = connect(
  setting,
  state => {
    return {};
  },
  mutations => {
    return {
      onEmailChange: mutations.onEmailChange,
      onNameChange: mutations.onNameChange,
      onPersonDescChange: mutations.onPersonDescChange,
      onStreetChange: mutations.onStreetChange,
      onAreaCodeChange: mutations.onAreaCodeChange,
      onTelNumberChange: mutations.onTelNumberChange,
      onCountryChange: mutations.onCountryChange,
      onProvinceChange: mutations.onProvinceChange,
      onCityChange: mutations.onCityChange,
      doUpdateUserInfo: mutations.asyncDoUpdateUserInfo
    };
  }
)(Setting);

export default () => {
  return <SettingPage />;
};
