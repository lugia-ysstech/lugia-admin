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
import YearsTrendChart from "./charts/yearsTrend";
import MarketRankingChart from "./charts/marketRanking";
import DistributionPolarChart from "./charts/distributionPolar";
import YearsTradeChart from "./charts/yearsTrade";
import ProceedsChart from "./charts/proceeds";
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
import { getBorder, getBoxShadow, getBorderRadius } from "@lugia/theme-utils";
import {
  Theme,
  Grid,
  Tabs,
  consts as Widget,
  Pagination,
  Checkbox,
  DatePicker,
  Select,
  Icon
} from "@lugia/lugia-web";
const Tabpane = Tabs.Tabpane;
const { Row, Col } = Grid;
const CheckboxGroup = Checkbox.Group;
const CheckBoxButton = Checkbox.Button;
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const HeaderWrap = styled.div`
  width: 100%;
  margin: 10px 0;
`;

const HeaderBoxWrap = styled.div`
  height: 160px;
  background: white;
  margin: 10px 0;
  padding: 20px 0;
  width: 100%;
  display: inline-block;
  position: relative;
`;

const HeaderBoxDivider = styled.div`
  position: absolute;
  width: 100%;
  border-right: 1px solid #f5f5f9;
  height: 70%;
  transform: translateY(-50%);
  top: 50%;
  left: 2px;
  z-index: 10000;
`;

const HeaderBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;

const HeaderTitle = styled.h3`
  font-size: 14px;
  font-weight: 900;
  color: #333;
`;

const HeaderPercentBox = styled.div`
  font-size: 28px;
  line-height: 70px;
  color: #4d63ff;
  text-align: center;
  font-weight: 900;
`;

const HeaderPercentSpan = styled.span`
  font-size: 12px;
  padding-left: 5px;
`;

const HeaderFooterBox = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #333;
  text-align: right;
`;

const HeaderRedSpan = styled.span`
  display: inline-block;
  color: red;
  width: 36px;
  font-weight: 900;
`;

const HeaderGreenSpan = styled(HeaderRedSpan)`
  color: green;
`;

const ContentWrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

const ContentIconWrap = styled.div`
  position: absolute;
  right: 20px;
  top: 12px;
  z-index: 1000;
  width: 20px;
`;

const TabsWrap = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  left: 0;
  top: 0;
`;

const SecWrap = styled.div`
  width: 100%;
  margin: 10px 0;
  overflow: hidden;
  margin-bottom: 20px;
`;

const CommonH2 = styled.h2`
  font-size: 14px;
  line-height: 18px;
  font-weight: 900;
  margin-bottom: 10px;
`;

const CommonH2Mark = styled.span`
  display: inline-block;
  height: 16px;
  margin-right: 8px;
  width: 5px;
  border-radius: 2px;
  background: #4d63ff;
  vertical-align: bottom;
`;

const SecContainer = styled.div`
  height: 400px;
  background: #fff;
  position: relative;
`;

const SecCheckBoxWrap = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
`;

const SecTopWrap = styled.div`
  height: 80px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterWrap = styled.div`
  height: 480px;
  width: 100%;
  background: #fff;
  margin-bottom: 20px;
  padding: 20px;
`;

const YearsTradeWrap = styled.div`
  height: 100%;
  position: relative;
`;

const FooterFormWrap = styled.div`
  width: 150px;
  height: 100%;
`;

const FooterTitle = styled.div`
  font-size: 14px;
  font-weight: 900;
  line-height: 30px;
  margin-top: 30px;
`;

const FooterTotalWrap = styled.div`
  height: 200px;
  & p {
    line-height: 40px;
  }
`;

const FooterTotalTitle = styled.div`
  display: inline-block;
  width: 50%;
`;

const FooterTotalValue = styled.div`
  display: inline-block;
  width: 50%;
  background: #red;
  color: #4d63ff;
  text-align: right;
`;

