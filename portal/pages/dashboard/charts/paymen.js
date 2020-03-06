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
    return <div id="payment" />;
  }

  componentDidMount() {
    const { data = [], } = this.props;
    const chart = new G2.Chart({
      id: 'payment',
      forceFit: true,
      height: 50,
      padding: [0, 10, 0, 10,],
    });

    chart.source(data, {});
    chart.scale('time', {
      range: [0, 1,],
    });
    chart.scale('count', {
      range: [0, 1,],
      min: 0,
      max: 15,
    });
    chart.axis(false);
    chart.interval().position('time*count');
    chart.render();
  }
}
