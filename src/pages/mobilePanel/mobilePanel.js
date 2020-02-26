import React, { Component, } from 'react';
import ReactGridLayout, { WidthProvider, } from 'react-grid-layout';
import { Icon, } from '@lugia/lugia-web';
import ThemeProvider from '@lugia/theme-hoc';
import './css/grid-layout.css';
import config from './IndexModular/index';
import { CreatGridItemKey, defaultConfig, initGridItems, initLocalStorageGridItem, } from './gridLayout';
import { ChooseView, FloatingWindow, Modal, } from './component';
import { DeleteWrap, GridItemContainer, } from './css';

const GridLayout = WidthProvider(ReactGridLayout);
const layoutStyle = {
  background: '#F5F5F9',
};

class MobilePanel extends Component {
  constructor() {
    super();
    this.allModular = { ...config, }; // 所有展示内容
    const temObj = { ...config, };
    // 可选择的展示内容
    this.selectedModular = [];
    const localStroageConfig = JSON.parse(localStorage.getItem('name')) || [];
    let configData = {};
    if (
      localStroageConfig &&
      localStroageConfig.gridItems &&
      localStroageConfig.gridItems.length > 0
    ) {
      configData = initLocalStorageGridItem(localStroageConfig, temObj);
    } else {
      configData = initGridItems();
    }
    // 筛选剩余可展示内容
    for (const key in temObj) {
      const obj = temObj[key];
      this.selectedModular.push({
        title: obj.title,
        thumbnail: obj.src,
        id: key,
        component: obj.component,
      });
    }
    console.log('configData.cols', configData.cols);
    this.state = {
      gridItems: configData.gridItems, // 拖拽项信息
      selectLayout: '', // 选中的拖拽区
      floatingWindowState: 0, // 浮窗的状态 0面板隐藏状态 1面板展开状态  2面板收缩状态
      modelSelect: '', // 选中的展示内容
      value: 1,
      value1: 2,
      isEdit: false, // 是否编辑状态
      listImg: this.selectedModular, // 展示内容数组
      gridCols: configData.cols, // 栅数
      gridMargin: configData.margin,
      gridRowHeight: configData.rowHeight,
    };
  }
  onResizeStart = () => {
    this.layoutState = '';
    this.resize = true;
  };
  onResize = () => {
    if (this.resize) {
      this.layoutState = 'resize';
      this.resize = false;
    }
  };
  onResizeStop = (layout, oldItem, newItem, placeholder, e, element) => {
    const { gridItems, } = this.state;
    for(let i =0; i<gridItems.length; i++){
      if(gridItems[i].key === newItem.i){
        gridItems[i].w = newItem.w;
        gridItems[i].h = newItem.h;
        break;
      }
    }
  };

  onDragStart = (layout, oldItem, newItem, placeholder, e, element) => {
    this.layoutState = '';
    this.move = true;
  };
  onDrag = (layout, oldItem, newItem, placeholder, e, elemen) => {
    if (this.move) {
      this.layoutState = 'move';
      this.move = false;
    }
  };
  onDragStop = (layout, oldItem, newItem, placeholder, e, element) => {
    this.move = false;
    const { gridItems, } = this.state;
    for(let i =0; i<gridItems.length; i++){
      if(gridItems[i].key === newItem.i){
        gridItems[i].x = newItem.x;
        gridItems[i].y = newItem.y;
        break;
      }
    }
  };
  /**
   * 选择单个面板并显示控件选择框
   */
  selectedPanel = layout => {
    if (layout.id === this.state.selectLayout || this.state.isEdit === false)
      return false;
    if (
      this.layoutState !== 'move' &&
      this.layoutState !== 'resize' &&
      this.state.isEdit
    ) {
      this.setState({
        selectLayout: layout.key,
        // isEdit: false,
        floatingWindowState: 2,
      });
    } else {
      this.setState({ selectLayout: '', });
    }
  };

  /**
   * 打开操作面板
   */
  openOperationPanel = () => {
    this.state.floatingWindowState === 0
      ? this.setState({
          floatingWindowState: 1,
          isEdit: true,
          selectLayout: '',
        })
      : this.setState({
          floatingWindowState: 0,
          isEdit: false,
          selectLayout: '',
        },this.saveGridItemsInfo);
  };
  /**
   * 关闭操作面板
   */
  hiddenOperationPanel = () => {
    this.setState({ floatingWindowState: 2, });
  };

