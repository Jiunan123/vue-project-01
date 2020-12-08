export default [
  {
    id: '1',
    startTime: '2015-07',
    endTime: '2017-05',
    company: '鲸运科技物流（深圳）有限公司',
    position: '全栈工程师',
    content: [
      '参与需求讨论评审、需求估时、需求的实现设计、测试用例编写与评审、在RubyOnRails框架上实现需求（使用语言Ruby/Mysql/Html/Css/JQuery）、自测与自动化测试编写（使用工具插件respec/capybara/factoryGirl/自动化覆盖脚本）、代码Review与提交（一对一代码review模式，版本控制工具git）、回归测试'
    ]
  },
  {
    id: 2,
    startTime: '2017-07',
    endTime: '2019-06',
    company: '网宿科技股份有限公司厦门分公司',
    position: '测试开发工程师',
    content: [
      '主要参与项目组的业务需求评审讨论确认、任务分配估时、用例设计与评审、需求测试执行、每日持续集成失败任务分析、迭代回归测试、执行打包发布流程（包含测试报告、持续集成自动化报告）、检查产品对外发布需求文档、分析运营问题与提供规避方案。',
      '编写接口自动化测试 (使用的是公司自研测试网站)。',
      '编写WEB自动化测试(Rotbotframework)。',
      '编写查询接口的基础压力测试(Jmeter)。',
      '维护整理业务需求文档、输出项目组新人业务入门指南。',
      '担任联合测试主导人，推进联合测试进度。'
    ]
  }
].sort((a, b) => {
  return a.startTime < b.startTime ? 1 : -1
})
