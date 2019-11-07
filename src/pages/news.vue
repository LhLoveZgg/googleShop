<template>
  <div class="news">
    <zjw-header @changeNav="curren_id=arguments[0]"></zjw-header>
    <zjw-crumbs></zjw-crumbs>

  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwCrumbs from "@/components/crumbs/crumbs";
export default {
  components: {
    zjwHeader,
    zjwCrumbs
  },
  data() {
    return {
      curren_id: 2
    };
  },
  methods: {
    changeNav(e) {
      console.log(arguments);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/varibles.less";

.news {

}

@media (min-width: 990px) {
}
</style>>

