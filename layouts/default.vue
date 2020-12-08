<template>
  <div id="app">
    <div>
      <Nuxt />
    </div>
    <BoundMouseAnimation />
    <!-- <footer>
      <dl>
        <dt>QQ:</dt>
        <dd>835899489@qq.com</dd>
        <dt>版权声明：</dt>
        <dd>本项目为纯个人练习项目，不参与任何盈利，图像资源均来源于网上，侵删。</dd>
      </dl>
    </footer> -->
  </div>
</template>

<script>
import BoundMouseAnimation from '@/components/MouseAnimation/BoundMouseAnimation.vue'
export default {
  components: {
    BoundMouseAnimation
  }
}
</script>
<style lang='scss'>
#app {
  footer {
    padding: 1em;
    background: rgba(0,0,0,.5);
    text-align: center;
    color: mix($--color-white, $--color-black, 80%);

    dt, dd {
      display: inline;
    }
    dd + dt::before {
      content: "\A";
      white-space: pre;
    }
  }
}
</style>
