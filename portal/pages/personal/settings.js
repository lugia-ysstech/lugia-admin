/**
 *
 * create by liangguodong
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
  Upload,
  Card,
  Checkbox
} from "@lugia/lugia-web";
import { connect } from "@lugia/lugiax";
import setting from "../../models/personal/setting";
import { getBorderRadius } from "@lugia/theme-utils";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: inline-flex;
  padding: 8px 40px;
`;
const InnerContainer = styled.div`
  width: 400px;
`;
const InnerInputContainer = styled.div`
  flex: 1;
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
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  height: 80px;
  width: 100%;
`;

const SafeItemContainer = styled.div`
  align-items: center;
  padding: 12px 0;
  height: 60px;
  width: 100%;
`;
const SafeIconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  height: 60px;
  width: 100%;
`;
const CheckboxContainer = styled.div`
  display: flex;
`;
const CheckboxInnerContainer = styled.div`
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
`;
const ItemInnerContainer = styled.div`
  flex: 1 1;
  align-items: flex-start;
  margin-bottom: 20px;
`;
const NewItemInnerContainer = styled.div`
  flex: 1 1;
  align-items: flex-start;
  margin-bottom: 20px;
  display: inline-block;
`;
const Title = styled.div`
  display: block;
  font-size: 14px;
  margin: 10px 0;
`;
const OperationText = styled.div`
  list-style: none;
  height: 25px;
  line-height: 25px;
  color: #4d63ff;
  width: 100px;
`;
const TitleText = styled.div`
  height: 25px;
  line-height: 25px;
`;
const SafeTitleText = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  flex: none;
  width: 70px;
  display: inline-block;
`;
const VersionTitleText = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  display: inline-block;
`;
const SafeInnerTitleText = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  display: inline-block;
  width: 100%;
`;
const SafeDescText = styled.div`
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  display: inline-block;
  color: gray;
  width: 100%;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;
const ProvinceSelectContainer = styled(SelectContainer)`
  margin-right: 10px;
`;
const QuickLoginWrapper = styled.div`
  width: 60%;
  font-size: 36px;
  display: inline-flex;
  flex-wrap: wrap;
`;

function changeBrowserWidth() {
  return document.documentElement.clientWidth;
}
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: changeBrowserWidth()
    };
  }

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
                width: 60,
                margin: {
                  right: 10
                }
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
                  width: 140
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
    const { browserWidth } = this.state;
    const flexDirection = browserWidth > 800 ? "row-reverse" : "column";

    const settingContent = [
      <Container style={{ flexDirection: flexDirection }}>
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
                areaType={"button"}
                icon={"lugia-icon-financial_download"}
                onClick={this.props.doUpdateAvatar}
              >
                更换头像
              </Upload>
            </RightContainer>
          </Theme>
        </InnerContainer>
        <InnerInputContainer>
          <h2>基本设置</h2>
          {getInputItem(emailData)()}
          {getInputItem(nameData)()}
          {getInputItem(desData)()}
          {getSelectItem(countryData)()}
          <SelectContainer>
            <ProvinceSelectContainer>
              {getSelectItem(provinceData)()}
            </ProvinceSelectContainer>
            <SelectContainer>{getSelectItem(cityData)()}</SelectContainer>
          </SelectContainer>

          {getInputItem(streetData)()}
          <SelectContainer>
            <SelectContainer>{getInputItem(telAreaCodeData)()}</SelectContainer>
            <SelectContainer>{getInputItem(telNumberData)()} </SelectContainer>
          </SelectContainer>
          <div>
            <Button onClick={this.props.doUpdateUserInfo} type={"primary"}>
              更新基本信息
            </Button>
          </div>
        </InnerInputContainer>
      </Container>
    ];
    const theIconTheme = type => {
      let theColor;
      switch (type) {
        case "wechat":
          theColor = "#50B674";
          break;
        case "QQ":
          theColor = "#68A5E1";
          break;
        case "weibo":
          theColor = "#EA5D5C";
          break;
        case "dingding":
          theColor = "#5DA6FB";
          break;
        default:
          theColor = `#333`;
          break;
      }
      return {
        [Widget.Icon]: {
          Icon: {
            normal: {
              color: theColor,
              margin: {
                right: 20
              }
            }
          }
        }
      };
    };
    const saveButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            borderRadius: getBorderRadius(16),
            margin: {
              right: 20
            }
          }
        }
      }
    };
    const feedbackButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            margin: {
              left: 20
            }
          }
        }
      }
    };
    const getSafeSetting = (
      <InnerInputContainer>
        <h2>安全设置</h2>

        <SafeIconContainer>
          <SafeTitleText>账号:</SafeTitleText>
          <QuickLoginWrapper>
            <Theme config={theIconTheme("wechat")}>
              <Icon iconClass="lugia-icon-logo_wechat" />
            </Theme>
            <Theme config={theIconTheme("weibo")}>
              <Icon iconClass="lugia-icon-logo_weibo" />
            </Theme>
            <Theme config={theIconTheme("facebook")}>
              <Icon iconClass="lugia-icon-logo_facebook" />
            </Theme>
            <Theme config={theIconTheme("QQ")}>
              <Icon iconClass="lugia-icon-logo_QQ" />
            </Theme>
          </QuickLoginWrapper>
        </SafeIconContainer>
        <SafeItemContainer>
          <SafeTitleText>路径:</SafeTitleText> <Input onChange={this.props.pathChange} />
        </SafeItemContainer>
        <CheckboxContainer>
          <SafeTitleText>领域:</SafeTitleText>
          <div>
            <SafeIconContainer>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <div>
                <SafeInnerTitleText>
                  Api 访问经过身份验证的用户的API
                </SafeInnerTitleText>
                <SafeDescText>
                  以用户身份完全访问lugia pro,包括所有的组和项目进行读/写
                </SafeDescText>
              </div>
            </SafeIconContainer>
            <SafeIconContainer>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <div>
                <SafeInnerTitleText>
                  Read-user 读取经过身份验证的用户个人信息
                </SafeInnerTitleText>
                <SafeDescText>
                  对用户的个人资料信息的只读访问权限,例如用户名,公共电子邮件和全名
                </SafeDescText>
              </div>
            </SafeIconContainer>
            <SafeIconContainer>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <NewItemInnerContainer>
                <SafeInnerTitleText>
                  sudo
                  以系统中的任何用户身份执行API操作(如果经过身份验证的用户是管理员)
                </SafeInnerTitleText>
                <SafeDescText>
                  访问Sudo功能，以系统中的任何用户身份执行API操作（仅适用于管理员）
                </SafeDescText>
              </NewItemInnerContainer>
            </SafeIconContainer>
            <SafeIconContainer>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <NewItemInnerContainer>
                <SafeInnerTitleText>
                  read_repository 读取存储
                </SafeInnerTitleText>
                <SafeDescText>读取储存库</SafeDescText>
              </NewItemInnerContainer>
            </SafeIconContainer>
            <SafeIconContainer>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <div>
                <SafeInnerTitleText>
                  openid 使用OpenID Connect 进行身份验证
                </SafeInnerTitleText>
                <SafeDescText>
                  使用Lugia
                  pro进行身份认证的能力，以及对用户的配置文件信息和组成员身份的只读访问权限
                </SafeDescText>
              </div>
            </SafeIconContainer>
          </div>
        </CheckboxContainer>

        <SafeItemContainer>
          <SafeTitleText>关于pro :</SafeTitleText>
          <VersionTitleText>当前版本</VersionTitleText>
          <VersionTitleText>1.5.9 </VersionTitleText>
          <VersionTitleText>
            <Theme config={feedbackButtonTheme}>
              <Button>意见反馈</Button>
            </Theme>
          </VersionTitleText>
        </SafeItemContainer>
        <SafeItemContainer>
          <SafeTitleText />

          <QuickLoginWrapper>
            <Theme config={saveButtonTheme}>
              <Button type="primary">保存修改</Button>
              <Button>重置</Button>
            </Theme>
          </QuickLoginWrapper>
        </SafeItemContainer>
      </InnerInputContainer>
    );
    const defaultData = [
      {
        title: "基本设置",
        content: settingContent
      },
      {
        title: "安全设置",
        content: <OutContainer>{getSafeSetting}</OutContainer>
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
        ContentBlock: {
          normal: {
            width: 1350,
            height: 1500
          }
        },
        TabHeader: {
          DefaultTabPan: {
            normal: {
              width: 150,
              height: 40,
              margin: {
                top: 4,
                bottom: 8
              }
            }
          }
        }
      }
    };
    const position = browserWidth > 800 ? "left" : "top";
    return (
      <Content>
        <PageContent>
          <Theme config={config}>
            <TabsContainer>
              <Tabs
                tabType={"line"}
                tabPosition={position}
                data={defaultData}
              />
            </TabsContainer>
          </Theme>
        </PageContent>
      </Content>
    );
  }
  componentDidMount() {
    window.onresize = () => {
      const browserWidth = changeBrowserWidth();
      setTimeout(() => {
        this.setState({ browserWidth });
      }, 0);
    };
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
      pathChange: mutations.pathChange,
      doUpdateUserInfo: mutations.asyncDoUpdateUserInfo
    };
  }
)(Setting);

export default () => {
  return <SettingPage />;
};
