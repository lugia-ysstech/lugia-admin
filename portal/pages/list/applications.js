/**
 *
 * create by grguang
 *
 * @flow
 */
import React, { Component } from "react";
import Content from "../../components/content";
import PageContent from "../../components/page-content";
import styled from "styled-components";
import { getBorder, getBoxShadow,getBorderRadius } from '@lugia/theme-utils';
import { Theme,consts as Widget , Divider,Input,Checkbox ,Select} from "@lugia/lugia-web";
import ListHeader from "../../components/list/listHeader";
import ApplicationComponent from "../../components/personal/application";
import application from "../../models/list/application";
import {connect} from "@lugia/lugiax";


const CheckboxGroup = Checkbox.Group;
const CheckBoxButton = Checkbox.Button;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  color: rgba(0,0,0,0.65);
  cursor: pointer;
  margin-right: 10px;
`;


const theme = {
  [Widget.CheckboxGroup]: {
    Checkbox: {
      Container: {
        normal: {
          opacity: 0,
          width: 100,
          height: 50,
          margin: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          },
          padding: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
          },
        },
        hover: {
          opacity: 0.6,
        },
        disabled: {
          opacity: 0.4,
        },
        active: {
          opacity: 1,
        },
      },
      CheckboxText: {
        normal: {
          color: 'red',
          font: { fontSize: 16, fontWeight: 500 },
        },
        hover: { color: 'green', font: { fontSize: 16, fontWeight: 500 } },
        disabled: { color: 'yellow', font: { fontSize: 16, fontWeight: 500 } },
      },
      CheckboxEdgeChecked: {
        normal: {
          background: { color: '#56c22d' },
          border: getBorder({ color: 'yellow', width: 2, style: 'solid' }),
          borderRadius: getBorderRadius(2),
        },
        hover: {
          background: { color: 'red' },
          border: getBorder({ color: 'yellow', width: 2, style: 'solid' }),
          borderRadius: getBorderRadius(2),
        },
        disabled: {
          background: { color: 'red' },
          border: getBorder({ color: 'orange', width: 2, style: 'solid' }),
          borderRadius: getBorderRadius(2),
        },
      },
      CheckboxEdgeUnChecked: {
        normal: {
          background: { color: 'yellow' },
          borderRadius: getBorderRadius(2),
          border: getBorder({ color: '#56c22d', width: 0, style: 'solid' }),
        },
        // hover: {
        //   background: { color: '#56c22d' },
        //   borderRadius: getBorderRadius(2),
        //   border: getBorder({ color: 'yellow', width: 0, style: 'solid' }),
        // },
      },
      CheckboxEdgeIndeterminate: {
        normal: {
          background: { color: 'yellow' },
          borderRadius: getBorderRadius(2),
          border: getBorder({ color: '#56c22d', width: 2, style: 'solid' }),
        },
        hover: {
          background: { color: '#56c22d' },
          borderRadius: getBorderRadius(2),
          border: getBorder({ color: 'yellow', width: 2, style: 'solid' }),
        },
        disabled: {
          background: { color: 'orange' },
          border: getBorder({ color: 'red', width: 2, style: 'solid' }),
          borderRadius: getBorderRadius(2),
        },
      },
    },
  },
  [Widget.Divider]: {
    HorizontalDivider: {
      normal: {

        margin: {
          top: 10,
          bottom: 10
        }
      },
    },
  },
  [Widget.Select]: {
    Menu: {
      MenuWrap: {
        normal: {
          height: 70,
        },
      },
      MenuItem: {
        MenuItemWrap: {
          normal: {
            height: 30,

          }
        }
      },
    },
    InputTag: {
      InputTagWrap: {
        normal: {
          height: 30,
          margin: {
            right: 60,
            top: 60
          }
        }
      }
    },
  },
};

class Application extends Component{

  constructor(props) {
    super(props);
    const {getApplicationInfo} = props;
    getApplicationInfo();
    this.state = {
      defaultValue: [],
      selectAll:false
    };
  }

  render() {
    const {applicationInfo} = this.props;
    const {defaultValue} = this.state;
    return <Content>
      <ListHeader activityValue={'applications'}/>
      <PageContent>
        <Theme config={theme}>
          <SelectContainer>
            <Label>所属类目：</Label>
            <Label onClick={this.onSelectAll}>全部</Label>
            <CheckboxGroup childType="button" onChange={this.handleChange} value={defaultValue}>

              <CheckBoxButton value="1">类目一</CheckBoxButton>
              <CheckBoxButton value="2">类目二</CheckBoxButton>
              <CheckBoxButton value="3">类目三</CheckBoxButton>
              <CheckBoxButton value="4">类目四</CheckBoxButton>
              <CheckBoxButton value="5">类目五</CheckBoxButton>
              <CheckBoxButton value="6">类目六</CheckBoxButton>
              <CheckBoxButton value="7">类目七</CheckBoxButton>
              <CheckBoxButton value="8">类目八</CheckBoxButton>
              <CheckBoxButton value="9">类目九</CheckBoxButton>
              <CheckBoxButton value="10">类目十</CheckBoxButton>
              <CheckBoxButton value="11">类目十一</CheckBoxButton>
              <CheckBoxButton value="12">类目十二</CheckBoxButton>

            </CheckboxGroup>
          </SelectContainer>
          <Divider dashed={true}  />
          <SelectContainer>
            <Label>其它选项：</Label>
            <Label onClick={this.onSelectAll}>作者：</Label>
            <Select
              displayField={'text'}
              data={[ {value: 'lugia-A', text: '杰尼龟'}]}
              defaultValue={'不限'}

            />
            <Label > </Label>
            <Label>好评度：</Label>
            <Select
              displayField={'text'}
              data={[ {value: 'amazing', text: '优秀'},{value: 'normal', text: '普通'}]}
              defaultValue={'不限'}

            />
          </SelectContainer>
        </Theme>


      </PageContent>
      <PageContent>
        <ApplicationComponent data={applicationInfo.data}/>
      </PageContent>
    </Content>;
  }

  handleChange = obj => {
    const {newValue} = obj;
    const {defaultValue} = this.state;
    this.setState({
      defaultValue:defaultValue.concat(newValue)
    })

  };
  onSelectAll = () => {
    const {selectAll} = this.state;
    if(!selectAll){
      this.setState({
        defaultValue:['1','2','3','4','5','6','7','8','9','10','11','12'],
        selectAll:!selectAll
      })
    }else{
      this.setState({
        defaultValue:[],
        selectAll:!selectAll
      })
    }

  }
}

const ApplicationPage = connect(
  application,
  state => {
    return {
      applicationInfo: state.get('applicationInfo').toJS?state.get('applicationInfo').toJS():state.get('applicationInfo')
    };
  },
  mutations => {
    return {
      getApplicationInfo: mutations.asyncGetApplicationInfo,
    };
  }
)(Application);

export default () => {
  return (
    <ApplicationPage/>
  );
};
