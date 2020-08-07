<template>
  <section class="personal-strengths">
    <div class="info">
      <WayPointItem animation="fly-from-left" report="personal-strengths">
        <h1>自我介绍</h1>
        <h2>Confide In Me</h2>
        <p>我是一名来自漳州的女程序猿</p>
        <p>在前后端开发都有一些经验</p>
        <p>工作认真负责细心</p>
        <p>主动参与产品设计与讨论</p>
        <p>自主学习能力强</p>
      </WayPointItem>
    </div>
    <div class="img">
      <WayPointItem animation="fly-from-right">
        <img src="/img/autumn.jpg">
      </WayPointItem>
    </div>
  </section>
</template>
<script>
import WayPointItem from '@/components/WayPointItem'
export default {
  components: {
    WayPointItem
  }
}
</script>
<style lang='scss' scoped>
section.personal-strengths {
  display: flex;
  text-align: right;
  border: 2px solid white;
  align-items: center;
  .info {
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 30%;
    justify-content: center;
    height: 100%;
    padding-right: 2em;
  }
  img {
    vertical-align: middle;
    max-width: 100%;
  }
  @media screen and (max-width: 790px) {
    flex-flow: column-reverse;
    .info {
      flex: 1 0 auto;
      text-align: center;
    }
  }
}
</style>
