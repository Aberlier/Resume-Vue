function loadCss(herf,callback){
    let css= document.createElement('link')
    css.rel ='stylesheet'
    css.type='text/css'
    css.href = herf
    document.getElementsByTagName("head")[0].appendChild(css)
    callback()
  }

  import 'animate.css'

loadCss('http://at.alicdn.com/t/font_2316180_sz6dv9r4wms.css',()=>{
  require('../style/common.scss')
})
