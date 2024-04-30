module.exports = {
    // 可选类型
    types: [
      { value: "初始项目", name: "初始项目" },
      { value: "每日例行提交", name: "每日例行提交" },
      { value: "每月例行提交", name: "每月例行提交" },
      { value: "每周例行提交", name: "每周例行提交" },
      { value: "新增功能", name: "新增功能" },
      { value: "问题修复", name: "问题修复" },
      { value: "文档变更", name: "文档变更" },
      { value: "代码格式", name: "代码格式" },
      { value: "代码重构", name: "代码重构" },
      { value: "性能优化", name: "性能优化" },
      { value: "测试变更", name: "测试变更" },
      { value: "工具变更", name: "工具变更" },
      { value: "代码回退", name: "代码回退" },
      { value: "代码打包", name: "代码打包" }
    ],
    // 消息步骤
    messages: {
      type: '请选择提交类型:',
      customScope: '请输入修改范围(可选):',
      subject: '请简要描述提交(必填):',
      body: '请输入详细描述(可选):',
      footer: '请输入要关闭的issue(可选):',
      confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
    },
  }