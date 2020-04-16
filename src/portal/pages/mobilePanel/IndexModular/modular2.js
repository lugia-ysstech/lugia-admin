import React from 'react';
import { Slider, Theme } from '@lugia/lugia-web';
import Widgets from '@lugia/lugia-web/dist/consts';
import { getBorder } from '@lugia/theme-utils';

const sliderView = {
  [Widgets.Slider]: {
    SliderTrack: {
      normal: {
        width: 225,
        height: 4,
        background: { color: '#fff' },
        opacity: 1,
      },
      hover: {
        background: { color: '#fff' },
        opacity: 1,
      },
      active: {
        background: { color: '#fff' },
        opacity: 1,
      },
    },
    SliderPassedWay: {
      normal: {
        height: 4,
        background: { color: '#4D63FF' },
      },
    },
    SliderButton: {
      normal: {
        width: 10,
        height: 10,
        background: { color: '#fff' },
        border: getBorder({ style: 'solid', color: '#4D63FF', width: 1 }),
      },
      active: {
        background: { color: '#fff' },
        width: 10,
        height: 10,
        border: getBorder({ style: 'solid', color: '#4D63FF', width: 1 }),
      },
      hover: {
        width: 10,
        height: 10,
        background: { color: 'red' },
        border: getBorder({ style: 'solid', color: '#4D63FF', width: 1 }),
      },
    },
    SliderMarks: {
      normal: {
        nth: { color: '#747E90', font: { weight: 700, size: 12 } },
      },
      disabled: {
        nth: { color: '#747E90', font: { weight: 700, size: 12 } },
      },
    },
  },
};
class Modular2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVale: 10,
    };
  }
  sliberChange = value => {
    console.log('value', value);
  };
  render() {
    return (
      <div>
        Modular2
        <Theme config={sliderView}>
          <Slider
            defaultValue={this.state.sliderVale}
            onChange={this.sliberChange}
            tips
            marks={{
              2: '2',
              3: '3',
              4: '4',
              6: '6',
              8: '8',
              12: '12',
            }}
          />
        </Theme>
      </div>
    );
  }
}

export default Modular2;
