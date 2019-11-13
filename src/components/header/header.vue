<template>
  <div class="tab">
    <!-- // tag是改变dom标签，router-link默认是a标签 -->
    <div class="icon col-md-2 col-md-first">
      <img src="//5prorwxhmplojik.ldycdn.com/cloud/irBqjKmrRinSrlikirln/LOGO.png" alt />
    </div>
    <!-- <div class="icon-m col-md-2 col-md-first">
      <img src="//5qrorwxhmploiik.ldycdn.com/cloud/irBqjKmrRinSrlikirln/LOGO.png" alt />
    </div>-->
    <div class="med col-md-8">
      <!-- <div class="list">
        <router-link tag="div" class="tab-item" to="/index">
          <span
            class="tab-link"
            v-on:mouseover="changeActive($event,'0')"
            v-on:mouseleave="removeActive($event)"
          >Home</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/products">
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
        <router-link tag="div" class="tab-item" to="/news">
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
      </div>-->

      <div class="list">
        <router-link
          tag="div"
          class="tab-item"
          v-for="menu in menus"
          :to="menu.path"
          :key="menu.label"
          :exact="menu.exact"
        >
          <Dropdown @command="handleCommand" v-if="menu.children">
            <span class="tab-link">{{menu.label}}</span>
            <dropdown-menu slot="dropdown">
              <dropdown-item
                v-for="subMenu in menu.children"
                :key="subMenu.label"
                :command="subMenu.path"
              >{{subMenu.label}}</dropdown-item>
            </dropdown-menu>
          </Dropdown>
          <span class="tab-link" v-else>{{menu.label}}</span>
        </router-link>
      </div>
    </div>

    <div class="medMobile">
      <div class="nav-title1 nav-title">
        <div class="nav-btn" :class="on?'on':''" @click="changeOn()">
          <span class="line line-top"></span>
          <span class="line line-middle"></span>
          <span class="line line-bottom"></span>
        </div>
        <div class="med"></div>
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
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
export default {
  data() {
    return {
      on: false
    };
  },
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  created() {
    this.$store.dispatch("app/fetchProducts");
  },
  computed: {
    menus() {
      return this.$store.getters.menu;
    }
  },
  methods: {
    handleCommand(path) {
      this.$router.push(path);
    },
    changeOn() {
      this.on = !this.on;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
.medMobile {
  display: none;
}
.el-dropdown-menu {
  background-color: rgba(0, 0, 0, 0.8) !important;
  border: none;
}
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border: none !important;
}

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

.search {
  padding: 10px 0;
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
          text-align: center;
          .tab-link {
            padding-bottom: 5px;
            letter-spacing: 0;
            font-size: 14px;
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

          .tab-link:hover {
            border-bottom: 2px solid #000793;
          }

          &.router-link-active {
            .tab-link {
              border-bottom: 2px solid #000793;
            }
          }

          .active {
            border-bottom: 2px solid #000793;
          }
        }
      }
    }

    .search {
      position: relative;
      display: flex;
      align-items: center;
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
        // top: 6px;
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
      // margin-top: 15px;
      position: relative;
      width: 100%;
      padding-right: 32px;
      display: flex;
      align-items: center;
    }
  }
}
@media (min-width: 1220px) {
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
          text-align: center;
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

          .tab-link:hover {
            border-bottom: 2px solid red;
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
      }
    }

    .search {
      position: relative;
      display: flex;
      align-items: center;
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
        // top: 6px;
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
      // margin-top: 15px;
      position: relative;
      width: 100%;
      padding-right: 32px;
      display: flex;
      align-items: center;
    }
  }
  .list {
    max-width: 1180px;
  }
}

@media (max-width: 989px) {
  .tab {
    display: flex;
    height: 60px;
    .icon {
      .zjw-center;
      width: 72px;
      margin-left: 10px;
      img {
        width: 100%;
      }
    }
    .icon-m {
      .zjw-center;
      display: none;
    }
    .med {
      display: flex;
      height: 90px;
      line-height: 90px;

      box-sizing: border-box;
      display: none;

      .list {
        display: table;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        .tab-item {
          display: table-cell;
          float: none;
          position: relative;
          text-align: center;
          .tab-link {
            padding-bottom: 5px;
            letter-spacing: 0;
            font-size: 14px;
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

          .tab-link:hover {
            border-bottom: 2px solid red;
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
      }
    }

    .medMobile {
      display: block;
      width: 100%;
      position: absolute;
      .nav-title1 {
        .nav-btn {
          display: block;
          float: right;
          width: 60px;
          height: 60px;
          position: relative;
        }
        .nav-btn.on {
          .line-top {
            transform: rotateZ(45deg);
          }

          .line-middle {
            opacity: 0;
          }
          .line-bottom {
            transform: rotateZ(-45deg);
          }
        }
        .line {
          display: inline-block;
          width: 24px;
          height: 2px;
          background-color: #333;
          position: absolute;
          left: 18px;
          -webkit-transform-origin: left center;
          transform-origin: left center;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
        .line-top {
          top: 21px;
        }
        .line-middle {
          top: 29px;
        }
        .line-bottom {
          top: 38px;
        }
      }
      .med {
      }
    }
    .search {
      position: relative;
      display: flex;
      align-items: center;
      padding-right: 60px;

      border-radius: 0;
      background-color: transparent;
      font-size: 14px;
      color: #545454;
      letter-spacing: 0;
      line-height: 1.7em;
      text-align: left;
      display: none;
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
        // top: 6px;
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
      // margin-top: 15px;
      position: relative;
      width: 100%;
      padding-right: 32px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
