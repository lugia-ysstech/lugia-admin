/**
 *
 * create by grguang
 *
 *
 */
import React, { Component } from "react";
import { Input } from "@lugia/lugia-web";
import {connect} from "@lugia/lugiax";
import card from "../../models/list/card";
import {defaultData} from "../detail/advanced";
import Content from "../../components/content";
import PageHeader from "../../components/page-header";
import PageContent from "../../components/page-content";
import { Grid,Theme, consts as Widget , Divider,Card,Icon,Avatar} from "@lugia/lugia-web";
import styled from "styled-components";
import img from "../../assets/images/design-core-img1.png";
import avatar from "../../assets/images/mega.png";
import { getBorder, getBoxShadow,getBorderRadius } from '@lugia/theme-utils';


const { Row, Col } = Grid;

const routes = [
  {
    path: "/dashboard/analyse",
    title: "首页"
  },
  {
    title: "列表页"
  },
  {
    title: "卡片列表"
  }
];


const HeaderContent = styled.div`
`;
const HeaderSpanBox = styled.div`
   margin: 10px  0 20px;
`;
const HeaderSpan = styled.span`
  vertical-align: middle;
  margin-right: 30px;
  color: #4d63ff;
`;

const Circle = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid #4d63ff;
  text-align: center;
  line-height: 24px;
  margin-right: 9px;
  & i{
    vertical-align: text-top;
   }
`;

const Img = styled.img`
  width: 215px;
  margin-top: -40px;
`;


const ApplicationTop = styled.div`
    padding: 0 24px;
`;

const InformationContainer = styled.div`
    // padding:  0 0 0 42px;
    margin: 20px 0 10px;
    display: flex;
    line-height: 20px;
`;

const ApplicationBottom = styled.div`
    height: 46px;
    margin: 20px 0 0 ;
    display: flex;
    justify-content: space-evenly;
    background: #f8f8f8;
    align-items: center;
    text-align: center;
    border-top: 1px solid #ddd;
`;

const DefaultCard = styled.div`
   height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Label = styled.span`
  color: rgba(0,0,0,0.65);
  cursor: pointer;
  margin-right: 10px;
`;


const FlexBox = styled.div`
    display: flex;
    justify-content: center;
`;



const theme = {
  [Widget.Card]: {
    Container: {
      normal: {
        margin:{
          bottom: 15,
          right:0
        },
        borderRadius:{
          topLeft:0,
          topRight:0,
          bottomLeft:0,
          bottomRight:0
        },
        border:{
          top: {
            width: 1,
            style: 'solid',
            color: '#ddd',
          },
          bottom: {
            width: 1,
            style: 'solid',
            color: '#ddd',
          },
          left: {
            width: 1,
            style: 'solid',
            color: '#ddd',
          },
          right: {
            width: 1,
            style: 'solid',
            color: '#ddd',
          },
        },
        boxShadow:'none',
        height: 190,
        width: '95%'
      },
      hover: {
        boxShadow: getBoxShadow('0 0 4px 1px #ddd'),
      },
    },
    CardTitle: {
      normal:{
        padding:{
          top: 0,
          left: 0,
          right: 0,
          bottom:0
        },
      }
    },
    CardContent:{
      normal: {
        padding:{
          top: 16,
          left: 0,
          right: 0,
          bottom:0
        },
      },
    }
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 40,
        width: 40,
        margin: {
          right: 20
        }
      },
    },
  },
  [Widget.Divider]: {
    VerticalDivider: {
      normal: {
        height: 20,
      },
    },
  }
};

class CardList extends Component {

  constructor(props) {
    super(props);
    const {getArticleInfo} = props;
    getArticleInfo();
  }

  render() {
    const {articleInfo:{data}} = this.props;
    return  <Content>
      <PageHeader routes={routes} title={"卡片列表"} desc={this.getHeaderDesc()}/>
      <PageContent>
        <Theme config={theme}>
        <Row type="flex" justify="spaceBetween">
          <Col span={8}  xs={24}  md={12}  >
            {this.getDefaultCard()}
          </Col>
              {data && data.map( item => {
                return <Col span={8}  xs={24}  md={12}  >
                    {this.getCard(item)}
                </Col> ;
              })}
              {data && data.map( item => {
                return <Col span={8}  xs={24}  md={12}  >
                  {this.getCard(item)}
                </Col> ;
              })}
        </Row>
        </Theme>
      </PageContent>
    </Content>;
  }

  getHeaderDesc = () => {
    return <HeaderContent>
      <Row>
        <Col span={20}>
          <div>其实我们认为页面的形式并不需要将重点放在：”色彩单一，线条应用，分割等等这些单一视觉方面。</div>
          <HeaderSpanBox>
            <HeaderSpan> <Circle><Icon iconClass={"lugia-icon-financial_tags"} /></Circle> 快速开始</HeaderSpan>
            <HeaderSpan> <Circle><Icon iconClass={"lugia-icon-financial_information"} /></Circle>  产品简介</HeaderSpan>
            <HeaderSpan> <Circle><Icon iconClass={"lugia-icon-financial_questionnaire"} /></Circle>  产品文档</HeaderSpan>
          </HeaderSpanBox>
        </Col>
        <Col span={4}>
        <Img src={img} />
        </Col>

      </Row>


    </HeaderContent>
      ;
  };

  getCard = (info) => {
    const {title,text,img} = info;
    return <Card>
      <ApplicationTop>
        <FlexBox>
          <HeaderContent>
            <Avatar type={'img'} src={avatar} />
          </HeaderContent>
          <HeaderContent>
            <Label>{title}</Label>
            <InformationContainer>{text && text.slice(0,70)}</InformationContainer>
          </HeaderContent>

        </FlexBox>

      </ApplicationTop>
      <ApplicationBottom>
        <span>操作一</span>
        <Divider type="vertical" />
        <span>操作二</span>
      </ApplicationBottom>
    </Card>
      ;
  };

  getDefaultCard = () => {
    return <Card>
      <DefaultCard>
        <Icon iconClass={"lugia-icon-reminder_plus"} /> 新建产品
      </DefaultCard>
    </Card>
      ;
  };

}

const CardListPage = connect(
  card,
  state => {
    return {
      articleInfo: state.get('articleInfo').toJS?state.get('articleInfo').toJS():state.get('articleInfo'),
    };
  },
  mutations => {
    return {
      getArticleInfo: mutations.asyncGetArticleInfo,
    };
  }
)(CardList);

export default () => {
  return (
    <CardListPage/>
  );
};


