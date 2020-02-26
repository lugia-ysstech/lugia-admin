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
    return <div id="intervalsales" />;
  }

  componentDidMount() {
    const { data = [], } = this.props;
    const chart = new G2.Chart({
      id: 'intervalsales',
      forceFit: true,
      height: 255,
      padding: [20, 0, 40, 40,],
    });

    chart.source(data, {});
    chart.scale('time', {
      range: [0.06, 0.94,],
    });
    chart.scale('value', {
      range: [0, 1,],
      min: 0,
      max: 1200,
    });

    chart.interval().position('time*value');
    chart.render();
  }
}
