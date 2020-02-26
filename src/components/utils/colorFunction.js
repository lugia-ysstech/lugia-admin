export const getColorCalculate = (color,stage,type) => {
  const isRGB = isRGBColor(color);
  type = type?type.toLowerCase():type;
  let resultColor = getRgbFromArray(hexToRgbArray(isRGB?rgbToHex(color):color).map(item => item+stage)) ;
  if(type ==='hex'){
    resultColor = rgbToHex(resultColor);
  }
  return  resultColor;
};

export const getRgbFromArray = arr => {
  return 'rgb(' + arr.join(',') +')' ;
};

export const hexToRgbArray =  color => {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  color = color.toLowerCase();
  if (color && reg.test(color)) {
    if (color.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = sColorNew;
    }
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + color.slice(i, i + 2)));
    }
    return sColorChange;
  } 
    return color;
  
};

export const hexToRgb = color => {
  return getRgbFromArray(hexToRgbArray(color));
};

export const rgbToHex = rgb => {
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (isRGBColor(rgb)) {
    const aColor = getArrayFromRgb(rgb);
    let strHex = '#';
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      hex = hex < 10 ? 0 + '' + hex : hex;
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = rgb;
    }
    return strHex;
  } else if (reg.test(rgb)) {
    const aNum = rgb.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return rgb;
    } else if (aNum.length === 3) {
      let numHex = '#';
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += (aNum[i] + aNum[i]);
      }
      return numHex;
    }
  } else {
    return rgb;
  }
};

export const getArrayFromRgb = rgb => {
  if (isRGBColor(rgb)) {
    return rgb.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
  }
  return rgb;
};

export const isRGBColor = color => {
  return /^(rgb|RGB)/.test(color);
};
