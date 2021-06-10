<template>
  <canvas class="canvas" ref="animate"></canvas>
</template>

<script>
import { ref, reactive, toRefs,onMounted } from 'vue'

export default {
  props: {
    width: Number,
    height: Number
  },
  setup(props, context) {
    const animate = ref(null)
    const drawImg = (node) => {
      node.width = props.width
      node.height = props.height
      const cxt = node.getContext('2d')

      const draw = (x, y, width, opacity) => {

        cxt.beginPath()
        const color = `rgba(255,255,255,${opacity})`
        cxt.fillStyle = color;
        cxt.arc(x, y, width, 0, Math.PI * 2, true)
        cxt.closePath();
        cxt.fill();
      }
      const centerX = node.width / 2
      const centerY = node.height / 2
      draw(centerX, centerY, 5)
      let arrParticle = []
      const creatArc = (num) => {
        for (let i = 0; i < num; i++) {
          arrParticle.push([Math.random(1) * centerX + Math.random(1) * centerX, Math.random(1) * centerY + Math.random(1) * centerY, Math.random(1) * 3, Math.random(1)])
          draw(arrParticle[i][0], arrParticle[i][1], arrParticle[i][2], arrParticle[i][3])
        }
      }
      console.log(arrParticle)
      cxt.clearRect(0, 0, node.width, node.height)
      creatArc(Math.random(1) * 200)
      let speed = 0.5 //漂浮速度
      let tempArr = JSON.parse(JSON.stringify(arrParticle))
      const particleAnimate = () => {
        cxt.clearRect(0, 0, node.width, node.height)
        for (let i = 0; i < arrParticle.length; i++) {

          if (tempArr[i][0] > centerX) {
            tempArr[i][0] = tempArr[i][0] + speed
          } else {
            tempArr[i][0] = tempArr[i][0] - speed
          }

          if (tempArr[i][1] > centerY) {
            tempArr[i][1] = tempArr[i][1] + speed
          } else {
            tempArr[i][1] = tempArr[i][1] - speed
          }
           if (tempArr[i][0] > centerX * 2 - 10 || tempArr[i][0] < 10 || tempArr[i][1] > centerY * 2 - 10 || tempArr[i][1] < 10) {
          ///if (tempArr[i][0] > arrParticle[i][0]*1.3 || tempArr[i][0] < 10 || tempArr[i][1] > arrParticle[i][1]*1.3 || tempArr[i][1] < 10) {
            tempArr[i][0] = arrParticle[i][0]
            tempArr[i][1] = arrParticle[i][1]
            
           // tempArr[i] = arrParticle[arrParticle.length-i] ? JSON.parse(JSON.stringify(arrParticle[arrParticle.length-i])) : JSON.parse(JSON.stringify(arrParticle[i]))
          }

          draw(tempArr[i][0], tempArr[i][1], tempArr[i][2], tempArr[i][3])
        }

      }

      const timeLine = () => {
        setTimeout(() => {

          particleAnimate()
          timeLine()
        }, 1000 / 30)
      }
      timeLine()
    }


    onMounted(()=>{
         drawImg(animate.value)
    })


    return {

      animate
    }

  }
}
</script>

<style lang="scss" scoped>
.canvas {
    position: absolute;

    top: 0px;
    left: 0;
    z-index: 0;
  }
</style>