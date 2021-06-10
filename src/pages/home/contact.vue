<template>
  <div class="contact">
    <div class="container">

      <div class="title fz40"> <span>联系我</span></div>
      <div class="layout">
        <div class="cont">
          <h2 class="fz18">很期待你的来信</h2>
          <p class="color2 fz16 mt10">我们尊重您的隐私，不容忍垃圾邮件，不会出售、出租、出租或泄露您的信息</p>
          <div class="info-warp">
            <div class="input-layer md-5">
              <div>
                <input placeholder="姓名*" type="text">
              </div>
            </div>
            <div class="input-layer md-5">
              <div>
                <input placeholder="邮箱*" type="text">
              </div>
            </div>

          </div>
          <div class="text-layer">

            <textarea placeholder="内容*"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact {
  background: #f5f8fd;
  padding: 100px 0;
  .title {
    text-align: center;
    margin-bottom: 20px;
    span {
      position: relative;
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
  .layout {
    border: 1px solid #d9d9d9;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .cont {
      padding: 40px;
      h2 {
        margin: 0;
      }
      .mt10{
          margin-top: 10px;
      }

      .info-warp {
        margin: 20px -5px 0;
        overflow: hidden;
        .input-layer {
          div {
            margin: 0 5px;
            display: flex;
          }
          input {
            flex: 1;
            transition: 0.3s;
            border: 1px solid #d9d9d9;
            padding-left: 20px;
            height: 36px;
            flex: 1;
            &:focus {
              border-color: #febd01;
            }
          }
        }
      }
      .text-layer {
        margin-top: 10px;
        display: flex;

        textarea {
          transition: 0.3s;
          padding: 10px 20px;
          height: 100px;
          flex: 1;
          border: 1px solid #d9d9d9;
          &:focus {
            border-color: #febd01;
          }
        }
      }
    }
  }
}
</style>