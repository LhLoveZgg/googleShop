@<template>
  <div class="flodMenu">
    <h3 @click="toggle">
      <slot name="title"></slot>
    </h3>
    <ul
      ref="ul"
      @transitionend="transitionend"
      :style="{height: status ? liHeight * list.length +'px' : 0}"
    >
      <li class="cell" v-for="item in list" :key="item.path">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: true,
      flag: true,
      liHeight: 0
    };
  },
  props: {
    list: Array
  },
  computed: {},
  mounted() {
    this.$nextTick(() => {
      this.liHeight = this.$refs.ul.querySelector("li").offsetHeight;
    });
  },
  methods: {
    toggle() {
      if (this.flag) this.status = !this.status;
    },
    transitionend() {
      this.flag = true;
    }
  },
  watch: {
    status(nv) {
      this.flag = false;
    }
  }
};
</script>

<style lang="less">
.flodMenu {
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
  & > ul {
    border-left: 1px dashed #ddd;
    border-right: 1px dashed #ddd;
    border-top: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    letter-spacing: 0;
    line-height: 2.2em;
    text-align: left;
    font-size: 14px;
    color: #545454;
    transition: height 0.3s;
    overflow: hidden;
    li {
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 30px;
      padding-left: 16px;
      &:hover {
        background-color: #f0f0f0;
        border-bottom-color: #f0f0f0;
        color: red;
      }
      & + li {
        border-top: 1px solid #e7e7e7;
      }
    }
  }
}
</style>