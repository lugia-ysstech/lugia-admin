import React, { Component, } from 'react';
import styled from 'styled-components';
import { Button, consts as Widget, Divider, Icon, Label, Theme, } from '@lugia/lugia-web';
import loginBg from '../../assets/images/copy0.png';
import loginBg1 from '../../assets/images/copy1.png';
import loginBg2 from '../../assets/images/copy3.png';
import loginBg3 from '../../assets/images/copy4.png';
import loginBg4 from '../../assets/images/copy5.png';
import loginBg5 from '../../assets/images/copy6.png';
import loginBg6 from '../../assets/images/copy7.png';

const randomImg={
  1:loginBg,
  2:loginBg1,
  3:loginBg2,
  4:loginBg3,
  5:loginBg4,
  6:loginBg5,
  7:loginBg6,
};


const UL = styled.ul`
  padding: 20px;
  text-align: left;
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
  align-items: center;
`;

const ProjectImgBox = styled.div`
    width: 180px;
   height: 120px;
   overflow: hidden;
   margin: 0 20px  0 0 ;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
`;


const Title = styled.div`
  color: #333;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  margin: 2px 0 8px;
  color: #666;
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
          right: 10,
        },
        background:{
          color:'#FFFFFF',
        },
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
        },
      },
      hover: {
        border:{
          top: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          bottom: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          left: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
          right: {
            width: 1,
            color: '#ccc',
            style: 'solid',
          },
        },
        background:{
          color:'#ffffff',
        },
      },
    },
    ButtonText: {
      normal: {
        color:'#666',
      },
      hover: {
        color:'#888',
      },
    },
  },
  [Widget.Label]: {
    Container: {
      normal: {
        color:'rgba(0,0,0,.45)',
        width: 'auto',
        margin: {
          // left: 6,
          right: 6,
        },
      },
    },
  },
  [Widget.Avatar]: {
    Container: {
      normal: {
        height: 20,
        width: 20,
      },
    },
  },
  [Widget.Divider]: {
    VerticalDivider: {
      normal: {
        height:16,
        background:{
          color:'#D8D8D8',
        },
        margin:{
          left: 16,
        },
      },
    },
  },
  [Widget.Icon]: {
    Icon: {
      normal: {
        margin:{
          left: 15,
          right: 0,
        },
      },
    },
  },

};


export default class Article extends Component {
  render() {
    const {data =[],} = this.props;
    return (
     <UL>
       <Theme config={theme}>
       {data.map( (item,index) => {
          const {title,remark,text,star,support,message,} = item;
         return <Li>
           <FlexBox>
             <ProjectImgBox>
               <Img  src={randomImg[index+1]} />
             </ProjectImgBox>
             <Container>
               <Title>{title}</Title>
               <Text>{text}</Text>
               <RemarkBox>
                 {remark.map( item => {
                   return <Button>{item}</Button>;
                 })}
               </RemarkBox>

               <FlexBox>
                 <Label><Icon iconClass={'lugia-icon-financial_star_o'} /> {star}</Label>
                 <Divider type="vertical" />
                 <Label><Icon iconClass={'lugia-icon-financial_like_o'} /> {support}</Label>
                 <Divider type="vertical" />
                 <Label><Icon iconClass={'lugia-icon-financial_describe'} /> {message}</Label>
               </FlexBox>


             </Container>
           </FlexBox>

         </Li>;
       })}
       </Theme>
     </UL>
    );
  }
}
