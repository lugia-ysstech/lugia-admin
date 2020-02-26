import React, { PureComponent, } from 'react';
import { Icon, NumberInput, Theme, } from '@lugia/lugia-web';
import ThemeProvider from '@lugia/theme-hoc';
import Widgets from '@lugia/lugia-web/dist/consts';
import {
  AddPanelWrap,
  FloatingWindowContainer,
  FloatingWindowcontent,
  FloatingWindowLeft,
  FloatingWindowLeftContainer,
  FloatingWindowRight,
  ShrinkWrap,
} from '../css';

const inputView = {
  [Widgets.NumberInput]: {
    Input: {
      normal: {
        width: 105,
        margin: {
          left: 10,
          right: 10,
        },
      },
    },
  },
};
const NumberInputConfig = {
  max:100,
  min: 0,
  step: 2,
  size: 'small',
};
const leftpx = {
  0: '-250px',
  1: '0',
  2: '-250px',
};
class FloatingWindow extends PureComponent {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { floatingWindowState: newValue, gridMargin, } = nextProps;
    if (prevState) {
      const { floatingWindowState: oldValue, horizontal, vertical,} = prevState;
      if (
        newValue === oldValue &&
        horizontal === gridMargin[0] &&
        vertical === gridMargin[1]
      ) {
        return null;
      }
    }
    return {
      floatingWindowState: newValue,
      horizontal: gridMargin[0],
      vertical: gridMargin[1],
    };
  }
  onChangeHorizontal = ({ newValue: value, }) => {
    this.props.changeGridMargin([value, this.state.vertical,]);
  };
  onChangeVertical = ({ newValue: value, }) => {
    this.props.changeGridMargin([this.state.horizontal, value,]);
  };
  render() {
    const { floatingWindowState, horizontal, vertical, } = this.state;
    return (
      <FloatingWindowContainer style={{ right: leftpx[floatingWindowState], }}>
        <FloatingWindowLeftContainer>
          <FloatingWindowLeft
            onClick={this.props.openOperationPanel}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            . . . .
          </FloatingWindowLeft>
          {floatingWindowState === 2 && (
            <FloatingWindowRight
              onClick={this.props.selectedSwitchDragAndOpenOperationPanel}
              themeProps={this.props.getPartOfThemeProps('Container')}
            >
              <Icon iconClass={'lugia-icon-financial_layout'}></Icon>
            </FloatingWindowRight>
          )}
        </FloatingWindowLeftContainer>
        <FloatingWindowcontent
          style={{
            transform:
              floatingWindowState === 0 || floatingWindowState === 2
                ? 'scale(0,0)'
                : 'scale(1,1)',
          }}
        >
          <div className="lable" key="x">
            <span>
              水平间距<i>(px)</i>
            </span>
            <span>
              垂直间距<i>(px)</i>
            </span>
          </div>
          <div className="input_group">
            <div className="input_wrap">
              <Theme config={inputView}>
                <NumberInput
                  value={horizontal}
                  key="horizontal"
                  {...NumberInputConfig}
                  onChange={this.onChangeHorizontal}
                />
              </Theme>
            </div>
            <div className="input_wrap">
              <Theme config={inputView}>
                <NumberInput
                  value={vertical}
                  key="vertical"
                  {...NumberInputConfig}
                  onChange={this.onChangeVertical}
                />
              </Theme>
            </div>
          </div>
          <AddPanelWrap
            onClick={this.props.addGridItem}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            <Icon iconClass={'lugia-icon-reminder_plus'} />
            &nbsp;<span>增加区块</span>
          </AddPanelWrap>
          <ShrinkWrap themeProps={this.props.getPartOfThemeProps('Container')}>
            <Icon
              iconClass={'lugia-icon-direction_shrink'}
              onClick={this.props.hiddenOperationPanel}
            />
          </ShrinkWrap>
        </FloatingWindowcontent>
      </FloatingWindowContainer>
    );
  }
}

export default ThemeProvider(FloatingWindow, 'lagiu_floating_window', {
  hover: true,
  active: true,
  focus: true,
});