const FooterSelectWrap = styled.div`
  margin: 10px 0;
`;

const FooterCheckBoxWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 40px;
`;

const TabsContentBoxWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  position: relative;
`;

const TabsSelectWrap = styled.div`
  position: absolute;
  right: 10%;
  top: 5px;
`;

const view = {
  [Widget.Tabs]: {
    TitleContainer: {
      normal: {
        width: "100%",
        background: {
          color: "#f5f5f9"
        }
      }
    },
    TabHeader: {
      DefaultTabPan: {
        normal: {
          height: 40,
          padding: {
            top: 0,
            left: 20,
            right: 20,
            bottom: 0
          },
          margin: {
            left: -1
          },
          background: {
            color: "#f5f5f9"
          },
          border: {
            left: {
              color: "#f5f5f9",
              width: 1,
              style: "solid"
            },
            right: {
              color: "#f5f5f9",
              width: 1,
              style: "solid"
            },
            top: {
              color: "#f5f5f9",
              width: 1,
              style: "solid"
            }
          },

          font: {
            size: 14,
            weight: 900
          }
        }
      },
      SelectTabPan: {
        normal: {
          background: {
            color: "#fff"
          }
        }
      }
    },
    ContentBlock: {
      normal: {
        height: 400
      }
    }
  }
};

const selectView = {
  [Widget.Select]: {
    InputTag: {
      InputTagWrap: {
        normal: {
          width: 150
        }
      }
    }
  }
};

const iconView = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 20,
        color: "#888"
      }
    }
  }
};

const checkbuttonView = {
  [Widget.CheckboxGroup]: {
    CheckButton: {
      CheckButtonChecked: {
        normal: {
          opacity: 1,
          border: {
            top: { color: "#4d63ff", width: 1, style: "solid" },
            right: { color: "#4d63ff", width: 1, style: "solid" },
            bottom: { color: "#4d63ff", width: 1, style: "solid" }
          },

          color: "#fff",
          font: { size: 14, fontWeight: 500 }
        },
        hover: {
          opacity: 1,
          border: {
            top: { color: "#4d63ff", width: 1, style: "solid" },
            right: { color: "#4d63ff", width: 1, style: "solid" },
            bottom: { color: "#4d63ff", width: 1, style: "solid" }
          },
          color: "#fff",
          font: { size: 14, fontWeight: 500 }
        }
      },
      CheckButtonUnChecked: {
        normal: {
          opacity: 1,
          border: {
            top: { color: "#4d63ff", width: 1, style: "solid" },
            right: { color: "#4d63ff", width: 1, style: "solid" },
            bottom: { color: "#4d63ff", width: 1, style: "solid" }
          },
          color: "#4d63ff",
          font: { size: 14, fontWeight: 500 },
          first: {
            border: {
              top: { color: "#4d63ff", width: 1, style: "solid" },
              bottom: { color: "#4d63ff", width: 1, style: "solid" },
              left: { color: "#4d63ff", width: 1, style: "solid" }
            }
          }
        },
        hover: {
          opacity: 1,
          border: {
            top: { color: "#4d63ff", width: 1, style: "solid" },
            right: { color: "#4d63ff", width: 1, style: "solid" },
            bottom: { color: "#4d63ff", width: 1, style: "solid" }
          },
          color: "#4d63ff",
          font: { size: 14, fontWeight: 500 }
        }
      }
    }
  }
};

function changeBrowserWidth() {
  return document.documentElement.clientWidth;
}
class Analyse extends Component<> {
  constructor(props) {
    super(props);
    this.state = {
      browserWidth: changeBrowserWidth()
    };
  }

  getHeaderColSpan = browserWidth => {
    return browserWidth <= 800 ? 24 : browserWidth <= 1100 ? 12 : 6;
  };

  getSecLeftColSpan = browserWidth => {
    return browserWidth <= 1200 ? 24 : 8;
  };

