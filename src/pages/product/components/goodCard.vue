@<template>
  <div class="goodItem">
    <div class="prodlist-display">
      <div class="prodlist-inner" @click="$router.push(`/products/detail/${info.id}`)">
        <div class="prodlist-picbox">
          <div class="prodlist-cell">
            <a href="javascript:void(0)" :title="info.title"></a>
            <img src="../../../assets/images/goods/goods.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="prodlist-special" v-if="info.status">
      <span class="hot" v-show="info.status === 'hot'"></span>
      <span class="new" v-show="info.status === 'new'"></span>
      <span class="good" v-show="info.status === 'good'"></span>
    </div>
    <div class="prodlist-parameter-wrap">
      <div class="prodlist-parameter-inner">
        <a
          href="javascript:void(0)"
          class="prodlist-pro-name"
          :title="info.title"
          @click="$router.push(`/products/detail/${info.id}`)"
          style="height: 37px; line-height: 1.5em;"
        >{{info.title}}</a>
        <dl class="prodlist-defined-list"></dl>
        <dl class="prodlist-defined-list"></dl>
        <div class="prodlist-parameter-btns prodlist-btn-default">
          <button prodid="hNpAMBYWlzhE" class="default-button prodlist-pro-inquire">
            <i class="togetherClass icon-mail" aria-hidden="true"></i>Inquire
          </button>
          <a href="javascript:void(0);">
            <i class="icon-cart" aria-hidden="true"></i>
            <span>Add to Basket</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less">
.goodItem {
  padding: 4px;
  border: 1px solid #dcdcdc;
  max-width: 210px;
  position: relative;
  .prodlist-display {
    height: 200px;
    margin: 0 auto;
    cursor: pointer;
    .prodlist-inner {
      width: 100%;
      height: 100%;
      overflow: hidden;
      .prodlist-picbox {
        width: 100%;
        height: 100%;
        display: table;
        text-align: center;
        .prodlist-cell {
          display: table-cell;
          vertical-align: middle;
          position: relative;
          &:hover {
            a {
              &::before {
                transform: scale(1);
                opacity: 0.4;
              }
            }
          }
          a {
            font-size: 13px;
            color: rgb(51, 51, 51);
            font-weight: bold;
            letter-spacing: 0px;
            line-height: 1em;
            text-align: center;
            transition: all 0.3s;
            &::before {
              display: block;
              content: "";
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
              background-color: #000;
              opacity: 0;
              background-position: center;
              background-repeat: no-repeat;
              background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAACJJREFUCNdj+A8CDA0MDAyMBEkO6pBACxupZxoDA3EkxKcA1PQhWhUHl4gAAAAASUVORK5CYII=);
              transform: scale(0);
              transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
            }
          }
          img {
            max-width: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  .prodlist-special {
    position: absolute;
    top: 10px;
    right: -4px;
    span {
      display: block;
      width: 27px;
      height: 29px;
      margin-bottom: 4px;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAABrCAMAAACxKAmmAAAAk1BMVEUAAAAAAgAAAgAAAgAAAgD6UlJ5vkpKnL7////3+/b9qam836Wr1o7+1NTe79KBwlX7fX2bznf+6urv9+nm895zs838k5P/9fX8iIij0oP7c3Pl8fb+39+EvNOSymyKxmH6XV3N57zO5O672uew1OOYx9r9ycnV68dXpMP9tLT7aGh9udFnrMj9v7/F47D8np6025mp+NmgAAAABXRSTlMATBQ/K/zkOeQAAAGCSURBVEjH7dTZjoMgFAbg2aA/IOKutU5tp/s27fs/3RxMEzVRk5mLtknnv0DxAw8Gw8tf8jFgr+9vL7w/T2FwqRmjy3zA51yFXeZAzDl3N3S3ccxU0dWhsVNrKlIoeahKEX2L0AcvqYgjDBnNMDQR43loqOoUPo2godyaUFzBoYdVaJCgrjDWDHxuhAAHVfKnPIwiH5Hi1nyUVJNKiGh8gcNdOAbCVDa2X2dcxcs5IrtA6ruXR9yHW9p/fn9OsP48iUFSk+D6cCbz2nJ41Mrgah5mtWVVR2s2S9bJbK8ha5OQlFTmabBL9T4IktrWqda6QLamt55TpiWrLdhVVXJI+36GpGFV5wxmTRc58tq8apmngqVFJpF5yBqmbbuTzDuhSNg+wKPuw+3sSfM2YK8fA2bPiVF/7msLLPpsCyDusXjAlmTHbrPTRHe9WJAtO20Fm9Un5bBtWTxBI5OWtQiiZS2axP2GzwE79NtqNFBvwJb99jVq21cTj23bNnBxr/9sID/jnENRovkLmAAAAABJRU5ErkJggg==);
    }
    .hot {
      background-position: 0 -39px;
    }
    .new {
      background-position: 0 0;
    }
    .good {
      background-position: 0 -78px;
    }
  }
  .prodlist-parameter-wrap {
    .prodlist-parameter-inner {
      padding: 5px 0;
      a.prodlist-pro-name {
        font-family: Open Sans;
        display: block;
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 0;
        text-align: center;
        line-height: 1.5em !important;
        margin-bottom: 16px;
        color: rgb(51, 51, 51);
        text-decoration: none;
        overflow: hidden;
        &:hover {
          color: red;
          text-decoration: underline;
        }
      }
      .prodlist-parameter-btns {
        position: relative;
        .prodlist-pro-inquire {
          position: relative;
          height: 32px;
          width: 100%;
          background: #999;
          color: #fff;
          font-size: 14px;
          text-align: center;
        }
        .default-button {
          padding: 0;
          height: 40px;
          box-sizing: border-box;
          border-radius: 3px;
          border: 1px solid #d8dde6;
          background: #eaedef;
          color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          & > i {
            font-size: 20px;
            position: absolute;
            left: 0;
            display: block;
            width: 40px;
          }
        }
        a {
          color: #333;
          font-size: 14px;
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          width: 40px;
          border-left: 1px solid #d8dde6;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 18px;
          z-index: 1;
          transition: all 0.3s;
          overflow: hidden;
          & > span {
            display: none;
            white-space: nowrap;
            font-size: 14px;
          }
          &:hover {
            background: #999;
            width: 160px;
            & > span {
              display: inline-block;
            }
          }
        }
      }
    }
  }
}
</style>