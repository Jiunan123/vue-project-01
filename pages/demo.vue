<template>
  <div class="nav-step">
    <client-only>
      <vue-particles
        color="#ffc107"
        :particle-opacity="0.7"
        :particles-number="80"
        shape-type="circle"
        :particle-size="4"
        lines-color="#ffc107"
        :lines-width="1"
        :line-linked="true"
        :line-opacity="0.4"
        :lines-distance="150"
        :move-speed="3"
        :hover-effect="true"
        hover-mode="grab"
        :click-effect="true"
        click-mode="push"
      />
    </client-only>
  </div>
</template>

<script>

export default {}
</script>

<style lang='scss'>
.nav-step {
  text-align: center;
  background: url(/img/bg01.gif)
  // float: right;
}
</style>
