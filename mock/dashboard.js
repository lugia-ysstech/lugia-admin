const getHeaderDataInfo = () => {
  const visitsData = [
    { time: "2019-10-15", count: 5 },
    { time: "2019-10-16", count: 2 },
    { time: "2019-10-17", count: 6 },
    { time: "2019-10-18", count: 8 },
    { time: "2019-10-19", count: 5 },
    { time: "2019-10-20", count: 1 },
    { time: "2019-10-21", count: 3 },
    { time: "2019-10-22", count: 6 },
    { time: "2019-10-23", count: 2 },
    { time: "2019-10-24", count: 8 },
    { time: "2019-10-25", count: 7 },
    { time: "2019-10-26", count: 6 },
    { time: "2019-10-27", count: 3 },
    { time: "2019-10-28", count: 4 },
    { time: "2019-10-29", count: 6 },
    { time: "2019-10-30", count: 8 }
  ];

  const payData = [
    { time: "2019-10-15", count: 5 },
    { time: "2019-10-16", count: 7 },
    { time: "2019-10-17", count: 4 },
    { time: "2019-10-18", count: 3 },
    { time: "2019-10-19", count: 5 },
    { time: "2019-10-20", count: 2 },
    { time: "2019-10-21", count: 7 },
    { time: "2019-10-22", count: 8 },
    { time: "2019-10-23", count: 5 },
    { time: "2019-10-24", count: 9 },
    { time: "2019-10-25", count: 4 },
    { time: "2019-10-26", count: 6 },
    { time: "2019-10-27", count: 3 },
    { time: "2019-10-28", count: 4 },
    { time: "2019-10-29", count: 6 },
    { time: "2019-10-30", count: 8 }
  ];
  return {
    visitsData,
    payData
  };
};

const getContentDataInfo = () => {
  const intervalData = [
    { time: "1月", value: 849 },
    { time: "2月", value: 666 },
    { time: "3月", value: 573 },
    { time: "4月", value: 1199 },
    { time: "5月", value: 227 },
    { time: "6月", value: 612 },
    { time: "7月", value: 1146 },
    { time: "8月", value: 883 },
    { time: "9月", value: 339 },
    { time: "10月", value: 374 },
    { time: "11月", value: 325 },
    { time: "12月", value: 1179 }
  ];

  return {
    intervalData
  };
};

const getSecDataInfo = () => {
  const searchUserData = [
    { time: "2019-10-15", count: 2 },
    { time: "2019-10-16", count: 4 },
    { time: "2019-10-17", count: 6 },
    { time: "2019-10-18", count: 4 },
    { time: "2019-10-19", count: 5 },
    { time: "2019-10-20", count: 4 },
    { time: "2019-10-21", count: 6 },
    { time: "2019-10-22", count: 8 },
    { time: "2019-10-23", count: 4 },
    { time: "2019-10-24", count: 7 },
    { time: "2019-10-25", count: 8 },
    { time: "2019-10-26", count: 4 },
    { time: "2019-10-27", count: 6 },
    { time: "2019-10-28", count: 4 },
    { time: "2019-10-29", count: 3 },
    { time: "2019-10-30", count: 2 }
  ];

  const averageSearchData = [
    { time: "2019-10-15", count: 2 },
    { time: "2019-10-16", count: 4 },
    { time: "2019-10-17", count: 6 },
    { time: "2019-10-18", count: 4 },
    { time: "2019-10-19", count: 5 },
    { time: "2019-10-20", count: 4 },
    { time: "2019-10-21", count: 6 },
    { time: "2019-10-22", count: 8 },
    { time: "2019-10-23", count: 4 },
    { time: "2019-10-24", count: 7 },
    { time: "2019-10-25", count: 8 },
    { time: "2019-10-26", count: 4 },
    { time: "2019-10-27", count: 6 },
    { time: "2019-10-28", count: 4 },
    { time: "2019-10-29", count: 3 },
    { time: "2019-10-30", count: 2 }
  ];

  const salesData = [
    { type: "家用电器", value: 4544 },
    { type: "食用酒水", value: 3321 },
    { type: "个护健康", value: 3113 },
    { type: "服饰箱包", value: 2341 },
    { type: "母婴产品", value: 1231 },
    { type: "其他", value: 1231 }
  ];

  return { searchUserData, averageSearchData, salesData };
};