  /**
   * 选中状态切换为拖拽状态并打开操作面板
   */
  selectedSwitchDragAndOpenOperationPanel = () => {
    this.setState({ floatingWindowState: 1, isEdit: true, selectLayout: '', });
  };
  /**
   * 删除按钮点击事件
   */
  deleteGridItem = e => {
    Modal.deleteAlter({
      align: {
        points: ['tr', 'bl',],
        offset: [-12, 12,],
        useCssTransform: true,
        overflow: { adjustX: true, adjustY: true, },
      },
      target: this.$container,
      deleteEvent: () => {
        const { gridItems, selectLayout, listImg, } = this.state;
        let deleteModular = {};
        // 删除拖拽区域
        const newitems = gridItems.filter(item => {
          if (item.key === selectLayout) {
            deleteModular = this.allModular[item.id] || null;
          }
          return item.key !== selectLayout;
        });
        deleteModular
          ? this.setState({
              gridItems: [...newitems,],
              selectLayout: '',
              listImg: [
                ...listImg,
                {
                  title: deleteModular.title,
                  thumbnail: deleteModular.src,
                  id: deleteModular.id,
                  component: deleteModular.component,
                },
              ],
            },this.saveGridItemsInfo)
          : this.setState({
              gridItems: [...newitems,],
              selectLayout: '',
            },this.saveGridItemsInfo);
      },
    });
  };
  // 获取删除按钮ref
  containerRef = ele => {
    this.$container = ele;
  };
  // 使用展示内容填充
  userTheme = () => {
    let { gridItems, modelSelect, listImg, selectLayout, } = this.state;
    if (!modelSelect) return;
    // 去除选中展示内容，后的剩下所有展示内容
    listImg = listImg.filter(item => {
      return item.id !== modelSelect;
    });
    // 找到选中的拖拽区，并替换展示区内容
    for (let i = 0; i < gridItems.length; i++) {
      const data = gridItems[i];
      if (data.key === selectLayout) {
        // 拖拽区有内容
        if (data.id) {
          // 筛选剩余可展示内容
          const obj = this.allModular[data.id];
          if (obj) {
            listImg.push({
              title: obj.title,
              thumbnail: obj.src,
              id: data.id,
              component: obj.component,
            });
          }
        }
        //拖拽区无内容
        data.component = this.allModular[modelSelect].component;
        data.id = modelSelect;
        break;
      }
    }
    this.setState({
      gridItems: [...gridItems,],
      selectLayout: '',
      modelSelect: '',
      listImg: [...listImg,],
    },this.saveGridItemsInfo);
  };
  // 取消事件
  cancelSelect = () => {
    this.setState({ selectLayout: '',  modelSelect: '',});
  };
  // 选择展示内容
  selectModule = item => {
    this.setState({ modelSelect: item.id, });
  };
  // 修改子项间距
  changeGridMargin = margin => {
    this.setState({ gridMargin: margin, });
  }
  // 添加新拖拽区域
  addGridItem = () => {
    const { gridItems, } = this.state;
    const maxX = 0;
    let maxY = 0;
    let maxH = 0;
    gridItems.forEach(item => {
      if(item.y > maxY){
        maxY = item.y;
        maxH = item.h;
      }
    });
    gridItems.push({
      key: `grid_${CreatGridItemKey()}`,
      x: 0,
      y: maxY+maxH,
      w: defaultConfig.modularWidth,
      h: defaultConfig.modularHeight,
    });
    this.setState({gridItems: [...gridItems,],});
    document.getElementById('react-grid-layout');
  }
  /**
   * 保存Gird信息
   */
  saveGridItemsInfo = () => {
    const { gridCols, gridMargin, gridRowHeight, gridItems,} = this.state;
    const newGridItems = [];
    gridItems.forEach(obj => {
      newGridItems.push({
        h: obj.h,
        id: obj.id,
        key: obj.key,
        w: obj.w,
        x: obj.x,
        y: obj.y,
      });
    });
    const gridItemInfo = {
      cols: gridCols,
      margin: gridMargin,
      rowHeight: gridRowHeight,
      gridItems: newGridItems,
    };
    localStorage.setItem('name',JSON.stringify(gridItemInfo));
  }
  render() {
    const {
      gridItems,
      floatingWindowState,
      listImg,
      modelSelect,
      selectLayout,
      isEdit,
      gridCols: cols,
      gridMargin: margin,
      gridRowHeight: rowHeight,
    } = this.state;
    return (
      <div style={{ flex: 1, }}>
        <GridLayout
          cols={cols}
          isDraggable={isEdit}
          isResizable={isEdit}
          style={layoutStyle}
          compactType={null}
          margin={margin}
          rowHeight={rowHeight}
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragStop={this.onDragStop}
          onResizeStart={this.onResizeStart}
          onResize={this.onResize}
          onResizeStop={this.onResizeStop}
        >
          {gridItems.map(item => (
            <GridItemContainer
              onClick={() => this.selectedPanel(item)}
              className={{
                mask: this.state.isEdit,
                'layout-selected': this.state.selectLayout === item.key,
              }}
              key={item.key}
              data-grid={item}
            >
              {this.state.selectLayout === item.key && (
                <DeleteWrap
                  ref={this.containerRef}
                  themeProps={this.props.getPartOfThemeProps('Container')}
                >
                  <Icon
                    iconClass={'lugia-icon-reminder_minus_circle'}
                    onClick={this.deleteGridItem}
                  />
                </DeleteWrap>
              )}
              {item.component && <item.component />}
            </GridItemContainer>
          ))}
        </GridLayout>
        <FloatingWindow
          floatingWindowState={floatingWindowState}
          openOperationPanel={this.openOperationPanel}
          hiddenOperationPanel={this.hiddenOperationPanel}
          selectedSwitchDragAndOpenOperationPanel={
            this.selectedSwitchDragAndOpenOperationPanel
          }
          gridMargin={margin}
          changeGridMargin= {this.changeGridMargin}
          addGridItem= {this.addGridItem}
          sliderVale = {cols}
        />
        {selectLayout && (
          <ChooseView
            listImg={listImg}
            cancelSelect={this.cancelSelect}
            userTheme={this.userTheme}
            selectModule={this.selectModule}
            modelSelect={modelSelect}
            selectLayout={selectLayout}
          />
        )}
      </div>
    );
  }
}

export default ThemeProvider(MobilePanel, 'lagiu_mobile_panel', {
  hover: true,
  active: true,
  focus: true,
});
