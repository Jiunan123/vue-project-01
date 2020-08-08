<template>
  <section class="expectation">
    <h1>期望职位</h1>
    <div class="box-front">
      <h2 class="triangle">
        严肃模式
      </h2>
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
      <h2 class="triangle">
        娱乐模式
      </h2>
      <div
        v-for="(alt, index) in ['升职加薪 ?', '找到高富帅 ?', '当上总经理 ?', '出任 C E O ?', '他乡遇故知 ?', '走向人生巅峰 ?', '乖乖搬砖吧 !']"
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

@media screen and (max-width: 1169px){
  section.expectation {
    h1 {
      text-align: center;
    }
    $background: #EFEFEF;
    letter-spacing: .2em;
    .box-front {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      font-size: $--font-size-md;
      margin: 1em;
      padding: 2em;
      border: 1px solid #d0bb79;
      border-radius: 1em;
      background: $background;
      dd {
        color: $--color-black;
      }
      @media screen and (max-width: 570px) {
        flex-flow: column;
        text-align: center;
      }
    }
    .box-back {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      border: 1px solid #d0bb79;
      border-radius: 1em;
      margin: 1em;
      padding: 2em;
      background: $background;
      overflow: hidden;
      h2 {
        text-align: center;
        flex: 0 1 100%;
      }
      .border-box {
        position: relative;
        background: $--color-white;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        transition: all .6s;
        height: calc(2rem + 4px);
        width: 3em;
        box-sizing: content-box;
        .img {
          position: absolute;
          border: 2px solid $--color-white;
          top: 0;
          left: 2em;
          img {
            vertical-align: middle;
            width: 2rem;
            height: 2rem;
          }
        }
        .info {
          order: -1;
          writing-mode: vertical-lr;
          text-align: center;
          text-indent: 1em;
        }
        &:hover,
        &:focus {
          & ~ .border-box {
            transform: translateX(2rem);
          }
        }
      }
      @media screen and (max-width: 570px) {
        height: 5.8rem;
        flex-flow: column;
        h2 {
          flex: 0 0 auto;
        }
        .border-box {
          height: 3em;
          width: calc(2rem + 4px);
          .img {
            top: 2em;
            left: 0;
          }
          &:hover,
          &:focus {
            & ~ .border-box {
              transform: translateY(2rem);
            }
          }
          .info {
            writing-mode: horizontal-tb;
          }
        }
      }
    }
  }
}

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
    transform-style: preserve-3d;
    animation: run 10s infinite;
    $box-side-length: 3.2rem;
    .triangle {
      position: absolute;
      left: 3.4rem;
      top: -.1rem;
      height: $box-side-length/2;
      width: $box-side-length;
      font-size: inherit;
      text-align: center;
      color: #2F4486;
      background: linear-gradient($--color-gold, $--color-white);
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

        $points: (2, 1), (3, 2), (0, 1), (4, 1), (3, 0), (1, 0), (1, 2);
        $background-color: purple red cyan rgb(255,128,0) blue green yellow;
        $i: 1;
        @each $x, $y in $points {
          &:nth-last-child(#{$i}) {
            left: $x * 1.7rem;
            bottom: $y * 1.7rem;
            .info {
              background: mix(nth($background-color, $i), $--color-milk, 50%);
            }
          }
          $i: $i + 1;
        }
        .info {
          @include box-center;
          height: 100%;
          width: 100%;
          opacity: .85;
          color: $--color-black;
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
      height: 100%;
      width: 85%;
      font-size: $--font-size-xxl;
      clip-path: $clip-path;
      background: $--color-gold;
      @include box-center;
      flex-flow: row wrap;
      align-content: center;
      transform: translateZ(100px);
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
        color: $--color-white;
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
