/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component, } from 'react';
import G2 from '@antv/g2';

const data = [
  { time: '01月', sell: [0, 6,], buy: [0, 0,], },
  { time: '02月', sell: [6, 10,], buy: [0, 0,], },
  { time: '03月', sell: [10, 10,], buy: [8, 12,], },
  { time: '04月', sell: [10, 17,], buy: [0, 0,], },
  { time: '05月', sell: [17, 23,], buy: [0, 0,], },
  { time: '06月', sell: [23, 29,], buy: [0, 0,], },
  { time: '07月', sell: [29, 29,], buy: [25, 32,], },
  { time: '08月', sell: [25, 28,], buy: [0, 0,], },
  { time: '09月', sell: [0, 0,], buy: [23, 28,], },
  { time: '10月', sell: [0, 0,], buy: [28, 33,], },
  { time: '11月', sell: [0, 0,], buy: [33, 36,], },
  { time: '12月', sell: [35, 40,], buy: [0, 0,], },
];

export default class Demo extends Component {
  render() {
    return <div id="proceeds" />;
  }

  componentDidMount() {
    // const { data = [] } = this.props;
    const chart = new G2.Chart({
      id: 'proceeds',
      forceFit: true,
      height: 400,

      padding: [80, 60, 60, 80,],
    });

    chart.source(data, {
      time: {
        range: [0.04, 1,],
      },
      buy: false,
      sell: {
        min: 0,
        max: 50,
      },
    });

    chart.axis('buy', false);

    chart.axis('time', {
      line: {
        stroke: '#4d63ff',
        lineWidth: 2,
      },
      label: {
        offset: 30,
        textStyle: {
          fill: '#111',
        },
      },
      tickLine: null,
    });

    chart.guide().text({
      position: ['start', 'start',],
      offsetX: -40,
      offsetY: 30,
      content: '2018年',
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: '#000',
      },
    });

    chart.legend({
      position: 'top',
      offsetY: -20,
      itemGap: 20,
      itemFormatter: val => {
        if (val === 'sell') {
          return '卖出';
        }
          return '买入';

      },
    });

    chart
      .interval()
      .position('time*sell')
      .color('#7EC0EE');

    chart
      .interval()
      .position('time*buy')
      .color('#CD8162');

    chart.render();
  }
}
