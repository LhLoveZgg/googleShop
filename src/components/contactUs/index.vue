@<template>
  <div class="contactUsAside">
    <h3>CONTACT US</h3>
    <div>
      <div class="cell" v-for="r in renderList" :key="r.value">
        <h4>{{r.title}}</h4>
        <p>{{r.value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      renderList: [
        {
          title: "WECHAT/WHATSAPP",
          value: "18605194068"
        },
        {
          title: "TEL",
          value: "+86-18605194068"
        },
        {
          title: "E-MAIL",
          value: "stone@doingmachine.com"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.contactUsAside {
  & > h3 {
    font-family: Open Sans;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0;
    line-height: 3em;
    text-align: left;
    display: block;
    background-color: #7d7d7d;
    padding-left: 20px;
  }
  & > div {
    border-left: 1px dashed #ddd;
    border-right: 1px dashed #ddd;
    border-top: 0 dashed #ddd;
    border-bottom: 1px dashed #ddd;
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    .cell {
      font-family: Open Sans;
      font-size: 14px;
      color: #545454;
      letter-spacing: 0;
      line-height: 1.7em;
      text-align: left;
      & + .cell {
        margin-top: 30px;
      }
    }
  }
}
</style>