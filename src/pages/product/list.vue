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
    <el-row :gutter="12">
      <el-col :lg="6" :md="8" :sm="12" :xs="12" v-for="(item, index) in renderList" :key="index" >
       <goodItem :info="item"></goodItem>
      </el-col>
    </el-row>
      <div style="textAlign: center; margin: 20px 0">
        <el-pagination
          background
          :current-page="pageInfo.currentPage"
          :page-size="pageInfo.size"
          @current-change="pageChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
  </el-col>
</el-row>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from "@/components/contactUs";
import flodMenu from "@/components/flodMenu";
import { Row, Col, Pagination } from "element-ui";
export default {
  data() {
    return {
      renderList: [],
      list: [
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
          status: 'new'
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
          status: 'good'
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
          status: 'hot'
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
          status: 'good'
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
          status: 'new'
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331",
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        },
        {
          title: "Double Cone Powder Mixer blender",
          id: "12331"
        }
      ],
      pageInfo: {
        size: 12,
        currentPage: 1
      }
    };
  },
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
    },
    total() {
      return this.list.length;
    }
  },
  mounted() {
    this.pageChange(1);
  },
  methods: {
    pageChange(val) {
      this.renderList = this.list.slice(
        this.pageInfo.size * (val - 1),
        this.pageInfo.size * val
      );
      this.pageInfo.currentPage = val;
    }
  }
};
</script>

<style lang="less">
section.products {
  & > aside {
    padding: 10px 10px;
  }
  & > article {
    padding: 20px 10px;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #434343;
  }

  .el-pagination.is-background .btn-next:hover,
  .el-pagination.is-background .btn-prev:hover,
  .el-pagination.is-background .el-pager li:hover {
    background: #fff;
    color: #898989;
    border: 1px solid #898989;
  }
  .el-pagination.is-background .btn-next,
  .el-pagination.is-background .btn-prev,
  .el-pagination.is-background .el-pager li {
    background: #fff;
    color: #434343;
    border: 1px solid #434343;
  }
  .btn-prev:disabled,
  .btn-next:disabled {
    display: none;
  }
}
</style>