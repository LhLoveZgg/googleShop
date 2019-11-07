<template>
  <div class="index">
    <zjw-header @changeNav="curren_id=arguments[0]"></zjw-header>
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
export default {
  components: {
    zjwHeader
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
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/varibles.less";
.index {

}
</style>