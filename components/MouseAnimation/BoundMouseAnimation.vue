<template>
  <div ref="clickCanvas">
    <MouseAnimation
      v-for="(tipInfo, index) in tips"
      :key="tipInfo.text+index"
      :tip-info="tipInfo"
    />
  </div>
</template>

<script>
import MouseAnimation from './MouseAnimation.vue'

export default {
  name: 'BoundMouseAnimation',
  components: {
    MouseAnimation
  },
  data () {
    return {
      tips: []
    }
  },
  mounted () {
    const textMap = ['好好学习', '天天向上', '求知', '求实', '求真', '求美']
    const colorMap = ['LightGreen', 'LightSkyBlue', 'Orange', 'Cyan', 'Gold', 'Salmon']
    let i = -1
    let j = 0
    const maxId = 1000
    document.addEventListener('click', (e) => {
      i = (i + 1) % textMap.length
      j = (j + 1) % maxId
      const tipInfo = {
        text: textMap[i],
        pageX: e.pageX,
        pageY: e.pageY,
        color: colorMap[i],
        showId: j
      }
      const tips = this.tips
      if (tips.length >= textMap.length) {
        this.$set(tips, i, tipInfo)
      } else {
        tips.push(tipInfo)
      }
    })
  }
}
</script>
