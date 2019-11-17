@<template>
  <div class="goodsOrder container">
    <el-row :gutter="20">
      <el-col :md="18">
        <h3>Product Inquire</h3>
        <div class="cart">
          <table>
            <thead>
              <tr>
                <th>Product Picture</th>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="goods in Object.values(inquire)" :key="goods.id">
                <td>
                  <a href="javascript:void(0)" style="display:block">
                    <img :src="goods.img" alt="" />
                  </a>
                </td>
                <td>
                  <a href="javascript:void(0)">
                    {{ goods.name }}
                  </a>
                </td>
                <td>
                  <el-input-number
                    class="inputNum"
                    @change="handleChange"
                    @mouseover.native="select(goods.id)"
                    size="mini"
                    v-model="goods.quantity"
                    controls-position="right"
                    :id="goods.id"
                    :min="0"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="form">
          <el-row :gutter="10">
            <el-col class="formItem" :lg="12">
              <input type="text" placeholder="*Name" />
            </el-col>
            <el-col class="formItem" :lg="12">
              <input type="text" placeholder="*E-mail" />
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col class="formItem" :lg="12">
              <input type="text" placeholder="Company Name" />
            </el-col>
            <el-col class="formItem" :lg="12">
              <input type="text" placeholder="*Tel" />
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col class="formItem" :lg="24">
              <textarea placeholder="*Message" />
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <input type="text" placeholder="*Verify Code" class="verify" />
              <img
                style="width: 100px; height: 30px;"
                src="/phoenix/captcha?action=image&c=e4cd666e-0177-4ffc-bc59-1b64bf82f20e"
                alt=""
              />
            </el-col>
          </el-row>
          <el-button class="submit">Submit</el-button>
        </div>
        <h3>You May Also Be Interested</h3>
      </el-col>
      <el-col :md="6">
        <flodMenu style="marginBottom:40px" :list="products" :color="'#16376c'">
          <template slot="title">
            PRODUCT CATEGORY
          </template>
        </flodMenu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  Row,
  Col,
  Form,
  FormItem,
  Input,
  InputNumber,
  Textarea,
  Button
} from "element-ui";
import flodMenu from "@/components/flodMenu";
export default {
  components: {
    elRow: Row,
    elCol: Col,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elInputNumber: InputNumber,
    elButton: Button,
    flodMenu
  },
  computed: {
    inquire() {
      return this.$store.getters.inquire;
    },
    products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    select(id) {
      this.id = id;
    },
    handleChange(quantity) {
      this.$store.commit("inquire/UPDATE_INQUIRE", { id: this.id, quantity });
    }
  }
};
</script>

<style lang="less">
.goodsOrder {
  h3 {
    line-height: 58px;
    font-size: 24px;
    color: #333;
    letter-spacing: 0;
    text-align: left;
    border-bottom: 1px solid #000;
    margin-bottom: 20px;
  }
  table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    margin-bottom: 5px;
    width: 100%;
    th {
      background-color: #f3f3f3;
      text-align: left;
    }
    th,
    td {
      border: 1px solid #ddd;
      background-color: #fff;
      padding: 5px;
      line-height: 24px;
      a {
        color: #545454;
      }
      a:hover {
        color: #0079c3;
      }
      .inputNum {
        width: 96px;
        height: 30px;
        padding: 4px 6px;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: #555;
        &:hover {
          .el-input-number__decrease,
          .el-input-number__increase {
            display: inline-block;
          }
        }
        input,
        .el-input {
          width: 100%;
          height: 100%;
          border: none;
        }
        input {
          padding: 0 !important;
          text-align: left;
          font-size: 14px;
        }
        .el-input-number__decrease {
          border: none;
          bottom: 10px;
          display: none;
        }
        .el-input-number__increase {
          display: none;
          border: none;
          top: 10px;
        }
      }
    }
  }
  .formItem {
    padding: 0 10px;
    margin-bottom: 16px;
    input,
    textarea {
      width: 100%;
      height: 30px;
      box-sizing: content-box;
      border: 1px solid #ccc;
      padding: 4px 0;
      text-indent: 6px;
    }
    textarea {
      height: 80px;
      resize: none;
    }
  }
  input.verify {
    width: 100px;
    height: 30px;
    box-sizing: content-box;
    border: 1px solid #ccc;
    padding: 4px 0;
    text-indent: 6px;
  }
  .submit {
    padding: 0 30px;
    border: 1px solid #2e6da4;
    background: #337ab7;
    line-height: 32px;
    height: 30px;
    color: #fff;
    border-radius: 4px;
    display: inline-block;
    transition: all 0.3s;
    cursor: pointer;
    margin: 25px 0 60px;
    &:hover {
      background-color: #286090;
      border-color: #204d74;
    }
  }
}
</style>
