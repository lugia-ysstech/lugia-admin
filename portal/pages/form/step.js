/**
 *
 * create by liangguodong
 *
 * @flow
 */
import React, { Component, } from 'react';
import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import PageContent from '../../components/page-content';

import {
  Button,
  DatePicker,
  Divider,
  Icon,
  Input,
  NumberInput,
  Select,
  Steps,
  Theme,
  TimePicker,
} from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { connect, } from '@lugia/lugiax';
import stepForm from '../../models/form/step';
import { getBorderRadius, } from '@lugia/theme-utils';

const { RangePicker, } = DatePicker;

const ItemContainer = styled.div`
  position: relative;
  zoom: 1;
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  padding: 12px 0;
`;

const InlineContainer = styled.div`
  display: inline-flex;
  width: 100%;
`;
const InlineBlockContainer = styled.div`
  display: inline-block;
`;
const BlockContainer = styled.div`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 0;
`;
const ThirdBlockContainer = styled(BlockContainer)`
  text-align: center;
`;
const OperationContainer = styled.div`
  display: inline-block;
  width: 100%;
  text-align: left;
  margin: 15px 0;
`;

const StepContainer = styled(ItemContainer)`
  margin: 16px 0;
  text-align: center;
  width: 100%;
`;
const SecondStepContainer = styled(ItemContainer)`
  text-align: center;
  margin: 16px 0;
  width: 600px;
`;
const ThirdStepsContentContainer = styled(SecondStepContainer)`
  background: #fafafa;
  border-radius: 4px;
`;
const MemoContainer = styled(ItemContainer)`
  width: 100%;
`;

const ItemInnerContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20%;
  margin-right: 8px;
  vertical-align: bottom;
  text-align: right;
`;
const RightInputContainer = styled(ItemInnerContainer)`
  width: 23%;
`;

const MemoInnerContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 10%;
  text-align: right;
  margin-right: 10px;
  vertical-align: top;
`;

const ItemInputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 60%;
  vertical-align: top;
`;
const RightItemInputContainer = styled(ItemInputContainer)`
  width: 73%;
  text-align: left;
`;
const MomeInputContainer = styled(ItemInputContainer)`
  width: 88%;
`;
const OperationLeftContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 12%;
  vertical-align: top;
`;
const StepsSecondInputContainer = styled(ItemInputContainer)`
  width: 40%;
`;
const Warpper = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
`;
const TitleText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const StepsSecondTitleText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  width: 80px;
  font-size: 14px;
  margin-right: 10px;
`;
const StepsSecondTitleRightText = styled(StepsSecondTitleText)`
  text-align: right;
`;
const StepsSecondText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  font-size: 14px;
  color: #666;
`;
const MemoText = styled.div`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const MustStar = styled(TitleText)`
  color: red;
  font-size: 20px;
  vertical-align: text-top;
`;
const PercentText = styled.span`
  margin-left: 10px;
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  width: 10px;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;

const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 20px;
`;

const routes = [
  {
    path: '/dashboard/analyse',
    title: '首页',
  },
  {
    title: '表单页',
  },
  {
    path: '/pages/form/step',
    title: '分步表单',
  },
];

