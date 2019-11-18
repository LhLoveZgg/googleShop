<template>
  <div class="crumbs" v-show="!exclude.includes($route.name)">
    <div class="main container">
      <p>
        You are here:
        <template v-for="(route, i) in routes">
          <template v-if="i + 1 < routes.length">
            <a :key="route.path"
              ><router-link :to="route.path">{{ route.name }}</router-link> »</a
            >
          </template>
          <span v-else :key="route.path">{{ route.name }}</span>
        </template>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      root: {
        path: "/",
        name: "Home"
      },
      routes: [],
      exclude: ["index", "order"]
    };
  },
  watch: {
    $route: {
      immediate: true,
      deep: true,
      handler(nv) {
        if (nv.name === "list" && nv.params.id) {
          let module;
          switch (nv.params.id) {
            case "1":
              module = "Industrial Dryer";
              break;
            case "2":
              module = "Impact Mill";
              break;
            case "3":
              module = "Powder Mixer";
              break;
            case "4":
              module = "Wet Granulator";
              break;
            case "5":
              module = "Conveying Equipment";
              break;
            default:
              break;
          }

          this.routes = [
            this.root,
            {
              path: "/products",
              name: "Product"
            },
            {
              path: `/products/list/${nv.params.id}`,
              name: module
            }
          ];
        } else {
          this.routes = [
            this.root,
            {
              path: nv.path,
              name: nv.meta.title
            }
          ];
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/style/varibles.less";
.crumbs {
  background-color: #7d7d7d;
  .main {
    display: flex;
    align-items: center;
    p {
      font-size: 18px;
      color: #fff;
      letter-spacing: 0;
      line-height: 2em;
      text-align: left;
      padding: 10px 0;
    }
    span {
      margin-left: 16px;
    }
  }
}
</style>
