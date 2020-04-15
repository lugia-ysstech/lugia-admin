/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component, } from 'react';
import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import PageContent from '../../components/page-content';
import { Button, Card, Icon, Theme, } from '@lugia/lugia-web';
import styled from 'styled-components';
import Widget from '@lugia/lugia-web/dist/consts';
import { connect, } from '@lugia/lugiax';
import failed from '../../models/result/failed';

const ContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
`;
const BreadcrumbWrap = styled.div`
  width: 100%;
`;
const CardOutWrap = styled.div`
  width: 80%;
  min-width: 600px;
  height: 133px;
  margin: 20px auto;
  background: #f8f8f8;
`;
const CardContentContainer = styled.div`
  width: 100%;
  height: 100px;
  display: inline-block;
  text-align: center;
  position: relative;
  top: -14px;
`;
const TitleContainer = styled.div`
  width: 100%;
  vertical-align: inherit;
  border-color: inherit;
  color: #333;
  text-align: left;
  margin: 15px 0;
`;
const Title = styled.td`
  display: inline-block;
  text-align: left;
  font-size: 14px;
  margin: 0 10px;
`;
const SuccessText = styled.div`
  margin-top: 30px;
  font-size: 24px;
  font-weight: bold;
  line-height: 33px;
  color: #333;
`;
const SuccessDesText = styled.div`
  line-height: 20px;
  margin-top: 10px;
  font-size: 14px;
  color: #666;
`;

const FooterWrap = styled.div`
  width: 100%;
  height: 122px;
  text-align: center;
`;

class failedDemo extends Component {
  render() {
    const cardThemeConfig = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: '100%',
            height: '100%',
            background: {
              color: '#f6f6f6',
            },
            padding: {
              top: 4,
              right: 141,
              left: 141,
            },
            border: 'none',
            boxShadow: 'none',
          },
        },
        CardTitle: {
          normal: {
            fontSize: 18,
            font: {
              weight: 600,
            },
            margin: {
              top: 0,
            },
          },
        },
      },
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 10,
            color: '#f22735',
          },
        },
      },
    };
    const iconTheme = {
      [Widget.Icon]: {
        Icon: {
          normal: {
            fontSize: 88,
            color: '#f22735',
            margin: {
              top: 76,
            },
          },
        },
      },
    };
    const buttonView = {
      [Widget.Button]: {
        Container: {
          normal: {
            width: 80,
            height: 32,
          },
        },
      },
    };
    const routes = [
      {
        path: '/dashboard/analyse',
        title: '首页',
      },
      {
        title: '结果页',
      },
      {
        title: '失败页',
      },
    ];
    return (
      <Content>
        {/*页头*/}
        <PageHeader routes={routes} />
        {/*内容*/}
        <PageContent>
          <ContentContainer>
            <Theme config={iconTheme}>
              <Icon iconClass={'lugia-icon-reminder_close_circle'} />
              <SuccessText>{'提交失败'}</SuccessText>
              <SuccessDesText>{'请核对并修改以下信息后，再重新提交。'}</SuccessDesText>
            </Theme>
          </ContentContainer>
          <CardOutWrap>
            <Theme config={cardThemeConfig}>
              <Card
                title={'您提交的内容有如下错误：'}
                description={
                  <CardContentContainer>
                    <TitleContainer>
                      <Icon iconClass={'lugia-icon-reminder_close_circle_o'} />
                      <Title> {'您的账户已被冻结'}</Title>
                    </TitleContainer>
                    <TitleContainer>
                      <Icon iconClass={'lugia-icon-reminder_close_circle_o'} />
                      <Title> {'您的账户还不具备申请资格'}</Title>
                    </TitleContainer>
                  </CardContentContainer>
                }
              />
            </Theme>
          </CardOutWrap>
          <FooterWrap>
            <Theme config={buttonView}>
              <Button type={'primary'} shape={'round'} onClick={this.props.goBack}>
                {'返回修改'}
              </Button>
            </Theme>
          </FooterWrap>
        </PageContent>
      </Content>
    );
  }
}

const FailedPage = connect(failed, mutations => {
  return {
    goBack: mutations.goBack,
  };
})(failedDemo);

export default () => {
  return <FailedPage />;
};
