const state = {
  inquire: {
    1233: {
      id: 1233,
      name: "Air Classifying Mill Pulverizer",
      img:
        "//5ororwxhmplorik.ldycdn.com/cloud/lrBqjKmrRinSlomorilq/1-120-120.jpg",
      quantity: 1
    }
  }
};

const mutations = {
  UPDATE_INQUIRE: (state, payload) => {
    const { inquire } = state;
    const { id } = payload;
    if (Reflect.has(inquire, id)) {
      state.inquire[id] = Object.assign(state.inquire[id], payload)
    }else{
      inquire[id] = payload;
    }
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
