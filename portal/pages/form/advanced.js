import React, { Component, } from 'react';
import Content from '../../components/content';
import PageHeader from '../../components/page-header';
import PageContent from '../../components/page-content';
import Widget from '@lugia/lugia-web/dist/consts';
import styled from 'styled-components';
import {
  AutoComplete,
  Card,
  DatePicker,
  Grid,
  Input,
  Select,
  Table,
  Theme,
  TimePicker,
} from '@lugia/lugia-web';
import { connect, } from '@lugia/lugiax';
import advanced from '../../models/form/advanced';

const { Row, Col, } = Grid;

const { RangePicker, } = DatePicker;

const ItemContainer = styled.div`
  position: relative;
  height: auto;
  zoom: 1;
  display: inline-block;
  box-sizing: border-box;
  padding: 5px 0;
`;

const ItemInnerContainer = styled.div`
  box-sizing: border-box;
  margin-right: 5px;
`;
const ItemInputContainer = styled.div`
  display: inline-block;
  box-sizing: border-box;
`;
const TitleContainer = styled.label`
  position: relative;
  height: 25px;
  line-height: 25px;
  display: inline-block;
`;
const TitleText = styled.span`
  position: relative;
  display: inline-block;
  height: 25px;
  line-height: 25px;
`;
const SelectContainer = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;

const routes = [
  {
    path: '/dashboard/analyse',
    title: '首页',
  },
  {
    title: '表单页',
  },
  {
    path: '/pages/form/advanced',
    title: '高级表单',
  },
];

class TableList extends Component {
  constructor(props) {
    super(props);
    const { getStaffsInfo, getStorageInfo, getTaskInfo, } = props;
    getStorageInfo().then(() => {
      getTaskInfo().then(() => {
        getStaffsInfo();
      });
    });
  }

