<template>
  <div class="footer">
    <div class="top">
      <div class="container">
        <div class="main col-md-12">
          <div class="item share col-md-3">
            <div class="log">
              <img src="//5ororwxhmplorik.ldycdn.com/cloud/iiBqjKmrRinSrljnpilo/yejiao.png" alt />
            </div>
            <div class="shareList">
              <span class="twitter"></span>
              <span class="linkedin"></span>
              <span class="google"></span>
              <span class="facebook"></span>
            </div>
          </div>

          <div class="item col-md-3">
            <div class="name">
              <h2>QUICK LINKS</h2>
            </div>
            <div class="list">
              <router-link tag="div" class="tab-item listItem" to="/index">
                <span class="tab-link">Home</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/products">
                <span class="tab-link">Products</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/news">
                <span class="tab-link">News</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/about">
                <span class="tab-link">About Us</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/contact">
                <span class="tab-link">Contact Us</span>
              </router-link>
            </div>
          </div>

          <div class="item col-md-3">
            <div class="name">
              <h2>PRODUCTS CATEGORY</h2>
            </div>
            <div class="list">
              <router-link tag="div" class="tab-item listItem" to="/index">
                <span class="tab-link">Industrial Dryer</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/products">
                <span class="tab-link">Impact Mill</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/news">
                <span class="tab-link">Powder Mixer</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/about">
                <span class="tab-link">Wet Granulator</span>
              </router-link>
              <router-link tag="div" class="tab-item listItem" to="/contact">
                <span class="tab-link">Conveying Equipment</span>
              </router-link>
            </div>
          </div>

          <div class="item col-md-3">
            <div class="name">
              <h2>PRODUCTS CATEGORY</h2>
            </div>
            <div class="list">
              <div class="listItem bot">
                <img src="//5prorwxhmplojik.ldycdn.com/cloud/ilBqjKmrRinSilkqprlo/weixin.png" alt />
                <span>18605194068</span>
              </div>
              <div class="listItem bot">
                <img src="//5prorwxhmplojik.ldycdn.com/cloud/ikBqjKmrRinSilkqqrlo/dainhua.png" alt />
                <span>+86-18605194068</span>
              </div>
              <div class="listItem bot">
                <img
                  src="//5qrorwxhmploiik.ldycdn.com/cloud/inBqjKmrRinSilkqmrlo/youxiang.png"
                  alt
                  srcset
                />
                <span>stone@doingmachine.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container">
        <p>Copyright 2018 Changzhou Doing Machine Co., Ltd Support By Youxin Manage Entrance</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
.footer {
  padding-top: 20px;
  .top {
    background-color: #7d7d7d;
    padding-top: 20px;
    .container {
      .main {
        .item {
          padding: 10px 0;
          .name {
            h2:hover {
              color: #434343;
            }
            h2 {
              font-size: 20px;
              color: #fff;
              font-weight: bold;
              letter-spacing: 0;
              line-height: 1.8em;
              text-align: left;
            }
          }
          .list {
            margin-top: 20px;
            .listItem {
              cursor: pointer;
              font-size: 14px;
              color: #fff;
              letter-spacing: 0;
              line-height: 2.2em;
              img {
                margin-right: 5px;
              }
            }

            .listItem:hover {
              color: red;
            }

            .bot {
              padding-bottom: 20px;
            }
          }
        }
        .share {
          .log {
            margin: 12px 10px 0px;
          }
          .shareList {
            margin-top: 22px;
            display: flex;
            letter-spacing: 12px;
            width: 60%;
            justify-content: space-between;
            span {
              display: block;
              width: 32px;
              height: 32px;
              letter-spacing: 12px;
              line-height: 1.7em;
              cursor: pointer;
              transition: all 0.3s;
            }
            span:hover {
              transition: all 0.3s;
              background-color: #ccc !important;
            }
            .twitter {
              background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                repeat -24px -256px #00aced;
              background-color: #000;
            }
            .linkedin {
              background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                repeat -24px -128px #00aced;
              background-color: #000;
            }
            .google {
              background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                repeat -24px -64px #00aced;
              background-color: #000;
            }
            .facebook {
              background: url("https://5prorwxhmplojik.ldycdn.com/static/t-qiBmBKgKxxgmyxbl/assets/widget/images/follow/style123tiny.png")
                repeat -24px 0px #00aced;
              background-color: #000;
            }
          }
        }
      }
    }
  }

  .bottom {
        background-color: #7d7d7d;
    .container{
      border-top: 1px solid rgb(204, 204, 204)
    }
    p {
      color: #ffffff;
      font-size: 14px;
      letter-spacing: 0;
      line-height: 1.7em;
      margin-top: 10px;
    }
  }
}

@media (min-width: 990px) {
}

@media (min-width: 1220px) {
}
</style>
