/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import G2 from '@antv/g2';

const data = [
  { type: '股票', value: 30 },
  { type: '基金', value: 25 },
];

G2.Shape.registerShape('interval', 'sliceShape', {
  draw: function draw(cfg, container) {
    const points = cfg.points;
    const origin = cfg.origin._origin;
    const percent = origin.value / 60;
    const xWidth = points[2].x - points[1].x;
    const width = xWidth * percent;
    let path = [];
    path.push(['M', points[0].x, points[0].y]);
    path.push(['L', points[1].x, points[1].y]);
    path.push(['L', points[0].x + width, points[2].y]);
    path.push(['L', points[0].x + width, points[3].y]);
    path.push('Z');
    path = this.parsePath(path);
    return container.addShape('path', {
      attrs: {
        fill: cfg.color,
        path,
      },
    });
  },
});

export default class Demo extends Component {
  render() {
    return <div id="distribution" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: 'distribution',
      forceFit: true,
      height: 320,
      padding: [-40, 0, 0, 0],
    });

    chart.source(data);
    chart.coord('theta', {
      innerRadius: 0.5,
    });

    chart.axis(false);
    chart
      .intervalStack()
      .position('value')
      .color('type', ['r(0.1, 0.04, 0.1) 0:#eee 1:#4d63ff', 'r(0.1, 0.04, 0.1)) 0:#eee 1:#CD6839'])
      .shape('sliceShape');
    chart.render();
  }
}
