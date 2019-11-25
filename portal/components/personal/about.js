import React, {Component} from 'react';
import styled from "styled-components";
import { Button,Avatar, Theme,Label ,Icon,Divider,consts as Widget ,} from "@lugia/lugia-web";
import {connect} from "@lugia/lugiax";
import about from "../../models/personal/about";
import { Map ,Marker} from 'react-amap';

const Container = styled.div`
    margin: 0 25%;
    min-width: 500px;
    text-align: left;
`;
const Title = styled.div`
    font-size: 14px;
    color: #333333;
    margin: 25px 0 6px;
    font-weight: bold;
`;
const Text = styled.div`
   font-size: 14px;
   line-height: 20px;
    color: #666666;
    margin: 10px 0;
     text-align: ${props => props.align || 'left'}
`;
const TextMark = styled.div`
   font-size: 18px;
    color: #4D63FF;
    margin: 10px 0;
    text-align: ${props => props.align || 'left'}
`;


const FlexBox = styled.div`
    display: flex;
    justify-content: ${props => props.justify || 'flex-start'};
    flex-wrap: wrap;
`;

const GroupBox = styled.div`
   width: 24%;
   font-size: 14px;
    color: #333;
    margin: 10px 0 0;
    padding: 10px;
    border: 1px solid #e8e8e8;
    border-radius: 4px;
    vertical-align: text-top;
    & i {
    vertical-align: text-top;
    }
`;

const MapBox = styled.div`
   width: 100%;
   min-width: 522px;
   height: 296px;
   margin: 16px 0 0;

`;

const theme = {
  [Widget.Icon]: {
    Icon: {
      normal: {
        margin:{
          left: 0,
          right: 4
        },
        color: '#4d63ff'
      },
    },
  },
};


 class About extends Component {
   constructor(props) {
     super(props);
     this.state = {};
     const {getUserInfo} = props;
     getUserInfo();

   }
  render() {
    const {data =[],userInfo} = this.props;
    console.log('userInfo',Map);
    return (
      <Container>
        <Title>个人签名：</Title>
        <Text align={'justify'}>{userInfo.sign}</Text>
        <Title>个人履历：</Title>
        {userInfo.curriculum &&
          <FlexBox justify={'space-between'}>
            <div>
              <TextMark align={'center'}>{userInfo.curriculum.projectNumber}</TextMark>
              <Text>项目数</Text>
            </div>
            <div>
              <TextMark align={'center'}>{userInfo.curriculum.onlineProject}</TextMark>
              <Text>上线项目</Text>
            </div>
            <div>
              <TextMark align={'center'}>{userInfo.curriculum.undone}</TextMark>
              <Text>未完成</Text>
            </div>
            <div>
              <TextMark align={'center'}>{userInfo.curriculum.workTime}</TextMark>
              <Text>工作时长</Text>
            </div>
          </FlexBox>
        }
        <Title>加入的团队：</Title>
        <Theme config={theme}>
          <FlexBox justify={'space-between'}>
          {userInfo.team && userInfo.team.map( item => {
            const {logo,team} = item;
            return <GroupBox>
                <Icon iconClass={logo} /> {team}
              </GroupBox>;

          })}
          </FlexBox>
        </Theme>
        <Title>团队地址：</Title>
        <MapBox>

          <Map amapkey={'40220e361a7739dbb21228d67da8d1fb'}  center={{longitude: 116.516007, latitude: 39.937022}} zoom={15} >
            <Marker position={{longitude: 116.516007, latitude: 39.937022}} />
          </Map>
        </MapBox>
        <Text align={'center'}> <Icon iconClass={'lugia-icon-financial_environment'} /> 北京市朝阳区青年路达美中心T2 16层</Text>


      </Container>
    );
  }
}
const AboutPage = connect(
  about,
  state => {
    return {
      userInfo: state.get('userInfo').toJS?state.get('userInfo').toJS():state.get('userInfo'),
    };
  },
  mutations => {
    return {
      getUserInfo: mutations.asyncGetUserInfo,

    };
  }
)(About);

export default () => {
  return (
    <AboutPage/>
  );
};

