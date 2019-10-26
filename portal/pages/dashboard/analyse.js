/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import styled from "styled-components";
import VisitsChart from "./charts/visits";
import PayChart from "./charts/paymen";
import SalesChart from "./charts/sales";
import SearchUsersChart from "./charts/searchusers";
import AverageSearchChart from "./charts/averagesearch";
import IntervalScalesChart from "./charts/intervalsales";
import InteractChart from "./charts/interact";
import TableChart from "./charts/table";
import PopoverComponent from "./component/popover";
import TabsPans from "./component/tabspans";
import model from "../../models/dashboard/analyse";
import { connect } from "@lugia/lugiax";
import {
  Theme,
  Grid,
  Tabs,
  consts as Widget,
  Pagination,
  Checkbox,
  DatePicker
} from "@lugia/lugia-web";
const { Row, Col } = Grid;
const CheckboxGroup = Checkbox.Group;
const CheckBoxButton = Checkbox.Button;
const { RangePicker } = DatePicker;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const PopoverWrap = styled.div`
  display: inline-block;
  transform: translate(0, 3px);
  margin-left: 5px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const HeaderBoxWrap = styled.div`
  height: 180px;
  background: white;
  margin: 10px 0;
  padding: 20px 20px 0;
  overflow: hidden;
  position: relative;
`;

const PositionPopoverWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #aaa;
`;

const HeaderH4 = styled.h3`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 100;
  margin-bottom: 4px;
`;

const HeaderH3 = styled.h3`
  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  margin-right: 10px;
  font-size: 14px;
  line-height: 40px;
  height: 30px;
  font-weight: 100;
`;

const HeaderH1 = styled.div`
  font-size: 30px;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100px;
`;

const HeaderLine = styled.div`
  height: 1px;
  background: rgba(0, 0, 0, 0.25);
`;

const HeaderFlexBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 14px;
  flex-wrap: wrap;
`;
const HeaderItem = styled.div`
  display: inline-block;
  line-height: 30px;
  margin-right: 20px;
`;

const OprateBox = styled.div`
  height: 50px;
  position: relative;
`;

const PerChartWrap = styled.div`
  height: 18px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
`;

const IndexIconTop = styled.span`
  position: absolute;
  width: 3px;
  height: 5px;
  top: 0;
  left: 80%;
  background: #0abfae;
`;

const IndexIconBottom = styled.span`
  position: absolute;
  width: 3px;
  height: 5px;
  bottom: 0;
  left: 80%;
  background: #0abfae;
`;

const PerChartContainer = styled.div`
  height: 8px;
  width: 100%;
  background: #eee;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

const getPerChartWidth = props => {
  const { count } = props;
  return `width: ${count}%`;
};

const PerChart = styled.div`
  ${getPerChartWidth};
  background: #0abfae;
  position: absolute;
  height: 100%;
  left: 0;
  top: 0;
`;

// 销售额 模块
const ContentWrap = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #fff;
  position: relative;
`;

const DatePickerContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 1000;
  display: ${props => (props.browserWidth >= 1100 ? "block" : "none")};
`;

const TabsWrap = styled.div`
  height: 50px;
  width: 100%;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
  margin-bottom: 10px;
`;

const TabsLine = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  padding-top: 20px;
  & p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const ListWrap = styled.div`
  height: 250px;
  margin-top: 30px;
`;

const ListItem = styled.div`
  width: 100%;
  font-size: 14px;
  color: #666;
  margin-top: 15px;
  & p {
    display: inline-block;
    margin: 0;
  }

  & span {
    float: right;
  }
`;

const getListIconBgColor = props => {
  const { i } = props;
  return i <= 3
    ? `
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
    `
    : "";
};

const ListIcon = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  ${getListIconBgColor}
  margin-right: 20px;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
`;

// 搜索模块
const SecWrap = styled.div`
  width: 100%;
  margin: 10px 0;
  overflow: hidden;
  margin-bottom: 20px;
