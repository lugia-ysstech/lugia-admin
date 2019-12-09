import styled, { css } from "styled-components";
import CSSComponent from "@lugia/theme-css-hoc";
import { getBorder } from "@lugia/theme-utils";

export const GridItemContainer = styled.div`
  background: #fbfbfb;
  border-radius: 4px;
  &:hover {
    background: #fbfbfb;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
export const FloatingWindowContainer = styled.div`
  position: fixed;
  transition: right 0.3s;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  bottom: 8px;
`;
export const FloatingWindowLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 26px;
`;

export const FloatingWindowLeft = CSSComponent({
  tag: "span",
  className: "FloatingWindowLeft",
  normal: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#747E90" } }
  },
  hover: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#A6AAB2" } }
  },
  active: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#50575D" } }
  },
  css: css`
    height: 48px;
    width: 6px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px 0 0 4px;
    color: #fff;
    line-height: 4px;
    padding-top: 11px;
    text-align: center;
    cursor: pointer;
  `,
  option: { hover: true, active: true }
});

export const FloatingWindowRight = CSSComponent({
  tag: "span",
  className: "FloatingWindowRight",
  normal: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#747E90" } }
  },
  hover: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#A6AAB2" } }
  },
  active: {
    selectNames: [["background", "color"]],
    defaultTheme: { background: { color: "#50575D" } }
  },
  css: css`
    height: 48px;
    width: 42px;
    border-radius: 0 4px 4px 0;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
  `,
  option: { hover: true, active: true }
});

export const FloatingWindowcontent = styled.div`
  transform: scale(0, 0);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 150px;
  background: #f2f2f2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px 10px;
  .lable {
    display: flex;
    flex-direction: row;
    padding-bottom: 5px;
  }
  .lable span {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #50575d;
  }
  .lable i {
    font-family: PingFangSC-Regular;
    font-size: 10px;
    color: #747e90;
    line-height: 17px;
  }
  .input_group {
    display: flex;
  }
  .input_group .input_wrap {
    flex: 1;
  }
  .input_cols_wrap {
    display: flex;
    flex-direction: column;
  }
  .input_cols_wrap .input_cols_lable {
    flex: 1;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #50575d;
    line-height: 17px;
    margin-bottom: 7px;
    margin-top: 16px;
  }
  .input_cols_wrap .input_cols_slider {
    flex: 1;
    margin-bottom: 16px;
  }
`;

export const ShrinkWrap = CSSComponent({
  tag: "div",
  className: "ShrinkWrap",
  normal: {
    selectNames: [["color"]],
    defaultTheme: { color: "#666666" }
  },
  hover: {
    selectNames: [["color"]],
    defaultTheme: { color: "#4D68FF" }
  },
  active: {
    selectNames: [["color"]],
    defaultTheme: { color: "#394DBF" }
  },
  css: css`
    position: absolute;
    right: 12px;
    bottom: 13px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 18px;
    cursor: pointer;
  `,
  option: { hover: true, active: true }
});

export const AddPanelWrap = CSSComponent({
  tag: "div",
  className: "AddPanelWrap",
  normal: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #4d68ff 0%, #8093ff 100%)" }
    }
  },
  hover: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #8C9DFF 0%, #8093FF 100%)" }
    }
  },
  active: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #394DBF 0%, #8093FF 100%)" }
    }
  },
  css: css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: ;
    border-radius: 12px;
    height: 24px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
  `,
  option: { hover: true, active: true }
});

export const CarouselContainer = styled.div`
  position: fixed;
  bottom: -300px;
  right: 57px;
  transition: bottom 0.3s;
  background: #f2f2f2;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 265px;
  min-width: 1127px;
  width: 80%;
`;
export const CarouselWarp = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 12px;
  overflow: hidden;
  padding: 0 32px;
`;

