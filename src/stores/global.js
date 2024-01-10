import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    user: null,
    authUser: null
  }),
  getters: {},
  actions: {
    setUser(user) {
      this.user = user
      this.saveState()
    },
    setAuthUser(user) {
      this.authUser = user
      this.saveState()
    },
    saveState() {
      localStorage.setItem('piniaState', JSON.stringify(this.$state));
    },
    loadState() {
      const storedState = localStorage.getItem('piniaState');
      if (storedState) {
        this.$state = JSON.parse(storedState);
      }
    },
  },
})

