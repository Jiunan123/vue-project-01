<template>
  <div class="container">
    <Expectation />
  </div>
</template>

<script>
import Expectation from '@/components/index/Expectation'
export default {
  components: {
    Expectation
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
  // &:nth-child(even) {
  //   background: $--color-light;
  // }
}
</style>
