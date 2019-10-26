/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";

export default class Demo extends Component<any> {
  render() {
    return <div id="slider" />;
  }

  componentDidMount() {
    const { data = [] } = this.props;
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
