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

        <div class="listM" :class="on?'slide':''">
          <div class="tab-item" v-for="menu in menus" :key="menu.label" :exact="menu.exact">
            <div class="tab-link" v-if="menu.children">
              <div class="tabItem" @click="$router.push({path:menu.path})">{{menu.label}}</div>

              <div class="angle" @click="changeChildren()">
                <img src="./angle.png" alt />
              </div>

              <collapse-transition>
                <ul v-show="childrenShow">
                  <li v-for="subMenu in menu.children" :key="subMenu.label">{{subMenu.label}}</li>
                </ul>
              </collapse-transition>
            </div>

            <div class="tab-link" v-else>
              <div class="tabItem" @click="$router.push({path:menu.path})">{{menu.label}}</div>
            </div>
          </div>
        </div>
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
import "element-ui/lib/theme-chalk/base.css";
// collapse 展开折叠
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
export default {
  data() {
    return {
      on: false,
      childrenShow: false
    };
  },
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem,
    CollapseTransition
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
    },
    changeChildren() {
      this.childrenShow = !this.childrenShow;
    },
    goTo(path){
      console.log(path)
      this.$router.push('/products/list')
    },
    goToProd(path){
      // console.log(path)
      this.$router.push('/news')
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
    position: relative;
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

      .listM {
        top: -100px;
        position: absolute;
        opacity: 0;
        transition: all 0.5s ease;
        background: #fff;
        .tab-link {
          position: relative;
          display: block;
          // align-items: center;
          min-height: 50px;
          line-height: 50px;
          color: #333;
          z-index: 9999999;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-decoration: none;
          cursor: pointer;
          .tabItem {
            padding: 0 50px 0 20px;
            z-index: 99999999999;
          }
          .angle {
            width: 50px;
            height: 50px;
            position: absolute;
            right: 0;
            top: 0;
            .zjw-center;
            img {
              width: 16px;
              height: 16px;
            }
          }
          ul {
            li {
              padding: 0 50px 0 40px;
              position: relative;
              z-index: 9999999;
            }
            li:after {
              content: "";
              display: inline-block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              background-color: #cacaca;
            }
            li:first-child {
              border-top: 1px solid #cacaca;
            }
          }
        }
        .tab-link:after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: #cacaca;
        }
      }
      .listM.slide {
        top: 60px;
        width: 100%;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 9999;
      }
    }
    .search {
      display: none;
    }
  }

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409eff;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }

  // .fade-enter-active {
  //   /*定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。*/
  //   transition: all 0.3s ease;
  //   top: 0px;
  //   opacity: 1;
  //   overflow: hidden;
  //   position: absolute;
  // }

  // .fade-leave-active {
  //   top: 0px;
  //   transition: all 0.3s ease;
  //   opacity: 0;
  //   overflow: hidden;
  //   position: absolute;
  // }

  // .fade-enter {
  //   top: 0px;
  //   opacity: 0;
  //   position: absolute;
  // }

  // .fade-leave {
  //   position: absolute;
  //   top: 60px;
  //   opacity: 1;
  // }
}
</style>
