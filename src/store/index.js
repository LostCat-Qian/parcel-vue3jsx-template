import { defineStore } from 'pinia'
import useUserStore from './modules/userStore'

const useStore = defineStore('main', () => {
  // Create store instance
  // All your stores should be instantiated here
  const userStore = useUserStore()

  return {
    userStore
  }
})

export default useStore
