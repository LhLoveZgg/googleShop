<template>
  <div class="news">
    <zjw-header @changeNav="curren_id=arguments[0]"></zjw-header>
    <zjw-crumbs></zjw-crumbs>
     <zjw-footer></zjw-footer>

  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwCrumbs from "@/components/crumbs/crumbs";
import zjwFooter from "@/components/footer/footer";
export default {
  components: {
    zjwHeader,
    zjwCrumbs,
    zjwFooter
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

