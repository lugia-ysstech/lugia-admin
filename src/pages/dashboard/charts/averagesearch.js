/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component, } from 'react';
import G2 from '@antv/g2';

export default class Demo extends Component {
  render() {
    return <div id="averagesearch" />;
  }

  componentDidMount() {
    const { data = [], } = this.props;
    const averagesearchChart = new G2.Chart({
      id: 'averagesearch',
      forceFit: true,
      height: 40,
      padding: 0,
    });

    averagesearchChart.source(data, {});
    averagesearchChart.scale('time', {
      range: [0, 1,],
    });
    averagesearchChart.scale('count', {
      range: [0, 1,],
      min: 0,
      max: 10,
    });
    averagesearchChart.axis(false);
    averagesearchChart
      .line()
      .position('time*count')
      .size(4)
      .shape('smooth');
    averagesearchChart
      .area()
      .position('time*count')
      .color('#B8DDF4')
      .opacity(1)
      .shape('smooth');
    averagesearchChart.render();
  }
}
