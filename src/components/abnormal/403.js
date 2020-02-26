/**
 *
 * create by ligx
 *
 * @flow
 */
import React from 'react';
import notFound from '../../assets/images/403.png';
import Abnormal from './index';

export default class Pages extends React.Component<any, any> {

  render(){
    const errorInfo ={url : '/',title :'403' ,desc :'抱歉，您无权访问页面',buttonText :'返回首页' ,img:`${notFound}`,};
    return (
      <Abnormal {...errorInfo}/>
    );

  }


}