class StepForm extends Component {
  render() {
    const steps = [
      {
        title: '创建任务',
        currentStepNumber: 1,
      },
      {
        title: '出具发票',
      },
      {
        title: '完成',
      },
    ];
    const stepTheme = {
      [Widget.Steps]: {
        StepsOutContainer: {
          normal: {
            width: 600,
          },
        },
      },
    };
    const getSteps = currentStepNumber => () => {
      return (
        <StepContainer>
          <Theme config={stepTheme}>
            <Steps data={steps} currentStepNumber={currentStepNumber} desAlign={'center'} />
          </Theme>
        </StepContainer>
      );
    };
    const getFirstStepsView = currentStepNumber => {
      if (currentStepNumber !== 1) {
        return null;
      }
      return (
        <div>
          <Theme config={commonView}>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'税费类型:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'财务报表'}
                    onChange={this.props.typeChange}
                  />
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'托管行:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'中国农业银行'}
                    onChange={this.props.custodianChange}
                  />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'税务归属:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'XXX资产单元'}
                    onChange={this.props.belongChange}
                  />
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <TitleText>{'券商:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Input placeholder={'******'} onChange={this.props.dealerChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'抵扣比例:'}</TitleText>
                </ItemInnerContainer>
                <ItemInputContainer>
                  <NumberInput placeholder={10} onChange={this.props.deductionChange} />
                  {/*<PercentText>{"%"}</PercentText>*/}
                </ItemInputContainer>
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'发票:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <Select
                    createPortal
                    data={selectData}
                    displayField={'label'}
                    placeholder={'发票前置'}
                    onChange={this.props.invoiceChange}
                  />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
          </Theme>
          <Theme config={rangePicker}>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'税费所属期间:'}</TitleText>
                </ItemInnerContainer>
                <RangePicker format={'YYYY-MM-DD'} onChange={this.props.periodChange} />
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'支付时间:'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <TimePicker placeholder={'选择时间'} onChange={this.props.payTimeChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <Warpper>
              <ItemContainer>
                <ItemInnerContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'任务提醒时间:'}</TitleText>
                </ItemInnerContainer>
                <TimePicker placeholder={'选择时间'} onChange={this.props.reminderTimeChange} />
              </ItemContainer>
              <ItemContainer>
                <RightInputContainer>
                  <MustStar>*</MustStar>
                  <TitleText>{'头寸时间'}</TitleText>
                </RightInputContainer>
                <RightItemInputContainer>
                  <TimePicker placeholder={'选择时间'} onChange={this.props.positionTimeChange} />
                </RightItemInputContainer>
              </ItemContainer>
            </Warpper>
            <MemoContainer>
              <MemoInnerContainer>
                <MemoText>{'备注:'}</MemoText>
              </MemoInnerContainer>
              <MomeInputContainer>
                <Theme config={inputMemoView}>
                  <Input onChange={this.props.memoChange} />
                </Theme>
              </MomeInputContainer>
            </MemoContainer>
          </Theme>

          {getFirstStepsOperation}
        </div>
      );
    };
    const verticalDivider = {
      [Widget.Divider]: {
        VerticalDivider: {
          normal: {
            width: 2,
            height: 170,
            background: {
              color: '#e8e8e8',
            },
          },
        },
      },
    };
    const hDivider = {
      [Widget.Divider]: {
        HorizontalDivider: {
          normal: {
            background: {
              color: '#e8e8e8',
            },
            margin: {
              top: 20,
              bottom: 20,
            },
          },
        },
      },
    };
    const getSecondStepsView = currentStepNumber => {
      if (currentStepNumber !== 2) {
        return null;
      }
      return (
        <StepContainer>
          <SecondStepContainer>
            <Theme config={commonView}>
              <InlineContainer>
                <BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'核算类型'}</StepsSecondTitleText>
                    <StepsSecondText>{'财务报表'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'托管行'}</StepsSecondTitleText>
                    <StepsSecondText>{'中国农业银行'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'税务归属'}</StepsSecondTitleText>
                    <StepsSecondText>{'中国农业资产单元'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleText>{'抵扣比例'}</StepsSecondTitleText>
                    <StepsSecondText>{'10%'}</StepsSecondText>
                  </BlockContainer>
                </BlockContainer>
                <Theme config={verticalDivider}>
                  <Divider type={'vertical'}> </Divider>
                </Theme>
                <BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'券商'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'农业银行'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'发票'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'发票前置'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'支付时间'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'2018年10月21日'}</StepsSecondText>
                  </BlockContainer>
                  <BlockContainer>
                    <StepsSecondTitleRightText>{'头寸时间'}</StepsSecondTitleRightText>
                    <StepsSecondText>{'2018年10月21日'}</StepsSecondText>
                  </BlockContainer>
                </BlockContainer>
              </InlineContainer>
            </Theme>
            <Theme config={hDivider}>
              <Divider> </Divider>
            </Theme>
            <InlineContainer>
              <TitleText>{'出票机构'}</TitleText>
              <StepsSecondInputContainer>
                <Theme config={inputTicketView}>
                  <Input
                    placeholder={'深圳赢时胜技术股份有限公司'}
                    onChange={this.props.ticketChange}
                  />
                </Theme>
              </StepsSecondInputContainer>
            </InlineContainer>
            {getSecondStepsOperation}
          </SecondStepContainer>
        </StepContainer>
      );
    };

