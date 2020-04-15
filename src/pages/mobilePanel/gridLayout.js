export const defaultConfig = {
  modularCount: 5,
  modularWidth: 5,
  modularHeight: 3,
  gridColumn: 24,
  margin: [10, 10],
  rowHeight: 30,
};

// 没有缓存数据是初始化GridItem位置信息
export const initGridItems = option => {
  option = { ...defaultConfig, ...option };
  console.log(option);
  const gridItems = [];
  for (let i = 0; i < option.modularCount; i++) {
    const key = CreatGridItemKey();
    gridItems.push({
      key: `grid_${key}`,
      x: 6 * (i % 2),
      y: 3 * parseInt(i / 2),
      w: option.modularWidth,
      h: option.modularHeight,
    });
  }
  return {
    gridItems,
    cols: option.gridColumn,
    margin: option.margin,
    rowHeight: option.rowHeight,
  };
};

// 匹配关联展示模块
export const initLocalStorageGridItem = (data, temObj) => {
  if (data && data.gridItems && data.gridItems.length <= 0) {
    return null;
  }
  data.gridItems.forEach(item => {
    const id = item.id;
    const modular = temObj[id];
    if (modular) {
      item.component = modular.component;
      delete temObj[id];
    }
  });
  return data;
};

// 生成uuid
export const CreatGridItemKey = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4';
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = '-';
  const uuid = s.join('');
  return uuid;
};
