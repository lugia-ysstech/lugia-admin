/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import styled from "styled-components";
import Content from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import { Divider ,Theme ,consts as Widget,Table,Label as TextLabel ,Card,Steps,TimeLine} from "@lugia/lugia-web";
import basic from "../../models/detail/basic";
import {connect} from "@lugia/lugiax";

const Step = Steps.Step;
const TimeLineItem = TimeLine.TimeLineItem;

const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "详情页"
  },
  {
    title: "简单详情页"
  }
];


export const Block = styled.div`
  margin: 20px 0;
  text-align: ${ props => props.align || 'left'};
`;

const StepsContainer = styled.div`
  margin: 40px auto;
  transform: translate(0,-50);
  background: #FAFAFA;
  border-radius: 4px;
  width: 60%;
  padding: 20px  20px 40px;
`;

const Date = styled.div`
  display: inline-block;
  color:  #333333;
  font-size: 14px;
  line-height: 20px;
  margin: 0 10px 0;
`;

export const Label = styled.div`
  color:  #333333;
  font-size: 14px;
  width: 33%;
  margin: 10px 0;
`;
export const DescLabel = styled.div`
  color: #838383;
  display: inline-block;
 
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
`;

const theme = {
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
const themeSteps = {
  [Widget.Step]: {

      StepDescription:{
        normal: {
          margin: {
            top: -20,
            bottom: 32,
            left: 120
          },

        },
      }
  },

};

class Basic extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    const {getUserInfo,getStepsInfo} = props ;
    getUserInfo().then(() => {
      getStepsInfo();
    });

  }

  componentDidMount() {

  }


  render() {
    const {basicDetailInfo,basicStepsInfo:{data,steps},} = this.props;
    return  <Content>
      <PageHeader routes={routes} title={"简单详情页"} desc={'简单详情页用于基础的详情信息的展现'} />
      <Theme config={theme}>
        <PageContent>
          <Card type={'tip'} title={'详细信息'}>
            <Block>
              {basicDetailInfo.map((item) => {
                const {data} = item;
                return (
                  <React.Fragment>
                    <FlexBox>
                      {data.map((dataItem) => {
                        const {title,value} = dataItem;
                        return <Label>{title}：<DescLabel> {value} </DescLabel></Label>;
                      })}
                    </FlexBox>
                  </React.Fragment>
                );
              })}
            </Block>

          </Card>

          <Theme config={{
            [Widget.Card]: {
              Container: {
                normal: {
                  width: '100%',
                  height: 460,
                  margin: {
                    bottom: 10,
                    top: 40,
                  },
                  boxShadow: 0
                },
              },
              CardTitleTipLine:{
                normal: {
                  width: 6,
                },
              }
            }
          }} >
            <Card type={'tip'} title={'进度流程'}>
              <Block align={'center'}>
                <Steps orientation="horizontal" stepType={'dot'}>
                  {
                    steps && steps.map( item => {
                      const {title,stepStatus} = item;
                      return  <Step title={title} stepStatus={stepStatus} isDashed={true}  />;
                    })
                  }
                </Steps>
              </Block>

                <StepsContainer>
                  <Theme config={themeSteps}>
                    <Steps orientation="vertical" stepType={'dot'}>
                      {
                        data && data.map( item => {
                          const {title,stepStatus,description} = item;
                          return  <Step title={title} stepStatus={stepStatus} isDashed={true}
                                        description={
                                          description && description.map( descItem => {
                                            const {date,desc} = descItem;
                                            return <div> {date && <Date>{date}</Date>}<Date>{desc}</Date></div>
                                          })

                                        }
                          />;
                        })
                      }
                    </Steps>
                  </Theme>

                </StepsContainer>

            </Card>
          </Theme>


        </PageContent>
      </Theme>
    </Content>;
  }

}


const BasicPage = connect(
  basic,
  state => {
    return {
      basicDetailInfo: state.get('basicDetailInfo').toJS?state.get('basicDetailInfo').toJS():state.get('basicDetailInfo'),
      basicStepsInfo: state.get('basicStepsInfo').toJS?state.get('basicStepsInfo').toJS():state.get('basicStepsInfo')
    };
  },
  mutations => {
    return {
      getUserInfo: mutations.asyncGetUserInfo,
      getStepsInfo: mutations.asyncGetStepsInfo
    };
  }
)(Basic);

export default () => {
  return (
    <BasicPage/>
  );
};
