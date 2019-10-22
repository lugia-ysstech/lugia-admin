import React, { Component } from "react";
import Content from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import Widget from "@lugia/lugia-web/dist/consts";
import styled from "styled-components";
import {
  Theme,
  Tabs,
  Avatar,
  Input,
  Button,
  Select,
  Icon,
  DatePicker,
  NumberInput,
  Radio
} from "@lugia/lugia-web";
import { connect } from "@lugia/lugiax";

import basicForm from "../../models/form/basic";

const RadioGroup = Radio.Group;

const { RangePicker } = DatePicker;

const ItemContainer = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 12px 0;
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
  width: 40%;
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
const IsSelectText = styled.span`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
  color: gray;
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
    path: "/pages/form/basic",
    title: "基础表单"
  }
];

class BasicForm extends Component {

  render() {
    const {
      onTitleChange,
      onDescChange,
      onReferenceChange,
      onVisitorChange,
      onInviterChange
    } = this.props;
    const titleData = [
      {
        title: "标题:",
        placeholder: "给目标给个名字",
        onChange: onTitleChange
      }
    ];
    const descData = [
      {
        title: "目标描述:",
        placeholder: "请输入你的阶段性工作目标",
        onChange: onDescChange
      }
    ];
    const referenceData = [
      {
        title: "衡量标准",
        placeholder: "请输入衡量标准",
        onChange: onReferenceChange
      }
    ];
    const visitorData = [
      {
        title: "客户",
        icon: "",
        isSelect: true,
        placeholder: "请描述你服务的客户，内部客户直接 @姓名／工号",
        onChange: onVisitorChange
      }
    ];
    const inviterData = [
      {
        title: "邀评人",
        isSelect: true,
        placeholder: "请直接 @姓名／工号，最多可邀请 5 人",
        onChange: onInviterChange
      }
    ];
    const RadioGroupData = [
      { text: "公开", value: "1" },
      { text: "部分公开", value: "2" },
      { text: "不公开", value: "3" }
    ];
    const numberInputView = {
      [Widget.NumberInput]: {
        Container: {
          normal: {
            width: 100
          }
        }
      }
    };
    const inputView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 410
          }
        }
      }
    };
    const buttonView = {
      [Widget.Button]: {
        Container: {
          normal: {
            margin: {
              right: 10
            }
          }
        }
      }
    };

    const getItem = data => () => {
      return data.map(item => {
        const { title, placeholder, icon, isSelect, onChange } = item;
        const leftIcon = icon ? (
          <div>
            <Icon icon={icon} />
          </div>
        ) : null;
        return (
          <ItemContainer>
            <ItemInnerContainer>
              <TitleContainer>
                <TitleText>{title}</TitleText>
                {isSelect && <IsSelectText>{"(选填)"}</IsSelectText>}
              </TitleContainer>
            </ItemInnerContainer>
            {leftIcon}
            <ItemInputContainer>
              <Theme config={inputView}>
                <Input placeholder={placeholder} onChange={onChange} />
              </Theme>
            </ItemInputContainer>
          </ItemContainer>
        );
      });
    };

    const getDataItem = (
      <ItemContainer>
        <ItemInnerContainer>
          <TitleContainer>
            <TitleText>{"起止日期"}</TitleText>
          </TitleContainer>
        </ItemInnerContainer>
        <ItemInputContainer>
          <RangePicker format={"YYYY-MM-DD"} />
        </ItemInputContainer>
      </ItemContainer>
    );
    const getWeight = (
      <ItemContainer>
        <ItemInnerContainer>
          <TitleContainer>
            <TitleText>{"权重"}</TitleText>
            <IsSelectText>{"(选填)"}</IsSelectText>
          </TitleContainer>
        </ItemInnerContainer>
        <ItemInputContainer>
          <Theme config={numberInputView}>
            <NumberInput onChange={this.props.onWeightChange} />
          </Theme>
          <TitleText>{"%"}</TitleText>
        </ItemInputContainer>
      </ItemContainer>
    );
    const getOperation = (
      <ItemContainer>
        <ItemInputContainer />
        <Theme config={buttonView}>
          <Button onClick={this.props.doSubmit} type={"primary"}>
            {"提交"}
          </Button>
          <Button onClick={this.props.doSave}>{"保存"}</Button>
        </Theme>
      </ItemContainer>
    );
    const getRadioGroup = (
      <ItemContainer>
        <ItemInnerContainer />
        <ItemInputContainer>
          <RadioGroup
            defaultValue="1"
            valueField="value"
            data={RadioGroupData}
            onChange={this.props.onRadioChange}
          />
        </ItemInputContainer>
      </ItemContainer>
    );

    return (
      <Content>
        <PageHeader
          routes={routes}
          title={"基础表单"}
          desc={
            "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
          }
        />
        <PageContent>
          {getItem(titleData)()}
          {getDataItem}
          {getItem(descData)()}
          {getItem(referenceData)()}
          {getItem(visitorData)()}
          {getItem(inviterData)()}
          {getWeight}
          {getRadioGroup}
          {getOperation}
        </PageContent>
      </Content>
    );
  }
}

const BasicFormPage = connect(
  basicForm,
  state => {
    return {};
  },
  mutations => {
    return {
      onTitleChange: mutations.onTitleChange,
      onDescChange: mutations.onDescChange,
      onReferenceChange: mutations.onReferenceChange,
      onVisitorChange: mutations.onVisitorChange,
      onInviterChange: mutations.onInviterChange,
      onWeightChange: mutations.onWeightChange,
      onRadioChange: mutations.onRadioChange,
      doSave: mutations.doSave,
      doSubmit: mutations.asyncDoSubmit
    };
  }
)(BasicForm);

export default () => {
  return <BasicFormPage />;
};
