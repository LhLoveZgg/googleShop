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
      <div class="productDesc">
        <div class="tabTop">
          <div class="tabslabel">Product Description</div>
        </div>
        <div class="tabContent">
          <div v-for="(v, i) in desc" :key="i">
            <div class="subTitle">
              <strong>
                {{ v.title }}
              </strong>
            </div>
            <div class="content">
              <template v-for="(con, idx) in v.content">
                <template v-if="con[0] === 'img'">
                  <el-row :key="idx" :gutter="20">
                    <el-col
                      :lg="24 / con[1]"
                      v-for="img in con[2]"
                      :key="img.img"
                    >
                      <img :src="img.img" alt="" />
                      <h4 class="imgTitle">{{ img.title }}</h4>
                      <span class="imgDesc">
                        {{ img.desc }}
                      </span>
                      <span class="imgContent">
                        {{ img.content }}
                      </span>
                    </el-col>
                  </el-row>
                </template>
                <template v-else-if="con[0] === 'table'">
                  <table :key="idx">
                    <tbody>
                      <tr v-for="(tr, index) in con[1]" :key="index">
                        <td v-for="(td, indexS) in tr" :key="indexS">
                          {{ td }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </template>
                <template v-else>
                  <p :class="con[0]" :key="idx">{{ con[1] }}</p>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="nextGoods">
        <button>
          Next: Air Classifying Mill Pulverizer
        </button>
      </div>
      <div class="tags">
        <div class="tag" v-for="tag in tags" :key="tag">
          {{ tag }}
        </div>
      </div>
      <div class="feedback">
        <h4>Feedback</h4>
        <el-form
          ref="form"
          label-width="160px"
          :model="feedback"
          :rules="rules"
        >
          <el-form-item prop="email" label="Email">
            <el-input type="text" v-model="feedback.email" />
          </el-form-item>
          <el-form-item prop="name" label="Name">
            <el-input type="text" v-model="feedback.name" />
          </el-form-item>
          <el-form-item prop="message" label="Message">
            <el-input type="textarea" v-model="feedback.message" />
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              style="background: red;borderColor: red;height: 30px;padding: 0 30px;"
              @click="onSubmit"
              >Submit</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="related">
        <h4>Related Products</h4>
        <div>
          <div class="owlItem">
            <img
              src="//5prorwxhmplojik.ldycdn.com/cloud/liBqjKmrRioSilmkoklq/640-300-300.jpg"
              alt=""
            />
            <p>
              <a href="javascript:void(0)">Conical Screen Cone Mill</a>
            </p>
          </div>
          <div class="owlItem">
            <img
              src="//5ororwxhmplorik.ldycdn.com/cloud/lnBqjKmrRinSpmprljlq/640-300-300.jpg"
              alt=""
            />
            <p>
              <a href="javascript:void(0)">Centrifugal Impact Pin Mill</a>
            </p>
          </div>
          <div class="owlItem">
            <img
              src="//5prorwxhmplojik.ldycdn.com/cloud/liBqjKmrRinSrmomqolp/640-300-300.jpg"
              alt=""
            />
            <p>
              <a href="javascript:void(0)">Rotary Knife Cutter Mill</a>
            </p>
          </div>
        </div>
      </div>
      <div class="relatedNews">
        <h4>Related News</h4>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import goodItem from "./components/goodCard";
import contactUsAside from "@/components/contactUs";
import flodMenu from "@/components/flodMenu";
import goodsDetail from "./components/goodsDetail";
import {
  Row,
  Col,
  Pagination,
  Form,
  FormItem,
  Input,
  Textarea,
  Button
} from "element-ui";
export default {
  components: {
    goodItem,
    contactUsAside,
    flodMenu,
    elRow: Row,
    elCol: Col,
    elPagination: Pagination,
    elForm: Form,
    elFormItem: FormItem,
    elInput: Input,
    elButton: Button,
    goodsDetail
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  data() {
    return {
      desc: [
        {
          title: "Overview",
          content: [
            [
              "text",
              "1. WFJ series air classifying mill pulverizer is used for fine and ultra-fine grinding of soft to medium hard, brittle, crystalline and fatty materials  with a controlled particle size distribution;"
            ],
            ["text", "2. Size of output product:80-350 mesh"],
            ["text", "3. Capacity: 10-1200 kg/h"],
            ["text", "4. GMP design"],
            ["text", "5. Cyclone and bag filter are equipped."]
          ]
        },
        {
          title: "Product Description",
          content: [
            [
              "paragraph",
              "WFJ series air classifying mill pulverizer are high-energy vertical grinding mills incorporating an internal air classifying wheel to controll product particle size distribution."
            ],
            [
              "paragraph",
              "Material is fed into the grinding chamber via screw feeder and strongly impacted and collided into fine powder between the high-speed disc rotor and teeth liner. After grinding process, fine powders are carried to the classifying section by airflow where qualified powders are suctioned into the interior of the classifying wheel and discharged as products; coarse powders flow through the inner guide ring back to the grinding chamber because of centrifugal force for re-grinding. Final product is collected by cyclone and bag house."
            ],
            [
              "paragraph",
              "WFJ series air classifying mill pulverizer has been widely used for milling/pulverizing high fiber content materials, heat sensitive materials and brittle materials in food, chemical and pharmaceutical industry."
            ],
            [
              "img",
              "1",
              [
                {
                  img:
                    "//5prorwxhmplojik.ldycdn.com/cloud/lmBqjKmrRioSjopkjklo/20151017_154855-kaobei_fuben.jpg"
                }
              ]
            ]
          ]
        },
        {
          title: "Technical Features ",
          content: [
            ["text", "1. Alloy steel hammer blades and rotor"],
            ["text", "2. GMP and food grade design"],
            [
              "text",
              "3. Negative working condition can prevent dust and be suitable for heat sensitive material pulverization."
            ],
            [
              "text",
              "4. Output size is adjustable via air classifier and air flow rate."
            ],
            ["text", "5. Feeding rate is automatic controlled"],
            [
              "text",
              "6. Particle size distribution can be accurately controlled"
            ],
            [
              "img",
              2,
              [
                {
                  img:
                    "//5qrorwxhmploiik.ldycdn.com/cloud/ljBqjKmrRinSlonqkklq/600.jpg",
                  title: "Grinding chamber inside",
                  content:
                    "Alloy steel hammer heads and specially heat-treated teeth liner can considerablly increase life-span. "
                },
                {
                  img:
                    "//5ororwxhmplorik.ldycdn.com/cloud/lnBqjKmrRinSlonqoklq/600.jpg",
                  title: "Grinding chamber outside",
                  content:
                    "All the motors are well protected for safety and high sanitary working conditions. "
                }
              ]
            ],
            [
              "img",
              2,
              [
                {
                  img:
                    "//5ororwxhmplorik.ldycdn.com/cloud/liBqjKmrRinSlonqillq/600.jpg",
                  title: "Screw feeder",
                  content:
                    "Invert is equipped to accurately control the feeding rate, which is the precondition for stable and reliable operation. "
                },
                {
                  img:
                    "//5qrorwxhmploiik.ldycdn.com/cloud/lmBqjKmrRinSlonqmllq/600.jpg",
                  title: "Product collecting system",
                  content:
                    "Product collecting system consists of cyclone, bag house and draft fan to prevent dust and increase collection rate."
                }
              ]
            ]
          ]
        },
        {
          title: "Typical Projects",
          content: [
            [
              "img",
              "3",
              [
                {
                  img:
                    "//5qrorwxhmploiik.ldycdn.com/cloud/lnBqjKmrRinSloqqkllq/600.jpg",
                  desc: "Activated carbon grinding in Singapore"
                },
                {
                  img:
                    "//5ororwxhmplorik.ldycdn.com/cloud/lkBqjKmrRinSloqqrnlq/600.jpg",
                  desc: "Dried herb griding in Poland"
                },
                {
                  img:
                    "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSloqqknlq/600.jpg",
                  desc: "Crystal sugar grinding in USA"
                }
              ]
            ]
          ]
        },
        {
          title: "FAQ",
          content: [
            [
              "strong",
              "Q: What information should be provided in order to get a proposal or quotation? "
            ],
            [
              "paragraph",
              "A: Each air classifying mill pulverizer is specially designed for each customer according to specific material, capacity, feed material size and product size. Before we can work out a detailed proposal or quotation, we have to know the following information: "
            ],
            [
              "text",
              "1) Detailed information of material are you going to mill. We may ask you to provide simples for grinding test. "
            ],
            ["text", "2) Size of your material"],
            ["text", "3) Your required particle size after grinding"],
            ["paragraph", "4) Grinding capacity in kg/h "],
            ["strong", "Q: How the machine will be delivered ? "],
            [
              "paragraph",
              "A: The mixer is packed in plywood box for shipping "
            ],
            ["strong", "Q: What standard models do you have? "],
            ["paragraph", "A: We have the following standard models: "],
            [
              "table",
              [
                [
                  "Model",
                  "SZH-180",
                  "SZH-300",
                  "SZH-500",
                  "SZH-1000",
                  "SZH-1500",
                  "SZH-2000",
                  "SZH-2500"
                ],
                [
                  "Volume L",
                  "180",
                  "300",
                  "500",
                  "1000",
                  "1500",
                  "2000",
                  "2500"
                ],
                [
                  "Volume L",
                  "180",
                  "300",
                  "500",
                  "1000",
                  "1500",
                  "2000",
                  "2500"
                ],
                [
                  "Volume L",
                  "180",
                  "300",
                  "500",
                  "1000",
                  "1500",
                  "2000",
                  "2500"
                ],
                [
                  "Volume L",
                  "180",
                  "300",
                  "500",
                  "1000",
                  "1500",
                  "2000",
                  "2500"
                ],
                [
                  "Volume L",
                  "180",
                  "300",
                  "500",
                  "1000",
                  "1500",
                  "2000",
                  "2500"
                ]
              ]
            ]
          ]
        }
      ],
      tags: [
        "air classifying mill",
        "air classifier mill",
        "micro pulverizer",
        "air classifier pulverizer",
        "air classifying pulverizer"
      ],
      rules: {
        email: [
          {
            required: true,
            message: "This field is required",
            trigger: "blur"
          },
          {
            type: "email",
            message: "invalid email address",
            trigger: ["blur"]
          }
        ],
        message: [
          { required: true, message: "This field is required", trigger: "blur" }
        ]
      },
      feedback: {
        email: undefined,
        name: "",
        message: ""
      }
    };
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {});
    }
  }
};
</script>

