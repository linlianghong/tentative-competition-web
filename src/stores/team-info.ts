import { acceptHMRUpdate, defineStore } from 'pinia'
import type { UserInfo } from '~/api'
import { getUserInfo } from '~/api'

export const useTeamInfoStore = defineStore('team-info', () => {
  const teamInfo = ref()

  const userInfo = ref<UserInfo>()

  const isLogin = ref(false)

  function updateTeamInfo() {
    return getUserInfo().then((res) => {
      isLogin.value = true
      userInfo.value = res.user
      // return getRegisterInfo(res.user.)
    })
  }

  function loginOut() {
    isLogin.value = false
    clearTokenStorage()
  }

  return {
    teamInfo,
    isLogin,
    userInfo,
    updateTeamInfo,
    loginOut,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTeamInfoStore as any, import.meta.hot))
