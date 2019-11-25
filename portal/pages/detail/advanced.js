/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";

import Content from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import styled from "styled-components";
import { getBorder, getBoxShadow,getBorderRadius } from '@lugia/theme-utils';
import { Theme,Tabs,consts as Widget , Button, Divider,Steps,Card,Table,Avatar,Switch} from "@lugia/lugia-web";
import { Block ,Label,DescLabel ,FlexBox} from "./basic";
import advanced from "../../models/detail/advanced";
import {connect} from "@lugia/lugiax";
import mega from "../../assets/images/mega.png";
import g from "../../assets/images/g.png";
import tx1 from "../../assets/images/ym.jpg";
import tx2 from "../../assets/images/jb.jpg";
import tx3 from "../../assets/images/gd.jpg";
import tx4 from "../../assets/images/jx.jpg";
import tx5 from "../../assets/images/rg.jpg";
import tx6 from "../../assets/images/cx.jpg";
import tx7 from "../../assets/images/yq.jpg";
import tx8 from "../../assets/images/zf.jpg";


const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "详情页"
  },
  {
    title: "高级详情页"
  }
];

const HeaderContent = styled.div`
`;

const Text = styled.span`
  color: rgba(0,0,0,.55);
`;

const FundTitle = styled.div`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin: ${props => props.margin || '6px 0 '};
`;

const Link = styled.a`
  display: block;
  color: #4d63ff;
  font-size: 14px;
  margin: 10px 0 ;
`;


const UserInfoWrap = styled.div`
   padding: 20px;
`;


const InfoContainer = styled.div`
   border: 1px solid #e8e8e8;
   border-radius: 8px;
   margin: 20px 0 0;
   overflow: hidden;
`;


const InfoTitle = styled.div`
   padding: 12px 20px ;
   font-size: 14px;
   background: #fafafa;
`;



const theme = {
  [Widget.Button]: {
    Container: {
      normal: {
        height: 30,
        margin:{
          left: 10
        }
      },
    },
  },
  [Widget.RadioGroup]: {
    CheckButton: {
      CheckButtonUnChecked: {
        normal: {
          height: 30,
          padding: {
            top: 0,
            bottom: 0,
            left: 15,
            right: 15,
          },
        },
        hover: {
          background: '#fff',
          color: '#333',
          border:{
            top:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            bottom:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            left:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            right:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
          },
          padding: {
            top: 0,
            bottom: 0,
            left: 15,
            right: 15,
          },
        },
      },
      CheckButtonChecked: {
        normal: {
          height: 30,
          padding: {
            top: 0,
            bottom: 0,
            left: 15,
            right: 15,
          },
          border:{
            top:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            bottom:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            left:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            right:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
          },
          background: '#fff',
          color: '#333',

        },
        hover: {
          background: '#fff',
          color: '#333',
          border:{
            top:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            bottom:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            left:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
            right:{
              width: 1,
              color:'#4d63ff',
              style: 'solid'
            },
          },

        },
      },
    },
  },
  [Widget.Steps]: {
    StepsOutContainer: {
     normal:{
       margin:{
         top: 10,
         bottom: 10
       },
       height: 160,
       width: '80%',
     }
    },
    Step: {
      StepLine:{
        normal:{
          width: 400
        }
      }

    },
  },
  [Widget.Card]: {
    Container: {
      normal: {
        width: '97%',
        height: 540,
        margin: {
          bottom: 20,
          left: 20
        },
        boxShadow: 0,
        border:0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    },
    CardTitle:{
      normal: {
        margin: {
          left: -8
        },
        padding: 0
      },
    }
  },
  [Widget.Tabs]: {
    ContentBlock: {
      normal:{
        width: '100%',
        height: 400,
        padding: {
          top: 20
        }
      }
    },
    TitleContainer:{
      normal:{
        width: '100%',
      }
    }
  },

};

const dividerTheme ={
  [Widget.Divider]: {
    HorizontalDivider: {
      normal: {
        margin: {
          top: 10,
          bottom: 16
        },

      },
    },
  },
};



const themeCardInfo = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '97%',
        height: 200,
        margin: {
          bottom: 20,
          left: 20
        },
        boxShadow: 0,
        border:0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    },
    CardTitle:{
      normal: {
        margin: {
          left: -8
        },
        padding: 0
      },
    }
  },
  ...dividerTheme
};