// 右翻按钮
export const NextButton = CSSComponent({
  tag: "span",
  className: "NextButton",
  normal: {
    selectNames: [["color"]],
    defaultTheme: { color: "#747E90" }
  },
  hover: {
    selectNames: [["color"]],
    defaultTheme: { color: "#4D68FF" }
  },
  active: {
    selectNames: [["color"]],
    defaultTheme: { color: "#394DBF" }
  },
  disabled: {
    electNames: [["color"]],
    defaultTheme: { color: "#CCCCCC" }
  },
  css: css`
    display: inline-block;
    position: absolute;
    left: 0;
    width: 32px;
    text-align: center;
  `,
  option: { hover: true, active: true }
});
// 左翻按钮
export const PreButton = CSSComponent({
  tag: "span",
  className: "PreButton",
  normal: {
    selectNames: [["color"]],
    defaultTheme: { color: "#747E90" }
  },
  hover: {
    selectNames: [["color"]],
    defaultTheme: { color: "#4D68FF" }
  },
  active: {
    selectNames: [["color"]],
    defaultTheme: { color: "#394DBF" }
  },
  disabled: {
    electNames: [["color"]],
    defaultTheme: { color: "#CCCCCC" }
  },
  css: css`
    display: inline-block;
    position: absolute;
    right: 0px;
    width: 32px;
    text-align: center;
  `,
  option: { hover: true, active: true }
});
export const ViewingArea = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const ItemContainer = styled.div`
  transform: translateX(0);
  transition: transform 0.3s;
  width: 3000px;
`;
export const CarouselItem = styled.div`
  display: inline-block;
  margin-right: ${props => (props.last ? "0" : "16px")};
`;
export const ImgWrap = styled.div`
  display: inline-block;
  width: 230px;
  height: 170px;
  padding: 8px 8px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const ImgTitle = styled.p`
  width: 230px;
  line-height: 18px;
  padding: 6px 0 4px 0;
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #747e90;
  text-align: center;
`;

export const OperationWrap = styled.div`
  position: absolute;
  right: 32px;
  bottom: 16px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
`;

// 使用按钮
export const OperationUseWrap = CSSComponent({
  tag: "span",
  className: "OperationUseWrap",
  normal: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #4d68ff 0%, #8093ff 100%)" }
    }
  },
  hover: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #8C9DFF 0%, #8093FF 100%)" }
    }
  },
  active: {
    selectNames: [["background", "image"]],
    defaultTheme: {
      background: { image: "linear-gradient(-90deg, #394DBF 0%, #8093FF 100%)" }
    }
  },
  css: css`
    display: inline-block;
    width: 90px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background-image: ;
    border-radius: 16px;
    color: #ffffff;
    cursor: pointer;
  `,
  option: { hover: true, active: true }
});

// 取消按钮
export const OperationCanleWrap = CSSComponent({
  tag: "span",
  className: "OperationCanleWrap",
  normal: {
    selectNames: [["color"], ["border"]],
    defaultTheme: {
      color: "#4D68FF",
      border: getBorder({ color: "#4D68FF", width: 1, style: "solid" })
    }
  },
  hover: {
    selectNames: [["color"], ["border"]],
    defaultTheme: {
      color: "#8C9DFF",
      border: getBorder({ color: "#8C9DFF", width: 1, style: "solid" })
    }
  },
  active: {
    selectNames: [["color"], ["border"]],
    defaultTheme: {
      color: "#394DBF ",
      border: getBorder({ color: "#394DBF", width: 1, style: "solid" })
    }
  },
  css: css`
    display: inline-block;
    width: 90px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #ffffff;
    border-radius: 16px;
    margin-left: 8px;
    cursor: pointer;
  `,
  option: { hover: true, active: true }
});

// 左翻按钮
export const DeleteWrap = CSSComponent({
  tag: "span",
  className: "PreButton",
  normal: {
    selectNames: [["color"]],
    defaultTheme: { color: "#F22735" }
  },
  hover: {
    selectNames: [["color"]],
    defaultTheme: { color: "#F2636D" }
  },
  active: {
    selectNames: [["color"]],
    defaultTheme: { color: "#B31D27" }
  },
  css: css`
    position: absolute;
    top: -8px;
    right: -8px;
    display: inline-block;
    width: 16px;
    height: 16px;
    color: ;
    font-size: 16px;
    line-height: 16px;
    background: #fff;
    border-radius: 50%;
  `,
  option: { hover: true, active: true }
});
