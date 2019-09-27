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
import routingConfig from "../../../config/routing.config";

const NavContainer = styled.div`
  display: inline-block;
  background: #000033;
  height: 100%;
`;

const Title = styled.div`
  padding: 20px;
  padding-bottom: 30px;
  & > img {
    width: 60px;
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
    const viewHeight =  this.getWindowHeight();
    this.setState({
      value: window.location.pathname,
      height: viewHeight
    });
    window.onresize = () => {
      const viewHeight =  this.getWindowHeight();
      this.setState({
        height: viewHeight
      });
    };
  }

  getWindowHeight = () => {
    return  document.body.clientHeight - 122;
  };

  render() {
    const a = menuList.getState("menuState") || {};
    const { menuState = {} } = a.toJS();
    let { value } = menuState;
    if (!value) {
      const { value: stateValue } = this.state;
      value = stateValue;
    }

    const {height = 600} = this.state;

    const theme = {
      [Widget.NavMenu]: {
        Tree: {
          TreeWrap: {
            normal: {
              width: 220,
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
                height: 50,
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
        <Navmenu
          theme={theme}
          value={value}
          themeStyle={"dark"}
          onSelect={this.props.onSelect}
          inlineType={"ellipse"}
          data={routingConfig}
          switchIconNames={{
            open: "lugia-icon-direction_caret_up",
            close: "lugia-icon-direction_caret_down"
          }}
          step={60}
          autoHeight={false}
          inlineExpandAll={true}
        />
      </NavContainer>
    );
  }
}
const MenuList = connect(
  menuList,
  state => {
    return {
      value: state.get("value"),

    };
  },
  mutations => {
    return {
      onSelect: mutations.onSelect
    };
  }
)(List);

export default () => {
  return <MenuList />;
};