const propertyCard = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '97%',
        height: 3570,
        margin: {
          bottom: 20,
          left: 20
        },
        padding: {
          bottom: 25
        },
        boxShadow: 0,
        border:0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    },
    CardTitle:{
      normal: {
        margin: {
          left: -8
        },
        padding: 0
      },
    }
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 24,
        width: 24,
        margin:{
          right: 15
        }
      },
    },
  },
};

const cooperateCard = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '97%',
        height: 360,
        margin: {
          bottom: 20,
          left: 20
        },
        boxShadow: 0,
        border:0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    },
    CardTitle:{
      normal: {
        margin: {
          left: -8
        },
        padding: 0
      },
    }
  },

};

const HAvatarCardCard = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '23%',
        height: 120,
        margin: {
          bottom: 30,
          right: 0,
          left: 0
        },
        boxShadow: 0,
        border: getBorder({ color: '#e8e8e8', width: 1, style: 'solid' }),
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    },
    CardTitle:{
      normal: {
        margin:{
          top: 15,
          left: 10
        },
      }
    },
    CardAvatarContainer: {
      normal: {
        margin:{
          right: 5,
          left: 25,
          top: 25
        }
      },
    },
    CardAvatar:{
      SrcAvatar:{
        normal: {
          height: 70,
          width: 70,
        },
      }

    }
  },

};

export const defaultData = [
  {
    title: '详情',
  },
  {
    title: '规则',
  }
];


