import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profiles: [],
  },
  mutations: {
    setProfiles(state, profiles) {
      state.profiles = profiles;
    },
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    fetchProfiles({ commit }) {
      // Fetch profiles from API
      // Example:
      // fetch('https://api.example.com/profiles')
      //   .then(response => response.json())
      //   .then(data => commit('setProfiles', data))
      //   .catch(error => console.error('Error fetching profiles', error));
    },
  },
  getters: {
    getProfileById: (state) => (id) => state.profiles.find((profile) => profile.id === id),
  },
});
