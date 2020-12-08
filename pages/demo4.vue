<template>
  <!-- <div class="container"> -->
  <div class="background-animation">
    <button @click="onClick" style="position: fixed; z-index: 1000">
      点击我
    </button>
    <!-- <div class="bg-container"> -->
    <div ref="image" class="bg-partial">
      <template v-for="row in 3">
        <div v-for="col in 8" :key="row+col" class="bg-partial-icon" :class="'bg-'+row+'-'+col" />
      </template>
    </div>
    <!-- </div> -->
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  methods: {
    onClick () {
      // this.$refs.image
      // 效果：从中间向两边扩散。每个小模块，左上平移放大后渐隐
      // 步骤：
      /*
      1、分割图片：动态设置图片的大小
      2、给子图绑定动画，左上平移，放大，渐隐
      3、子图上的动画设置延时
      */
      const cols = 8
      const midCol = cols / 2
      const rows = 3
      this.$refs.image.querySelectorAll('.bg-partial-icon').forEach((el, index) => {
        const col = index % cols
        const row = (index - col) / cols
        // 中间先执行动画，上下左右为一轮
        const delay = (Math.abs(col - midCol) + row) * 500
        // 中间放最大倍数，两边放大倍数变小
        const scale = (1 - Math.abs(col - midCol) / midCol) * 4 + 1
        // 水平位移（中间向两边）
        const translateX = (col - midCol) * 50
        // 垂直位移（上移，下不移）
        const translateY = -(1 - row / rows) * 1000
        el.animate([
          {
            transform: `scale(${scale}) translate(${translateX}px, ${translateY}px)`,
            opacity: 0
          }
        ], {
          duration: 4000 - delay,
          fill: 'forwards',
          easing: 'ease',
          delay
        })
      })
    }
  }
}
</script>
<style lang="scss">
body {
  background: $--color-dark;
  color: $--color-gold-dark;
  font-size: $--font-size-base;
  line-height: 2;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  min-height: 100vh;
  section {
    width: 1170px;
    text-align: left;
  }
  h1 {
    color: $--color-white;
    font-size: $--font-size-xxl;
    line-height: 3;
  }
  h2 {
    color: $--color-gold;
    font-size: $--font-size-xl;
  }
}

.background-animation {
  .bg-container {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  $max-row: 3;
  $max-col: 8;
  $mid-col: $max-col / 2;
  .bg-partial-icon {
    position: absolute;
    display: inline-block;
    width: (100vw / $max-col);
    height: (100vh / $max-row);
    background: url('/img/bg/01.jpg');
    box-sizing: border-box;
    // transform: translate3d(-10px, 10px, 10px);
  }
  @mixin bg-row-col($row, $col) {
    $ypos: ($row - 1) * 100vh / $max-row;
    $xpos: ($col - 1) * 100vw / $max-col;
    $zindex: (9 - abs($col - 1 - $mid-col) - $row) * 10;
    background-size: 100vw 100vh;
    background-position: (-1 * $xpos) (-1 * $ypos);
    left: $xpos;
    top: $ypos;
    z-index: $zindex;
  }
  @for $row from 1 through $max-row {
    @for $col from 1 through $max-col {
      .bg-#{$row}-#{$col} {
        @include bg-row-col($row, $col);
      }
    }
  }
}
</style>
