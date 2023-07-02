<script setup lang="tsx">
import type { MenuOption } from 'naive-ui'
import { RouterLink } from 'vue-router'

const store = useTeamInfoStore()

store.updateTeamInfo()

const dialog = useDialog()

store.updateApplyInfo().then((data) => {
  if (!data?.memberInfoVos?.length) {
    dialog.warning({
      title: '',
      content: '请尽快提交报名信息!',
    })
  }
})

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

const router = useRouter()

router.beforeEach((to, from, next) => {
  if (to.path.includes('user/info')) {
    message.warning('未到提交作品时间')
    next(false)
  }
  else {
    next()
  }
})
</script>

<template>
  <div flex="~ row gap-4" p="x-10vw" bg="#F8F8F8" h="full" lt-lg="flex-col px-0">
    <div p="4" bg="#fff" lt-lg="hidden">
      <n-menu v-model:value="activeKey" mode="vertical" :options="menuOptions" />
    </div>
    <div p="4" bg="#fff" lg="hidden">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
    </div>
    <div h="full" flex="1">
      <router-view />
    </div>
  </div>
</template>

<style scoped>

</style>
