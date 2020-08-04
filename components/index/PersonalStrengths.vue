<template>
  <section class="personal-strengths">
    <el-row>
      <el-col
        v-waypoint="waypoint"
        :span="8"
        class="info"
        data-animation-name="flyLeftToRight"
      >
        <h1>个人优势</h1>
        <h2>向你介绍我</h2>
        <p>我是一名来自漳州的女程序猿</p>
        <p>在前后端开发都有一些经验</p>
        <p>工作认真负责细心</p>
        <p>主动参与产品设计与讨论</p>
        <p>自主学习能力强</p>
      </el-col>
      <el-col
        v-waypoint="waypoint"
        :span="16"
        class="img"
        data-animation-name="flyRightToLeft"
      >
        <img src="/img/autumn.jpg">
      </el-col>
    </el-row>
  </section>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px',
        threshold: [0.25, 0.75]
      }
    }
  },
  computed: {
    waypoint () {
      return {
        active: true,
        callback: this.onWaypoint,
        intersectionOptions: this.intersectionOptions
      }
    },
    navInfo () {
      return this.getNavInfo()('personal-strengths')
    }
  },
  methods: {
    onWaypoint ({ el, going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      if (going === this.$waypointMap.GOING_IN) {
        el.style.animation = `${el.dataset.animationName} 1s forwards`
        this.setactiveNavId(this.navInfo.id)
      }
    },
    ...mapMutations(['setactiveNavId']),
    ...mapGetters(['getNavInfo'])
  }
}
</script>
<style src='@/assets/scss/waypoint.scss' lang='scss'></style>
<style lang='scss' scoped>
section.personal-strengths {
  display: flex;
  text-align: right;
  border: 2px solid white;
  .info {
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
    left: 0px;
    padding-right: 2em;
  }
  .img {
    position: relative;
    right: 0px;
    img {
      vertical-align: middle;
      max-width: 100%;
    }
  }
}
</style>
