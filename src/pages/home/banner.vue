<template>
  <div class="banner   "  :style="'height:'+height+'px'">
    <div class="warp">
      <div class="layout">
        <div class="head"><img src="../../assets/images/avatar.jpg" /></div>
        <p class="fz30 bold">LOUIS</p>
        <p class="fz18">尺有所短;寸有所长。物有所不足;智有所不明。</p>
      </div>
    </div>

    <Canvas :width="width" :height="height" />
  </div>
</template>

<script>

import { ref, reactive, onMounted, onUpdated, onUnmounted, toRefs } from 'vue'
import Canvas from './canvas'


export default {
  components: {
    Canvas
  },
  setup() {
    const height = document.documentElement.clientHeight
    const width = document.body.clientWidth
    const state = reactive({ count: '2321', height: height, width: width })


    // console.log(0, state)
    onMounted(() => {
    
    })
    onUpdated(() => {
      console.log('updated!', state.count)
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })

    return {
      ...toRefs(state),

    }
  }

}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;

  min-height: 500px;
  background: url("../../assets/images/top_bg.webp");
  background-size: cover;
  position: relative;
  overflow: hidden;
  .warp {
    margin-top: 60px;
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;
    .layout {
      margin-top: -60px;
      .head {
        width: 150px;
        height: 150px;
        border: 5px solid #fff;
        border-radius: 50%;
        margin: auto;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      p {
        color: #fff;
        text-align: center;
        margin-top: 30px;
        &:last-child {
          margin-top: 10px;
          color: #d3d3d3;
        }
      }
    }
  }
}
</style>