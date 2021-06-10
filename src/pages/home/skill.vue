<template>
  <div class="skill ">
    <div class="container">
      <div class="layout">
        <div class="skill-warp md-5">
          <div class="cont">
            <div class="title fz40"><span>专业技能</span></div>
            <p class="color2 mg20">路飞是超人系“橡胶果实”能力者，全身拥有橡胶体质，在战斗中路飞利用发挥了这一体质，并在不断的战斗中升级自己的招式。</p>
            <ul class="skil-box">
              <li v-for="(item,i) in skillData" :key="i">
                <p class="fz15 bold ">{{item.title}}<span>{{item.percentage}}%</span></p>
                <div class="percentage">
                  <i :style="'width:'+item.percentage+'%'"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="skill-img md-5">
          <div class="cont">
            <img src="../../assets/images/skill-img.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive,toRefs} from 'vue'
export default {
 setup(){
     const state = reactive({
         skillData:[
             {title:'橡胶手枪',percentage:'100'},
             {title:'橡胶猎枪',percentage:'90'},
             {title:'橡胶火箭',percentage:'70'},
             {title:'橡胶火箭炮',percentage:'66'},
             {title:'橡胶答谢礼炮',percentage:'88'},
             {title:'橡胶蛇枪',percentage:'20'},
             {title:'橡胶答谢礼炮',percentage:'10'},
         ]
     })

     return {
         ...toRefs(state)
     }
 }
}
</script>

<style lang="scss" scoped>
.skill {
    margin-bottom: 100px;
  .container {
    .layout {
      margin: 0 -10px;
      .cont {
        margin: 0 10px;
      }
    }
    overflow: hidden;
    .skill-warp {
      .title {
        span {
          position: relative;
          display: inline-block;
          &::after {
            content: "";
            display: block;
            width: 90%;
            left: 5%;
            height: 4px;
            background: #f7eccb;
            position: absolute;
            bottom: 0px;
          }
        }
      }
      .mg20 {
        margin: 20px 0;
      }
      .skil-box{
          li{
              margin-top: 20px;
              p{
                  span{
                      float:right;
                  }
              }
              .percentage{
                  width: 100%;
                  height: 6px;
                  margin-top: 10px;
                  background: #eee;
                  i{
                      display: block;
                      height: 100%;
                      background: #febd01;
                      width: 0%;
                      transition: 0.3s;
                  }
              }
          }
      }
    }
    .skill-img {
      img {
        width: 100%;
      }
    }
  }
}
</style>