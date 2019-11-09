const state = {
  menu: [
    {
      label: "Home",
      path: "/",
      exact: true
    },
    {
      label: "Products",
      path: "/products",
      children: []
    },
    {
      label: "News",
      path: "/news"
    },
    {
      label: "About Us",
      path: "/about"
    },
    {
      label: "Contact Us",
      path: "/contact"
    }
  ]
};

const mutations = {
  SET_PRODUCTS: (state, menu) => {
    state.menu[1].children = menu;
  }
};

const actions = {
  // fetch products
  fetchProducts({ commit }) {
    const productPath = "/products/list";
    const products = [
      { label: "Industrial Dryer", id: 0 },
      { label: "Impact Mill", id: 1 },
      { label: "Powder Mixer", id: 2 },
      { label: "Wet Granulator", id: 3 },
      { label: "Conveying Equipment", id: 4 }
    ];

    commit(
      "SET_PRODUCTS",
      products.map(v => {
        return {
          label: v.label,
          path: `${productPath}/${v.id}`
        };
      })
    );
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
