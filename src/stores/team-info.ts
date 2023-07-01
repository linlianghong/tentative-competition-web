import { acceptHMRUpdate, defineStore } from 'pinia'
import type { BasicInfo, SubmitApplyParams, UserInfo } from '~/api'
import { getBasicsInfoInfo, getSubmitApply, getUserInfo } from '~/api'

export const useTeamInfoStore = defineStore('team-info', () => {
  const teamInfo = ref()

  const userInfo = ref<UserInfo>()

  const isLogin = ref(false)

  const basicInfo = ref<BasicInfo>()

  const applyInfo = ref<SubmitApplyParams>()

  function updateBasicInfo() {
    return getBasicsInfoInfo().then((res) => {
      basicInfo.value = res.data
    })
  }

  function updateTeamInfo() {
    return getUserInfo().then((res) => {
      isLogin.value = true
      userInfo.value = res.user
      // return getRegisterInfo(res.user.)
    }, () => {
      isLogin.value = false
      userInfo.value = undefined
    })
  }

  function updateApplyInfo() {
    return getSubmitApply().then((res) => {
      applyInfo.value = res.data
      return res.data
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
    basicInfo,
    applyInfo,
    updateTeamInfo,
    updateBasicInfo,
    updateApplyInfo,
    loginOut,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTeamInfoStore as any, import.meta.hot))
