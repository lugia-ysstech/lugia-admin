/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";

const sellData = [
  { time: "01月", value: [0, -100] },
  { time: "02月", value: [0, -200] },
  { time: "03月", value: [0, -250] },
  { time: "04月", value: [0, -120] },
  { time: "05月", value: [0, -180] },
  { time: "06月", value: [0, 0] },
  { time: "07月", value: [0, -190] },
  { time: "08月", value: [0, 0] },
  { time: "09月", value: [0, 0] },
  { time: "10月", value: [0, -120] },
  { time: "11月", value: [0, -260] },
  { time: "12月", value: [0, -180] }
];

const buyData = [
  { time: "01月", value: [0, 160] },
  { time: "02月", value: [0, 0] },
  { time: "03月", value: [0, 0] },
  { time: "04月", value: [0, 200] },
  { time: "05月", value: [0, 0] },
  { time: "06月", value: [0, 280] },
  { time: "07月", value: [0, 240] },
  { time: "08月", value: [0, 300] },
  { time: "09月", value: [0, 100] },
  { time: "10月", value: [0, 0] },
  { time: "11月", value: [0, 0] },
  { time: "12月", value: [0, 250] }
];

const capitalData = [
  { time: "01月", value: 80 },
  { time: "02月", value: -100 },
  { time: "03月", value: -150 },
  { time: "04月", value: 180 },
  { time: "05月", value: -90 },
  { time: "06月", value: 220 },
  { time: "07月", value: 170 },
  { time: "08月", value: 240 },
  { time: "09月", value: 50 },
  { time: "10月", value: -40 },
  { time: "11月", value: -200 },
  { time: "12月", value: 80 }
];
const data = [
  { time: "01月", sell: [0, -100], buy: [0, 160], capital: 80 },
  { time: "02月", sell: [0, -200], buy: [0, 0], capital: -100 },
  { time: "03月", sell: [0, -250], buy: [0, 0], capital: -150 },
  { time: "04月", sell: [0, -120], buy: [0, 200], capital: 180 },
  { time: "05月", sell: [0, -180], buy: [0, 0], capital: -90 },
  { time: "06月", sell: [0, 0], buy: [0, 280], capital: 220 },
  { time: "07月", sell: [0, -190], buy: [0, 240], capital: 170 },
  { time: "08月", sell: [0, 0], buy: [0, 300], capital: 240 },
  { time: "09月", sell: [0, 0], buy: [0, 100], capital: 50 },
  { time: "10月", sell: [0, -120], buy: [0, 0], capital: -40 },
  { time: "11月", sell: [0, -260], buy: [0, 0], capital: -200 },
  { time: "12月", sell: [0, -180], buy: [0, 250], capital: 80 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="yearsTrade" />;
  }

  componentDidMount() {
    // const { data = [] } = this.props;

    const chart = new G2.Chart({
      id: "yearsTrade",
      forceFit: true,
      height: 450,
      padding: [80, 60, 60, 80]
    });

    chart.source(data);

    chart.scale({
      time: {
        range: [0.1, 0.9]
      },
      sell: {
        range: [0.1, 1],
        min: -300,
        max: 300
      },
      buy: {
        range: [0.1, 1],
        min: -300,
        max: 300
      },
      capital: {
        range: [0.1, 1],
        min: -300,
        max: 300
      }
    });
    chart.axis("sell", false);
    chart.axis("capital", false);

    chart.axis("time", {
      line: null,
      tickLine: null,
      label: {
        offset: 30
      }
    });

    chart.guide().text({
      position: ["start", "start"],
      offsetX: -45,
      offsetY: 28,
      content: "2018年",
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: "#000"
      }
    });

    chart.guide().line({
      top: true,
      start: ["start", 0],
      end: ["end", 0],
      lineStyle: {
        stroke: "#63B8FF",
        lineWidth: 2,
        lineDash: [0, 0]
      }
    });

    chart.guide().text({
      position: ["start", "end"],
      offsetX: -65,
      offsetY: -35,
      content: "金额(亿元)",
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: "#000"
      }
    });

    chart
      .interval()
      .position("time*buy")
      .color("l(100) 0:#EE9572 1:#EEE8CD")
      .size(20);

    chart
      .interval()
      .position("time*sell")
      .color("l(100) 1:#9F79EE 0:#EEE8CD")
      .size(20);

    chart
      .line()
      .position("time*capital")
      .color("#EE9A49");

    chart
      .point()
      .position("time*capital")
      .color("#EE9A49")
      .size(4);

    chart.legend({
      position: "top",
      offsetY: -30,
      itemGap: 30,
      items: [
        {
          value: "净资产",
          marker: {
            symbol: "hyphen",
            stroke: "#EE9A49",
            radius: 5
          }
        },
        {
          value: "买入",
          marker: {
            symbol: "square",
            fill: "l(0) 0:#EE9572 1:#EEE8CD",
            radius: 5
          }
        },
        {
          value: "卖出",
          marker: {
            symbol: "square",
            fill: "l(0) 0:#9F79EE 1:#EEE8CD",
            radius: 5
          }
        }
      ]
    });
    chart.legend("capital", false);

    chart.render();
  }
}
