/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";

const visitsData = [
  { time: "2019-10-15", count: 5 },
  { time: "2019-10-16", count: 2 },
  { time: "2019-10-17", count: 6 },
  { time: "2019-10-18", count: 8 },
  { time: "2019-10-19", count: 5 },
  { time: "2019-10-20", count: 1 },
  { time: "2019-10-21", count: 3 },
  { time: "2019-10-22", count: 6 },
  { time: "2019-10-23", count: 2 },
  { time: "2019-10-24", count: 8 },
  { time: "2019-10-25", count: 7 },
  { time: "2019-10-26", count: 6 },
  { time: "2019-10-27", count: 3 },
  { time: "2019-10-28", count: 4 },
  { time: "2019-10-29", count: 6 },
  { time: "2019-10-30", count: 8 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="visits" />;
  }

  componentDidMount() {
    const visitsChart = new G2.Chart({
      id: "visits",
      forceFit: true,
      height: 50,
      padding: 0
    });

    visitsChart.source(visitsData, {});
    visitsChart.scale("time", {
      range: [0, 1]
    });
    visitsChart.scale("count", {
      range: [0, 1],
      min: 0,
      max: 15
    });
    visitsChart.axis(false);
    visitsChart
      .line()
      .position("time*count")
      .shape("smooth")
      .color("#AA64D9");
    visitsChart
      .area()
      .position("time*count")
      .color("#AA64D9")
      .opacity(1)
      .shape("smooth");
    visitsChart.render();
  }
}