  render() {
    const {
      onStorageNameChange,
      onIpAddressChange,
      onStorageManageChange,
      onApprovalChange,

      onTaskTitleChange,
      onTaskDescChange,
      onExecutorChange,
      onTaskManageChange,
      onTaskTypeChange,
      onTableChange,
    } = this.props;
    const nameData = [
      {
        title: '仓库名:',
        placeholder: '请输入仓库名称',
        onChange: onStorageNameChange,
      },
    ];

    const ipData = [
      {
        title: '仓库域名:',
        placeholder: '请输入',
        isAuto: true,
        onChange: onIpAddressChange,
      },
    ];
    const managerData = [
      {
        title: '仓库管理员',
        isSelect: true,
        selectData: [
          { value: '付晓晓', label: '付晓晓', },
          { value: '周毛毛', label: '周毛毛', },
        ],
        selectView: {
          [Widget.Select]: {
            Container: {
              normal: {
                width: 200,
              },
            },
          },
        },
        placeholder: '请选择管理员',
        onChange: onStorageManageChange,
      },
    ];
    const approvalData = [
      {
        title: '审批人',
        isSelect: true,
        placeholder: '请选择审批员',
        selectData: [
          { value: '付晓晓', label: '付晓晓', },
          { value: '周毛毛', label: '周毛毛', },
        ],
        selectView: {
          [Widget.Select]: {
            Container: {
              normal: {
                width: 200,
              },
            },
          },
        },
        onChange: onApprovalChange,
      },
    ];

    const workData = [
      {
        title: '任务名:',
        placeholder: '请输入',
        onChange: onTaskTitleChange,
      },
    ];
    const workDesData = [
      {
        title: '任务描述:',
        placeholder: '请输入',
        onChange: onTaskDescChange,
      },
    ];
    const workerData = [
      {
        title: '执行人',
        isSelect: true,
        selectData: [
          { value: '付晓晓', label: '付晓晓', },
          { value: '周毛毛', label: '周毛毛', },
        ],
        selectView: {
          [Widget.Select]: {
            Container: {
              normal: {
                width: 200,
              },
            },
          },
        },
        placeholder: '请选择管理员',
        onChange: onExecutorChange,
      },
    ];
    const responsibleData = [
      {
        title: '责任人',
        isSelect: true,
        placeholder: '请选择责任人',
        selectData: [
          { value: '付晓晓', label: '付晓晓', },
          { value: '周毛毛', label: '周毛毛', },
        ],
        selectView: {
          [Widget.Select]: {
            Container: {
              normal: {
                width: 200,
              },
            },
          },
        },
        onChange: onTaskManageChange,
      },
    ];
    const workTypeData = [
      {
        title: '任务类型',
        isSelect: true,
        placeholder: '请选择任务类型',
        selectData: [
          { value: '私密', label: '私密', },
          { value: '公开', label: '公开', },
        ],
        selectView: {
          [Widget.Select]: {
            Container: {
              normal: {
                width: 200,
              },
            },
          },
        },
        onChange: onTaskTypeChange,
      },
    ];
    const inputView = {
      [Widget.Input]: {
        Container: {
          normal: {
            width: 200,
          },
        },
      },
    };

    const getDataItem = (
      <ItemContainer>
        <ItemInnerContainer>
          <TitleContainer>
            <TitleText>{'生效日期'}</TitleText>
          </TitleContainer>
        </ItemInnerContainer>
        <ItemInputContainer>
          <RangePicker format={'YYYY-MM-DD'} />
        </ItemInputContainer>
      </ItemContainer>
    );
    const getWorkDataItem = (
      <ItemContainer>
        <ItemInnerContainer>
          <TitleContainer>
            <TitleText>{'生效日期'}</TitleText>
          </TitleContainer>
        </ItemInnerContainer>
        <ItemInputContainer>
          <TimePicker />
        </ItemInputContainer>
      </ItemContainer>
    );

    const getItem = data => () => {
      return data.map(item => {
        const { title, placeholder, isSelect, selectData, selectView, isAuto, onChange, } = item;
        return (
          <ItemContainer>
            <ItemInnerContainer>
              <TitleContainer>
                <TitleText>{title}</TitleText>
              </TitleContainer>
            </ItemInnerContainer>
            <ItemInputContainer>
              {!isSelect && !isAuto && (
                <Theme config={inputView}>
                  <Input placeholder={placeholder} onChange={onChange} />
                </Theme>
              )}
              {isAuto && (
                <Theme config={inputView}>
                  <AutoComplete placeholder={placeholder} onChange={onChange} />
                </Theme>
              )}
              {isSelect && (
                <Theme config={selectView}>
                  <SelectContainer>
                    <Select
                      createPortal
                      data={selectData}
                      displayField={'label'}
                      placeholder={placeholder}
                      onChange={onChange}
                    />
                  </SelectContainer>
                </Theme>
              )}
            </ItemInputContainer>
          </ItemContainer>
        );
      });
    };
    const cardThemeConfig = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: '100%',
            height: 260,
            margin: {
              bottom: 30,
            },
          },
        },
        CardTitle: {
          normal: {
            height: 30,
            margin: {
              top: 20,
              left: 10,
            },
          },
        },
        CardContent: {
          normal: {
            padding: 0,
          },
        },
      },
      [Widget.Select]: {
        Container: {
          normal: {
            width: 200,
          },
        },
      },
    };
    const staffCardThemeConfig = {
      [Widget.Card]: {
        Container: {
          normal: {
            width: '100%',
            height: 300,
          },
        },
        CardTitle: {
          normal: {
            height: 30,
            margin: {
              top: 20,
              left: 10,
            },
          },
        },
        CardContent: {
          normal: {
            padding: 0,
          },
        },
      },
    };

    const columns = [
      {
        title: '成员名字',
        dataIndex: 'name',
        key: 'name',
        width: 100,
      },
      {
        title: '工号',
        dataIndex: 'id',
        key: 'id',
        width: 100,
      },
      {
        title: '所属部门',
        dataIndex: 'address',
        key: 'address',
        width: 200,
      },
      {
        title: '操作',
        dataIndex: '',
        key: 'operations',
        render: () => <a href="javascript:;">删除</a>,
      },
    ];

    const data = [
      { name: 'Jack', id: 28, address: 'some where', key: '1', },

      { name: 'Rose', id: 36, address: 'some where', key: '2', },

      { name: 'Uzi', id: 36, address: 'some where', key: '3', },
    ];
    const { staffsInfo, storageInfo, taskInfo, } = this.props;
    const theNameData =
      storageInfo && storageInfo.data && storageInfo.data.nameData
        ? storageInfo.data.nameData
        : nameData;
    const theIpData =
      storageInfo && storageInfo.data && storageInfo.data.ipData ? storageInfo.data.ipData : ipData;
    const theManagerData =
      storageInfo && storageInfo.data && storageInfo.data.managerData
        ? storageInfo.data.managerData
        : managerData;
    const theApprovalData =
      storageInfo && storageInfo.data && storageInfo.data.approvalData
        ? storageInfo.data.approvalData
        : approvalData;

    const theWorkData =
      taskInfo && taskInfo.data && taskInfo.data.workData ? taskInfo.data.workData : workData;
    const theWorkDesData =
      taskInfo && taskInfo.data && taskInfo.data.workDesData
        ? taskInfo.data.workDesData
        : workDesData;
    const theWorkerData =
      taskInfo && taskInfo.data && taskInfo.data.workerData ? taskInfo.data.workerData : workerData;
    const theResponsibleData =
      taskInfo && taskInfo.data && taskInfo.data.responsibleData
        ? taskInfo.data.responsibleData
        : responsibleData;
    const theWorkTypeData =
      taskInfo && taskInfo.data && taskInfo.data.workTypeData
        ? taskInfo.data.workTypeData
        : workTypeData;
    return (
      <Content>
        <PageHeader
          routes={routes}
          title={'高级表单'}
          desc={'表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。'}
        />
        <PageContent>
          <Theme config={cardThemeConfig}>
            <Card
              title={'仓库管理'}
              content={
                <PageContent>
                  <Row>
                    <Col span={6}>{getItem(theNameData)()}</Col>
                    <Col span={6} offset={2}>
                      {getItem(theIpData)()}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(theManagerData)()}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>{getItem(theApprovalData)()}</Col>
                    <Col span={16} offset={2}>
                      {getDataItem}
                    </Col>
                  </Row>
                </PageContent>
              }
            />
          </Theme>
          <Theme config={cardThemeConfig}>
            <Card
              title={'任务管理'}
              content={
                <PageContent>
                  <Row>
                    <Col span={6}>{getItem(theWorkData)()}</Col>
                    <Col span={6} offset={2}>
                      {getItem(theWorkDesData)()}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(theWorkerData)()}
                    </Col>
                  </Row>
                  <Row>
                    <Col span={6}>{getItem(theResponsibleData)()}</Col>
                    <Col span={6} offset={2}>
                      {getWorkDataItem}
                    </Col>
                    <Col span={6} offset={2}>
                      {getItem(theWorkTypeData)()}
                    </Col>
                  </Row>
                </PageContent>
              }
            />
          </Theme>
          <Theme config={staffCardThemeConfig}>
            <Card
              title={'成员管理'}
              content={
                <PageContent>
                  <Table
                    columns={staffsInfo.columns}
                    data={staffsInfo.data}
                    onChange={onTableChange}
                  />
                </PageContent>
              }
            />
          </Theme>
        </PageContent>
      </Content>
    );
  }
}

