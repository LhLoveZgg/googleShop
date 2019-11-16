<template>
  <div class="tips">
    <div class="tipsList">
      <div class="tipItem">
        <div class="iconfont icon-dianhua1"></div>
        <span>Phone</span>
      </div>
      <div class="tipItem">
        <div class="iconfont icon-youjian"></div>
        <span>Email</span>
      </div>
      <div class="tipItem">
        <div class="iconfont icon-youjian">
          <span>WhatsApp</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
.tips {
  position: fixed;
  z-index: 99;
  top: 30%;
  top: 0;
  border-radius: 10px 0 0 10px;
  .tipsList {
    .tipItem {
      width: auto;
      min-width: 64px;
      height: auto;
      position: relative;
      line-height: 28px;
    }
  }
}
</style>>

