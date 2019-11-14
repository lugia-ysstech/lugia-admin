/**
 *
 * create by Shine Lee
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";

const data = [{ name: "eoi内存预算", value: 18 }, { name: "已申请量", value: 4 }, { name: "可申请余量", value: 4 }];

G2.Shape.registerShape("interval", "sliceShape", {
  draw: function draw(cfg, container) {
    let points = cfg.points;
    let origin = cfg.origin._origin;
    let percent = origin.value / 60;
    let xWidth = points[2].x - points[1].x;
    let width = xWidth * percent + 0.5;
    let path = [];
    path.push(["M", points[0].x, points[0].y]);
    path.push(["L", points[1].x, points[1].y]);
    path.push(["L", points[0].x + width, points[2].y]);
    path.push(["L", points[0].x + width, points[3].y]);
    path.push("Z");
    path = this.parsePath(path);
    return container.addShape("path", {
      attrs: {
        fill: cfg.color,
        path: path
      }
    });
  }
});

export default class Demo extends Component<any> {
  render() {
    return <div id="GChartThree" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: "GChartThree",
      forceFit: true,
      height: 280,
      padding: [50, 50, 50, -80]
    });

    const dv = new DataSet.DataView();
    dv.source(data).transform({
      type: "percent",
      field: "value",
      dimension: "name",
      as: "percent"
    });

    chart.source(dv);
    chart.coord("theta", {
      innerRadius: 0.4
    });

    chart.axis(false);

    chart.legend({
      position: "right-bottom",
      offsetX: -100,
      offsetY: -50,
      textStyle:{
        fontSize: 14
      }
    });

    chart
      .intervalStack()
      .position("value")
      .color("name", [
        "#33f",
        "#aaf",
        "#f88"
      ])
      .shape("interval")
      .tooltip('name*value', (name, value) => {
        return {
          name,
          value: (value * 100).toFixed(2) + '%'
        };
      })
      .label('name', {
        formatter: (text, item) => {
          const point = item.point; // 每个弧度对应的点
          return point['percent']*26;
        },
        textStyle:{
          fontSize: 16,
          fill: '#fff'
        },
        offset: -25,
        autoRotate: false,
      });
    chart.render();
  }
}
