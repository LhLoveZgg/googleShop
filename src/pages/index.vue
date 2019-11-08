<template>
  <div class="index">
    <zjw-header @changeNav="curren_id=arguments[0]"></zjw-header>
    <zjw-footer></zjw-footer>

  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwFooter from "@/components/footer/footer";

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
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/varibles.less";
.index {

}
</style>