  getSecRightColSpan = browserWidth => {
    return browserWidth <= 1200 ? 24 : 16;
  };
  getHeaderBoxs = headerSpan => {
    const headerData = [
      { title: "期末规模", num: "109.80", mark: "亿" },
      { title: "浮动盈亏", num: "109.80", mark: "亿" },
      { title: "实现收益 (减值后)", num: "80", mark: "%" },
      { title: "实现收益率 (减值后)", num: "60", mark: "%" }
    ];
    return headerData.map(val => {
      return (
        <Col span={headerSpan}>
          <HeaderBoxWrap>
            <HeaderBoxContainer>
              <HeaderTitle>{val.title}</HeaderTitle>
              <HeaderPercentBox>
                {val.num}
                <HeaderPercentSpan>{val.mark}</HeaderPercentSpan>
              </HeaderPercentBox>
              <HeaderFooterBox>
                较年初变动
                <HeaderRedSpan>+5%</HeaderRedSpan>
              </HeaderFooterBox>
              <HeaderFooterBox>
                较上日变动
                <HeaderGreenSpan>-15%</HeaderGreenSpan>
              </HeaderFooterBox>
            </HeaderBoxContainer>
            <HeaderBoxDivider></HeaderBoxDivider>
          </HeaderBoxWrap>
        </Col>
      );
    });
  };

  getYearTabsComp = () => {
    const { yearsTrendData = [] } = this.props;
    return (
      <TabsWrap>
        <Theme config={view}>
          <Tabs tabType={"card"} forceRender>
            <Tabpane
              title={"本年净值走势"}
              content={
                <TabsContentBoxWrap key={"1"}>
                  <TabsSelectWrap>
                    <Select
                      theme={selectView}
                      value={"请选择"}
                      canClear={false}
                    />
                  </TabsSelectWrap>
                  <YearsTrendChart data={yearsTrendData} />
                </TabsContentBoxWrap>
              }
            />
            <Tabpane
              title={"累计单位净值"}
              content={
                <TabsContentBoxWrap key={"2"}>
                  <TabsSelectWrap>
                    <Select
                      theme={selectView}
                      value={"请选择"}
                      canClear={false}
                    />
                  </TabsSelectWrap>
                  <YearsTrendChart data={yearsTrendData} />
                </TabsContentBoxWrap>
              }
            />
          </Tabs>
        </Theme>
      </TabsWrap>
    );
  };

  getMarketRankingComp = () => {
    return (
      <TabsWrap>
        <Theme config={view}>
          <Tabs tabType={"card"} forceRender>
            <Tabpane
              title={"月净值增长率"}
              content={
                <TabsContentBoxWrap key={"1"}>
                  <MarketRankingChart />
                </TabsContentBoxWrap>
              }
            />
            <Tabpane
              title={"年净值增长率"}
              content={
                <TabsContentBoxWrap key={"2"}>
                  <MarketRankingChart />
                </TabsContentBoxWrap>
              }
            />
          </Tabs>
        </Theme>
      </TabsWrap>
    );
  };

