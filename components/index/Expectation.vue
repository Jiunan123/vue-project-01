<template>
  <section class="expectation">
    <h1>期望职位</h1>
    <div class="box-front">
      <p class="triangle">
        严肃模式
      </p>
      <dl>
        <dt>面试岗位</dt>
        <dd>前端开发工程师</dd>
      </dl>
      <dl>
        <dt>薪资要求</dt>
        <dd>面议</dd>
      </dl>
      <dl>
        <dt>行业</dt>
        <dd>不限</dd>
      </dl>
      <dl>
        <dt>所在城市</dt>
        <dd>厦门</dd>
      </dl>
    </div>
    <div class="box-back">
      <p class="triangle">
        娱乐模式
      </p>
      <div
        v-for="(alt, index) in ['升职加薪?', '找到高富帅?', '当上总经理?', '乖乖搬砖吧!', '出任CEO?', '走向人生巅峰?', '他乡遇故知?']"
        :key="index"
        class="border-box"
      >
        <div class="img">
          <img :src="'/img/expectation/0'+(index+1)+'.jpg'" width="420" height="420" :alt="alt">
        </div>
        <div class="info">
          <p>{{ alt }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@mixin box-center {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

// section.expectation {
// }

@media screen and (min-width: 1170px) {
  @keyframes run {
    0% {
      transform: rotateY(0);
    }
    10% {
      transform: rotateY(180deg);
    }
  }
  section.expectation {
    h1 {
      @include invisible;
    }
    position: relative;
    height: 6.6rem;
    width: 10rem;
    transform-style: preserve-3d;
    animation: run 10s infinite;
    $box-side-length: 3.2rem;
    h1 {
      visibility: hidden;
    }
    .triangle {
      position: absolute;
      left: 3.4rem;
      top: -.1rem;
      height: $box-side-length/2;
      width: $box-side-length;
      font-size: inherit;
      font-family: inherit;
      font-weight: bold;
      text-align: center;
      color: #2F4486;
      background: linear-gradient($--color-gold, $--color-white);
      line-height: inherit;
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
    .box-back {
      $clip-path-rhombus: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      font-family: '华文行楷', $--font-famliy-custom-zh;
      font-size: $--font-size-xxxl;
      line-height: 2;
      transform: translateZ(-100px) rotateY(180deg);
      .border-box {
        @include box-center;
        position: absolute;
        height: $box-side-length;
        width: $box-side-length;
        transition: all .6s;
        clip-path: $clip-path-rhombus;

        $points: (0, 1), (1, 2), (1, 0), (2, 1), (3, 2), (3, 0), (4, 1);
        $background-color: purple red cyan rgb(255,128,0) blue green yellow;
        $i: 1;
        @each $x, $y in $points {
          &:nth-last-child(#{$i}) {
            left: $x * 1.7rem;
            bottom: $y * 1.7rem;
            .info {
              background: mix(nth($background-color, $i), rgb(255,251,240), 50%);
            }
          }
          $i: $i + 1;
        }
        .info {
          @include box-center;
          height: 100%;
          width: 100%;
          opacity: .85;
          color: black;
        }
        .img {
          position: absolute;
          height: 3rem;
          width: 3rem;
          background: $--color-gold;
          clip-path: $clip-path-rhombus;
          z-index: 0;
          img {
            max-width: 100%;
            max-height: 100%;
          }
        }
        &:hover {
          transform: scale(1.4);
          clip-path: none;
          z-index: 1;
          .img {
            clip-path: none;
            z-index: 1;
          }
        }
      }
    }
    .box-front {
      $clip-path: polygon(33% 0, 66% 0, 100% 50%, 66% 100%, 33% 100%, 0 50%);
      position: absolute;
      left: 15%;
      z-index: 2;
      height: 100%;
      width: 85%;
      font-size: $--font-size-xxl;
      clip-path: $clip-path;
      background: $--color-gold;
      @include box-center;
      flex-flow: row wrap;
      align-content: center;
      transform: translateZ(100px);
      opacity: .98;
      &:before {
        content: ' ';
        position: absolute;
        left: .05rem;
        top: .05rem;
        height: calc(100% - .1rem);
        width: calc(100% - .1rem);
        clip-path: $clip-path;
        background: $--color-dark;
      }
      dl {
        position: relative;
        flex: 1 0 50%;
        color: white;
        border: 1px solid $--color-gold;
        text-align: left;
        padding: 2em;
        font-size: $--font-size-lg;
        &:nth-child(even) {
          text-align: right;
        }
        dt {
          font-weight: bold;
        }
        dd {
          color: $--color-gold;
        }
      }
    }
  }
}
</style>
