<template>
  <div class="container">
    <WorkExperiences />
  </div>
</template>

<script>
import WorkExperiences from '@/components/index/WorkExperiences'
export default {
  components: {
    WorkExperiences
  },
  async asyncData ({ $axios }) {
    const _asyncData2 = {}
    await new Promise((resolve, reject) => {
      _asyncData2.username = 'John Smith'
      resolve()
    })
    return {
      _asyncData2
    }
  },
  data () {
    return {
      other: '1'
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
</style>
