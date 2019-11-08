import React, {Component} from 'react';
import styled from "styled-components";
import { Button,Avatar, Theme,Label ,Icon,Divider,consts as Widget ,} from "@lugia/lugia-web";
import avatar from "../../assets/images/mega.png";
import loginBg from "../../assets/images/color_img_theme_jiguang.png";
import loginBg1 from "../../assets/images/color_img_theme_bingjing.png";
import loginBg2 from "../../assets/images/color_img_theme_huixing.png";
import loginBg3 from "../../assets/images/color_img_theme_lucky.png";

const randomImg={
  '1':loginBg,
  '2':loginBg1,
  '3':loginBg2,
  '4':loginBg3
};


const UL = styled.ul`
  padding: 20px;
`;

const Li = styled.li`
  border-bottom: 1px solid #e8e8e8;
  margin: 0 0 20px;
  padding-bottom: 20px;
`;
const RemarkBox = styled.div`
  margin: 5px 0 ;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: ${props => props.justify || 'flex-start'};
`;

const ProjectImgBox = styled.div`
    width: 178px;
   height: 117px;
   overflow: hidden;
   margin: 0 20px  0 0 ;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;


const Title = styled.div`
  color: rgba(0,0,0,.85);
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  margin: 2px 0 8px;
  color: rgba(0,0,0,.65);
  font-size: 14px;
  line-height: 22px;
`;
const Time = styled.span`
  margin: 12px 0;
  color: rgba(0,0,0,.25);
  font-size: 14px;
  line-height: 22px;
`;

const Link = styled.a`
 margin: 0 6px;
 color: #4d63ff;
 opacity: 0.8;
`;

const Container = styled.div`
  width: calc( 100% - 180px );
`;

const theme = {
  [Widget.Button]: {
    Container: {
      normal: {
        height: 22,
        margin:{
          right: 10
        },
        background:{
          color:'#FFFFFF'
        },
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
        }
      },
      hover: {
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid'
          },
        },
        background:{
          color:'#ffffff'
        },
      },
    },
    ButtonText: {
      hover: {
        color:'rgba(0,0,0,0.45)',
      },
    },
  },
  [Widget.Label]: {
    LabelConfig: {
      normal: {
        color:'rgba(0,0,0,.45)',
        margin: {
          // left: 6,
          right: 6,
        },
      }
    },
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20
      },
    },
  },
  [Widget.Divider]: {
    VerticalDivider: {
      normal: {
        height:16,
        background:{
          color:'#D8D8D8'
        },
        margin:{
          left: 16
        }
      },
    },
  },
  [Widget.Icon]: {
    Icon: {
      normal: {
        margin:{
          left: 15
        }
      },
    },
  },

};


export default class Article extends Component {
  render() {
    const {data =[]} = this.props;
    return (
     <UL>
       <Theme config={theme}>
       {data.map( item => {
          const {title,remark,text,img,author,link,create_time,star,support,message} = item;
         return <Li>
           <FlexBox>
             <ProjectImgBox>
               <Img  src={randomImg[Math.floor(Math.random()*4+1)]} />
             </ProjectImgBox>
             <Container>
               <Title>{title}</Title>
               <Text>{text}</Text>
               <RemarkBox>
                 {remark.map( item => {
                   return <Button>{item}</Button>
                 })}
               </RemarkBox>

               <FlexBox>
                 <Label><Icon iconClass={"lugia-icon-financial_star_o"} /> {star}</Label>
                 <Divider type="vertical" />
                 <Label><Icon iconClass={"lugia-icon-financial_like_o"} /> {support}</Label>
                 <Divider type="vertical" />
                 <Label><Icon iconClass={"lugia-icon-financial_describe"} /> {message}</Label>
               </FlexBox>


             </Container>
           </FlexBox>

         </Li>
       })}
       </Theme>
     </UL>
    );
  }
}
