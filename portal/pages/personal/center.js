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
import About from "../../components/personal/about";
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
  color: #333;
  font-size: 24px;
  line-height: 24px;
`;
const Text = styled.div`
  margin: 14px 0 ;
  color: rgba(0,0,0,.45);
  font-size: 14px;
  & i{
  vertical-align: middle;
  }
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
  [Widget.Icon]: {
    Icon: {
      normal: {
        margin:{
          left: 30,
          right: 4
        }
      },
    },
  },
};
const iconTheme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        margin:{
          left: 50,
        },
        font: {
          size: 20
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
              <PageContent>
                <CenterContainer>
                  <Avatar type={'img'}  src={avatar} />
                  <Title>{userInfo.name}</Title>
                  <Label>{userInfo.desc}</Label>
                  <Text><Icon iconClass={"lugia-icon-financial_audit"} />  {userInfo.company && userInfo.company.title}
                  <Icon iconClass={"lugia-icon-financial_group"} />  {userInfo.company && userInfo.company.department}
                  <Icon iconClass={"lugia-icon-financial_tag"} />  {userInfo.company && userInfo.company.position}</Text>

                  <Text>
                    <Theme config={iconTheme}>
                      <Icon iconClass={"lugia-icon-logo_wechat"} />
                      <Icon iconClass={"lugia-icon-logo_weibo_circle"} />
                      <Icon iconClass={"lugia-icon-logo_QQ"} />
                    </Theme>

                  </Text>
                </CenterContainer>

              </PageContent>

              <PageContent>
                {this.getTabs()}
              </PageContent>
        </Container>
      </Theme>
    </Content>

  }

  getTabs = () => {
    const {articleInfo,projectInfo,applicationInfo} = this.props;
    const {activityValue} = this.state;

    const tabsData=[
      {
        title: '表单页' ,
        content:  <Article data={articleInfo.data} />,
        key: 'article',
      },
      {
        title: '图片页' ,
        content:  <Project data={projectInfo.data}/>,
        key: 'application',
      },
      {
        title: '选项卡' ,
        content:  <Project data={projectInfo.data} showDesc/>,
        key: 'project',
      },
      {
        title: '关于页' ,
        content:  <About data={projectInfo.data}/>,
        key: 'about',
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