`;

const SecContainer = styled.div`
  background: #fff;
  height: 540px;
`;

const SecTopWrap = styled.div`
  height: 56px;
  line-height: 56px;
  font-size: 16px;
  padding: 0 20px;
  position: relative;
  border-bottom: 1px solid #ddd;
`;

const CheckboxWrap = styled.div`
  height: 100%;
  position: absolute;
  right: 20px;
  top: 0px;
`;

const SecSalesTitle = styled.div`
  font-size: 14px;
  padding-left: 20px;
  margin: 32px 0 42px;
`;

const SearchWrap = styled.div`
  height: 110px;
  margin: 22px 0;
`;

const SearchBox = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const SearchTitle = styled.div`
  font-size: 14px;
  line-height: 14px;
  color: #aaa;
`;

const CountSpan = styled.div`
  font-size: 22px;
  line-height: 50px;

  & span {
    color: #666;
    font-size: 14px;
    padding-left: 40px;
  }
`;

const FooterWrap = styled.div`
  height: 700px;
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
`;
const FooterTop = styled.div`
  height: 140px;
  margin-bottom: 20px;
  display: flex;
  overflow: hidden;
`;

const PaginationWrap = styled.div`
  float: right;
  padding-right: 20px;
  margin-top: 20px;
`;

const view = {
  [Widget.Tabs]: {
    TitleContainer: {
      normal: {
        width: "100%"
      }
    },
    TabHeader: {
      DefaultTabPan: {
        normal: {
          height: 50,
          padding: {
            top: 0,
            left: 20,
            right: 20,
            bottom: 0
          },
          font: {
            size: 14
          }
        }
      }
    },
    BorderStyle: {
      normal: {
        border: {
          bottom: {
            width: 1,
            color: "transparent",
            style: "solid"
          }
        }
      }
    }
  }
};

const tabsData = [
  { title: "销售额", content: <div></div>, key: "0" },
  { title: "访问量", content: <div></div>, key: "1" }
];

function changeBrowserWidth() {
  return document.documentElement.clientWidth;
}
class Analyse extends Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: changeBrowserWidth()
    };

    const { getHeaderInfo, getContentInfo, getSecInfo, getFooterInfo } = props;
    getHeaderInfo().then(() => {
      getContentInfo().then(() => {
        getSecInfo().then(() => {
          getFooterInfo();
        });
      });
    });
  }

  getHeaderColSpan = browserWidth => {
    return browserWidth <= 800 ? 24 : browserWidth <= 1100 ? 12 : 6;
  };

  getContentColSpan = browserWidth => {
    return browserWidth <= 1200
      ? { left: 24, right: 24 }
      : { left: 16, right: 8 };
  };

  getSecColSpan = browserWidth => {
    return browserWidth <= 1200 ? 24 : 12;
  };

  render() {
    const { browserWidth } = this.state;
    const headerSpan = this.getHeaderColSpan(browserWidth);

    const { headerInfo, intervalData, secInfo, interactData } = this.props;
    const { visitsData, payData } = headerInfo;
    const { averageSearchData, salesData, searchUserData } = secInfo;

    return (
      <Container>
        {/* 头部图表  */}
        <HeaderWrap>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
            type="flex"
            justify="spaceAround"
            align="middle"
          >
            <Col span={headerSpan}>
              <HeaderBoxWrap>
                <PositionPopoverWrap>
                  <PopoverComponent />
                </PositionPopoverWrap>
                <HeaderH4>总销售额</HeaderH4>
                <HeaderContent>
                  <HeaderH1>￥ 126,560</HeaderH1>
                  <HeaderFlexBox>
                    <HeaderItem>周同比 12% </HeaderItem>
                    <HeaderItem>日同比 11% </HeaderItem>
                  </HeaderFlexBox>
                </HeaderContent>
                <HeaderLine />
                <HeaderH3>日销售额 1,423</HeaderH3>
              </HeaderBoxWrap>
            </Col>
            <Col span={headerSpan}>
              <HeaderBoxWrap>
                <PositionPopoverWrap>
                  <PopoverComponent />
                </PositionPopoverWrap>
                <HeaderH4>访问量</HeaderH4>
                <HeaderContent>
                  <HeaderH1>8,846</HeaderH1>
                  {visitsData && visitsData.length !== 0 ? (
                    <VisitsChart data={visitsData} />
                  ) : null}
                </HeaderContent>
                <HeaderLine />
                <HeaderH3>日访问量 1,234</HeaderH3>
              </HeaderBoxWrap>
            </Col>
            <Col span={headerSpan}>
              <HeaderBoxWrap>
                <PositionPopoverWrap>
                  <PopoverComponent />
                </PositionPopoverWrap>
                <HeaderH4>支付笔数</HeaderH4>
                <HeaderContent>
                  <HeaderH1>6,560</HeaderH1>
                  {payData && payData.length !== 0 ? (
                    <PayChart data={payData} />
                  ) : null}
                </HeaderContent>
                <HeaderLine />
                <HeaderH3>转化率 60%</HeaderH3>
              </HeaderBoxWrap>
            </Col>
            <Col span={headerSpan}>
              <HeaderBoxWrap>
                <PositionPopoverWrap>
                  <PopoverComponent />
                </PositionPopoverWrap>
                <HeaderH4>运营活动效果</HeaderH4>
                <HeaderContent>
                  <HeaderH1>78%</HeaderH1>
                  <OprateBox>
                    <PerChartWrap>
                      <IndexIconTop />
                      <IndexIconBottom />
                      <PerChartContainer>
                        <PerChart count={78}></PerChart>
                      </PerChartContainer>
                    </PerChartWrap>
                  </OprateBox>
                </HeaderContent>
                <HeaderLine />
                <HeaderH3>周同比 12% </HeaderH3>
                <HeaderH3>日同比 11% </HeaderH3>
              </HeaderBoxWrap>
            </Col>
          </Row>
        </HeaderWrap>
        {/** 销售和访问图表 */}
        <ContentWrap>
          <DatePickerContainer browserWidth={browserWidth}>
            <RangePicker
              defaultValue={["2019-01-01", "2019-02-01"]}
              format={"YYYY-MM-DD"}
            />
          </DatePickerContainer>
          <TabsLine />
          <TabsWrap>
            <Theme config={view}>
              <Tabs titleType={"line"} tabPosition={"top"} data={tabsData} />
            </Theme>
          </TabsWrap>
          <ContentContainer>
            <Row
              gutter={{ xs: 8, sm: 16, md: 40, lg: 40, xl: 40, xxl: 40 }}
              type="flex"
              justify="spaceBetween"
              align="middle"
            >
              <Col span={this.getContentColSpan(browserWidth).left}>
                <p>销售趋势</p>
                {intervalData && intervalData.length !== 0 ? (
                  <IntervalScalesChart data={intervalData} />
                ) : null}
              </Col>
              <Col span={this.getContentColSpan(browserWidth).right}>
                <p>门店销售额排名</p>
                <ListWrap>{this.getListItem()}</ListWrap>
              </Col>
            </Row>
          </ContentContainer>
        </ContentWrap>

        {/* 中部图表  */}
        <SecWrap>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
            type="flex"
            justify="spaceBetween"
            align="middle"
          >
            <Col span={this.getSecColSpan(browserWidth)}>
              <SecContainer>
                <SecTopWrap>线上热门搜索</SecTopWrap>
                <SearchWrap>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 60, xl: 60, xxl: 60 }}
                    type="flex"
                    justify="spaceBetween"
                    align="middle"
                  >
                    <Col span={12}>
                      <SearchBox>
                        <SearchTitle>
                          搜索用户数
                          <PopoverWrap>
                            <PopoverComponent />
                          </PopoverWrap>
                        </SearchTitle>
                        <CountSpan>
                          12,321
                          <span>17.1</span>
                        </CountSpan>
                        {searchUserData && searchUserData.length !== 0 ? (
                          <SearchUsersChart data={searchUserData} />
                        ) : null}
                      </SearchBox>
                    </Col>
                    <Col span={12}>
                      <SearchBox>
                        <SearchTitle>
                          人均搜索次数
                          <PopoverWrap>
                            <PopoverComponent />
                          </PopoverWrap>
                        </SearchTitle>
                        <CountSpan>
                          2.7
                          <span>26.2</span>
                        </CountSpan>
                        {averageSearchData && averageSearchData.length !== 0 ? (
                          <AverageSearchChart data={averageSearchData} />
                        ) : null}
                      </SearchBox>
                    </Col>
                  </Row>
                </SearchWrap>
                <TableChart />
                <PaginationWrap>
                  <Pagination total={50} pageSize={5} />
                </PaginationWrap>
              </SecContainer>
            </Col>
            <Col span={this.getSecColSpan(browserWidth)}>
              <SecContainer>
                <SecTopWrap>
                  销售额类别占比
                  <CheckboxWrap>
                    <CheckboxGroup childType="button" defaultValue={["1"]}>
                      <CheckBoxButton value="1">全部渠道</CheckBoxButton>
                      <CheckBoxButton value="2">线上</CheckBoxButton>
                      <CheckBoxButton value="3">门店</CheckBoxButton>
                    </CheckboxGroup>
                  </CheckboxWrap>
                </SecTopWrap>
                <SecSalesTitle>销售额</SecSalesTitle>
                {salesData && salesData.length !== 0 ? (
                  <SalesChart data={salesData} />
                ) : null}
              </SecContainer>
            </Col>
          </Row>
        </SecWrap>

        {/**底部双线图 */}
        <FooterWrap>
          <FooterTop>{this.getTabsPans()}</FooterTop>
          {interactData && interactData.length !== 0 ? (
            <InteractChart data={interactData} />
          ) : null}
        </FooterWrap>
      </Container>
    );
  }

  getTabsPans() {
    const counts = [70, 40, 50, 30, 80, 60, 20];
    const target = [];
    counts.forEach(value => {
      target.push(<TabsPans value={value} />);
    });
    return target;
  }

  getListItem() {
    const target = [];
    for (let i = 0; i < 7; i++) {
      const item = (
        <ListItem>
          <ListIcon i={i + 1}>{i + 1}</ListIcon>
          <p>工专路{i}号店</p>
          <span>323,234</span>
        </ListItem>
      );
      target.push(item);
    }
    return target;
  }

  componentDidMount() {
    window.onresize = () => {
      const browserWidth = changeBrowserWidth();
      setTimeout(() => {
        this.setState({ browserWidth });
      }, 100);
    };
  }
}

const AnalysePage = connect(
  model,
  state => {
    return {
      headerInfo: state.get("headerInfo").toJS
        ? state.get("headerInfo").toJS()
        : state.get("headerInfo"),
      intervalData: state.get("intervalData").toJS
        ? state.get("intervalData").toJS()
        : state.get("intervalData"),
      secInfo: state.get("secInfo").toJS
        ? state.get("secInfo").toJS()
        : state.get("secInfo"),
      interactData: state.get("interactData").toJS
        ? state.get("interactData").toJS()
        : state.get("interactData")
    };
  },
  mutations => {
    return {
      getHeaderInfo: mutations.asyncGetHeaderInfo,
      getContentInfo: mutations.asyncGetContentInfo,
      getSecInfo: mutations.asyncGetSecInfo,
      getFooterInfo: mutations.asyncGetFooterInfo
    };
  }
)(Analyse);

export default () => {
  return <AnalysePage />;
};
