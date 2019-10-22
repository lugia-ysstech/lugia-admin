/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";

const data = [
  { time: "14:08", type: "客流量", value: 62 },
  { time: "14:08", type: "支付笔数", value: 73 },
  { time: "14:38", type: "客流量", value: 43 },
  { time: "14:38", type: "支付笔数", value: 86 },
  { time: "15:08", type: "客流量", value: 48 },
  { time: "15:08", type: "支付笔数", value: 49 },
  { time: "15:38", type: "客流量", value: 40 },
  { time: "15:38", type: "支付笔数", value: 70 },
  { time: "16:08", type: "客流量", value: 90 },
  { time: "16:08", type: "支付笔数", value: 47 },
  { time: "16:38", type: "客流量", value: 15 },
  { time: "16:38", type: "支付笔数", value: 30 },
  { time: "17:08", type: "客流量", value: 101 },
  { time: "17:08", type: "支付笔数", value: 55 },
  { time: "17:38", type: "客流量", value: 39 },
  { time: "17:38", type: "支付笔数", value: 92 },
  { time: "18:08", type: "客流量", value: 41 },
  { time: "18:08", type: "支付笔数", value: 109 },
  { time: "18:38", type: "客流量", value: 26 },
  { time: "18:38", type: "支付笔数", value: 96 },
  { time: "19:08", type: "客流量", value: 93 },
  { time: "19:08", type: "支付笔数", value: 70 },
  { time: "19:38", type: "客流量", value: 41 },
  { time: "19:38", type: "支付笔数", value: 43 },
  { time: "20:08", type: "客流量", value: 36 },
  { time: "20:08", type: "支付笔数", value: 45 },
  { time: "20:38", type: "客流量", value: 18 },
  { time: "20:38", type: "支付笔数", value: 76 },
  { time: "21:08", type: "客流量", value: 43 },
  { time: "21:08", type: "支付笔数", value: 78 },
  { time: "21:38", type: "客流量", value: 21 },
  { time: "21:38", type: "支付笔数", value: 38 },
  { time: "22:08", type: "客流量", value: 30 },
  { time: "22:08", type: "支付笔数", value: 106 },
  { time: "22:38", type: "客流量", value: 80 },
  { time: "22:38", type: "支付笔数", value: 48 },
  { time: "23:08", type: "客流量", value: 64 },
  { time: "23:08", type: "支付笔数", value: 17 },
  { time: "23:38", type: "客流量", value: 62 },
  { time: "23:38", type: "支付笔数", value: 107 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="slider" />;
  }

  componentDidMount() {
    const ds = new DataSet({
      state: {
        start: "14:08",
        end: "23:38"
      }
    });

    const dv = ds.createView();
    dv.source(data);
    const chart = new G2.Chart({
      id: "slider",
      forceFit: true,
      height: 430,
      padding: [40, 0, 40, 40]
    });

    chart.source(dv, {});

    const barView = chart.view();
    barView.source(dv);
    barView
      .line()
      .position("time*value")
      .color("type");
    chart.legend("type", {
      position: "top"
    });

    chart.render();
  }
}
