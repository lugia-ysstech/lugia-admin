/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";

const data = [
  { type: "家用电器", value: 4544 },
  { type: "食用酒水", value: 3321 },
  { type: "个护健康", value: 3113 },
  { type: "服饰箱包", value: 2341 },
  { type: "母婴产品", value: 1231 },
  { type: "其他", value: 1231 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="salesbox" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: "salesbox",
      forceFit: true,
      height: 220,
      padding: 0
    });

    chart.source(data);
    chart.coord("theta", {
      innerRadius: 0.75
    });
    chart.legend("type", {
      position: "right-center",
      offsetX: -200,
      textStyle: {
        fontSize: 15,
        color: "orange"
      },
      width: 300,
      height: 300,
      itemGap: "50"
    });

    chart
      .intervalStack()
      .position("value")
      .color("type")
      .shape("sliceShape");
    chart.guide().html({
      position: ["50%", "50%"],
      html: `<div>
                <p style="font-size:14px;color:#888;text-align:center;line-height:40px">销售额</p>
                <p style="font-size:20px;color:#333;text-align:center">￥15,781</p>
            </div>`
    });
    chart.render();
  }
}
