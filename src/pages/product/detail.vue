@<template>
  <el-row tag="section" class="container products">
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
      <goodsDetail />
    </el-col>
  </el-row>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from "@/components/contactUs";
import flodMenu from "@/components/flodMenu";
import goodsDetail from "./components/goodsDetail";
import { Row, Col, Pagination } from "element-ui";
export default {
  components: {
    goodItem,
    contactUsAside,
    flodMenu,
    elRow: Row,
    elCol: Col,
    elPagination: Pagination,
    goodsDetail
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style lang="less">
.products {
  & > aside {
    padding: 10px 10px;
  }
  & > article {
    padding: 20px 10px;
  }
}
</style>
