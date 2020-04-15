/**
 *
 * create by liangguodong
 *
 * @flow
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import {
  Avatar,
  Button,
  Checkbox,
  Divider,
  Icon,
  Input,
  Radio,
  Select,
  Switch,
  Tabs,
  Theme,
  Upload,
} from '@lugia/lugia-web';
import { connect } from '@lugia/lugiax';
import setting from '../../models/personal/setting';
import { getBorderRadius } from '@lugia/theme-utils';

const RadioGroup = Radio.Group;

const TabsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 14px;
  > div{
    >div{
      >div{
        padding: 0;
      }
    }
  }
`;
const Container = styled.div`
  width: 100%;
  min-width: 700px;
  height: 1500px;
  display: inline-flex;
  padding: 20px 30px 0;
  border-left: 10px solid #f5f5f9;
`;
const InnerInputContainer = styled.div`
  min-width: 455px;
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  width: 260px;
  padding-top: 25px;
`;

const RightContainer = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 20px;
  &.uploadButton{
    >div{
      border: 1px solid #ccc;
      border-radius: 4px;
      >div{
        >span{
          background: #fff;
          color: #333;
        }
      }
    }
  }
`;
const SafeItemContainer = styled.div`
  align-items: center;
  padding: 12px 0;
  height: 60px;
  width: 100%;
`;
const ItemInnerContainer = styled.div`
  float: left;
  margin-right: 20px;
`;
const OperationText = styled.div`
  width: 38px;
  height: 20px;
  line-height: 20px;
  color: #4d63ff;
`;

const SafeTitleText = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  flex: none;
  width: 64px;
  display: inline-block;
`;
const VersionTitleText = styled.div`
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  display: inline-block;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;
const QuickLoginWrapper = styled.div`
  width: 60%;
  font-size: 36px;
  display: inline-flex;
  flex-wrap: wrap;
`;
const IconWrap = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &.wechat {
    background: #86DB46;
  };
  &.weibo {
    background: #E6172D;
  };
  &.facebook {
    background: #4469B0;
  };
  &.twitter {
    background: #29A3EF;
  };
  &.QQ {
    background: #51BCFF;
  };
`;
const HeadWrap = styled.div`
  height: 25px;
  margin-bottom: 26px;
`;
const ItemWrap = styled.div`
  margin-bottom: 20px;
  box-sizing: border-box;
  &>label{
    width: 42px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
    float: left;
  }
`;
const AddtionWrap = styled.div`
  margin-top: 17px;
  padding-left: 42px;
  &>Button: nth-child(1) {
    margin-right: 20px;
    width: 110px;
  }
  &>Button: nth-child(2) {
    width: 76px;
  }
`;
const SecurityItemWrap = styled.div`
  margin-bottom: 20px;
  min-width: 870px;
  box-sizing: border-box;
  &>label{
    width: 64px;
    line-height: 32px;
    font-size: 14px;
    color: #333;
    float: left;
  }
`;
const FieldContentWrap = styled.div`
  width: 800px;
  padding-top: 5px;
  float: left;
`;
const FieldItemWrap = styled.div`
  height: 40px;
  margin-bottom: 10px;
`;
const CheckboxInnerContainer = styled.div`
  float: left;
  width: 30px;
`;
const ItemContentWrap = styled.div`
  float: left;
`;
const SafeInnerTitleText = styled.div`
  line-height: 20px;
  font-size: 14px;
  color: #333;
`;
const SafeDescText = styled.div`
  line-height: 20px;
  font-size: 12px;
  color: #999;
`;
const MessageInnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  &>.MessageHeadTitle {
    margin: 0;
  }
`;
const ItemContainer = styled.div`
  align-items: center;
  height: 80px;
  padding: 18px 5px 15px 0;
  position: relative;
`;
const MessageItemTitle= styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  margin-bottom: 5px;
`;
const MessageItemContent = styled.div`
  font-size: 12px;
  color: #999;
  height: 25px;
  line-height: 17px;
`;
const SwitchWarp = styled.div`
  margin-right: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -10px;
`;

function changeBrowserWidth() {
  return document.documentElement.clientWidth;
}
class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: changeBrowserWidth(),
    };
  }

  render() {
    const {
      onEmailChange,
      onNameChange,
      onPersonDescChange,
      onCountryChange,
      onProvinceChange,
      onCityChange,
    } = this.props;
    const msgItems = [
      {
        title: '异地登陆',
        desc: '当有异地登陆您的账号密码时，给予消息提醒',
        hasSwitch: true,
      },
      {
        title: '数据修改基于消息提醒',
        desc: '当有数据进行最新更改时候数据 ',
        hasSwitch: true,
      },
      {
        title: '数据修改基于消息提醒',
        desc: '当有数据进行最新更改时候数据',
        hasSwitch: true,
      },
    ];

    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 40,
            padding: 10,
          },
        },
      },
    };
    const avatarConfig = {
      [Widget.Avatar]: {
        SrcAvatar: { normal: { width: 150, height: 150 } },
      },
      [Widget.Upload]: {
        UploadLiType: {
          normal: {
            background: 'red',
          },
        },
      },
    };

    const getItem = data => () => {
      return (
        <MessageInnerContainer>
          <HeadWrap className={'MessageHeadTitle'}>
            <h2>消息通知</h2>
          </HeadWrap>
          {data.map(item => {
            const { title, desc, operationText, icon, hasSwitch } = item;
            const leftIcon = icon ? (
              <Theme config={iconTheme}>
                <Icon iconClass={icon} />
              </Theme>
            ) : null;
            const Operation = operationText ? (
              <OperationText> {operationText}</OperationText>
            ) : hasSwitch ? (
              <Switch defaultValue={true} />
            ) : null;
            return [
              <ItemContainer>
                {leftIcon}
                <ItemInnerContainer>
                  <MessageItemTitle>{title}</MessageItemTitle>
                  <MessageItemContent>{desc}</MessageItemContent>
                </ItemInnerContainer>
                <SwitchWarp>
                  {Operation}
                </SwitchWarp>
              </ItemContainer>,
              <Divider />,
            ];
          })}
        </MessageInnerContainer>
      );
    };
    const getInputItem = data => () => {
      return data.map(item => {
        const {
          inputPlaceholder,
          inputConfig,
          onChange,
        } = item;
        return [
          <ItemInnerContainer>
            <Theme config={inputConfig}>
              <Input placeholder={inputPlaceholder} onChange={onChange} />
            </Theme>
          </ItemInnerContainer>,
        ];
      });
    };
    const getSelectItem = data => () => {
      return data.map(item => {
        const {
          selectData,
          selectDefaultValue,
          selectConfig,
        } = item;
        return [
          <ItemInnerContainer>
            <Theme config={selectConfig}>
              <SelectContainer>
                <Select
                  createPortal
                  data={selectData}
                  displayField={'label'}
                  defaultValue={selectDefaultValue}
                />
              </SelectContainer>
            </Theme>
          </ItemInnerContainer>,
        ];
      });
    };
    const nameData = [
      {
        inputPlaceholder: 'Asyllabear',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onNameChange,
      },
    ];
    const emailData = [
      {
        inputPlaceholder: 'Asyllabear@gmail.com',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const languelData = [
      {
        inputPlaceholder: '英语',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const twitterData = [
      {
        inputPlaceholder: 'Jason John',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
              },
            },
          },
        },
        onChange: onEmailChange,
      },
    ];
    const desData = [
      {
        inputPlaceholder: '北方多鸿雁，日落江河莫忘旧人曾婀娜。',
        inputConfig: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 390,
                height: 80,
              },
            },
            Input: {
              normal: {
                padding: {
                  top: 0,
                  right: 16,
                  bottom: 50,
                  left: 10,
                },
              },
            },
          },
        },
        onChange: onPersonDescChange,
      },
    ];
    const countryData = [
      {
        selectDefaultValue: '国家',
        selectData: [
          { value: '中国', label: '中国' },
          { value: '中国', label: '中国' },
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 100,
                },
              },
            },
          },
        },
        onChange: onCountryChange,
      },
    ];
    const radioView = {
      [Widget.Radio]:{
        Container: {
          normal: {
            margin: {
              right: 30,
            },
          },
        },
      },
    };
    const provinceData = [
      {
        title: '省份:',
        selectDefaultValue: '省份',
        selectData: [{ value: '北京市', label: '北京市' }],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 100,
                },
              },
            },
          },
        },
        onChange: onProvinceChange,
      },
    ];
    const cityData = [
      {
        selectDefaultValue: '城市',
        hasTitle: false,
        selectData: [
          { value: '朝阳区', label: '朝阳区' },
          { value: '丰台区', label: '丰台区' },
        ],
        selectConfig: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 150,
                },
              },
            },
          },
        },
        onChange: onCityChange,
      },
    ];
    const { browserWidth } = this.state;

    const settingContent = [
      <Container>
        <InnerInputContainer>
          <HeadWrap>
            <h2>编辑个人设置</h2>
          </HeadWrap>
          <ItemWrap>
            <label>昵称:</label>
            {getInputItem(nameData)()}
          </ItemWrap>
          <ItemWrap>
            <label>邮箱:</label>
            {getInputItem(emailData)()}
          </ItemWrap>
          <ItemWrap>
            <label>语言:</label>
            {getInputItem(languelData)()}
          </ItemWrap>
          <ItemWrap>
            <label>推特:</label>
            {getInputItem(twitterData)()}
          </ItemWrap>
          <ItemWrap>
            <label>介绍:</label>
            {getInputItem(desData)()}
          </ItemWrap>
          <ItemWrap>
            <label>性别:</label>
            <Theme config={radioView}>
              <RadioGroup defaultValue="2">
                <Radio value="1">男</Radio>
                <Radio value="2">女</Radio>
                <Radio value="3">保密</Radio>
              </RadioGroup>
            </Theme>
          </ItemWrap>
          <ItemWrap>
            <label>位置:</label>
            {getSelectItem(countryData)()}
            {getSelectItem(provinceData)()}
            {getSelectItem(cityData)()}
          </ItemWrap>
          <AddtionWrap>
            <Button onClick={this.props.doUpdateUserInfo} type={'primary'} shape={'round'}>
              保存更改
            </Button>
            <Button type={'default'} shape={'round'}>
              重置
            </Button>
          </AddtionWrap>
        </InnerInputContainer>
        <InnerContainer>
          <Theme config={avatarConfig}>
            <RightContainer>
              <Avatar
                type={'img'}
                src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
              />
            </RightContainer>
            <RightContainer className={'uploadButton'}>
              <Upload
                areaType={'button'}
                icon={'lugia-icon-financial_download'}
                onClick={this.props.doUpdateAvatar}
              >
              </Upload>
            </RightContainer>
          </Theme>
        </InnerContainer>
      </Container>,
    ];
    const theIconTheme = () => {
      const theColor = '#fff';
      return {
        [Widget.Icon]: {
          Icon: {
            normal: {
              fontSize: 18,
              color: theColor,
              background: 'blue',
            },
          },
        },
      };
    };
    const saveButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            borderRadius: getBorderRadius(16),
            margin: {
              right: 20,
            },
            padding: {
              left: 27,
              right: 27,
            },
          },
        },
      },
    };
    const feedbackButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            height: 32,
            width: 90,
            font: {
              size: 14,
            },
            margin: {
              left: 20,
            },
          },
        },
        ButtonText: {
          normal: {
            color: '#333',
          },
        },
      },
    };
    const getSafeSetting = (
      <InnerInputContainer>
        <HeadWrap>
          <h2>安全设置</h2>
        </HeadWrap>
        <SecurityItemWrap>
          <label>账号:</label>
          <QuickLoginWrapper>
            <IconWrap className={'wechat'}>
              <Theme config={theIconTheme('wechat')}>
                <Icon iconClass="lugia-icon-logo_wechat" />
              </Theme>
            </IconWrap>
            <IconWrap className={'weibo'}>
              <Theme config={theIconTheme('weibo')}>
                <Icon iconClass="lugia-icon-logo_weibo" />
              </Theme>
            </IconWrap>
            <IconWrap className={'facebook'}>
              <Theme config={theIconTheme('facebook')}>
                <Icon iconClass="lugia-icon-logo_facebook" />
              </Theme>
            </IconWrap>
            <IconWrap className={'twitter'}>
              <Theme config={theIconTheme('twitter')}>
                <Icon iconClass="lugia-icon-logo_twitter" />
              </Theme>
            </IconWrap>
            <IconWrap className={'QQ'}>
              <Theme config={theIconTheme('QQ')}>
                <Icon iconClass="lugia-icon-logo_QQ" />
              </Theme>
            </IconWrap>

          </QuickLoginWrapper>
        </SecurityItemWrap>
        <SecurityItemWrap>
          <label>路径:</label>
          <Input onChange={this.props.pathChange} />
          <Input onChange={this.props.pathChange} />
        </SecurityItemWrap>
        <SecurityItemWrap>
          <label>领域:</label>
          <FieldContentWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  Api 访问经过身份验证的用户的API
                </SafeInnerTitleText>
                <SafeDescText>
                  以用户身份完全访问lugia pro,包括所有的组和项目进行读/写
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  Read-user 读取经过身份验证的用户个人信息
                </SafeInnerTitleText>
                <SafeDescText>
                  对用户的个人资料信息的只读访问权限,例如用户名,公共电子邮件和全名
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  以系统中的任何用户身份执行API操作（如果经过身份验证的用户是管理员）
                </SafeInnerTitleText>
                <SafeDescText>
                  访问Sudo功能，以系统中的任何用户身份执行API操作（仅适用于管理员）
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  read_repository 读取存储
                </SafeInnerTitleText>
                <SafeDescText>
                  读取储存库
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
            <FieldItemWrap>
              <CheckboxInnerContainer>
                <Checkbox />
              </CheckboxInnerContainer>
              <ItemContentWrap>
                <SafeInnerTitleText>
                  openid 使用OpenID Connect 进行身份验证
                </SafeInnerTitleText>
                <SafeDescText>
                  使用Lugia pro进行身份认证的能力，以及对用户的配置文件信息和组成员身份的只读访问权限
                </SafeDescText>
              </ItemContentWrap>
            </FieldItemWrap>
          </FieldContentWrap>
        </SecurityItemWrap>

        <SecurityItemWrap>
          <SafeTitleText>关于pro :</SafeTitleText>
          <VersionTitleText>当前版本</VersionTitleText>
          <VersionTitleText>1.5.9 </VersionTitleText>
            <Theme config={feedbackButtonTheme}>
              <Button>意见反馈</Button>
            </Theme>
        </SecurityItemWrap>
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
        title: '个人信息',
        content: settingContent,
      },
      {
        title: '安全设置',
        content: <Container>{getSafeSetting}</Container>,
      },
      {
        title: '消息通知',
        content: <Container> {getItem(msgItems)()}</Container>,
      },
    ];
    const config = {
      [Widget.Tabs]: {
        WindowContainer: {
          normal: {
            padding: {
              top: 0,
            },
          },
        },
        ContentBlock: {
          normal: {
            width: '100%',
            height: 1500,
            padding: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            },
          },
        },
        TabHeader: {
          DefaultTabPan: {
            normal: {
              width: 150,
              height: 58,
              margin: {
                top: 4,
                right: 20,
                bottom: 8,
              },
            },
          },
        },
      },
    };
    const position = browserWidth > 800 ? 'left' : 'top';
    return (
      <Theme config={config}>
        <TabsContainer>
          <Tabs
            tabType={'line'}
            tabPosition={position}
            data={defaultData}
          />
        </TabsContainer>
      </Theme>
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
      doUpdateUserInfo: mutations.asyncDoUpdateUserInfo,
    };
  }
)(Setting);

export default () => {
  return <SettingPage />;
};
