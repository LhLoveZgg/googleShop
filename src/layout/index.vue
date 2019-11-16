@<template>
  <div>
    <zjw-header />
    <div class="main">
      <zjw-tips></zjw-tips>
      <router-view />
    </div>
    
    <zjw-footer />
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwFooter from "@/components/footer/footer";
import zjwTips from "@/components/tips/tips";
export default {
  components: {
    zjwHeader,
    zjwFooter,
    zjwTips
  }
};
</script>

<style>
</style>