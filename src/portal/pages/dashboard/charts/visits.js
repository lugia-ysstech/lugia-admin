/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import G2 from '@antv/g2';

export default class Demo extends Component {
  render() {
    return <div id="visits" />;
  }

  componentDidMount() {
    const { data = [] } = this.props;

    const visitsChart = new G2.Chart({
      id: 'visits',
      forceFit: true,
      height: 50,
      padding: 0,
    });

    visitsChart.source(data, {});
    visitsChart.scale('time', {
      range: [0, 1],
    });
    visitsChart.scale('count', {
      range: [0, 1],
      min: 0,
      max: 15,
    });
    visitsChart.axis(false);
    visitsChart
      .line()
      .position('time*count')
      .shape('smooth')
      .color('#AA64D9');
    visitsChart
      .area()
      .position('time*count')
      .color('#AA64D9')
      .opacity(1)
      .shape('smooth');
    visitsChart.render();
  }
}
