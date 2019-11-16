<template>
  <div class="about">
    <zjw-crumbs></zjw-crumbs>
    <div class="info">
      <div class="container">
        <div class="left col-md-6">
          <h2>Welcome to Doing Machine</h2>
          <br />
          <br />
          <div class="dec">
            Changzhou Doing Machine Co., Ltd has been manufacturing, engineering and exporting various kinds of industrial dryers,mixers, granulators and impact mills since 1995, for thousands of satisfied customers.
            <br />Attention to detail and real production data is critical in the manufacturing of industrial machinery. An unique design for specific material is always made based on real production experiences or trial data.
            <br />Doing Machine has experienced technicians who has been working in this field for more than 30 years as well as professional pilot plant.Free trial and material study are available for our customers.
            <br />This is also true after the sale . Doing Machine has skilled and experienced after sales service team who can reach customers in short notice for providing professional installation, commissioning and training services.
            <br />DoingMachine is always your reliable machinery supplier.
          </div>
        </div>
        <div class="right col-md-6">
          <img src="//5prorwxhmplojik.ldycdn.com/cloud/oqBqjKmrRinSilppollq/gongsi.jpg" alt />
        </div>
      </div>
    </div>
    <div class="sign">
      <div class="container">
        <img src="//5ororwxhmplorik.ldycdn.com/cloud/orBqjKmrRinSilmppllp/ABOUT-US.png" alt />
      </div>
    </div>

    <div class="imgList">
      <div class="container">
        <div class="item">
          <img src="//5qrorwxhmploiik.ldycdn.com/cloud/oqBqjKmrRinSjllrpklo/tu1.jpg" alt />
        </div>
        <div class="item">
          <img src="//5qrorwxhmploiik.ldycdn.com/cloud/oqBqjKmrRinSjllrpklo/tu1.jpg" alt />
        </div>
        <div class="item">
          <img src="//5qrorwxhmploiik.ldycdn.com/cloud/oqBqjKmrRinSjllrpklo/tu1.jpg" alt />
        </div>
        <div class="item">
          <img src="//5qrorwxhmploiik.ldycdn.com/cloud/oqBqjKmrRinSjllrpklo/tu1.jpg" alt />
        </div>
      </div>
    </div>

    <div class="wedo">
      <div class="container">
        <div class="main col-md-8">
          <h1>WHAT WE DO</h1>
          <div class="line"></div>
          <div
            class="dec"
          >DOING MACHINE is specialized in design, manufacturing, engineering and exporting of industrial dryers, impact mills, powder mixers, wet granulators and conveying equipements.</div>
        </div>
      </div>
    </div>

    <div class="advantage">
      <div class="item">
        <div class="itemInfo">
          <div class="top">
            <div class="num">1</div>
            <div class="ad">
              <p>ADVANTAGE</p>
              <span>TEST CENTER</span>
            </div>
          </div>
          <div
            class="bottom"
          >We can test your product for free to determine the optimal process for final design.</div>
        </div>
      </div>

      <div class="item">
        <div class="itemInfo">
          <div class="top">
            <div class="num">2</div>
            <div class="ad">
              <p>ADVANTAGE</p>
              <span>TEST CENTER</span>
            </div>
          </div>
          <div
            class="bottom"
          >We can test your product for free to determine the optimal process for final design.</div>
        </div>
      </div>

      <div class="item">
        <div class="itemInfo">
          <div class="top">
            <div class="num">3</div>
            <div class="ad">
              <p>ADVANTAGE</p>
              <span>TEST CENTER</span>
            </div>
          </div>
          <div
            class="bottom"
          >We can test your product for free to determine the optimal process for final design.</div>
        </div>
      </div>
    </div>

    <div class="customer">
      <div class="container">
        <div class="main">
          <h1>VISITING CUSTOMERS</h1>
          <div class="line"></div>
          <div class="imgList">
            <div class="container">
              <div class="item .col-md-4">
                <img src="//5qrorwxhmploiik.ldycdn.com/cloud/omBqjKmrRinSjlnrnqlo/TU.jpg" alt />
              </div>
              <div class="item .col-md-4">
                <img src="//5qrorwxhmploiik.ldycdn.com/cloud/omBqjKmrRinSjlnrnqlo/TU.jpg" alt />
              </div>
              <div class="item .col-md-4">
                <img src="//5qrorwxhmploiik.ldycdn.com/cloud/omBqjKmrRinSjlnrnqlo/TU.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import zjwHeader from "@/components/header/header";
