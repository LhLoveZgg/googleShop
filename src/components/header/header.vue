<template>
  <div class="tab">
    <!-- // tag是改变dom标签，router-link默认是a标签 -->
    <div class="icon col-md-2 col-md-first">
      <img src="//5prorwxhmplojik.ldycdn.com/cloud/irBqjKmrRinSrlikirln/LOGO.png" alt />
    </div>
    <div class="med">
      <router-link tag="div" class="tab-item" to="/index">
        <span class="tab-link">Home</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/Products">
        <span class="tab-link">Products</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/News">
        <span class="tab-link">News</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/about">
        <span class="tab-link">About Us</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/contact">
        <span class="tab-link">Contact Us</span>
      </router-link>
    </div>
    <div class="search">
      <input type="text" />
      <img src="./search.png" alt />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
@media (min-width: 990px) {
  .tab {
    display: flex;
    .icon {
      .zjw-center;
    }
    .med {
      display: flex;
      height: 90px;
      line-height: 90px;
      width: 100%;
      .tab-item {
        flex: 1;
        text-align: center;
        .tab-link {
          padding-bottom: 5px;
          letter-spacing: 0;
          font-size: 16px;
          color: #000;
          // 点击时的样式
        }

        &.router-link-active {
          .tab-link {
            border-bottom: 2px solid red;
          }
        }
      }
    }
  }
}
</style>
