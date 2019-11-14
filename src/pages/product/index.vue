@<template>
  <section>
    <aside>
      <div class="productsMenu"></div>
      <div class="concatUs"></div>
    </aside>
    <goodItem></goodItem>
  </section>
</template>

<script>
import goodItem from "./components/goodCard";
export default {
  components: {
    goodItem
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