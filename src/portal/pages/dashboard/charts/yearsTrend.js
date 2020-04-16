/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import G2 from '@antv/g2';

const data = [
  { time: '01月', 仓位: 57, 深沪003: -1 },
  { time: '02月', 仓位: 63, 深沪003: -0.3 },
  { time: '03月', 仓位: 59, 深沪003: -0.5 },
  { time: '04月', 仓位: 40, 深沪003: -0.2 },
  { time: '05月', 仓位: 59, 深沪003: 0.4 },
  { time: '06月', 仓位: 50, 深沪003: 0.3 },
  { time: '07月', 仓位: 53, 深沪003: -0.2 },
  { time: '08月', 仓位: 69, 深沪003: 0 },
  { time: '09月', 仓位: 58, 深沪003: 0.3 },
  { time: '10月', 仓位: 40, 深沪003: 0.65 },
  { time: '11月', 仓位: 50, 深沪003: 0.38 },
  { time: '12月', 仓位: 43, 深沪003: 0.6 },
];

export default class Demo extends Component {
  render() {
    return <div id="yearstrend" />;
  }

  componentDidMount() {
    const chart = new G2.Chart({
      id: 'yearstrend',
      forceFit: true,
      height: 400,
      padding: [90, 100, 70, 73],
    });

    chart.source(data, {
      仓位: {
        min: 0,
        max: 100,
      },
      深沪003: {
        min: -1.5,
        max: 1,
      },
    });

    chart.axis('time', {
      line: {
        stroke: '#4d63ff',
        lineWidth: 2,
      },
      label: {
        textStyle: {
          fill: '#111',
        },
      },
      tickLine: null,
    });

    chart.axis('仓位', {
      position: 'left',
      label: {
        offset: 20,
      },
    });

    chart.axis('深沪003', {
      position: 'right',

      label: {
        offset: 20,
        textStyle: {
          fill: '#6495ED',
        },
        formatter: val => {
          if (val === '-1.5') {
            return;
          }
          const num = parseFloat(val);

          switch (num) {
            case 1:
              return '+1.00';
              break;
            case 0.5:
              return '+0.50';
              break;
            case -0.5:
              return '-0.50';
              break;
            case -1:
              return '-1.00';
              break;
            case 0:
              return '0.00';
              break;
            default:
          }
        },
      },
    });

    chart.scale('time', {
      range: [0.1, 0.9],
    });

    chart.guide().text({
      position: ['start', 'start'],
      offsetX: 2,
      offsetY: 15,
      content: '2018年',
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: '#000',
      },
    });

    chart.guide().text({
      position: ['start', 'end'],
      offsetX: -65,
      offsetY: -35,
      content: '仓位(%)',
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: '#000',
      },
    });

    chart.guide().text({
      position: ['end', 'end'],
      offsetX: 20,
      offsetY: -35,
      content: '增长率(%)',
      style: {
        fill: '#000',
        fontSize: 13,
        fontWeight: 600,
      },
    });

    chart.legend({
      position: 'top',
      offsetY: -50,
      itemGap: 20,
      textStyle: {
        fill: '#333',
      },
    });

    chart
      .line()
      .position('time*仓位')
      .color('l(0) 0:#CD9B1D 1:#EEE8CD')
      .shape('dash')
      .size(3)
      .style({ lineDash: [6, 6] });

    chart
      .line()
      .position('time*深沪003')
      .size(3)
      .color('l(0) 0:#1890ff 1:#BFEFFF');

    chart.render();
  }
}
