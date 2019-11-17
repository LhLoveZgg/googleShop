<template>
  <div class="news">
    <zjw-crumbs></zjw-crumbs>

    <el-row tag="section" class="container products">
      <el-col :md="6" :sm="24" :xs="24" tag="aside">
        <div class="productsMenu">
          <flodMenu style="marginBottom:40px" :list="news">
            <template slot="title">
             NEWS
            </template>
          </flodMenu>
          <contactUsAside />
        </div>
      </el-col>
      <el-col :md="18" :sm="24" :xs="24" tag="article">
        <h3> {{ title }}</h3>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwCrumbs from "@/components/crumbs/crumbs";
import zjwFooter from "@/components/footer/footer";
import flodMenu from "@/components/flodMenu";
import contactUsAside from "@/components/contactUs";

import { Row, Col, Pagination } from "element-ui";
export default {
  components: {
    zjwHeader,
    zjwCrumbs,
    zjwFooter,
    flodMenu,
    contactUsAside,
    elRow: Row,
    elCol: Col
  },
  data() {
    return {
      curren_id: 2,
      news: [
        {
          path: "/news?content=CONPANY NEWS",
          label: "COMPANY NEWS"
        },
        {
          path: "/news?content=INDUSTRY NEWS",
          label: "INDUSTRY NEWS"
        }
      ],
      title: ""
    };
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(nv) {
        const { content } = nv.query;
        this.title = content ? content : "News";
      }
    }
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
  section.products {
    & > aside {
      padding: 10px 10px;
    }
    & > article {
      padding: 20px 10px;
    }
    h3 {
      font-family: Open Sans;
      font-size: 24px;
      color: #333;
      letter-spacing: 0;
      line-height: 43px;
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #000;
    }
  }
}
</style>
