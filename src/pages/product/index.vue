@<template>
<el-row tag="section" class="container products" >
  <el-col :md="6" tag="aside">
      <div class="productsMenu">
        <flodMenu style="marginBottom:40px" :list="products">
          <template slot="title">
            PRODUCT
          </template>
        </flodMenu>
        <contactUsAside />
      </div>
  </el-col>
  <el-col :md="18" tag="article">
     <goodItem></goodItem>
  </el-col>
</el-row>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from "@/components/contactUs";
import flodMenu from "@/components/flodMenu";
import { Row, Col } from "element-ui"
export default {
  components: {
    goodItem,
    contactUsAside,
    flodMenu,
    elRow: Row,
    elCol: Col
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="less">
section.products {
  display: flex;
  & > aside {
    padding: 10px 10px;
  }
  & > article{
    padding: 20px 10px;
  }
}
</style>