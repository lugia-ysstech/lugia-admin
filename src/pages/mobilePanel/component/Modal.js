import React from 'react';
import ReactDom, { unmountComponentAtNode } from 'react-dom';
import RCAlign from 'rc-align';
import styled from 'styled-components';
import { Icon } from '@lugia/lugia-web';

const ModalContainer = styled.div`
  position: absolute;
  left: ${props => props.position.left || '50%'};
  top: ${props => props.position.top || '50%'};
  transform: ${props => (props.position.left ? '' : 'translate(-50%,-50%)')};
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 18px;
  width: 236px;
`;
const ModalContent = styled.div`
  line-height: 22px;
  font-size: 16px;
  color: #50575d;
`;
const ModalIcon = styled.span`
  font-size: 18px;
  color: #f22735;
  vertical-align: middle;
  margin-right: 12px;
`;
const ModalFooter = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  font-size: 14px;
  display: flex;
  justify-content: center;
`;
const ButtonOk = styled.span`
  width: 66px;
  height: 24px;
  line-height: 24px;
  background: #f22735;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
`;
const ButtonCancel = styled.span`
  width: 66px;
  height: 24px;
  line-height: 24px;
  border: 1px solid #f22735;
  border-radius: 4px;
  color: #f22735;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-left: 10px;
  cursor: pointer;
`;
class Modal extends React.PureComponent {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.props.maskNode.addEventListener('click', this.handleClick);
  }
  remove = () => {
    const { bodyOverflow, maskNode } = this.props;
    unmountComponentAtNode(maskNode);
    maskNode.style.display = 'none';
    maskNode.style.visibility = 'hidden';
    document.body.style.overflow = bodyOverflow;
  };
  handleClick = e => {
    const target = e.path[0];
    if (target === this.props.maskNode) {
      this.remove();
    }
  };
  customEvent = () => {
    this.props.deleteEvent();
    this.remove();
  };
  componentWillUnmount() {
    this.props.maskNode.removeEventListener('click', this.handleClick);
  }
  render() {
    const { position = {}, target, align } = this.props;
    return (
      <RCAlign align={align} target={() => target}>
        <ModalContainer position={position}>
          <ModalContent>
            <ModalIcon>
              <Icon iconClass={'lugia-icon-reminder_exclamation_circle'} />
            </ModalIcon>
            确定删除此卡片？
          </ModalContent>
          <ModalFooter>
            <ButtonOk onClick={this.customEvent}>确定</ButtonOk>
            <ButtonCancel onClick={this.remove}>取消</ButtonCancel>
          </ModalFooter>
        </ModalContainer>
      </RCAlign>
    );
  }
}
// 删除提示框弹出方法
Modal.deleteAlter = option => {
  let maskNode = document.getElementById('_motaiduihuak');
  const bodyOverflow = document.body.style.overflow;
  if (!maskNode) {
    maskNode = document.createElement('div');
    maskNode.id = '_motaiduihuak';
    maskNode.style.position = 'fixed';
    maskNode.style.top = 0;
    maskNode.style.right = 0;
    maskNode.style.bottom = 0;
    maskNode.style.left = 0;
    maskNode.style.background = 'rgba(0, 0, 0, 0.3)';
    document.body.appendChild(maskNode);
  } else {
    maskNode.style.display = 'block';
    maskNode.style.visibility = 'visible';
  }
  document.body.style.overflow = 'hidden';
  const config = { ...option, bodyOverflow, maskNode };
  ReactDom.render(<Modal {...config} />, maskNode);
};

export default Modal;