import zjwCrumbs from "@/components/crumbs/crumbs";
import zjwFooter from "@/components/footer/footer";
export default {
  components: {
    zjwHeader,
    zjwCrumbs,
    zjwFooter
  },
  data() {
    return {
      curren_id: 3
    };
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

.about {
  .left,
  .right {
    padding: 10px 0;
    margin: 0 10px;
  }
  .info {
    .container {
      display: flex;
    }
    margin-top: 54px;

    .left {
      h2 {
        color: #000000;
        font-size: 20px;
      }
      .dec {
        font-family: Open Sans;
        font-size: 14px;
        color: #545454;
        letter-spacing: 0;
        line-height: 1.7em;
        text-align: left;
      }
    }
    .right {
      margin-top: 45px;
    }
  }

  .sign {
    margin-top: 30px;
    img {
      margin: 0 10px;
    }
  }

  .imgList {
    margin-top: 65px;
    .container {
      display: flex;
      .item {
        padding: 10px 0;
        img {
          margin: 0 10px;
        }
      }
    }
  }

  .wedo,
  .customer {
    margin-top: 39px;
    padding: 30px 0;
    .container {
      .zjw-center;
      .main {
        text-align: center;
        h1 {
          letter-spacing: 0;
          line-height: 1.4em;
          text-align: center;
          font-size: 30px;
          color: #000;
        }
        .line {
          border-top-width: 1px;
          border-top-color: rgb(204, 204, 204);
          width: 54%;
          border-top-style: solid;
          margin: 3px auto;
        }
        .dec {
          margin: 0 10px;
          padding-top: 3px;
          letter-spacing: 0;
          line-height: 1.7em;
          text-align: center;
          color: #000000;
        }
      }
    }
  }

  .advantage {
    width: 1200px;
    margin: 1px auto;
    padding: 20px 0;
    font-family: Open Sans;
    display: flex;
    .item {
      width: 33.33%;
      .itemInfo {
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
        .top {
          .num {
            display: inline-block;
            vertical-align: baseline;
            white-space: normal;
            color: red;
            width: 25%;

            opacity: 0.15;
            font-size: 150px;
            font-weight: 300;
          }
          .ad {
            display: inline-block;
            vertical-align: baseline;
            white-space: normal;
            p {
              color: #ff0000;
              font-size: 30px;
              line-height: 43px;
            }
            span {
              color: #ff0000;
              font-size: 20px;
              display: block;
            }
          }
        }
        .bottom {
          color: #000000;
          font-size: 16px;

          line-height: 27px;
        }
      }
    }
  }

  .customer {
    .line {
      width: 31% !important;
    }
    .imgList {
      .container {
        .item {
          padding: 10px 0;
          margin: 0 10px;
        }
      }
    }
  }
}

@media (min-width: 990px) {
}

@media (max-width: 989px) and (min-width: 768px) {
  .about {
    .left,
    .right {
      padding: 5px 0;
      margin: 0 5px;
    }

    .info {
      .container {
        display: block;
      }
    }

    .imgList {
      .container {
        display: block;
        .item {
          padding: 5px 0;
          display: flex;
          justify-content: center;
        }
      }
    }
    .advantage {
      width: 100%;
    }
  }
}

@media (max-width: 767px) and (min-width: 1px) {
  .about {
    .left,
    .right {
      padding: 5px 0;
      margin: 0 10px;
    }
    .right{
      display: flex;
      justify-content: center;
      img{
        width: 100%;
      }
    }


    .info {
      .container {
        display: block;
      }
    }

    .imgList {
      .container {
        display: block;
        .item {
          padding: 5px 0;
          display: flex;
          justify-content: center;
        }
      }
    }
    .advantage {
      width: 100%;
      display: block;
      .item{
        width: 100%;
      }
    }
  }
}
</style>>

