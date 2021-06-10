<template>
  <div class="home">
     <Banner class=" wow  animate__fadeInDownBig" data-wow-duration="1s"  /> 
     <Introduction  class=" wow  animate__fadeInDownBig" data-wow-duration="3s"  />
     <Experience  class=" wow  animate__fadeInDownBig" data-wow-duration="2s"  />
     <Skill  class=" wow  animate__fadeInDownBig" data-wow-duration="2s"  />
     <Contact  class=" wow  animate__fadeInDownBig" data-wow-duration="5s"  />
  </div>
</template>

<script>
import {reactive} from 'vue'
import {WOW} from 'wowjs-shadow'
import Banner from './banner'
import Introduction from './introduction'
import Experience from './experience'
import Skill from './skill'
import Contact from './contact'
export default {
    components:{
        Banner,Introduction,Experience,Skill,Contact
    },
    setup(){
      
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function (box) {

        },
        scrollContainer: null 
      });
      wow.init();
 
    }
}
</script>

<style>

</style>