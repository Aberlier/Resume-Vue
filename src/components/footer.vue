<template>
  <div class="footer">
      <div class="container">
          <h1 class="fz30">LOUIS</h1>
          <p>
              <i class="iconweixin iconfont"></i>
              <i class="iconqq iconfont"></i>
              <i class="iconweibo iconfont"></i>
              <i class="iconfacebook iconfont"></i>

          </p>
          <p class="color2 fz14">© 2019 copyright all right reserved</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer{
    color: #fff;
    background: #000;
    text-align: center;
    padding: 20px 0;
    h1{
        margin-bottom: 10px;
    }
    p{
        margin: 0px 0 50px;
        i{
            margin-right: 20px;
            font-size: 18px;
            &:nth-child(2){
                font-size: 15px;
            }
        }
    }
}

</style>