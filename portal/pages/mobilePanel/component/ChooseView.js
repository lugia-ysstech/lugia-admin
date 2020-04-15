import React, { PureComponent, } from 'react';
import { Icon, } from '@lugia/lugia-web';
import ThemeProvider from '@lugia/theme-hoc';
import {
  CarouselContainer,
  CarouselItem,
  CarouselWarp,
  ImgTitle,
  ImgWrap,
  ItemContainer,
  NextButton,
  OperationCanleWrap,
  OperationUseWrap,
  OperationWrap,
  PreButton,
  ViewingArea,
} from '../css';

class ChooseView extends PureComponent {
  constructor(props) {
    super(props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { listImg, modelSelect, } = nextProps;
    if (!prevState) {
      return {
        offsetX: 0,
        allWidth: 30000,
        listImg,
        modelSelect,
        nextDisabled: false,
        preDisabled: true,
        animation: false,
      };
    }
    return {
      listImg,
      modelSelect,
    };
  }

  componentDidMount() {
    // 可是窗口宽度
    const viewingAreaWidth = (this.viewingAreaWidth = this.viewingArea.clientWidth);
    // 每一个子项宽度
    if (this.itemContainer && this.itemContainer.children.length > 0) {
      const itemWidth = this.itemContainer.children[0].offsetWidth;
      // 步长
      this.itemStepWidth = itemWidth + 16;
      // 所有子项的宽度之和
      const allItemWidth = itemWidth * this.props.listImg.length;
      // 所有间距之和
      const allItemMargin = 16 * (this.props.listImg.length - 1);
      // 滚动区域宽度
      const width = allItemWidth + allItemMargin;
      this.width = width;
      // 最大的translateX值
      const lastOffsetX = width - viewingAreaWidth;
      this.lastOffsetX = lastOffsetX;
      width > viewingAreaWidth
        ? this.setState({ allWidth: width, animation: true, })
        : this.setState({ allWidth: width, nextDisabled: true, animation: true, });
    }
  }
  /**
   * 向前翻页
   */
  previous = () => {
    const { offsetX, preDisabled, } = this.state;
    if (preDisabled) return;
    if (offsetX - this.itemStepWidth <= 0) {
      this.setState({ offsetX: 0, preDisabled: true, nextDisabled: false, });
    } else {
      this.setState({
        offsetX: offsetX - this.itemStepWidth,
        preDisabled: false,
        nextDisabled: false,
      });
    }
  };

  /**
   * 向后翻页
   */
  next = () => {
    const { offsetX, nextDisabled, } = this.state;
    if (nextDisabled) return;
    if (this.width - offsetX - this.itemStepWidth <= this.viewingAreaWidth) {
      this.setState({
        offsetX: this.lastOffsetX,
        nextDisabled: true,
        preDisabled: false,
      });
    } else {
      this.setState({
        offsetX: offsetX + this.itemStepWidth,
        nextDisabled: false,
        preDisabled: false,
      });
    }
  };

  render() {
    const {
      allWidth,
      offsetX,
      listImg,
      modelSelect,
      nextDisabled,
      preDisabled,
      animation,
    } = this.state;
    return (
      <CarouselContainer style={{ bottom: animation ? '16px' : '-300px', }}>
        <CarouselWarp>
          <NextButton
            disabled={preDisabled}
            onClick={this.previous}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            <Icon iconClass={'lugia-icon-direction_caret_left'} />
          </NextButton>
          <PreButton
            disabled={nextDisabled}
            onClick={this.next}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            <Icon iconClass={'lugia-icon-direction_caret_right'} />
          </PreButton>
          <ViewingArea ref={node => (this.viewingArea = node)}>
            <ItemContainer
              ref={node => (this.itemContainer = node)}
              style={{
                transform: `translateX(-${offsetX}px)`,
                width: `${allWidth}px`,
              }}
            >
              {listImg.map((item, index) => (
                <CarouselItem last={index === listImg.length - 1} key={`modurl_${index}`}>
                  <ImgWrap
                    className={item.id === modelSelect ? 'modelSelect' : ''}
                    onClick={() => this.props.selectModule(item)}
                  >
                    <img src={item.thumbnail} alt={item.title} />
                  </ImgWrap>
                  <ImgTitle>{item.title}</ImgTitle>
                </CarouselItem>
              ))}
            </ItemContainer>
          </ViewingArea>
        </CarouselWarp>
        <OperationWrap>
          <OperationUseWrap
            onClick={this.props.userTheme}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            使用
          </OperationUseWrap>
          <OperationCanleWrap
            onClick={this.props.cancelSelect}
            themeProps={this.props.getPartOfThemeProps('Container')}
          >
            取消
          </OperationCanleWrap>
        </OperationWrap>
      </CarouselContainer>
    );
  }
}
export default ThemeProvider(ChooseView, 'lagiu_choose_view', {
  hover: true,
  active: true,
  focus: true,
});
