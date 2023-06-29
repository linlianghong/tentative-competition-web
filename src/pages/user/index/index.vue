<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const store = useTeamInfoStore()

store.updateTeamInfo()

const menus = [
  {
    label: '账户信息',
    path: '/user/profile',
    key: 0,
  },
  {
    label: '报名信息',
    path: '/user/enter',
    key: 1,
  },
  {
    label: '作品信息',
    path: '/user/info',
    key: 2,
  },
]

const activeKey = ref(0)

const menuOptions: MenuOption[] = menus.map(d => (
  {
    label: () => <RouterLink to={d.path} >{d.label}</RouterLink>,
    key: d.key,
  }
))
</script>

<template>
  <div flex="~ row gap-4" p="x-10vw" bg="#F8F8F8" h="full">
    <div p="4" bg="#fff">
      <n-menu v-model:value="activeKey" mode="vertical" :options="menuOptions" />
    </div>
    <div h="full" flex="1">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
