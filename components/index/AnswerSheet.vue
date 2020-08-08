<template>
  <section class="answer-sheet">
    <h2>玖南酱制造计算机技能答题卡</h2>
    <div class="as-content">
      <WayPointItem
        class="as-person"
        animation="fly-from-left"
        report="skills"
      >
        <table class="as-person-l">
          <tfoot>
            <tr>
              <td colspan="2">
                <h4 class="title">
                  填涂要求
                </h4>
                <div>
                  <p>正确填涂方式</p>
                  <div class="as-draw-correct" />
                  <p>错误填涂方式</p>
                  <p>
                    <span v-for="(ch, index) in 'ABCD'" :key="index" :class="'as-draw-error'+(index+1)">
                      [{{ ch }}]
                    </span>
                  </p>
                </div>
              </td>
            </tr>
          </tfoot>
          <tbody>
            <tr>
              <th>学校 :</th>
              <td class="cursive">
                福建农林大学
              </td>
            </tr>
            <tr>
              <th>姓名 :</th>
              <td class="cursive">
                玖南酱
              </td>
            </tr>
          </tbody>
        </table>
        <div class="as-attention">
          <h3>注意事项</h3>
          <ol>
            <li>答题前，考生务必在答题卡上用黑色签字笔填写自己的准考证号、姓名和学校。</li>
            <li>保证答题卡上的清洁和完整。不得折叠。</li>
            <li>选择题必须涂得好看漂亮哦。</li>
          </ol>
        </div>
        <div class="as-person-r">
          <h3>准考证号</h3>
          <p class="as-person-number">
            <span v-for="(num, index) in cardNumber" :key="index" class="cursive">{{ num }}</span>
          </p>
          <div class="as-person-icons">
            <p v-for="(cardN, index) in cardNumber" :key="index" class="as-person-card">
              <span v-for="num in 10" :key="num" :class="{ on: cardN == num - 1 }">
                [{{ num - 1 }}]
              </span>
            </p>
          </div>
        </div>
      </WayPointItem>
      <p class="as-middle-title">
        <span>Part III</span>
        <span>Just Follow Your Bent</span>
      </p>
      <WayPointItem
        animation="fly-from-bottom"
        :delay="0.5"
        class="as-skills"
      >
        <dl v-for="(percent, skill, index) in skills" :key="skill">
          <dt>{{ index + 1 }}.{{ skill }}</dt>
          <dd>
            <span v-for="i in 10" :key="i" class="as-skills-icon" :class="{ on: i * 10 <= percent }">
              {{ i * 10 }}
            </span>
          </dd>
        </dl>
      </WayPointItem>
    </div>
    <WayPointItem
      animation="stamp"
      :delay="1"
      class="icon-standard"
    >
      合格
    </WayPointItem>
  </section>
</template>

<script>
import { Time } from '@/directives/time.js'
import WayPointItem from '@/components/WayPointItem'
export default {
  components: {
    WayPointItem
  },
  data () {
    return {
      skills: {
        HTML: 70,
        CSS: 80,
        JS: 80,
        Express: 60,
        Nodejs: 50,
        Vue: 70,
        VueFamily: 60,
        SCSS: 80,
        Ruby: 70,
        Webpack: 50,
        Git: 60
      },
      cardNumber: Time.getCardNumber(),
      wpNavName: 'skills'
    }
  }
}
</script>

<style lang="scss">
$color-warning: #fc5757;
$color-base: #535B53;
$border-base: 1px solid $color-warning;
$border-width-bold: .08rem;
$border-bold: $border-width-bold dashed #535B53;
$color-pencil-background: rgba(0,0,0,.5);
$error-content-list: '\2713' '\/' '\2665' '|';

