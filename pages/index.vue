<template>
  <div>
    <div class="container container--main">
      <MainBox />
    </div>
    <div class="container container--personal-strengths">
      <PersonalStrengths />
    </div>
    <div class="container container--expectation">
      <Expectation />
    </div>
    <div class="container container--skills">
      <AnswerSheet />
    </div>
    <div class="container container--work-experiences">
      <section>
        <h1>工作经历</h1>
        <h2>秋天来了，冬天还会远吗</h2>
        <p>不知道从多久起，仿佛一场紧张的拼搏终于渐渐地透出了分晓，田野从它宽阔的胸膛里透过来一缕悠悠的气息，斜坡上和坝子上有如水一般的清明在散开，四下里的树木和庄稼也开始在微风里摇曳，树叶变得从容而宽余。露水回来了，在清晨和傍晚润湿了田埂，悄悄地挂上田间。露岚也来到了坝子上，静静地浮着，不再回到山谷里去。阳光虽然依旧明亮，却不再痛炙人的脊梁，变得宽怀、清澄，仿佛它终于乏力了，不能蒸融田野了，也就和田野和解了似的；秋天来了！</p>
      </section>
    </div>
    <div class="container container--project-experiences">
      <section>
        <h1>项目经验</h1>
        <h2>秋天来了，冬天还会远吗</h2>
        <p>不知道从多久起，仿佛一场紧张的拼搏终于渐渐地透出了分晓，田野从它宽阔的胸膛里透过来一缕悠悠的气息，斜坡上和坝子上有如水一般的清明在散开，四下里的树木和庄稼也开始在微风里摇曳，树叶变得从容而宽余。露水回来了，在清晨和傍晚润湿了田埂，悄悄地挂上田间。露岚也来到了坝子上，静静地浮着，不再回到山谷里去。阳光虽然依旧明亮，却不再痛炙人的脊梁，变得宽怀、清澄，仿佛它终于乏力了，不能蒸融田野了，也就和田野和解了似的；秋天来了！</p>
      </section>
    </div>
    <div class="container container--education-experiences">
      <section>
        <h1>教育经历</h1>
        <h2>秋天来了，冬天还会远吗</h2>
        <p>不知道从多久起，仿佛一场紧张的拼搏终于渐渐地透出了分晓，田野从它宽阔的胸膛里透过来一缕悠悠的气息，斜坡上和坝子上有如水一般的清明在散开，四下里的树木和庄稼也开始在微风里摇曳，树叶变得从容而宽余。露水回来了，在清晨和傍晚润湿了田埂，悄悄地挂上田间。露岚也来到了坝子上，静静地浮着，不再回到山谷里去。阳光虽然依旧明亮，却不再痛炙人的脊梁，变得宽怀、清澄，仿佛它终于乏力了，不能蒸融田野了，也就和田野和解了似的；秋天来了！</p>
      </section>
    </div>
    <div class="container container--project--show">
      <section>
        <h1>其他作品</h1>
        <h2>秋天来了，冬天还会远吗</h2>
        <p>不知道从多久起，仿佛一场紧张的拼搏终于渐渐地透出了分晓，田野从它宽阔的胸膛里透过来一缕悠悠的气息，斜坡上和坝子上有如水一般的清明在散开，四下里的树木和庄稼也开始在微风里摇曳，树叶变得从容而宽余。露水回来了，在清晨和傍晚润湿了田埂，悄悄地挂上田间。露岚也来到了坝子上，静静地浮着，不再回到山谷里去。阳光虽然依旧明亮，却不再痛炙人的脊梁，变得宽怀、清澄，仿佛它终于乏力了，不能蒸融田野了，也就和田野和解了似的；秋天来了！</p>
      </section>
    </div>
    <NavStep />
  </div>
</template>

<script>
import MainBox from '@/components/index/MainBox'
import NavStep from '@/components/index/NavStep'
import PersonalStrengths from '@/components/index/PersonalStrengths'
import AnswerSheet from '@/components/index/AnswerSheet'
import Expectation from '@/components/index/Expectation'

import { mapMutations } from 'vuex'
export default {
  components: {
    MainBox,
    NavStep,
    PersonalStrengths,
    AnswerSheet,
    Expectation
  },
  data () {
    return {
      show: true,
      items: []
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    const itemTitles = ['首页展示', '自我介绍', '期望职位', '掌握技能', '工作经历', '项目经验', '教育经历', '其他作品']
    // 要求统一格式：container .container--namexxx
    // eg：container .container--main
    const containerList = document.querySelectorAll('.container[class*="container--"]')
    const items = {}
    containerList.forEach(($container, index) => {
      const name = $container.classList[1].substring(11)
      items[name] = {
        name,
        id: index,
        title: itemTitles[index]
      }
    })
    this.setNavInfos(items)
  },
  methods: {
    onClick () {
      this.show = false
    },
    ...mapMutations(['setNavInfos'])
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

  &.container--main {
    background: #212529 url(/img/bg01.gif) repeat;
  }
  &:nth-child(even) {
    background: $--color-light;
  }
  // &.container--personal-strengths,
  // &.container--expectation,
  // &.container--skills,
  // &.container--work-experiences,
  // &.container--project-experiences,
  // &.container--education-experiences,
  // &.container--project--show {
  // }
}
</style>
