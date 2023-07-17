import { defineStore } from 'pinia'

const useUserStore = defineStore({
  id: 'user',
  state() {
    return {
      username: 'RjQm'
    }
  },
  getters: {
    compName(state) {
      return 'Getters: ' + state.username
    }
  },
  actions: {}
})

export default useUserStore
