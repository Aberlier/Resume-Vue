<template>
  <div class="experience">
    <div class="container">
      <div class="topic">
        <h1 class="fz40"><span>求学和经历</span></h1>
        <p class="color2 fz15">《航海王》是日本漫画家尾田荣一郎作画的少年漫画作品，于1997年7月22日在集英社《周刊少年Jump》开始连载。<br>改编的电视动画《航海王》于1999年10月20日起在富士电视台首播。</p>
      </div>
    </div>
    <div class="container info-wrap">
      <div class="layout">
        <div class="md-5">
          <div class="cont">
            <div class="title fz22 "><span>求学经历</span></div>
            <ul class="list">
              <li class="item" v-for="(item ,index) in learnData" :key="index">
                <div class="year color1 fz14">
                  {{item.year}}
                </div>
                <div class="info">
                  <div class="icon-box">
                    <i></i>
                    <i></i>
                  </div>
                  <h2>{{item.title}}</h2>
                  <p class="color2 mg10">{{item.desc}}</p>
                  <p class="color2 fz14">{{item.info}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="md-5">
          <div class="cont">
            <div class="title fz22 "><span>工作经历</span></div>
            <ul class="list">
              <li class="item" v-for="(item ,index) in learnData" :key="index">
                <div class="year color1 fz14">
                  {{item.year}}
                </div>
                <div class="info">
                  <div class="icon-box">
                    <i></i>
                    <i></i>
                  </div>
                  <h2>{{item.title}}</h2>
                  <p class="color2 mg10">{{item.desc}}</p>
                  <p class="color2 fz14">{{item.info}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup() {
    const state = reactive({
      learnData: [
        {
          year: '2011年',
          title: '阿拉巴斯坦篇',
          desc: '双子岬篇',
          info: '进入伟大航道后的第一站是双子岬。在双子岬，草帽一伙与等待伦巴海贼团的鲸鱼拉布以及罗杰海贼团的船医库洛卡斯相识，娜美获得了记录指针，之后，草帽一伙与Mr.9、Miss Wednesday（奈菲鲁塔丽·薇薇）同行'
        }, {
          year: '2010年',
          title: '空岛篇',
          desc: '魔谷镇篇',
          info: '在魔谷镇，发誓不打架的路飞受到了贝拉米的等人的嘲笑和侮辱，然而他并没有还击 [140]  。后来贝拉米为了掠夺财宝而打伤了路飞的朋友文布兰·库力克，为了报仇，路飞找到贝拉米并一拳将其击败 [141]  。后来猿山联合军帮助草帽一伙改造了梅丽号，路飞等人成功登陆空岛神之国'
        }, {
          year: '2009年',
          title: '司法岛事件篇',
          desc: '水之都前篇',
          info: '路飞一行人来到水之都，打算利用空岛得到的黄金翻修严重受损的梅丽号，却得知梅丽号已经无法继续航行。为了保全船员的性命，路飞最终决定舍弃旧船，为此引发了和乌索普之间的争执。打败乌索普后，路飞默默地向乌索普表示感谢，失去了梅丽号和乌索普的路飞终于忍不住流下泪来'
        }, {
          year: '2008年',
          title: '恐怖三桅帆船篇',
          desc: '威士忌山峰和小花园篇',
          info: '路飞一伙人和呆在“幽灵船”的布鲁克相遇，路飞立刻邀请布鲁克成为伙伴，两人非常合得来，路飞还同意帮他夺回影子 [149]  。在幽灵岛，路飞的影子被月光·莫利亚夺走并放入魔人奥兹体内，之后路飞与岛上被夺走影子的人群相遇，大家将众多影子装在路飞体内创造了梦魇路飞。梦魇路飞将奥兹重创后，路飞变回普通形态与草帽一伙的大伙一同打败了奥兹和莫利亚。'
        }, {
          year: '2007年',
          title: '香波地群岛篇',
          desc: '磁鼓王国篇',
          info: '路飞一伙人为了给船只镀膜前往鱼人岛而来到了香波地群岛，和凯米，帕帕古，夏琪相识并成为朋友。之后，路飞因为朋友小八被天龙人攻击，而愤怒地重伤天龙人，引发天龙人事件 [32]  。随后西尔巴兹·雷利出现，赞扬路飞很适合那顶草帽。路飞等三大船长出去对阵海军，带领各自的海贼团逃跑。'
        },
      ]
    })

    return {
      ...toRefs(state)
    }
  }

}
</script>

<style lang="scss" scoped>
.experience {
  background: #f5f8fd;
  margin-bottom: 100px;
  overflow: hidden;
  padding: 100px 0;
  .topic {
    text-align: center;

    overflow: hidden;
    h1 {
      font-weight: normal;
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
  }
  .layout {
    margin: 0 -10px;
    overflow: hidden;
  }
  .info-wrap {
    margin-top: 50px;

    .cont {
      margin: 0 10px;
      .title {
        span {
          border-bottom: 1px solid #febd01;
          padding-bottom: 2px;
        }
      }
      .list {
        background: #fff;
        margin: 20px auto;
        overflow: hidden;
        .item {
          margin: 20px 0;
          overflow: hidden;
          .year {
            float: left;
            width: 21%;
            text-align: center;
            position: relative;
          }
          .info {
            float: left;
            width: 71%;
            padding-left: 5%;
            position: relative;
            h2 {
              margin: 0;
            }

            .mg10 {
              margin: 5px 0 10px;
            }

            .icon-box {
              position: absolute;
              left: 0%;
              top: 0;
              height: 100%;
              i {
                display: block;
                &:nth-child(1) {
                  width: 10px;
                  height: 10px;
                  background: #febd01;
                  border: 2px solid #000;
                  border-radius: 50%;
                }
                &:nth-child(2) {
                  width: 1px;
                  height: 100%;
                  background: #ddd;
                  margin-left: 6px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>