/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component, } from 'react';
import G2 from '@antv/g2';

const data = [
  { time: '01月', type: 'list1', value: 137, },
  { time: '02月', type: 'list1', value: 217, },
  { time: '03月', type: 'list1', value: 59, },
  { time: '04月', type: 'list1', value: 40, },
  { time: '05月', type: 'list1', value: 294, },
  { time: '06月', type: 'list1', value: 350, },
  { time: '07月', type: 'list1', value: 153, },
  { time: '08月', type: 'list1', value: 226, },
  { time: '09月', type: 'list1', value: 158, },
  { time: '10月', type: 'list1', value: 240, },
  { time: '11月', type: 'list1', value: 450, },
  { time: '12月', type: 'list1', value: 101, },

  { time: '01月', type: 'list2', value: 244, },
  { time: '02月', type: 'list2', value: 364, },
  { time: '03月', type: 'list2', value: 225, },
  { time: '04月', type: 'list2', value: 180, },
  { time: '05月', type: 'list2', value: 234, },
  { time: '06月', type: 'list2', value: 250, },
  { time: '07月', type: 'list2', value: 103, },
  { time: '08月', type: 'list2', value: 236, },
  { time: '09月', type: 'list2', value: 158, },
  { time: '10月', type: 'list2', value: 40, },
  { time: '11月', type: 'list2', value: 150, },
  { time: '12月', type: 'list2', value: 143, },

  { time: '01月', type: 'list3', value: 307, },
  { time: '02月', type: 'list3', value: 274, },
  { time: '03月', type: 'list3', value: 258, },
  { time: '04月', type: 'list3', value: 348, },
  { time: '05月', type: 'list3', value: 109, },
  { time: '06月', type: 'list3', value: 168, },
  { time: '07月', type: 'list3', value: 223, },
  { time: '08月', type: 'list3', value: 346, },
  { time: '09月', type: 'list3', value: 258, },
  { time: '10月', type: 'list3', value: 140, },
  { time: '11月', type: 'list3', value: 350, },
  { time: '12月', type: 'list3', value: 243, },

  { time: '01月', type: 'list4', value: 405, },
  { time: '02月', type: 'list4', value: 307, },
  { time: '03月', type: 'list4', value: 320, },
  { time: '04月', type: 'list4', value: 290, },
  { time: '05月', type: 'list4', value: 204, },
  { time: '06月', type: 'list4', value: 334, },
  { time: '07月', type: 'list4', value: 213, },
  { time: '08月', type: 'list4', value: 206, },
  { time: '09月', type: 'list4', value: 258, },
  { time: '10月', type: 'list4', value: 340, },
  { time: '11月', type: 'list4', value: 250, },
  { time: '12月', type: 'list4', value: 343, },

  { time: '01月', type: 'list5', value: 172, },
  { time: '02月', type: 'list5', value: 233, },
  { time: '03月', type: 'list5', value: 145, },
  { time: '04月', type: 'list5', value: 180, },
  { time: '05月', type: 'list5', value: 160, },
  { time: '06月', type: 'list5', value: 120, },
  { time: '07月', type: 'list5', value: 160, },
  { time: '08月', type: 'list5', value: 178, },
  { time: '09月', type: 'list5', value: 203, },
  { time: '10月', type: 'list5', value: 220, },
  { time: '11月', type: 'list5', value: 201, },
  { time: '12月', type: 'list5', value: 190, },
];

export default class Demo extends Component {
  render() {
    return <div id="marketRanking" />;
  }

  componentDidMount() {
    // const { data = [] } = this.props;
    const chart = new G2.Chart({
      id: 'marketRanking',
      forceFit: true,
      height: 400,

      padding: [80, 60, 60, 80,],
    });

    chart.source(data, {});

    chart.scale('value', {
      range: [0.2, 1,],
      min: 0,
      max: 400,
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

    chart.legend({
      position: 'top',
      offsetY: -50,
      itemWidth: 100,
      itemFormatter: val => {
        switch (val) {
          case 'list1':
            return '基金01';
          case 'list2':
            return '基金02';
          case 'list3':
            return '基金03';
          case 'list4':
            return '基金04';
          case 'list5':
            return '基金05';
          default:
        }
      },
    });

    chart.guide().text({
      position: ['start', 'end',],
      offsetX: -65,
      offsetY: -35,
      content: '金额(亿元)',
      style: {
        fontSize: 13,
        fontWeight: 600,
        fill: '#000',
      },
    });

    chart
      .line()
      .position('time*value')
      .color('type', val => {
        switch (val) {
          case 'list1':
            return '#4d63ff';
          case 'list2':
            return '#EE9572';
          case 'list3':
            return '#8B7D7B  ';
          case 'list4':
            return '#B9D3EE';
          case 'list5':
            return '#CD5C5C';
          default:
        }
      });
    chart.render();
  }
}
