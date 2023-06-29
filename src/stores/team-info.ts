import { acceptHMRUpdate, defineStore } from 'pinia'
import { getRegisterInfo } from '~/api'

export const useTeamInfoStore = defineStore('team-info', () => {
  const teamInfo = ref()

  function updateTeamInfo() {
    return getRegisterInfo().then((res) => {

    })
  }

  return {
    teamInfo,
    updateTeamInfo,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
