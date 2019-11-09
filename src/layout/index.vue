@<template>
  <div>
    <zjw-header />
    <div class="main">
      <router-view />
    </div>
    <zjw-footer />
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwFooter from "@/components/footer/footer";
export default {
  components: {
    zjwHeader,

    zjwFooter
  }
};
</script>

<style>
</style>