class Advanced extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    const {getAdvancedUserInfo,getAdvancedTableInfo,getAdvancedOrderInfo} = props;
    getAdvancedOrderInfo().then(() => {
      getAdvancedUserInfo().then(() => {
        getAdvancedTableInfo()
      });
    });

  }


  render() {
    const {advancedUserInfo,advancedTableInfo,advancedOrderInfo} = this.props;

    const tabsData=[
      {
        title: '操作日志一',
        content:  <Table columns={advancedTableInfo.columns} data={advancedTableInfo.data} />,
        key: '操作日志一',
      },
      {
        title: '操作日志二',
        content:  <Table columns={advancedTableInfo.columns} data={advancedTableInfo.data} />,
        key: '操作日志二',
      },
      {
        title: '操作日志三',
        content:  <Table columns={advancedTableInfo.columns} data={advancedTableInfo.data} />,
        key: '操作日志三',
      },
    ];
    const tx = {
       tx1 :tx1,
     tx2 :tx2,
     tx3 :tx3,
     tx4 :tx4,
     tx5 :tx5,
     tx6 :tx6,
     tx7 :tx7,
     tx8 :tx8,
    };
    return <Content>
        <PageHeader routes={routes} title={"高级详情页"} desc={'高级详情页完全展示一个信息的全部面貌，在高级详情页面尽量较少可操作项。'}/>
          <Theme config={themeCardInfo}>
            <Card type={'tip'} title={'厂家信息'}>
              <Block>
                <FlexBox>
                  {advancedOrderInfo.data && advancedOrderInfo.data.map((dataItem) => {
                    const {text,value} = dataItem;
                    return <Label>{text}：<DescLabel> {value} </DescLabel></Label>;
                    })}
                </FlexBox>
              </Block>
            </Card>
          </Theme>

          <Theme config={propertyCard}>
            <Card type={'tip'} title={'资产信息'}>
              <Block>
                {advancedUserInfo && advancedUserInfo.map( item => {
                  const {type,title,data,head} = item;
                  return <React.Fragment>
                    {title?<Label>{title}</Label>:null}
                    {type === '1'? <FlexBox justify={'flex-start'}>
                        {data.map( list => {
                          const {text,value} = list;
                          return  <Label width='33%'>{text}	：<Text>{value}</Text> </Label>
                        })}
                      </FlexBox>
                      :<InfoContainer>
                        <InfoTitle>{head}</InfoTitle>
                        <Divider/>
                        <UserInfoWrap>
                          <Theme config={dividerTheme}>
                            {data.map( (list,index) => {
                              const {title:liTitle,link,desc} = list;
                              return <React.Fragment>
                                <FlexBox>
                                  <Avatar type={'img'}  src={index % 2 ===0? g : mega} />
                                  <HeaderContent>
                                    <FundTitle >{liTitle}</FundTitle>
                                    <Text>{desc}</Text>
                                    {link && <Link href={link.url} target={'_blank'}>{link.text} > </Link>}

                                  </HeaderContent>
                                </FlexBox>
                                  {index !== data.length -1 &&  <Divider/>}

                              </React.Fragment> ;

                            })}
                          </Theme>

                        </UserInfoWrap>
                      </InfoContainer>}
                  </React.Fragment>
                })}
              </Block>
            </Card>
          </Theme>

          <Theme config={themeCardInfo}>
            <Card type={'tip'} title={'信息关联记录'}>
              <Block>
                {advancedOrderInfo.info && advancedOrderInfo.info.map((infoItem) => {
                  const {title,desc,status} = infoItem;
                  return <React.Fragment>
                    <FundTitle margin={'18px 0 6px'}>{title}</FundTitle>
                    <FlexBox justify={'space-between'}>
                      <Text>{desc}</Text> <Switch defaultValue={status} />
                    </FlexBox>

                    <Divider/>
                  </React.Fragment>;
                })}
              </Block>
            </Card>
          </Theme>

          <Theme config={theme}>
            <Card type={'tip'} title={'使用明细'}>
              <Block>
                  <Tabs onChange={this.onChange} data={tabsData} />
              </Block>
            </Card>
          </Theme>
          <Theme config={cooperateCard}>
            <Card type={'tip'} title={'合作者'}>
              <Block>
                <FlexBox justify={'space-between'}>
                  <Theme config={HAvatarCardCard}>
                    { advancedOrderInfo.cooperate && advancedOrderInfo.cooperate.map( (item,index)  => {
                      const {name,desc} = item;
                      return <Card
                        type={"avatar"}
                        title={name}
                        description={desc}
                        avatar={tx[`tx${index+1}`]}
                        shadow={"hover"}
                      />
                    })}

                  </Theme>

                </FlexBox>

              </Block>
            </Card>
          </Theme>


      </Content>
   ;
  }

  onChange = (res) => {
    const { activityValue } = res;
    const {getAdvancedTableInfo} = this.props;
    getAdvancedTableInfo(activityValue);
  };

}

const AdvancedPage = connect(
  advanced,
  state => {
    return {
      advancedUserInfo: state.get('advancedUserInfo').toJS?state.get('advancedUserInfo').toJS():state.get('advancedUserInfo'),
      advancedOrderInfo: state.get('advancedOrderInfo').toJS?state.get('advancedOrderInfo').toJS():state.get('advancedOrderInfo'),
      advancedSteps: state.get('advancedSteps').toJS?state.get('advancedSteps').toJS():state.get('advancedSteps'),
      advancedTableInfo: state.get('advancedTableInfo').toJS?state.get('advancedTableInfo').toJS():state.get('advancedTableInfo')
    };
  },
  mutations => {
    return {
      getAdvancedUserInfo: mutations.asyncGetAdvancedUserInfo,
      getAdvancedTableInfo: mutations.asyncGetAdvancedTableInfo,
      getAdvancedOrderInfo: mutations.asyncGetAdvancedOrderInfo,
    };
  }
)(Advanced);

export default () => {
  return (
    <AdvancedPage/>
  );
};
