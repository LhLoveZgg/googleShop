@<template>
  <section>
    <aside>
      <div class="productsMenu">
        <flodMenu style="marginBottom:40px" :list="products">
          <template slot="title">
            PRODUCT
          </template>
        </flodMenu>
        <contactUsAside />
      </div>
      <div class="concatUs"></div>
    </aside>
    <goodItem></goodItem>
  </section>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from '@/components/contactUs'
import flodMenu from '@/components/flodMenu'
export default {
  components: {
    goodItem,
    contactUsAside,
    flodMenu
  },
  computed:{
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="less">
section {
  display: flex;
  aside{

  }
}
</style>