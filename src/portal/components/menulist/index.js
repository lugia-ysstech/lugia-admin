/**
 *
 * create by szfeng
 *
 * @flow
 */
import React from 'react';
import styled from 'styled-components';
import { consts as Widget, Navmenu } from '@lugia/lugia-web';
import logo from '../../assets/images/pro_logo.png';
import menuList from '../../models/menuList';
import { connect } from '@lugia/lugiax';
import Security from '../../models/security';
import Authenticate from '../../../authenticate.json';
import SideNavConfig from '../../../config/router/sideNav.config';
import TopNavConfig from '../../../config/router/topNav.config';
import AllPages from '../../../config/router/cusRouting.config';
import { topNav } from '../../../config/router/nav.config.json';

function getNavContainerCSS() {
  return topNav
    ? `
    display:flex;
    background: #000033;
    height: 60px;
    `
    : `
    display: inline-block;
    background: #000033;
    height: inherit;
    height: 100vh;
    position: fixed;
    z-index: 100;
    overflow-y: scroll
  `;
}

function getTitleCSS() {
  return topNav
    ? `
    width: 160px;
    margin: auto 0;
    `
    : `
    padding: 10px 0 10px;
  `;
}

const NavContainer = styled.div`
  ${getNavContainerCSS}

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background: #d9d9d9;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #bdbdbd;
  }
`;

const Title = styled.div`
  text-align: center;
  & > img {
    width: 84px;
  }

  ${getTitleCSS}
`;

const navTheme = {
  [Widget.NavMenu]: {
    Tree: {
      Container: {
        normal: {
          width: 220,
          padding: {
            right: 10,
            left: 10,
          },
        },
      },
      TreeItem: {
        TreeItemWrap: {
          normal: {
            height: 40,
            padding: {
              right: 0,
              left: 0,
            },
          },
        },
        SelectedTreeItemWrap: {
          normal: {
            padding: {
              left: 0,
              right: 0,
            },
          },
        },
        Text: {
          normal: {
            height: 32,
            font: {
              size: 14,
            },
            padding: {
              left: 20,
            },
          },
        },
        SelectedText: {
          normal: {
            height: 32,
            font: {
              size: 14,
            },
            padding: {
              left: 20,
            },
          },
        },
        Switch: {
          normal: {
            color: '#fff',
            font: {
              size: 8,
            },
          },
          hover: {
            color: '#4d63ff',
          },
        },
      },
    },
  },
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.setState({
      value: window.location.pathname,
    });
  }

  getTargetOrDefaultTarget = (condition, target, defaultTarget) => {
    return condition ? target : defaultTarget;
  };

  getRouterData = (topNav, TopNavConfig, SideNavConfig) => {
    const sideNavData = SideNavConfig.length !== 0 ? SideNavConfig : AllPages;
    const topNavData = TopNavConfig.length !== 0 ? TopNavConfig : AllPages;

    return topNav ? topNavData : sideNavData;
  };

  render() {
    const { menuState = {}, routeData } = this.props;
    let { value } = menuState;
    if (!value) {
      const { value: stateValue } = this.state;
      value = stateValue;
    }

    const { authenticateSwitch } = Authenticate;
    const filterRouterData = this.getTargetOrDefaultTarget(
      authenticateSwitch,
      routeData,
      this.getRouterData(topNav, TopNavConfig, SideNavConfig)
    );
    const mode = this.getTargetOrDefaultTarget(topNav, 'horizontal', 'inline');
    const theme = this.getTargetOrDefaultTarget(topNav, {}, navTheme);
    return (
      <NavContainer>
        <Title>
          <img src={logo} />
        </Title>
        {filterRouterData.length !== 0 && (
          <Navmenu
            theme={theme}
            value={value}
            pathSeparator={'@'}
            themeStyle={'dark'}
            onSelect={this.props.onSelect}
            mode={mode}
            inlineType={'ellipse'}
            action={'hover'}
            data={filterRouterData}
            switchIconNames={{
              open: 'lugia-icon-direction_caret_up',
              close: 'lugia-icon-direction_caret_down',
            }}
            step={60}
            inlineExpandAll={true}
            autoHeight={true}
          />
        )}
      </NavContainer>
    );
  }
}

const MenuList = connect(
  [menuList, Security],
  state => {
    const [menuList, Security] = state;
    return {
      menuState: menuList.get('menuState').toJS
        ? menuList.get('menuState').toJS()
        : menuList.get('menuState'),
      routeData: Security.get('routeData').toJS
        ? Security.get('routeData').toJS()
        : Security.get('routeData'),
    };
  },
  mutations => {
    const [menuList] = mutations;
    return {
      onSelect: menuList.onSelect,
    };
  }
)(List);

export default () => {
  return <MenuList />;
};
