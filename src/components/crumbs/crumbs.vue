<template>
  <div class="crumbs">
    <div class="main container">
      <p>
        You are here:
        <a>Home »</a> About Us
      </p>
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
.crumbs {
  background-color: #7d7d7d;
  .main {
    display: flex;
    align-items: center;
    p {
      font-size: 18px;
      color: #fff;
      letter-spacing: 0;
      line-height: 2em;
      text-align: left;
      padding: 10px 0;
    }
  }
}
</style>