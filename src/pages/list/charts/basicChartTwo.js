/**
 *
 * create by Shine Lee
 *
 * @flow
 */
import React, { Component } from 'react';
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import getPath from './basicChartOne';

const data = [
  { name: '服务器内存预算', value: 18 },
  { name: '已申请量', value: 5 },
  { name: '可申请余量', value: 4 },
];

G2.Shape.registerShape('interval', 'sliceShape', {
  draw: function draw(cfg, container) {
    let path = getPath(cfg);
    path = this.parsePath(path);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path,
      },
    });
  },
});

export default class Demo extends Component<> {
  render() {
    return <div id="GChartTwo" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: 'GChartTwo',
      forceFit: true,
      height: 280,
      padding: [50, 50, 50, -80],
    });

    const dv = new DataSet.DataView();
    dv.source(data).transform({
      type: 'percent',
      field: 'value',
      dimension: 'name',
      as: 'percent',
    });

    chart.source(dv);
    chart.coord('theta', {
      innerRadius: 0.4,
    });

    chart.axis(false);

    chart.legend({
      position: 'right-bottom',
      offsetX: -100,
      offsetY: -50,
      textStyle: {
        fontSize: 14,
        fill: '#333',
      },
    });

    chart
      .intervalStack()
      .position('value')
      .color('name', ['#33f', '#aaf', '#f88'])
      .shape('interval')
      .tooltip('name*value', (name, value) => {
        return {
          name,
          value: (value * 100).toFixed(2) + '%',
        };
      })
      .label('name', {
        formatter: (text, item) => {
          const point = item.point; // 每个弧度对应的点
          return point.percent * 27;
        },
        textStyle: {
          fontSize: 16,
          fill: '#fff',
        },
        offset: -25,
        autoRotate: false,
      });
    chart.render();
  }
}
