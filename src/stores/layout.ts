import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout-store', () => {
  const isMobile = ref(false)

  function updateIsMobile(e: boolean) {
    isMobile.value = e
  }

  return {
    isMobile,
    updateIsMobile,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLayoutStore as any, import.meta.hot))