.answer-sheet {
  position: relative;
  width: 1170px;
  @media screen and (max-width: 1199px) {
    width: auto;
  }
  line-height: 2;
  margin: 0 auto;
  background: white;
  color: $color-base;
  box-shadow: 1em 1em 1em rgba(0,0,0,.5);
  .cursive {
    font-family: '华文行楷', '楷体';
  }
  .icon-standard {
    position: absolute;
    right: 1em;
    bottom: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4em;
    width: 4em;
    font-size: $--font-size-xl;
    color: red;
    padding: .5em;
    border: .3em solid;
    border-radius: 50%;
    transform: rotate(-45deg);
  }
  h2, h3, th {
    letter-spacing: .3em;
    text-align: center;
  }
  h2 {
    color: $color-warning !important;
  }

  .as-draw-correct {
    height: $border-width-bold;
    width: 2em;
    background: $color-base;
    margin: .5em auto;
  }
  .as-draw-error {
    position: relative;
    display: inline-block;
    color: $color-warning;
    font-size: $--font-size-lg;
    &::after {
      @include pseudoEl;
      color: $color-base;
      white-space: pre;
      z-index: 1;
    }
  }
  @for $i from 1 through 4 {
    .as-draw-error#{$i} {
      @extend .as-draw-error;
      &::after {
        content: nth($error-content-list, $i);
      }
    }
  }
  .as-content {
    padding: 1em;
    border-right: $border-bold;
    border-top: $border-bold;
  }
  .as-person {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    text-align: left;
    box-sizing: border-box;
    &::before {
      @include pseudoEl;
      top: -.3em;
      border-top: $border-base {
        width: 2px;
      }
    }
    .as-person-l {
      flex: 0 0 30%;
      border-collapse: collapse;
      tr {
        border: $border-base;
        td, th {
          padding-left: 1em;
        }
        th {
          width: 5em;
          letter-spacing: .3em;
        }
      }
      .title {
        display: inline-block;
        width: 2em;
        border-right: $border-base;
        padding: 2em 1em 2em 0;
        & + div {
          display: inline-block;
          text-align: center;
          width: calc(100% - 3em);
          font-size: $--font-size-sm;
        }
      }
    }
    .as-person-r {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      flex: 0 0 50%;
      border: $border-base;
      line-height: 1;
      text-align: center;
      min-width: 2.54rem;
      overflow: hidden;
      h3, .as-person-number {
        line-height: 1.5;
      }
      .as-person-number {
        display: flex;
        justify-content: stretch;
        border-top: $border-base;
        border-bottom: $border-base;
        span {
          flex: 1 0 auto;
          border-right: $border-base;
          &:last-child {
            border-right: 0;
          }
        }
      }
      .as-person-icons {
        display: flex;
        flex-flow: row wrap;
        flex: 1 0 auto;
        color: $color-warning;
        .as-person-card {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          flex: 1 0 auto;
          font-size: $--font-size-xs;
          &:nth-child(odd) {
            background: mix($color-warning, $--color-white, 50%);
            border-left: 1px solid;
            border-right: 1px solid;
          }
          &:first-child {
            border-left: 0;
          }
          span {
            flex: 1 0 auto;
            padding: 3px;
            &.on {
              background: $color-pencil-background content-box;
            }
          }
        }
      }
    }
    .as-attention {
      position: relative;
      flex: 0 0 20%;
      font-size: $--font-size-xs;
      color: $color-warning;
      margin-top: .5em;
      padding: 1.5em 1em 0 2em;
      h3 {
        font-size: $--font-size-lg;
      }
      &::before {
        @include pseudoEl;
        width: calc(100% - 4em);
        left: 2em;
        border-top: $border-bold;
      }
    }
  }
  .as-middle-title {
    font-weight: bold;
    text-align: center;
    background: $color-warning;
    margin: 1em 0;
    span:first-child {
      float: left;
      margin-left: 1em;
    }
  }
  .as-skills {
    position: relative;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 1em;
    border: $border-base;
    text-align: center;
    &::before,
    &::after {
      @include pseudoEl;
      top: - $border-width-bold;
      bottom: - $border-width-bold;
      width: 1em;
      border-top: $border-bold;
      border-bottom: $border-bold;
    }
    &::after {
      left: auto;
    }
    dl {
      flex: 1 0 auto;
      padding: .5em;
      margin: 2px;
      border: $border-base {
        style: dashed;
      }
      dt {
        font-weight: bold;
      }
    }
    .as-skills-icon {
      display: inline-block;
      height: 2em;
      width: 2em;
      text-align: center;
      border: $border-base {
        right: 0;
      }
      &:last-child {
        border-right: $border-base;
      }
      &.on {
        background: $color-pencil-background;
      }
    }
  }
  @media screen and (max-width: 771px) {
    .as-person {
      flex-flow: column nowrap;
      .as-person-l,
      .as-person-r,
      .as-attention {
        flex: 1 0 auto;
      }
    }
  }
  @media screen and (max-width: 365px) {
    .as-skills .as-skills-icon{
      height: auto;
      width: auto;
      padding: .1em;
    }
  }
}
</style>
