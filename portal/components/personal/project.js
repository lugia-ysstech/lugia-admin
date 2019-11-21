import React, {Component} from 'react';
import styled from "styled-components";
import {Button, Avatar, Theme, Label, Icon, Divider, consts as Widget, Card, Grid,Tooltip} from "@lugia/lugia-web";
import { getBorder, getBorderRadius, getBoxShadow } from '@lugia/theme-utils';
import loginBg from "../../assets/images/copy0.png";
import loginBg1 from "../../assets/images/copy1.png";
import loginBg2 from "../../assets/images/copy3.png";
import loginBg3 from "../../assets/images/copy4.png";
import loginBg4 from "../../assets/images/copy5.png";
import loginBg5 from "../../assets/images/copy6.png";
import loginBg6 from "../../assets/images/copy7.png";
import loginBg7 from "../../assets/images/copy2.png";
import loginBg8 from "../../assets/images/copy8.png";
import loginBg9 from "../../assets/images/copy9.png";
import loginBg10 from "../../assets/images/copy10.png";
import loginBg11 from "../../assets/images/copy11.png";

const {Row, Col} = Grid;

const Container = styled.div`
  text-align: left;
`;

const ProjectImgBox = styled.div`
   height: 205px;
   overflow: hidden;
   border-radius: ${props => props.radius?'':'4px'}
`;

const Img = styled.img`
    height: 100%;
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
        height: 320
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
const themeImage = {
  [Widget.Card]: {
    Container: {
      normal: {
        margin:{
          bottom: 16,
          // right:  40
        },
        borderRadius:{
          topLeft:4,
          topRight:4,
          bottomLeft:4,
          bottomRight:4
        },
        boxShadow: 'none',
        height: 207
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
};

const randomImg={
  '1':loginBg,
  '2':loginBg1,
  '3':loginBg2,
  '4':loginBg3,
  '5':loginBg4,
  '6':loginBg5,
  '7':loginBg6,
  '8':loginBg7,
  '9':loginBg8,
  '10':loginBg9,
  '11':loginBg10,
  '12':loginBg11
};

export default class Application extends Component {
  render() {
    const {data = [], showDesc = false} = this.props;
    return (
      <Container>
        <Row type="flex" justify="spaceBetween">
          <Theme config={showDesc?theme:themeImage}>
            {data && data.map( (item,index) => {
              const {img ,title,create_time,desc,member} = item;
              return <Col span={8}  xs={24}  md={12} lg={8} xl={8} xxl={8} >
                <Card>
                  <ProjectImgBox radius={showDesc}>
                    <Img  src={randomImg[index+1]} />
                  </ProjectImgBox>
                  {showDesc &&<ProjectInfoBox>
                    <Title>{title}</Title>
                    <Text>{desc}</Text>
                  </ProjectInfoBox> }

                </Card>

              </Col> ;
            })}
          </Theme>
        </Row>
      </Container>


    );
  }


}
