@<template>
<el-row tag="section" class="container products" >
  <el-col :md="6" :sm="24" :xs="24" tag="aside">
      <div class="productsMenu">
        <flodMenu style="marginBottom:40px" :list="products">
          <template slot="title">
            PRODUCT
          </template>
        </flodMenu>
        <contactUsAside />
      </div>
  </el-col>
  <el-col :md="18" :sm="24" :xs="24" tag="article">
    
  </el-col>
</el-row>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from "@/components/contactUs";
import flodMenu from "@/components/flodMenu";
import { Row, Col, Pagination } from "element-ui";
export default {
  components: {
    goodItem,
    contactUsAside,
    flodMenu,
    elRow: Row,
    elCol: Col,
    elPagination: Pagination
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style>
</style>
