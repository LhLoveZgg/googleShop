@<template>
  <div class="inquireCart" ref="cartWrap" @click="open">
    <i class="icon-cart" ref="iconCart"></i>
    <div
      class="inquire-basket-listwrap"
      ref="basketWrap"
      :style="`height: ${basketStatus ? 276 : 0}px;`"
    >
      <div class="basket-title" @click="close">
        <i class="basket-title-thumb"></i>
        Inquire Basket (
        <span class="basket-title-pronum">1</span>)
      </div>
      <div class="content">
        <div></div>
      </div>
      <div class="deal">
        <button>Empty</button>
        <button>Inquire</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      basketStatus: false
    };
  },
  methods: {
    open(e) {
      if (
        e.target === this.$refs.cartWrap ||
        e.target === this.$refs.iconCart
      ) {
        this.basketStatus = true;
      }
    },
    close() {
      this.basketStatus = false;
    }
  }
};
</script>

<style lang="less">
.inquireCart {
  z-index: 100;
  position: fixed;
  right: 10px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: #7a8599;
  text-align: center;
  line-height: 50px;
  font-size: 25px;
  overflow: hidden;
  cursor: pointer;
  i {
    font-size: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .inquire-basket-listwrap {
    position: fixed;
    z-index: 2147483647;
    height: 274px;
    right: 0;
    bottom: 0;
    width: 230px;
    background-color: #fff;
    border: 1px solid #aaa;
    box-shadow: 0 0 8px #999;
    cursor: default;
    transition: height 0.3s;
    .basket-title {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      line-height: 36px;
      text-align: center;
      color: #fff;
      background-color: #7a8599;
      .basket-title-thumb {
        position: absolute;
        top: 18px;
        left: 18px;
        height: 26px;
        width: 26px;
        cursor: pointer;
        background: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+EDKWh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTMxNkFCNzM1OUVEMTFFNkFFQzlDQUQ0Q0JGOTk5NTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTMxNkFCNzQ1OUVEMTFFNkFFQzlDQUQ0Q0JGOTk5NTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzE2QUI3MTU5RUQxMUU2QUVDOUNBRDRDQkY5OTk1NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzE2QUI3MjU5RUQxMUU2QUVDOUNBRDRDQkY5OTk1NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIADQAGgMBEQACEQEDEQH/xABvAAEBAQEBAAAAAAAAAAAAAAAAAwUEBgEBAQEBAAAAAAAAAAAAAAAAAAECBBAAAQQBAgUEAwAAAAAAAAAAAQACAwQRMQUhQVESFHEysgYTI1MRAQACAQQDAQAAAAAAAAAAAAABAhEhMVFh8EFxof/aAAwDAQACEQMRAD8Aqu5ziAgICD0e01Pqd+gzzbDtst0yX2nDMgtRZziIH2yj24059Vm8zE5jWOO/N1rGdP1i7jNSmvTSUq/i1HO/TAXF5a0cBlzskk6lKxONdy2M6OZaQQEBAQEBAQEBBvbL9RubnTNt88VKKR34qJsHt8if+ceflpnh6ZvbHc8dLWM/OWNZrWKtiSvYjdFPE4tkjcMEEcilbRMZgtWYnEpLSCCslmzLHFHLK98cILYWOcSGAnJDQdOPRT3n2dFixYsyumsSvmmdjukkcXOOBgZJydEiBJUEBAQEH//Z)
          top center no-repeat;
        span.basket-title-pronum {
          color: #ffb629;
        }
      }
    }
    .content {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 36px 0 44px;
      & > div {
        height: 100%;
        overflow: auto;
      }
    }
    .deal {
      padding: 10px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      button {
        font-size: 12px;
        padding: 4px 10px;
        line-height: 16px;
        border: 0;
        border-radius: 3px;
        &:first-child {
          color: #e64545;
          background-color: #f1f1f1;
        }
        &:last-child {
          color: #fff;
          background-color: #e64545;
        }
      }
    }
  }
}
</style>