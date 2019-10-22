const getStorageInfo = () => {
  const data = {
    nameData: [
      {
        title: "仓库名:",
        placeholder: "请输入仓库名称"
      }
    ],
    ipData: [
      {
        title: "仓库域名:",
        placeholder: "请输入",
        isAuto: true
      }
    ],
    managerData: [
      {
        title: "仓库管理员",
        isSelect: true,
        selectData: [
          { value: "付晓晓", label: "付晓晓" },
          { value: "周毛毛", label: "周毛毛" }
        ],
        placeholder: "请选择管理员"
      }
    ],
    approvalData: [
      {
        title: "审批人",
        isSelect: true,
        placeholder: "请选择审批员",
        selectData: [
          { value: "付晓晓", label: "付晓晓" },
          { value: "周毛毛", label: "周毛毛" }
        ]
      }
    ]
  };

  return { data };
};
const getTaskInfo = () => {
  const data = {
    workData: [{ title: "任务名:", placeholder: "请输入" }],
    workDesData: [{ title: "任务描述:", placeholder: "请输入" }],
    workerData: [
      {
        title: "执行人",
        isSelect: true,
        selectData: [
          { value: "付晓晓", label: "付晓晓" },
          { value: "周毛毛", label: "周毛毛" }
        ],
        placeholder: "请选择管理员"
      }
    ],
    responsibleData: [
      {
        title: "责任人",
        isSelect: true,
        placeholder: "请选择责任人",
        selectData: [
          { value: "付晓晓", label: "付晓晓" },
          { value: "周毛毛", label: "周毛毛" }
        ]
      }
    ],
    workTypeData: [
      {
        title: "任务类型",
        isSelect: true,
        placeholder: "请选择任务类型",
        selectData: [
          { value: "私密", label: "私密" },
          { value: "公开", label: "公开" }
        ]
      }
    ]
  };

  return { data };
};
const getStaffsInfo = () => {
  const columns = [
    {
      title: "成员名字",
      dataIndex: "name",
      key: "name",
      width: 100
    },
    {
      title: "工号",
      dataIndex: "id",
      key: "id",
      width: 100
    },
    {
      title: "所属部门",
      dataIndex: "address",
      key: "address",
      width: 200
    },
    {
      title: "操作",
      dataIndex: "",
      key: "operations",
      render: () => <a href="javascript:;">删除</a>
    }
  ];

  const data = [
    { name: "Jack", id: 28, address: "some where", key: "1" },

    { name: "Rose", id: 36, address: "some where", key: "2" },

    { name: "Uzi", id: 36, address: "some where", key: "3" }
  ];

  return { data, columns };
};

export default {
  "POST /api/form/staffsInfo": function(req, res) {
    res.json(getStaffsInfo());
  },
  "POST /api/form/storageInfo": function(req, res) {
    res.json(getStorageInfo());
  },
  "POST /api/form/taskInfo": function(req, res) {
    res.json(getTaskInfo());
  }
};
