<template>
  <header class="header" :class="{'fiexd':isfiexd}" ref="header">
    <div class="container">
      <div class="layout">
        <div class="logo bold fz20">LOUIS</div>
        <nav>
          <ul>
            <li><a href="#">网站首页</a></li>
            <li><a href="#">个人简介</a></li>
            <li><a href="#">求学和工作</a></li>
            <li><a href="#">专业技能</a></li>
            <li><a href="#">服务项目</a></li>
            <li><a href="#">精选作品</a></li>
            <li><a href="#">联系我</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from 'vue'
export default {
  name: 'Header',
  setup() {
    const state = reactive({ isfiexd: false })
    const header = ref(null)

    onMounted(() => {
      console.log(header.value.clientHeight)
      let height = header.value.clientHeight
      window.onscroll = () => {
        if (height < window.scrollY && !state.isfiexd) {
          state.isfiexd = true
        } else if (window.scrollY <= 0) {
          state.isfiexd = false
        }
      }
    })

    return {

      ...toRefs(state),
      header
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: 2;
  color: #fff;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .layout {
    overflow: hidden;
  }
  .logo {
    width: 80px;
    float: left;
    height: 60px;
  }
  nav {
    float: right;
    ul {
      li {
        float: left;
        width: 100px;
        text-align: center;
        a {
          color: #fff;
          transition: 0.2s;
          &:hover {
            font-size: 16px;
            color: #febd01;
          }
        }
      }
    }
  }

  &.fiexd {
    position: fixed;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
    color: #000;
    transition: 0.5s;
    animation: fadeIn 0.3s ease-in-out;
    nav {
      ul {
        li {
          a {
            color: #000;
            &:hover {
              font-size: 16px;
              color: #febd01;
            }
          }
        }
      }
    }
  }
  @keyframes fadeIn {
    from{
      transform: translateY(-100%);
    }to{
      transform: translateY(0%);
    }
  }
}
</style>