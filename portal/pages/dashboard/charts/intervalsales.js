/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";

const visitsData = [
  { time: "1月", value: 849 },
  { time: "2月", value: 666 },
  { time: "3月", value: 573 },
  { time: "4月", value: 1199 },
  { time: "5月", value: 227 },
  { time: "6月", value: 612 },
  { time: "7月", value: 1146 },
  { time: "8月", value: 883 },
  { time: "9月", value: 339 },
  { time: "10月", value: 374 },
  { time: "11月", value: 325 },
  { time: "12月", value: 1179 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="intervalsales" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: "intervalsales",
      forceFit: true,
      height: 255,
      padding: [20, 0, 40, 40]
    });

    chart.source(visitsData, {});
    chart.scale("time", {
      range: [0.06, 0.94]
    });
    chart.scale("value", {
      range: [0, 1],
      min: 0,
      max: 1200
    });

    chart.interval().position("time*value");
    chart.render();
  }
}