    const thirdStepsiconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 56,
            color: '#56c22d',
          },
        },
      },
    };
    const getThirdStepsView = currentStepNumber => {
      if (currentStepNumber !== 3) {
        return null;
      }
      return (
        <div>
          <ContentContainer>
            <Theme config={thirdStepsiconTheme}>
              <Icon iconClass={'lugia-icon-reminder_check_circle'} />
            </Theme>
            <SuccessText>{'操作成功'}</SuccessText>
          </ContentContainer>
          <StepContainer>
            <ThirdStepsContentContainer>
              <ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'托管行'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'中国农业银行'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'税务归属'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'中国农业资产单元'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'支付时间'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'2018年10月21日'}</StepsSecondText>
                </ThirdBlockContainer>
                <ThirdBlockContainer>
                  <StepsSecondTitleRightText>{'头寸时间'}</StepsSecondTitleRightText>
                  <StepsSecondText>{'2018年10月21日'}</StepsSecondText>
                </ThirdBlockContainer>
              </ThirdBlockContainer>
            </ThirdStepsContentContainer>
          </StepContainer>
          {getThirdStepsOperation}
        </div>
      );
    };
    const saveButtonTheme = {
      [Widget.Button]: {
        Container: {
          normal: {
            borderRadius: getBorderRadius(16),
            margin: {
              right: 20,
            },
          },
        },
      },
    };
    const getFirstStepsOperation = (
      <ItemContainer>
        <ItemInnerContainer />
        <ItemInputContainer>
          <Theme config={saveButtonTheme}>
            <Button onClick={this.props.doNextStep} type={'primary'}>
              {'下一步'}
            </Button>
            <Button onClick={this.props.reset}>重置</Button>
          </Theme>
        </ItemInputContainer>
      </ItemContainer>
    );
    const getSecondStepsOperation = (
      <OperationContainer>
        <OperationLeftContainer />
        <InlineBlockContainer>
          <Theme config={saveButtonTheme}>
            <Button onClick={this.props.doNextStep} type={'primary'}>
              {'下一步'}
            </Button>
            <Button onClick={this.props.doPreStep}>{'上一步'}</Button>
          </Theme>
        </InlineBlockContainer>
      </OperationContainer>
    );
    const getThirdStepsOperation = (
      <StepContainer>
        <ItemInputContainer>
          <Theme config={saveButtonTheme}>
            <Button type={'primary'}>完成</Button>
            <Button>查看明细</Button>
          </Theme>
        </ItemInputContainer>
      </StepContainer>
    );
    const { currentStepNumber = 1, } = this.props;
    const commonView = {
      [Widget.NumberInput]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.Input]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.Select]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
    };
    const inputMemoView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: '100%',
            height: 100,
          },
        },
      },
    };
    const inputTicketView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 400,
          },
        },
      },
    };
    const rangePicker = {
      [Widget.RangePicker]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
      [Widget.TimePicker]: {
        Container: {
          normal: {
            width: 450,
          },
        },
      },
    };
    const selectData = [
      { value: 'xxx', label: 'xxxxx', },
      { value: 'xxx', label: 'xxxxx', },
      { value: 'xxx', label: 'xxxxx', },
      { value: 'xxx', label: 'xxxxx', },
      { value: 'xxx', label: 'xxxxx', },
      { value: 'xxx', label: 'xxxxx', },
    ];
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={'分步表单'}
          desc={'将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。'}
        />
        <PageContent>
          {getSteps(currentStepNumber)()}
          {getFirstStepsView(currentStepNumber)}
          {getSecondStepsView(currentStepNumber)}
          {getThirdStepsView(currentStepNumber)}
        </PageContent>
      </Content>
    );
  }
}

const StepFormPage = connect(
  stepForm,
  state => {
    const currentStepNumber = state.get('currentStepNumber');
    return {
      currentStepNumber,
    };
  },
  mutations => {
    return {
      ticketChange: mutations.ticketChange,
      memoChange: mutations.memoChange,

      typeChange: mutations.typeChange,
      belongChange: mutations.belongChange,
      deductionChange: mutations.deductionChange,
      periodChange: mutations.periodChange,
      reminderTimeChange: mutations.reminderTimeChange,
      custodianChange: mutations.custodianChange,
      dealerChange: mutations.dealerChange,
      invoiceChange: mutations.invoiceChange,
      payTimeChange: mutations.payTimeChange,
      positionTimeChange: mutations.positionTimeChange,

      doNextStep: mutations.doNextStep,
      doPreStep: mutations.doPreStep,
      reset: mutations.reset,
    };
  }
)(StepForm);

export default () => {
  return <StepFormPage />;
};
