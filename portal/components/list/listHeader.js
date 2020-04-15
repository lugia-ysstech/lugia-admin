/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component, } from 'react';

import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import styled from 'styled-components';
import { Button, consts as Widget, Input, Tabs, Theme, } from '@lugia/lugia-web';

import { go, } from '@lugia/lugiax-router';

const HeaderContent = styled.div``;
const CenterContent = styled.div`
  text-align: center;
  & * {
    vertical-align: middle;
  }
`;

const theme = {
  [Widget.Button]: {
    Container: {
      normal: {
        height: 30,
        margin: {
          // left: 10
        },
        borderRadius: {
          bottomLeft: 0,
          bottomRight: 4,
          topLeft: 0,
          topRight: 4,
        },
        // borderRadius:getBorderRadius('0 4px 4px 0')
      },
    },
  },
  [Widget.Input]: {
    Container: {
      normal: {
        width: 454,
        height: 30,
        borderRadius: {
          bottomLeft: 4,
          bottomRight: 0,
          topLeft: 4,
          topRight: 0,
        },
      },
    },
    Input: {
      normal: {
        borderRadius: {
          bottomLeft: 4,
          bottomRight: 0,
          topLeft: 4,
          topRight: 0,
        },
      },
    },
  },
  [Widget.Tabs]: {
    BorderStyle: {
      normal: {
        border: {
          bottom: {
            width: 1,
            color: 'transparent',
            style: 'solid',
          },
        },
      },
    },
  },
};

const map = {
  article: '文章',
  projects: '项目',
  applications: '应用',
};

export default class ListHeader extends Component {
  routes: Array<Object>;

  constructor(props) {
    super(props);
    this.routes = null;
  }

  render() {
    if (!this.routes) {
      this.routes = this.getRouter();
    }
    const { activityValue, } = this.props;
    return (
      <Content>
        <PageHeader
          routes={this.routes}
          title={`搜索列表(${map[activityValue]})`}
          desc={this.getHeaderDesc()}
        />
      </Content>
    );
  }

  getHeaderDesc = () => {
    const defaultData = [
      {
        title: '文章',
        key: 'article',
      },
      {
        title: '项目',
        key: 'projects',
      },
      {
        title: '应用',
        key: 'applications',
      },
    ];
    const { activityValue = 'article', } = this.props;
    return (
      <HeaderContent>
        <Theme config={theme}>
          <CenterContent>
            <Input placeholder={'请输入'} />
            <Button type="primary">搜索</Button>
          </CenterContent>

          <Tabs
            data={defaultData}
            hideContent
            activityValue={activityValue}
            onTabClick={this.onTabClick}
          />
        </Theme>
      </HeaderContent>
    );
  };

  getRouter = () => {
    const { activityValue, } = this.props;

    return [
      {
        path: '/dashboard/analyse',
        title: '首页',
      },
      {
        title: '列表页',
      },
      {
        title: `搜索列表(${map[activityValue]})`,
      },
    ];
  };

  onTabClick = res => {
    const { activityValue, } = res;
    go({ url: '/list/search/' + activityValue, });
  };
}
