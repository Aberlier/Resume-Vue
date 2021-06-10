<template>
  <div class="instroduction">
    <div class="container">
      <div class="title fz40 ">
        <span>个人简介</span>
      </div>
      <div class="warp">
        <div class="people">

          <Swiper ref="mySwiper" 
            :pagination="{ clickable: true }" 
            :autoplay="{
                delay: 3000,//1秒切换一次
                disableOnInteraction:false
            }"
          >
            <SwiperSlide class="img-list" v-for="( item,index ) in swiperData" :key="index" v-slot="{ isDuplicate }">
              <img :src="item" />
            </SwiperSlide>

          </Swiper>
        </div>
        <div class="info">
          <h2 class="fz22">基本信息和自我介绍</h2>
          <h3 class="fz15">日本漫画《航海王》及其衍生作品中的男主角。外号<span class="color1">“草帽”</span>路飞，是草帽一伙、草帽大船团船长，极恶的<span class="color1">世代之一</span>。橡胶果实能力者，悬赏金15亿贝里。梦想是找到传说中的One Piece，成为海贼王。</h3>
          <p class="fz15 color2">路飞是超人系“橡胶果实”能力者，全身拥有橡胶体质，在战斗中路飞利用发挥了这一体质，并在不断的战斗中升级自己的招式。能够将身体的任何部位依自己的意思伸长和反弹，使普通的打击具有更强的威力，身体不会因为反作用力而受到伤害。变成橡胶的身躯具有绝佳的弹性与延展性。能够伸缩的距离跟能力者本身的实力成正比。 大多数的物理攻击（除了霸气）在打中橡胶人身体时会弹回去或是完全无效，小型的子弹或是普通的炮弹射中身体也能弹回去。此外，橡胶的身体不能导电，因此雷电的招式对他无效</p>
          <ul class="fz15">
            <li> <span>中文名：</span><span class="color2">蒙奇·D·路飞</span></li>
            <li> <span>外文名：</span><span class="color2">モンキー・D・ルフィ</span></li>
            <li> <span>年龄：</span><span class="color2">18岁</span></li>
            <li> <span>现居城市：</span><span class="color2">冲绳县</span></li>
            <li> <span>故乡：</span><span class="color2">东海-哥亚王国-风车村</span></li>
            <li> <span>毕业学校：</span><span class="color2">冲绳县</span></li>
            <li> <span>邮箱：</span><span class="color2">xxxxx@xxx.com</span></li>
            <li> <span>手机：</span><span class="color2">1888888888</span></li>
          </ul>
          <div class="color2 icon-list">
            <i class="iconfont  iconqq fz25"></i>
            <i class="iconfont  iconweixin"></i>
            <i class="iconfont  iconweibo"></i>
            <i class="iconfont  iconfacebook"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, reactive, toRefs } from 'vue'


import SwiperCore, { Pagination, Autoplay } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';




SwiperCore.use([Pagination, Autoplay]);
// import 'swiper/css'
export default {
  components: {
    Swiper, SwiperSlide
  },
  setup() {
    //  console.log(Swiper)
    const state = reactive({
      isDuplicate: true,
      swiperData: [
        require('../../assets/images/people/1.jpg'),
        require('../../assets/images/people/2.jpg'),
        require('../../assets/images/people/3.jpg'),
        require('../../assets/images/people/4.jpg')
      ]
    })



    return {
      ...toRefs(state)
    }
  },



}
</script>

<style lang="scss" scoped>
.instroduction {
  margin-bottom: 100px;
  overflow: hidden;
  .title {
    margin-top: 40px;
    span {
      position: relative;
      &::after {
        display: block;
        content: "";
        background: #f7eccb;
        width: 90%;
        left: 4%;
        position: absolute;
        height: 4px;
        bottom: 0;
      }
    }
  }
  .warp {
    margin-top: 30px;
    .people {
      width: 30%;
      overflow: hidden;
      float: left;
      height: 510px;
      .img-list {
        height: 510px;
        overflow: hidden;
      }
      img {
        width: 100%;
        transition: 0.5s;
        transform: scale(1);

        object-fit: cover;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .info {
      float: left;
      width: 68%;
      margin-left: 2%;
      p {
        margin-top: 20px;
      }
      ul {
        margin-top: 20px;
        overflow: hidden;
        li {
          float: left;
          border-bottom: 1px solid #e9e9e9;
          width: 48%;
          line-height: 50px;
          &:nth-child(2n) {
            margin-left: 4%;
          }
        }
      }
      .icon-list {
        margin-top: 20px;
        i {
          margin-right: 30px;
          cursor: pointer;
          transition: 0.2s;
          &:first-child {
            position: relative;
            top: -2px;
          }
          &:hover {
            color: #febd01;
          }
        }
      }
    }
  }
}
</style>