<style lang="less">
.products {
  font-family: Open Sans;
  img {
    width: 100%;
  }
  & > aside {
    padding: 10px 10px;
  }
  & > article {
    padding: 20px 10px;
  }
  .productDesc {
    margin-top: 20px;
    min-height: 500px;
    border: 1px solid #ccc;
    .tabTop {
      background: #efefef;
      border-bottom: 1px solid #ccc;
      height: 34px;
      position: relative;
      .tabslabel {
        height: 37px;
        line-height: 37px;
        border-top: 2px solid #0688ba;
        background: #fff;
        top: -2px;
        position: absolute;
        cursor: pointer;
        color: #0688ba;
        padding: 0 20px;
        font-family: Open Sans;
        font-size: 14px;
        letter-spacing: 0;
      }
    }
    .tabContent {
      padding: 20px;
      .subTitle {
        width: 100%;
        height: 33px;
        margin-bottom: 22px;
        border-bottom: 2px solid #dddddd;
        position: relative;
        &::after {
          content: "";
          height: 2px;
          width: 100%;
          background: #ddd;
          position: absolute;
          bottom: -6px;
          left: 0;
        }
        strong {
          font-family: arial, helvetica, sans-serif;
          font-size: 18px;
          font-weight: bold;
          color: #545454;
          letter-spacing: 0;
          display: inline-block;
          line-height: 35px;
          padding: 0 20px;
          background-color: #dddddd;
        }
      }
      .content {
        & > p {
          font-size: 14px;
          line-height: 18px;
          font-family: arial, helvetica, sans-serif;
          vertical-align: baseline;
          color: rgb(51, 51, 51);
          color: rgb(51, 51, 153);
          line-height: 24px;
        }
        p.paragraph {
          margin-bottom: 18px;
        }
        p.strong {
          color: rgb(0, 0, 128);
          font-weight: bold;
        }
        span.imgDesc {
          text-align: center;
          display: block;
          color: rgb(51, 51, 153);
          padding: 10px 0;
        }
        span.imgContent {
          text-align: left;
          display: block;
          color: rgb(51, 51, 153);
          padding: 10px 0;
          line-height: 21px;
          font-size: 14px;
          margin-bottom: 20px;
        }
        h4.imgTitle {
          margin-top: 10px;
          font-weight: bold;
          font-size: 16px;
          line-height: 21px;
          color: rgb(51, 51, 153);
          text-align: center;
        }
        table {
          border-collapse: collapse;
          border: 1px solid #ccc;
          margin-bottom: 5px;
          td {
            word-break: break-all;
            padding: 5px 10px;
            border: 1px solid #ddd;
            color: rgb(0, 0, 128);
            font-size: 14px;
          }
        }
      }
      & > div + div {
        margin-top: 24px;
      }
    }
  }
  .nextGoods {
    padding: 20px 0px;
    display: flex;
    justify-content: flex-end;
    border-bottom: 1px solid rgba(165, 165, 165, 0.7);
    button {
      max-width: 40%;
      padding: 10px;
      box-sizing: content-box;
      border: 1px solid #ddd;
      height: 22px;
      background-color: #efefef;
      line-height: 22px;
      text-align: center;
      border-radius: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #545454;
      &:hover {
        color: #0079c3;
      }
    }
  }
  .tags {
    margin: 15px 0 45px;
    .tag {
      font-family: Open Sans;
      font-size: 14px;
      color: #545454;
      letter-spacing: 0;
      line-height: 25px;
      text-align: left;
      border-radius: 40px;
      padding: 0 12px;
      border: 1px solid #ddd;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 10px;
      &:hover {
        color: #0079c3;
      }
    }
  }
  .feedback {
    h4 {
      font-family: Open Sans;
      font-size: 24px;
      color: #333;
      letter-spacing: 0;
    }
    input,
    textarea {
      box-sizing: content-box;
      height: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
      padding: 4px 0;
      text-indent: 6px;
      resize: none;
    }
    textarea {
      height: 80px;
    }
  }
  .related {
    h4 {
      font-size: 20px;
      color: #333;
      letter-spacing: 0;
      line-height: 36px;
      text-align: left;
    }
    & > div {
      padding: 0 35px;
      display: flex;
      & > div {
        width: 200px;
        text-align: center;
        img {
          width: 103px;
        }
        a {
          color: #545454;
          &:hover {
            color: #0079c3;
          }
        }
        & + div {
          margin-left: 5px;
        }
      }
    }
  }
  .relatedNews {
    h4 {
      font-size: 20px;
      color: #333;
      letter-spacing: 0;
      line-height: 36px;
      text-align: left;
    }
  }
  @media (max-width: 989px) {
    .productDesc {
      border-color: transparent;
      .tabTop {
        background-color: #383838;
        border-color: #383838;
        height: 32px;
        .tabslabel {
          height: 100%;
          left: 0;
          top: 0;
          background: transparent;
          border: none;
          line-height: 32px;
          color: #fff;
        }
      }
    }
  }
}
</style>
