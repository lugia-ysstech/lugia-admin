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
    return <div id="searchusers"></div>;
  }

  componentDidMount() {
    const { data = [] } = this.props;
    const searchusersChart = new G2.Chart({
      id: 'searchusers',
      forceFit: true,
      height: 40,
      padding: 0,
    });

    searchusersChart.source(data, {});
    searchusersChart.scale('time', {
      range: [0, 1],
    });
    searchusersChart.scale('count', {
      range: [0, 1],
      min: 0,
      max: 10,
    });
    searchusersChart.axis(false);
    searchusersChart
      .line()
      .position('time*count')
      .size(4)
      .shape('smooth');
    searchusersChart
      .area()
      .position('time*count')
      .color('#B8DDF4')
      .opacity(1)
      .shape('smooth');
    searchusersChart.render();
  }
}
