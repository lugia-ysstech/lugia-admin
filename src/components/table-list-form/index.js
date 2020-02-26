/**
 *
 * create by grguang
 *
 *
 */
import React, { Component, } from 'react';
import styled from 'styled-components';
import { Button, DatePicker, Grid, Input, NumberInput, Select, } from '@lugia/lugia-web';

const { Row, Col, } = Grid;
const FormItem = styled.div`
  margin-bottom: 20px;
  padding: 0 24px;
`;
const Empty = styled.span`
  display: inline-block;
  width: 10px;
`;
const data = [
  {
    value: 'lugia-A',
    text: '杰尼龟',
  },
  {
    value: 'lugia-B',
    text: '火恐龙',
  },
];

export default class Form extends Component {
  render() {
    return (
      <Row>
        <Col span={8}>
          <FormItem>
            <label>规则名称: </label>
            <Input placeholder={'请输入'} />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <label>使用状态: </label>
            <Select createPortal placeholder={'请输入'} data={data} />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <label>调用次数: </label>
            <NumberInput />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <label>更新时间: </label>
            <DatePicker />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <label>使用状态: </label>
            <Select createPortal placeholder={'请输入'} data={data} />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <label>使用状态: </label>
            <Select createPortal placeholder={'请输入'} data={data} />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem>
            <Button type="primary">查询</Button>
            <Empty />
            <Button>重置</Button>
          </FormItem>
        </Col>
      </Row>
    );
  }
}
