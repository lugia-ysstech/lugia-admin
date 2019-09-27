/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import styled from 'styled-components';

import Content from "../../components/content";
import PageContent from "../../components/page-content";
import avatar from "../../assets/images/logo.png";
import Article from "../../components/personal/article";
import Application from "../../components/personal/application";
import Project from "../../components/personal/project";

import {Grid,Avatar,consts as Widget,Theme,Label,Tabs,Icon,Divider,Button} from '@lugia/lugia-web';
import center from "../../models/personal/center";
import {connect} from "@lugia/lugiax";

const {Row, Col} = Grid;
const Container = styled.div`
  margin-top: 20px;
`;

const CenterContainer = styled.div`
  text-align: center;
`;


const Title = styled.div`
  margin: 20px 0 10px;
  color: rgba(0,0,0,.85);
  font-size: 16px;
  line-height: 24px;
`;
const Text = styled.div`
  margin: 14px 0 ;
  color: rgba(0,0,0,.85);
  font-size: 14px;
`;

const GroupBox = styled.div`
  margin: 10px;
`;

const theme = {
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 104,
        width: 104,
        boxShadow:' 0 0 1px 1px  red'
      },
    },
  },
  [Widget.Tabs]: {
    ContentBlock: {
      normal:{
        width: '100%',
        height: 1600
      }
    },
    TitleContainer:{
      normal:{
        width: '100%',
      }
    }
  },
  [Widget.Button]: {
    Container: {
      normal: {
        height: 22,
        margin:{
          right: 10,
          bottom: 10
        }
      },
    },
  },
  [Widget.Label]: {
    Container: {
      normal: {
        height: 22,
        margin:{
          right: 10
        }
      },
    },
  },
  [Widget.Divider]: {
    HorizontalDivider: {
      normal: {
        margin:{
          top: 20,
          bottom: 20
        }
      },
    },
  },
};

const avatarTheme = {
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20,
        margin:{
          right: 10
        }
      },
    },
  }
};


class Center extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    const {getUserInfo,getArticleInfo,getApplicationInfo,getProjectInfo} = props;
    getUserInfo().then(() => {
      getArticleInfo().then(() => {
        getApplicationInfo().then(() => {
          getProjectInfo()
        });
      });
    });
    this.state = {
      activityValue: 'article'
    }

  }


  render() {
    const {userInfo} = this.props;
    return <Content>
    <Theme config={theme}>
        <Container>
          <Row>
            <Col  xs={24}  md={24}  span={7}  >
              <PageContent>
                <CenterContainer>
                  <Avatar type={'img'}  src={avatar} />
                  <Title>{userInfo.name}</Title>
                  <Label>{userInfo.desc}</Label>
                </CenterContainer>
                <Text><Icon iconClass={"lugia-icon-financial_audit"} />  {userInfo.company && userInfo.company.title}</Text>
                <Text><Icon iconClass={"lugia-icon-financial_group"} />  {userInfo.company && userInfo.company.department}</Text>
                <Text><Icon iconClass={"lugia-icon-financial_tag"} />  {userInfo.company && userInfo.company.position}</Text>
                <Divider dashed={true}/>
                <Text>标签</Text>
                {userInfo.remarks && userInfo.remarks.map( item => {
                  return <Button>{item}</Button>
                })}
                <Button> + </Button>
                <Divider dashed={true}/>
                <Text>团队</Text>
                <Theme config={avatarTheme}>
                <Row>
                    {userInfo.group && userInfo.group.map( item => {
                      const {logo,team} = item;
                      return  <Col xs={24}  span={12}>
                        <GroupBox>
                          <Avatar type={'img'}  src={avatar} />
                          <Label>{team}</Label>
                        </GroupBox>

                      </Col>
                    })}
                </Row>
                </Theme>
              </PageContent>
            </Col>
            <Col  xs={24}  md={24}  span={17} >
              <PageContent>
                {this.getTabs()}
              </PageContent>
            </Col>
          </Row>
        </Container>
      </Theme>
    </Content>

  }

  getTabs = () => {
    const {articleInfo,projectInfo,applicationInfo} = this.props;
    const {activityValue} = this.state;

    const tabsData=[
      {
        title: `文章 ${articleInfo.total?'('+articleInfo.total+')':''}` ,
        content:  <Article data={articleInfo.data} />,
        key: 'article',
      },
      {
        title: `应用 ${applicationInfo.total?'('+applicationInfo.total+')':''}` ,
        content:  <Application data={applicationInfo.data} />,
        key: 'application',
      },
      {
        title: `项目 ${projectInfo.total?'('+projectInfo.total+')':''}` ,
        content:  <Project data={projectInfo.data}/>,
        key: 'project',
      },
    ];
    return  <Tabs data={tabsData} onChange={this.onChange} activityValue={activityValue}/>
  };

  onChange = (res) => {
    const {activityValue} = res;
    if(!activityValue){
      return ;
    }
    this.setState({activityValue});
  }

}

const CenterPage = connect(
  center,
  state => {
    return {
      userInfo: state.get('userInfo').toJS?state.get('userInfo').toJS():state.get('userInfo'),
      articleInfo: state.get('articleInfo').toJS?state.get('articleInfo').toJS():state.get('articleInfo'),
      projectInfo: state.get('projectInfo').toJS?state.get('projectInfo').toJS():state.get('projectInfo'),
      applicationInfo: state.get('applicationInfo').toJS?state.get('applicationInfo').toJS():state.get('applicationInfo')
    };
  },
  mutations => {
    return {
      getUserInfo: mutations.asyncGetUserInfo,
      getArticleInfo: mutations.asyncGetArticleInfo,
      getApplicationInfo: mutations.asyncGetApplicationInfo,
      getProjectInfo: mutations.asyncGetProjectInfo
    };
  }
)(Center);

export default () => {
  return (
    <CenterPage/>
  );
};

