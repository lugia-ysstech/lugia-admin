import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Avatar, Theme, Label, Icon, Divider, consts as Widget, Card, Grid,Tooltip} from "@lugia/lugia-web";
import { getBorder, getBorderRadius, getBoxShadow } from '@lugia/theme-utils';
import loginBg from "../../assets/images/color_img_theme_jiguang.png";
import loginBg1 from "../../assets/images/color_img_theme_bingjing.png";
import loginBg2 from "../../assets/images/color_img_theme_huixing.png";
import loginBg3 from "../../assets/images/color_img_theme_lucky.png";

const {Row, Col} = Grid;

const ProjectImgBox = styled.div`
   height: 205px;
   overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
`;


const ProjectInfoBox = styled.div`
   height: 147px;
   padding: 0 32px;
`;

const Title = styled.div`
    color: rgba(0,0,0,0.65);
    font-size: 16px;
    margin: 15px 0 6px;
`;
const Text = styled.div`
    color: rgba(0,0,0,0.45);
    font-size: 14px;
    margin: 10px 0;
    line-height: 22px;
`;

const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`;
const AvatarBox = styled.div`
    
`;

const theme = {
  [Widget.Card]: {
    Container: {
      normal: {
        margin:{
          bottom: 16,
          // right:  40
        },
        borderRadius:{
          topLeft:0,
          topRight:0,
          bottomLeft:0,
          bottomRight:0
        },
        boxShadow: 'none',
        height: 350
      },
    },
    CardTitle: {
      normal:{
        padding:{
          top: 0,
          left: 0,
          right: 0,
          bottom:0
        }
      }
    },
    CardContent:{
      normal: { padding:0 },
    }
  },
  [Widget.Label]: {
    LabelConfig: {
      normal: {
        font: {
          size: 12
        },
        color:'rgba(0,0,0,0.45)'
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
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20,
        margin: {
          right: -3
        },
        boxShadow:getBoxShadow('0 0 1px 2px  #fff')
      },
    },
  },
  [Widget.Tooltip]: {
    Container: {
      normal: {
        background: {
          color: '#ddd',
        },
      },
    },
    TooltipTitle: {
      normal: {
        color: '#4d63ff',
        fontSize: 16,
      },
    },
  },
};

const randomImg={
  '1':loginBg,
  '2':loginBg1,
  '3':loginBg2,
  '4':loginBg3
};

export default class Application extends Component {
  render() {
    const {data = []} = this.props;
    return (
      <Row type="flex" justify="spaceBetween">
        <Theme config={theme}>
          {data && data.map( item => {
            const {img ,title,create_time,desc,member} = item;
            return <Col span={8}  xs={24}  md={12} lg={8} xl={8} xxl={8} >
              <Card>
                <ProjectImgBox>
                  <Img  src={randomImg[Math.floor(Math.random()*4+1)]} />
                </ProjectImgBox>
                <ProjectInfoBox>
                  <Title>{title}</Title>
                  <Text>{desc}</Text>
                  <FlexBox>
                    <Label>{create_time}秒前</Label>
                    <AvatarBox>
                      {member.map( people => {
                        const{name,head} = people;
                        return <Tooltip title={name} action={'hover'} placement="top"><Avatar type={'img'} src={loginBg} /></Tooltip>;
                      })}
                    </AvatarBox>
                  </FlexBox>

                </ProjectInfoBox>

              </Card>

            </Col> ;
          })}
        </Theme>
      </Row>

    );
  }


}
