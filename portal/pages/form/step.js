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

import {
  Theme,
  Input,
  Button,
  Select,
  Icon,
  NumberInput,
  Steps,
  AmountInput,
  Avatar
} from "@lugia/lugia-web";
import styled from "styled-components";
import Widget from "@lugia/lugia-web/dist/consts";
import { connect } from "@lugia/lugiax";
import stepForm from "../../models/form/step";

const ItemContainer = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 12px 0;
`;
const StepContainer = styled(ItemContainer)`
  text-align: center;
  margin: 16px 0;
`;

const ItemInnerContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 40%;
  text-align: right;
  margin-right: 5px;
`;

const ItemInputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 50%;
  margin-left: 5px;
`;
const TitleContainer = styled.label`
  position: relative;
  height: 25px;
  line-height: 25px;
  display: inline-block;
`;
const TitleText = styled.span`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;
const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "表单页"
  },
  {
    path: "/pages/form/step",
    title: "分步表单"
  }
];

class StepForm extends Component {
  render() {
    const {
      onPayAccountChange,
      onReceiptAccountChange,
      onReceiptTypeChange,
      onReceiptNameChange,
      onTransferAmountChange
    } = this.props;
    const inputView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 300
          }
        }
      }
    };

    const getItem = data => () => {
      return data.map(item => {
        const {
          title,
          inputPlaceholder,
          isAmount,
          isSelect,
          selectData,
          selectView,
          selectDefaultValue,
          inputDefaultValue,
          onChange,
          amountOnChange,
          onReceiptTypeChange,
          accountInputView
        } = item;
        return (
          <ItemContainer>
            <ItemInnerContainer>
              <TitleContainer>
                <TitleText>{title}</TitleText>
              </TitleContainer>
            </ItemInnerContainer>
            <ItemInputContainer>
              {isSelect && (
                <Theme config={selectView}>
                  <SelectContainer>
                    <Select
                      createPortal
                      data={selectData}
                      displayField={"label"}
                      defaultValue={selectDefaultValue}
                      onChange={onReceiptTypeChange}
                    />
                  </SelectContainer>
                </Theme>
              )}
              <Theme config={accountInputView ? accountInputView : inputView}>
                {!isAmount &&
                  inputPlaceholder && (
                    <Input placeholder={inputPlaceholder} onChange={onChange} />
                  )}
              </Theme>
              {isAmount && (
                <AmountInput
                  defaultValue={inputDefaultValue}
                  onChange={amountOnChange}
                />
              )}
            </ItemInputContainer>
          </ItemContainer>
        );
      });
    };

    const steps = [
      {
        title: "填写转账信息"
      },
      {
        title: "确认转账信息"
      },
      {
        title: "完成"
      }
    ];

    const getSteps = currentStepNumber => () => {
      return (
        <StepContainer>
          <Steps data={steps} currentStepNumber={currentStepNumber || 1} />
        </StepContainer>
      );
    };
    const payData = [
      {
        title: "付款账户",
        isSelect: true,
        selectData: [
          {
            value: "lugia-design@ysstech.com",
            label: "lugia-design@ysstech.com"
          }
        ],
        selectDefaultValue: "lugia-design@ysstech.com",
        selectView: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 300
                }
              }
            }
          }
        },
        onChange: onPayAccountChange
      }
    ];
    const receiptData = [
      {
        title: "收款人姓名:",
        inputPlaceholder: "Lugia",
        onChange: onReceiptNameChange
      }
    ];

    const receiptAccountData = [
      {
        title: "收款账户:",
        isSelect: true,
        selectDefaultValue: "支付宝",
        selectData: [
          { value: "支付宝", label: "支付宝" },
          { value: "银行账户", label: "银行账户" }
        ],
        selectView: {
          [Widget.Select]: {
            InputTag: {
              InputTagWrap: {
                normal: {
                  width: 100
                }
              }
            }
          }
        },
        accountInputView: {
          [Widget.Input]: {
            Container: {
              normal: {
                width: 190,
                margin: {
                  left: 10
                }
              }
            }
          }
        },
        inputPlaceholder: "lugia-design@ysstech.com",
        onReceiptTypeChange: onReceiptTypeChange,
        onChange: onReceiptAccountChange
      }
    ];
    const transferData = [
      {
        title: "转账金额:",
        inputDefaultValue: 500,
        isAmount: true,
        inputPlaceholder: "请输入衡量标准",
        amountOnChange: onTransferAmountChange
      }
    ];
    const getOperation = (
      <ItemContainer>
        <ItemInnerContainer />
        <ItemInputContainer>
          <Button onClick={this.props.doNextStep} type={"primary"}>
            {"下一步"}
          </Button>
        </ItemInputContainer>
      </ItemContainer>
    );
    const { currentStepNumber } = this.props;
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={"分步表单"}
          desc={"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}
        />
        <PageContent>
          <div>
            {getSteps(currentStepNumber)()}
            {getItem(payData)()}
            {getItem(receiptAccountData)()}
            {getItem(receiptData)()}
            {getItem(transferData)()}
            {getOperation}
          </div>
        </PageContent>
      </Content>
    );
  }
}

const StepFormPage = connect(
  stepForm,
  state => {
    const stepsInfo = stepForm.getState().get("stepForm");
    const currentStepNumber = state.getIn([stepsInfo, "currentStepNumber"]);
    return {
      currentStepNumber
    };
  },
  mutations => {
    return {
      onPayAccountChange: mutations.onTitleChange,
      onReceiptAccountChange: mutations.onReceiptAccountChange,
      onReceiptTypeChange: mutations.onReceiptTypeChange,
      onReceiptNameChange: mutations.onReceiptNameChange,
      onTransferAmountChange: mutations.onTransferAmountChange,
      doNextStep: mutations.doNextStep
    };
  }
)(StepForm);

export default () => {
  return <StepFormPage />;
};
