/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import notFound from '../../assets/images/500.png';
import Abnormal from './index';

export default class Pages extends React.Component<any, any> {

  render(){
    const errorInfo ={url : '/',title :'500' ,desc :'抱歉，服务器出错了',buttonText :'返回首页' ,img:`${notFound}`,};
    return (
      <Abnormal {...errorInfo}/>
    );

  }
}
