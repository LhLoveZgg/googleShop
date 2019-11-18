const state = {
  inquire: {},
  basket: []
};

const mutations = {
  UPDATE_INQUIRE: (state, payload) => {
    const { inquire } = state;
    const { id } = payload;

    // mock
    payload = Object.assign(payload, {
      name: "Air Classifying Mill Pulverizer",
      img:
        "//5prorwxhmplojik.ldycdn.com/cloud/loBqjKmrRinSkpqklqlq/640-40-40.jpg"
    });

    if (Reflect.has(inquire, id)) {
      state.inquire[id] = Object.assign(state.inquire[id], payload);
    } else {
      inquire[id] = payload;
    }
    state.basket = Object.values(inquire)
  },
  CLEAR: state => {
    state.inquire = {};
    state.basket = [];
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
