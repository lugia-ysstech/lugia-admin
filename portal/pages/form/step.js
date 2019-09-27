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

const ItemContainer = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 12px 0;
  margin: 0 0 24px;
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
    title: "分步3表单"
  }
];
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
      inputDefaultValue
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
                <Select createPortal data={selectData} displayField={"label"}  defaultValue={selectDefaultValue}/>
              </SelectContainer>
            </Theme>
          )}
          <Theme config={inputView}>
            {!isAmount &&
              inputPlaceholder && <Input placeholder={inputPlaceholder} />}
          </Theme>
          {isAmount && <AmountInput  defaultValue={inputDefaultValue}/>}
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
      <Steps data={steps} currentStepNumber={currentStepNumber} />
    </StepContainer>
  );
};
const payData = [
  {
    title: "付款账户",
    isSelect: true,
    selectData: [{ value: "lugia-design@ysstech.com", label: "lugia-design@ysstech.com" }],
    selectDefaultValue:"lugia-design@ysstech.com",
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
    }
  }
];
const receiptData = [
  {
    title: "收款人姓名:",
    inputPlaceholder: "Lugia"
  }
];

const receiptAccountData = [
  {
    title: "收款账户:",
    isSelect: true,
    selectDefaultValue:"支付宝",
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
    inputPlaceholder: "lugia-design@ysstech.com"
  }
];
const transferData = [
  {
    title: "转账金额:",
    inputDefaultValue:500,
    isAmount: true,
    inputPlaceholder: "请输入衡量标准"
  }
];
const getOperation = (
  <ItemContainer>
    <ItemInnerContainer />
    <ItemInputContainer>
      <Button type={"primary"}>{"下一步"}</Button>
    </ItemInputContainer>
  </ItemContainer>
);

export default class Demo extends Component {
  render() {
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={"分布表单"}
          desc={"将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。"}
        />
        <PageContent>
          <div>
            {getSteps(1)()}
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