const getFooterInfo = () => {
  const interactData = [
    { time: "14:08", type: "客流量", value: 62 },
    { time: "14:08", type: "支付笔数", value: 73 },
    { time: "14:38", type: "客流量", value: 43 },
    { time: "14:38", type: "支付笔数", value: 86 },
    { time: "15:08", type: "客流量", value: 48 },
    { time: "15:08", type: "支付笔数", value: 49 },
    { time: "15:38", type: "客流量", value: 40 },
    { time: "15:38", type: "支付笔数", value: 70 },
    { time: "16:08", type: "客流量", value: 90 },
    { time: "16:08", type: "支付笔数", value: 47 },
    { time: "16:38", type: "客流量", value: 15 },
    { time: "16:38", type: "支付笔数", value: 30 },
    { time: "17:08", type: "客流量", value: 101 },
    { time: "17:08", type: "支付笔数", value: 55 },
    { time: "17:38", type: "客流量", value: 39 },
    { time: "17:38", type: "支付笔数", value: 92 },
    { time: "18:08", type: "客流量", value: 41 },
    { time: "18:08", type: "支付笔数", value: 109 },
    { time: "18:38", type: "客流量", value: 26 },
    { time: "18:38", type: "支付笔数", value: 96 },
    { time: "19:08", type: "客流量", value: 93 },
    { time: "19:08", type: "支付笔数", value: 70 },
    { time: "19:38", type: "客流量", value: 41 },
    { time: "19:38", type: "支付笔数", value: 43 },
    { time: "20:08", type: "客流量", value: 36 },
    { time: "20:08", type: "支付笔数", value: 45 },
    { time: "20:38", type: "客流量", value: 18 },
    { time: "20:38", type: "支付笔数", value: 76 },
    { time: "21:08", type: "客流量", value: 43 },
    { time: "21:08", type: "支付笔数", value: 78 },
    { time: "21:38", type: "客流量", value: 21 },
    { time: "21:38", type: "支付笔数", value: 38 },
    { time: "22:08", type: "客流量", value: 30 },
    { time: "22:08", type: "支付笔数", value: 106 },
    { time: "22:38", type: "客流量", value: 80 },
    { time: "22:38", type: "支付笔数", value: 48 },
    { time: "23:08", type: "客流量", value: 64 },
    { time: "23:08", type: "支付笔数", value: 17 },
    { time: "23:38", type: "客流量", value: 62 },
    { time: "23:38", type: "支付笔数", value: 107 }
  ];

  return { interactData };
};

const getYearsTrendInfo = () => {
  const yearsTrendData = [
    { time: "01月", 仓位: 57, 深沪003: -1 },
    { time: "02月", 仓位: 63, 深沪003: -0.3 },
    { time: "03月", 仓位: 59, 深沪003: -0.5 },
    { time: "04月", 仓位: 40, 深沪003: -0.2 },
    { time: "05月", 仓位: 59, 深沪003: 0.4 },
    { time: "06月", 仓位: 50, 深沪003: 0.3 },
    { time: "07月", 仓位: 53, 深沪003: -0.2 },
    { time: "08月", 仓位: 69, 深沪003: 0 },
    { time: "09月", 仓位: 58, 深沪003: 0.3 },
    { time: "10月", 仓位: 40, 深沪003: 0.65 },
    { time: "11月", 仓位: 50, 深沪003: 0.38 },
    { time: "12月", 仓位: 43, 深沪003: 0.6 }
  ];
  return { yearsTrendData };
};




export default {
  "POST /api/dashboard/headerInfo": function (req, res) {
    res.json(getHeaderDataInfo());
  },
  "POST /api/dashboard/contentInfo": function (req, res) {
    res.json(getContentDataInfo());
  },
  "POST /api/dashboard/secInfo": function (req, res) {
    res.json(getSecDataInfo());
  },
  "POST /api/dashboard/footerInfo": function (req, res) {
    res.json(getFooterInfo());
  },

  "POST /api/dashboard/yearsTrendInfo": function (req, res) {
    res.json(getYearsTrendInfo());
  },
};
