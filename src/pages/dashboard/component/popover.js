/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from 'react';
import { consts as Widget, Icon, Popover, Theme } from '@lugia/lugia-web';

const config = {
  [Widget.Popover]: {
    PopoverContent: {
      Container: {
        normal: { background: { color: '#111' } },
      },
      TooltipTitle: { normal: { color: '#fff' } },
    },
  },
  [Widget.Icon]: {
    Icon: {
      normal: {
        fontSize: 14,
      },
    },
  },
};

export default class Basic extends Component {
  render() {
    const title = '指示说明';

    return (
      <Theme config={config}>
        <Popover
          placement="top"
          title={title}
          action={'hover'}
          showClearButton={false}
        >
          <Icon iconClass="lugia-icon-reminder_info_circle_o" />
        </Popover>
      </Theme>
    );
  }
}
