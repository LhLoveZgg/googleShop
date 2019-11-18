@<template>
  <div>
    <zjw-header />
    <div class="main">
      <zjw-tips></zjw-tips>
      <inquireCart />
      <router-view />
    </div>
    
    <zjw-footer />
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwFooter from "@/components/footer/footer";
import zjwTips from "@/components/tips/tips";
import inquireCart from '@/components/inquireCart'
export default {
  components: {
    zjwHeader,
    zjwFooter,
    zjwTips,
    inquireCart
  }
};
</script>

<style>
</style>