/**
 *
 * create by szfeng
 *
 * @flow
 */
import React from "react";
import styled from "styled-components";
import { Navmenu, Theme, consts as Widget } from "@lugia/lugia-web";
import logo from "../../assets/images/pro_logo.png";
import menuList from "../../models/menuList";
import { connect } from "@lugia/lugiax";
import Security from "../../models/security";

const NavContainer = styled.div`
  display: inline-block;
  background: #000033;
  height: 100%;
`;

const Title = styled.div`
  padding: 10px 0 10px;
  text-align: center;
  & > img {
    width: 84px;
  }
`;


class List extends React.Component<any> {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    const viewHeight = this.getWindowHeight();
    this.setState({
      value: window.location.pathname,
      height: viewHeight
    });
    window.onresize = () => {
      const viewHeight = this.getWindowHeight();
      this.setState({
        height: viewHeight
      });
    };
  }

  getWindowHeight = () => {
    return document.body.clientHeight - 122;
  };

  render() {
    const { menuState = {}, routeData } = this.props;
    let { value } = menuState;
    if (!value) {
      const { value: stateValue } = this.state;
      value = stateValue;
    }

    const { height = 600 } = this.state;

    const theme = {
      [Widget.NavMenu]: {
        Tree: {
          TreeWrap: {
            normal: {
              width: 210,
              height,
              padding: {
                right: 10,
                left: 10
              }
            }
          },
          TreeItem: {
            TreeItemWrap: {
              normal: {
                height: 40,
                padding: {
                  right: 0,
                  left: 0
                }
              }
            },
            SelectedTreeItemWrap: {
              normal: {
                padding: {
                  left: 0,
                  right: 0
                }
              }
            },
            Text: {
              normal: {
                height: 32,
                font: {
                  size: 14
                },
                padding: {
                  left: 20
                }
              }
            },
            SelectedText: {
              normal: {
                height: 32,
                font: {
                  size: 14
                },
                padding: {
                  left: 20
                }
              }
            },
            Switch: {
              normal: {
                color: "#fff",
                font: {
                  size: 8
                }
              },
              hover: {
                color: "#4d63ff"
              }
            }
          }
        }
      }
    };
    return (
      <NavContainer>
        <Title>
          <img src={logo} />
        </Title>
        {routeData.length !== 0 && (
          <Navmenu
            theme={theme}
            value={value}
            pathSeparator={"@"}
            themeStyle={"dark"}
            onSelect={this.props.onSelect}
            inlineType={"ellipse"}
            data={routeData}
            switchIconNames={{
              open: "lugia-icon-direction_caret_up",
              close: "lugia-icon-direction_caret_down"
            }}
            step={60}
            autoHeight={false}
            inlineExpandAll={true}
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
      menuState: menuList.get("menuState").toJS
        ? menuList.get("menuState").toJS()
        : menuList.get("menuState"),
      routeData: Security.get("routeData").toJS
        ? Security.get("routeData").toJS()
        : Security.get("routeData")
    };
  },
  mutations => {
    const [menuList] = mutations;
    return {
      onSelect: menuList.onSelect
    };
  }
)(List);

export default () => {
  return <MenuList />;
};
