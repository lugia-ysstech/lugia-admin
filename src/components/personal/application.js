import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Card,
  consts as Widget,
  Divider,
  Grid,
  Icon,
  Label,
  Theme,
} from '@lugia/lugia-web';
import avatar from '../../assets/images/mega.png';

const { Row, Col } = Grid;

const ApplicationTop = styled.div`
  padding: 0 24px;
`;

const InformationContainer = styled.div`
  padding: 0 0 0 42px;
  margin: 20px 0;
  display: flex;
`;

const DataContainer = styled.div`
  flex: 1;
`;

const InformationTitle = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
`;
const InformationData = styled.div`
  color: rgba(0, 0, 0, 0.65);
  font-size: 24px;
  margin: 6px 0 0;
  font-weight: 6000;
`;

const ApplicationBottom = styled.div`
  height: 46px;
  display: flex;
  justify-content: space-evenly;
  background: #f8f8f8;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const theme = {
  [Widget.Card]: {
    Container: {
      normal: {
        margin: {
          bottom: 15,
        },
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 0,
          bottomRight: 0,
        },
        boxShadow: 'none',
        height: 174,
      },
    },
    CardTitle: {
      normal: {
        padding: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
    CardContent: {
      normal: {
        padding: {
          top: 10,
          left: 0,
          right: 0,
          bottom: 0,
        },
      },
    },
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20,
        margin: {
          right: 20,
        },
      },
    },
  },
  [Widget.Divider]: {
    VerticalDivider: {
      normal: {
        height: 20,
      },
    },
  },
};

export default class Application extends Component {
  render() {
    const { data = [] } = this.props;
    return (
      <Row type="flex" justify="spaceBetween">
        <Theme config={theme}>
          {data &&
            data.map(item => {
              const { img, title, activeUser, newUser } = item;
              return (
                <Col span={8} xs={24} md={12} lg={8} xl={8} xxl={8}>
                  <Card>
                    <ApplicationTop>
                      <Avatar type={'img'} src={avatar} />
                      <Label>{title}</Label>
                      <InformationContainer>
                        <DataContainer>
                          <InformationTitle>活跃用户</InformationTitle>
                          <InformationData>{activeUser}</InformationData>
                        </DataContainer>
                        <DataContainer>
                          <InformationTitle>新增用户</InformationTitle>
                          <InformationData>{newUser}</InformationData>
                        </DataContainer>
                      </InformationContainer>
                    </ApplicationTop>
                    <ApplicationBottom>
                      <Icon iconClass={'lugia-icon-finacial_check_all'} />
                      <Divider type="vertical" />
                      <Icon iconClass={'lugia-icon-financial_editor'} />
                      <Divider type="vertical" />
                      <Icon iconClass={'lugia-icon-financial_folder_add'} />
                      <Divider type="vertical" />
                      <Icon iconClass={'lugia-icon-financial_omit'} />
                    </ApplicationBottom>
                  </Card>
                </Col>
              );
            })}
        </Theme>
      </Row>
    );
  }
}
