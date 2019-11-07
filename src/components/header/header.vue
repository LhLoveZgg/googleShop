<template>
  <div class="tab">
    <!-- // tag是改变dom标签，router-link默认是a标签 -->
    <div class="icon col-md-2 col-md-first">
      <img src="//5prorwxhmplojik.ldycdn.com/cloud/irBqjKmrRinSrlikirln/LOGO.png" alt />
    </div>
    <div class="med col-md-8">
      <div class="list">
        <router-link tag="div" class="tab-item" to="/index">
          <span
            class="tab-link"
            v-on:mouseover="changeActive($event,'0')"
            v-on:mouseleave="removeActive($event)"
          >Home</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/Products">
          <span
            ref="product"
            class="tab-link"
            v-on:mouseover="changeActive($event,'1')"
            v-on:mouseleave="removeActive($event,'1')"
          >Products</span>

          <ul
            :class="show?'show':'hidden'"
            class="secondTab"
            v-on:mouseover="changeActive($event,'4')"
            v-on:mouseleave="removeActive($event,'4')"
            ref="secondTab"
          >
            <div class="sanjiao"></div>
            <li
              v-for="item in secondTab"
              :key="item.id"
              v-on:mouseover="changeColor($event)"
              v-on:mouseleave="removeColor($event)"
            >
              <a href>{{item.val}}</a>
            </li>
          </ul>
        </router-link>
        <router-link tag="div" class="tab-item" to="/News">
          <span
            class="tab-link"
            v-on:mouseover="changeActive($event,'2')"
            v-on:mouseleave="removeActive($event)"
          >News</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/about">
          <span
            class="tab-link"
            v-on:mouseover="changeActive($event,'3')"
            v-on:mouseleave="removeActive($event)"
          >About Us</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/contact">
          <span
            class="tab-link"
            v-on:mouseover="changeActive($event,'5')"
            v-on:mouseleave="removeActive($event)"
          >Contact Us</span>
        </router-link>
      </div>
    </div>
    <div class="search col-md-2 col-md-last">
      <div>
        <input type="text" />
        <img src="./search.png" alt />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      secondTab: [
        {
          val: "Industrial Dryer",
          id: 0
        },
        {
          val: "Impact Mill",
          id: 1
        },
        {
          val: "Powder Mixer",
          id: 2
        },
        {
          val: "Wet Granulator",
          id: 3
        },
        {
          val: "Conveying Equipment",
          id: 4
        }
      ],
      show: false //控制二级菜单是否显示
    };
  },
  methods: {
    changeActive($event, ind) {
      // product 选项
      if (ind == 1) {
        //进入product
        let that = this;
        setTimeout(function() {
          that.show = true;
        }, 200);

        $event.currentTarget.className = "tab-link active";

        setTimeout(function() {
          that.$refs.secondTab.style = "height:210px;padding:10px 0;";
        }, 300);
      } else if (ind == 4) {
        // 进入二级菜单
        this.show = true;
        console.log("进入二级菜单");
        this.$refs.secondTab.style = "height:210px;padding:10px 0;";
        this.$refs.product.className = "tab-link active";
      } else {
        $event.currentTarget.className = "tab-link active";
        this.$refs.product.className = "tab-link";
        this.$refs.secondTab.style = "height:0px;padding: 0;";
        let that = this;
        setTimeout(function() {
          that.show = false;
        }, 300);
      }
    },

    changeColor($event) {
      $event.currentTarget.className = "red";
    },
    removeActive($event, ind = 0) {
      if (ind == 1) {
        //离开product
        $event.currentTarget.className = "tab-link";
        this.$refs.secondTab.style = "height:0px;padding: 0;";
        let that = this;
        // setTimeout(function() {
        //   that.show = false;
        // }, 300);
      } else if (ind == 4) {
        //离开二级菜单
        console.log("离开二级菜单");
        this.$refs.product.className = "tab-link";
        this.$refs.secondTab.style = "height:0px;padding: 0;";
        let that = this;
        setTimeout(function() {
          that.show = false;
        }, 300);
      } else {
        $event.currentTarget.className = "tab-link";
      }
    },
    removeColor($event) {
      $event.currentTarget.className = "";
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
.show {
  display: block !important;
  li {
    opacity: 1;
  }
}
.red a {
  color: red !important;
}
.hidden {
  display: none !important;
  li {
    opacity: 0;
  }
}
.med,
.search {
  padding: 10px 0;
}
.tab-item div {
  height: 0px;
}
.secondTab {
  display: none;
  box-sizing: border-box;
  height: 0px;
  width: auto;
  min-width: 11em;
  max-width: 40em;
  top: auto;
  left: 0px;
  margin-left: 0px;
  margin-top: 10px;

  li {
    list-style: none;
    line-height: normal;
    direction: ltr;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;

    a {
      border-left: 0 solid;
      border-right: 0 solid;
      border-top: 0 solid;
      border-bottom: 0 solid;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      margin-top: 0;
      margin-right: 0;
      margin-bottom: 0;
      margin-left: 0;
      padding-top: 0;
      padding-right: 40px;
      padding-bottom: 0;
      padding-left: 30px;
    }
  }
}

@media (min-width: 990px) {
  .tab {
    display: flex;
    .icon {
      .zjw-center;
    }
    .med {
      display: flex;
      height: 90px;
      line-height: 90px;

      box-sizing: border-box;

      .list {
        display: table;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        .tab-item {
          display: table-cell;
          float: none;
          position: relative;
          .tab-link {
            padding-bottom: 5px;
            letter-spacing: 0;
            font-size: 16px;
            color: #000;
            display: block;
            margin-top: 0;
            margin-right: 14px;
            margin-bottom: 0;
            margin-left: 14px;
            line-height: 52px;
            text-align: center;
            cursor: pointer;
            // 点击时的样式
          }

          &.router-link-active {
            .tab-link {
              border-bottom: 2px solid red;
            }
          }

          .active {
            border-bottom: 2px solid red;
          }
        }
        .secondTab {
          height: 0px;
          transition: all 300ms linear;
          border-left: 0 solid;
          border-right: 0 solid;
          border-top: 0 solid;
          border-bottom: 0 solid;
          border-top-right-radius: 0;
          border-top-left-radius: 0;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          margin-right: 0;
          margin-bottom: 0;
          padding-top: 0px;
          padding-right: 0;
          padding-bottom: 0px;
          padding-left: 0;
          background-color: rgba(0, 0, 0, 0.8);
          position: absolute;
          z-index: 10;

          li {
            transition: all 0.5s;
            a {
              letter-spacing: 0;
              line-height: 38px;
              text-align: left;
              font-size: 16px;
              color: #fff;
              white-space: nowrap;

              -webkit-transition-property: color, background-color, padding-left,
                padding-right, margin-left, margin-right;
              -moz-transition-property: color, background-color, padding-left,
                padding-right, margin-left, margin-right;
              -ms-transition-property: color, background-color, padding-left,
                padding-right, margin-left, margin-right;
              -o-transition-property: color, background-color, padding-left,
                padding-right, margin-left, margin-right;
              transition-property: color, background-color, padding-left,
                padding-right, margin-left, margin-right;
            }
          }
        }

        .sanjiao {
          position: absolute;
          display: block;
          content: "";
          top: -8px;
          left: 20px;
          width: 0;
          height: 0;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-bottom: 10px solid rgba(0, 0, 0, 0.8);
        }
      }
    }

    .search {
      position: relative;
      display: flex;
      // align-items: center;
      padding-right: 60px;

      border-radius: 0;
      background-color: transparent;
      font-size: 14px;
      color: #545454;
      letter-spacing: 0;
      line-height: 1.7em;
      text-align: left;
      input {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #333;
        width: 100%;
        text-indent: 8px;
        box-sizing: border-box;
        border: 1px solid #ddd;
        display: block;
        background: 0;
        padding: 0 32px 0 0;
        margin: 0;
      }
      img {
        position: absolute;
        top: 6px;
        right: 38px;
        cursor: pointer;
        text-align: center;
        overflow: hidden;
        font-family: arial !important;
        width: 20px;
        height: 20px;
      }
    }

    .search > div {
      margin-top: 15px;
      position: relative;
      width: 100%;
      padding-right: 32px;
    }
  }
}

@media (min-width: 1220px) {
  .list {
    max-width: 1180px;
  }
}
</style>
