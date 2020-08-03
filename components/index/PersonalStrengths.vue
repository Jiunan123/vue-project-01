<template>
  <section>
    <div class="info">
      <h1>个人优势</h1>
      <h2>向你介绍我</h2>
      <p>我是一名来自漳州的女程序猿</p>
      <p>在前后端开发都有一些经验</p>
      <p>工作认真负责细心</p>
      <p>主动参与产品设计与讨论</p>
      <p>自主学习能力强</p>
    </div>
    <div class="img">
      <img src="/img/autumn.jpg">
    </div>
  </section>
</template>
<script>
// https://blog.csdn.net/JackieDYH/article/details/102581587 图片溶解特效
export default {
}
</script>
<style lang='scss' scoped>
.container--personal-strengths {
  section {
    display: flex;
    text-align: right;
    padding: 0 {
      left: 2em;
    }
    border: 2px solid white;
    .info {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      flex: 0 0 30%;
    }
    .img {
      margin-left: 2em;
      flex: 0 0 70%;
      img {
        vertical-align: middle;
        max-width: 100%;
      }
    }
  }
}
</style>
