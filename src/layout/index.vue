@<template>
  <div>
    <zjw-header />
    <crumbs />
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
import crumbs from '@/components/crumbs/crumbs'
import zjwFooter from "@/components/footer/footer";
import zjwTips from "@/components/tips/tips";
import inquireCart from '@/components/inquireCart'
export default {
  components: {
    zjwHeader,
    zjwFooter,
    zjwTips,
    inquireCart,
    crumbs
  }
};
</script>

<style>
</style>