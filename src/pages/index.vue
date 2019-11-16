<template>
  <div class="index">
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1">
            <img
              src="
          //5qrorwxhmploiik.ldycdn.com/cloud/iqBqjKmrRinSilmilqlo/lunbo.jpg"
              alt
              srcset
            />
          </div>
          <div class="swiper-slide slide2">
            <img
              src="
            //5ororwxhmplorik.ldycdn.com/cloud/iqBqjKmrRinSilliinln/lunbo.jpg"
              alt
              srcset
            />
          </div>
          <div class="swiper-slide slide3">
            <img
              src="
          //5qrorwxhmploiik.ldycdn.com/cloud/ikBqjKmrRinSiljilrln/lunbo.jpg"
              alt
              srcset
            />
          </div>
          <div class="swiper-slide slide4">
            <img
              src="
         //5qrorwxhmploiik.ldycdn.com/cloud/ikBqjKmrRinSiljilrln/lunbo.jpg"
              alt
              srcset
            />
          </div>
        </div>
        <div class="swiper-pagination">
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwFooter from "@/components/footer/footer";
import Swiper from "swiper";

export default {
  components: {
    zjwHeader,

    zjwFooter
  },
  data() {
    return {
      curren_id: 0
    };
  },
  created() {},
  methods: {
    changeNav(e) {
      console.log(arguments);
    }
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    });
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/varibles.less";
.index {
  .swiper {
    height: 595px;
    .swiper-container {
      width: 100%;
      height: 595px;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      // background: red;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
  }
}
.swiper-pagination-customs {
  background-image: none;
  background-color: transparent;
  border: 1px solid #fff !important;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  border-color: red !important;
}
</style>