  render() {
    const { browserWidth } = this.state;
    const headerSpan = this.getHeaderColSpan(browserWidth);

    return (
      <Container>
        {/* 头部图表  */}
        <HeaderWrap>
          <Row>{this.getHeaderBoxs(headerSpan)}</Row>
        </HeaderWrap>
        {/** 本年净值走势 和 累计单位净值 */}
        <ContentWrap>
          <ContentIconWrap>
            <Theme config={iconView}>
              <Icon iconClass={"lugia-icon-financial_omit"} />
            </Theme>
          </ContentIconWrap>
          {this.getYearTabsComp()}
        </ContentWrap>

        {/**  持仓分布 和 本年实现收益 */}
        <SecWrap>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
            type="flex"
            justify="spaceBetween"
            align="middle"
          >
            <Col span={this.getSecLeftColSpan(browserWidth)}>
              <CommonH2>
                <CommonH2Mark />
                持仓分布
              </CommonH2>
              <SecContainer>
                <SecTopWrap>
                  <Theme config={checkbuttonView}>
                    <CheckboxGroup childType="button" defaultValue={["1"]}>
                      <CheckBoxButton value="1">总况</CheckBoxButton>
                      <CheckBoxButton value="2">基金</CheckBoxButton>
                      <CheckBoxButton value="3">股票</CheckBoxButton>
                    </CheckboxGroup>
                  </Theme>
                </SecTopWrap>
                <DistributionPolarChart />
              </SecContainer>
            </Col>
            <Col span={this.getSecRightColSpan(browserWidth)}>
              <CommonH2>
                <CommonH2Mark />
                本年实现收益
              </CommonH2>
              <SecContainer>
                <SecCheckBoxWrap>
                  <Theme config={checkbuttonView}>
                    <CheckboxGroup childType="button" defaultValue={["1"]}>
                      <CheckBoxButton value="1">月</CheckBoxButton>
                      <CheckBoxButton value="2">日</CheckBoxButton>
                    </CheckboxGroup>
                  </Theme>
                </SecCheckBoxWrap>
                <ProceedsChart />
              </SecContainer>
            </Col>
          </Row>
        </SecWrap>
        {/** 市场排位变化情况 */}
        <CommonH2>
          <CommonH2Mark />
          市场排位变化情况
        </CommonH2>
        <ContentWrap>
          <ContentIconWrap>
            <Theme config={iconView}>
              <Icon iconClass={"lugia-icon-financial_omit"} />
            </Theme>
          </ContentIconWrap>
          {this.getMarketRankingComp()}
        </ContentWrap>
        {/**本年交易 */}
        <CommonH2>
          <CommonH2Mark />
          本年交易
        </CommonH2>
        <FooterWrap>
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 24, xl: 24, xxl: 24 }}
            type="flex"
            justify="spaceBetween"
            align="middle"
          >
            <Col span={18}>
              <YearsTradeWrap>
                <FooterCheckBoxWrap>
                  <Theme config={checkbuttonView}>
                    <CheckboxGroup childType="button" defaultValue={["1"]}>
                      <CheckBoxButton value="1">月</CheckBoxButton>
                      <CheckBoxButton value="2">日</CheckBoxButton>
                    </CheckboxGroup>
                  </Theme>
                </FooterCheckBoxWrap>
                <YearsTradeChart />
              </YearsTradeWrap>
            </Col>
            <Col span={6}>
              <FooterFormWrap>
                <FooterSelectWrap>
                  <Select
                    theme={selectView}
                    value={"请选择日期"}
                    canClear={false}
                  />
                </FooterSelectWrap>

                <FooterSelectWrap>
                  <Select
                    theme={selectView}
                    value={"请选择日期"}
                    canClear={false}
                  />
                </FooterSelectWrap>

                <FooterTitle>区间统计：</FooterTitle>
                <FooterTotalWrap>
                  <FooterTotalTitle>
                    <p>买入</p>
                    <p>卖出</p>
                    <p>净资产</p>
                  </FooterTotalTitle>

                  <FooterTotalValue>
                    <p>1000亿元</p>
                    <p>10000亿元</p>
                    <p>9000亿元</p>
                  </FooterTotalValue>
                </FooterTotalWrap>
              </FooterFormWrap>
            </Col>
          </Row>
        </FooterWrap>
      </Container>
    );
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
        : state.get("interactData"),

      yearsTrendData: state.get("yearsTrendData")
    };
  },
  mutations => {
    return {
      getHeaderInfo: mutations.asyncGetHeaderInfo,
      getContentInfo: mutations.asyncGetContentInfo,
      getSecInfo: mutations.asyncGetSecInfo,
      getFooterInfo: mutations.asyncGetFooterInfo,

      getYearsTrendInfo: mutations.asyncGetYearsTrendInfo
    };
  }
)(Analyse);

export default () => {
  return <AnalysePage />;
};