const AdvancedFormPage = connect(
  advanced,
  state => {
    return {
      staffsInfo: state.get('staffsInfo').toJS
        ? state.get('staffsInfo').toJS()
        : state.get('staffsInfo'),
      storageInfo: state.get('storageInfo').toJS
        ? state.get('storageInfo').toJS()
        : state.get('storageInfo'),
      taskInfo: state.get('taskInfo').toJS ? state.get('taskInfo').toJS() : state.get('taskInfo'),
    };
  },
  mutations => {
    return {
      onStorageNameChange: mutations.onStorageNameChange,
      onIpAddressChange: mutations.onIpAddressChange,
      onStorageManageChange: mutations.onStorageManageChange,
      onApprovalChange: mutations.onApprovalChange,

      onTaskTitleChange: mutations.onTaskTitleChange,
      onTaskDescChange: mutations.onTaskDescChange,
      onExecutorChange: mutations.onExecutorChange,
      onTaskManageChange: mutations.onTaskManageChange,
      onTaskTypeChange: mutations.onTaskTypeChange,

      onTableChange: mutations.onTableChange,

      getStaffsInfo: mutations.asyncGetStaffsInfo,
      getStorageInfo: mutations.asyncGetStorageInfo,
      getTaskInfo: mutations.asyncGetTaskInfo,
    };
  }
)(TableList);

export default () => {
  return <AdvancedFormPage />;
};
