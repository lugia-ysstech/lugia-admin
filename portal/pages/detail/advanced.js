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
import { Grid,Theme,Tabs,consts as Widget , Radio, Button, Dropmenu,Menu ,Divider,Steps,Card,Table,Icon,Avatar} from "@lugia/lugia-web";
import { Block ,Label,DescLabel ,FlexBox} from "./basic";
import advanced from "../../models/detail/advanced";
import {connect} from "@lugia/lugiax";
import avatar from "../../assets/images/logo.png";

const TabPane = Tabs.TabPane;
const Step = Steps.Step;
const RadioButton = Radio.Button;

const RadioGroup = Radio.Group;

const { Row, Col } = Grid;

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

const Title = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 20px;
  padding: 16px 0;
`;
// const Label = styled.div`
//   color: rgba(0,0,0,.85);
//   font-size: 14px;
//   width: ${props => props.width?props.width:'100%'};
//   margin: 8px 0;
// `;
const Text = styled.span`
  color: rgba(0,0,0,.55);
`;
// const FlexBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: ${props => props.justify?props.justify:'space-between'};
// `;

const Container = styled.div`
  text-align: right;
  flex:1;
  margin: 16px 0 0;
`;

const HeaderLabel = styled.div`
  color: rgba(0,0,0,.45);
  font-size: 14px;
`;

const HeaderTitle = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 20px;
`;
const FundTitle = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 14px;
  font-weight: bold;
  margin: 6px 0 ;
`;

const Link = styled.a`
  display: block;
  color: #4d63ff;
  font-size: 14px;
  margin: 10px 0 ;
`;

const ContentTitle = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 16px;
  padding: 16px 0 16px 20px;
`;

const Wrap = styled.div`
  margin: 0 20px 20px;
  background: #fff;
`;
const CenterWrap = styled.div`
  text-align:center;
`;

const UserInfoWrap = styled.div`
   padding: 20px;
`;

const DefaultText = styled.div`
   padding: 40px 0;
   color: rgba(0,0,0,.25);
   font-size: 16px;
   & i{
    vertical-align: text-top;
   }
`;

const InfoContainer = styled.div`
   border: 1px solid #e8e8e8;
`;


const InfoTitle = styled.div`
   padding: 12px 24px ;
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
     normal:{
       width: '100%',
       borderRadius: getBorderRadius(0)
     }
    },
    CardTitle: {
      normal:{
        width: '100%',
        background:{
          color:'#ccc'
        },
      }

    },
  },
  [Widget.Tabs]: {
    ContentBlock: {
      normal:{
        width: '100%',
        height: 400
      }
    },
    TitleContainer:{
      normal:{
        width: '100%',
      }
    }
  },

};

const HeadTheme ={
  [Widget.Tabs]: {
    BorderStyle: {
      normal: {
        border: {
          bottom: {
            width: 1,
            color: 'transparent',
            style: 'solid'
          },
        },
      },
    },
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
        width: '100%',
        height: 200,
        margin: {
          bottom: 10
        },
        boxShadow: 0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
      },
    }
  },
};

const propertyCard = {
  [Widget.Card]: {
    Container: {
      normal: {
        width: '100%',
        height: 540,
        margin: {
          bottom: 10
        },
        boxShadow: 0
      },
    },
    CardTitleTipLine:{
      normal: {
        width: 6,
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
    return <Content>
        <PageHeader routes={routes} title={"高级详情页"} desc={'高级详情页完全展示一个信息的全部面貌，在高级详情页面尽量较少可操作项。'}/>
        <PageContent>
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
                            {data.map( list => {
                              const {title:liTitle,link,desc} = list;
                              return <React.Fragment>
                                <FlexBox>
                                  <Avatar type={'img'}  src={avatar} />
                                  <HeaderContent>
                                    <FundTitle>{liTitle}</FundTitle>
                                    <Text>{desc}</Text>
                                    {link && <Link href={link.url} target={'_blank'}>{link.text} > </Link>}

                                  </HeaderContent>
                                </FlexBox>
                                <Divider/>
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

        </PageContent>


        <Wrap>
          <Theme config={theme}>
          <UserInfoWrap>
            <Tabs onChange={this.onChange} data={tabsData} />
          </UserInfoWrap>
          </Theme>
        </Wrap>
      </Content>
   ;
  }

  getHeaderDesc = (advancedOrderInfo) => {
    console.log('advancedOrderInfo',advancedOrderInfo);
    return <HeaderContent>
      <Row>
        <Col span={1}> </Col>
        <Col span={19}>
          <Title>单号：234231029431</Title>
          <FlexBox>
            {advancedOrderInfo && advancedOrderInfo.map( item => {
              const {text,value} = item;
              return (<Label width='50%'>{text}： <Text>{value}</Text> </Label>);
            }
            )}
          </FlexBox>

        </Col>
        <Col span={4}>
          <FlexBox  justify={'flex-end'}>
            <RadioGroup childType='button' >

              <RadioButton value='1'>操作</RadioButton>

              <RadioButton value='2'>操作</RadioButton>

              <RadioButton value='3' >...
                {/*<Dropmenu menus={<Menu data={menu} />} action='hover'>*/}
                  {/*<Dropmenu.Button type="basic"  divided={false}>...</Dropmenu.Button>*/}
                {/*</Dropmenu>*/}
              </RadioButton>

            </RadioGroup>
            <Button type='primary'>主操作</Button>
          </FlexBox>
          <FlexBox  justify={'flex-end'}>
            <Container>
              <HeaderLabel>状态</HeaderLabel>
              <HeaderTitle>待审批</HeaderTitle>
            </Container>
            <Container>
              <HeaderLabel>订单金额</HeaderLabel>
              <HeaderTitle>¥ 568.08</HeaderTitle>
            </Container>
          </FlexBox>

        </Col>

      </Row>
      <Theme config={HeadTheme}>
        <Tabs data={defaultData} hideContent/>
      </Theme>

      </HeaderContent>
    ;
  };

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
