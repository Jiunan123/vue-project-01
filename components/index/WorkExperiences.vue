<template>
  <section>
    <h1>工作经历</h1>
    <ol>
      <li v-for="(msg, index) in msgArr" :key="index">
        <dl>
          <dt>所属公司</dt>
          <dd>{{ msg.company }}</dd>
          <dt>在职时间</dt>
          <dd>{{ msg.startTime }} ~ {{ msg.endTime }}</dd>
          <dt>职业类型</dt>
          <dd>{{ msg.position }}</dd>
          <dt>工作内容</dt>
          <dd v-for="(item, contentIndex) in msg.content" :key="contentIndex">
            {{ item }}
          </dd>
        </dl>
      </li>
    </ol>
  </section>
</template>

<script>
import msgDataArr from '@/assets/js/work-experiences.js'
export default {
  data () {
    return {
      msgArr: msgDataArr
    }
  }
}
</script>

<style lang="scss">

</style>
