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
import { Divider ,Theme ,consts as Widget,Table} from "@lugia/lugia-web";
import basic from "../../models/detail/basic";
import {connect} from "@lugia/lugiax";

const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "详情页"
  },
  {
    title: "基础详情页"
  }
];


const Title = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 16px;
  margin: 16px 0;
`;
const Label = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 14px;
  width: 33%;
  margin-bottom: 16px;
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const theme = {
  [Widget.Divider]: {
    HorizontalDivider: {
      normal: {
        margin: {
          top: 24,
          bottom: 32
        },

      },
    },
  },
};

class Basic extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    const {getUserInfo,getTableUserInfo} = props ;
    getUserInfo().then(() => {
      getTableUserInfo();
    });

  }

  componentDidMount() {

  }


  render() {
    const {basicDetailInfo,basicTableInfo} = this.props;
    return  <Content>
      <PageHeader routes={routes} title={"查询表格"} />
      <Theme config={theme}>
      <PageContent>
        {basicDetailInfo.map((item) => {
          const {type,data} = item;
           return (
             <React.Fragment>
               <Title>{type}</Title>
               <FlexBox>
                 {data.map((dataItem) => {
                   const {title,value} = dataItem;
                   return <Label>{title}：{value}</Label>;
                 })}
               </FlexBox>

               <Divider  />
             </React.Fragment>
           );
        })}

        <Title>退货商品</Title>
        <Table columns={basicTableInfo.userInfo.columns} data={basicTableInfo.userInfo.data} />

        <Title>退货进度</Title>
        <Table columns={basicTableInfo.returnGoods.columns} data={basicTableInfo.returnGoods.data} />

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
      basicTableInfo: state.get('basicTableInfo').toJS?state.get('basicTableInfo').toJS():state.get('basicTableInfo')
    };
  },
  mutations => {
    return {
      getUserInfo: mutations.asyncGetUserInfo,
      getTableUserInfo: mutations.asyncGetTableUserInfo
    };
  }
)(Basic);

export default () => {
  return (
    <BasicPage/>
  );
};
