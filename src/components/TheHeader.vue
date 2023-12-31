<script setup lang="tsx">
import { type MenuOption, NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import { NAffix } from 'naive-ui'
import { storeToRefs } from 'pinia'
import avatarImg from 'src/assets/common/avatar1.png'
import logo from 'src/assets/common/logo.png'
import bg from '~/assets/header/header-bg.png'

const router = useRouter()

const activeKey = ref('')

const store = useTeamInfoStore()

const { isLogin, userInfo } = storeToRefs(store)

const showDrawer = ref(false)

const menuOptions: MenuOption[] = [
  {
    label: () => <RouterLink to="/" >首页</RouterLink>,
    key: '0',
  },
  {
    label: () => <RouterLink to="/news">大赛动态</RouterLink>,
    key: '1',
  },
  {
    label: () => <RouterLink to="/enter-competition">我要参赛</RouterLink>,
    key: '2',
  },
  {
    label: () => <RouterLink to="/previous-works">往届作品</RouterLink>,
    key: '3',
  },
]

router.beforeEach(() => {
  showDrawer.value = false
})

function menuNode({ mode = 'horizontal' }) {
  return <NMenu
  v-model={activeKey}
  class="layout-menu h-full text-8"
  theme-overrides={{
    itemTextColorHorizontal: '#fff',
    itemTextColorHoverHorizontal: '#fff',
    itemTextColorActiveHorizontal: '#fff',
    itemIconColorHoverHorizontal: '#fff',
    borderColorHorizontal: '#fff',
    itemTextColorActiveHoverHorizontal: '#fff',
  }}
  mode={mode}
  options={menuOptions}
/>
}
</script>

<template>
  <n-layout-header h="$app-header-height!">
    <NAffix w="full!" h="$app-header-height!" :top="0!" text="#fff!" bg="no-repeat! cover!" :style="{ backgroundImage: `url(${bg})` }">
      <div flex="~ justify-between items-center " h="full" class="px-1/10 lt-lg:(justify-between px-4)">
        <div class="i-carbon:menu cursor-pointer text-21px lg:hidden" @click="showDrawer = true" />

        <div flex="~ justify-center">
          <div m="r-2">
            <img :src="logo" h-50px object-contain lt-lg="h-20px">
          </div>
          <div text="20px" font="bold" max-w="190px" m="r-8" class="lt-lg:(max-w-none text-13px)" word-break="break-all">
            湖北省微生物培养皿艺术设计大赛
          </div>
        </div>
        <div h="full" class="lt-lg:hidden">
          <menuNode />
        </div>

        <div class="flex gap-4 lt-lg:hidden">
          <template v-if="!isLogin">
            <n-button
              :theme-overrides="{
                borderHover: '#fff',
                borderFocus: '#fff',
                borderPressed: '#fff',
                textColor: '#fff',
                textColorHover: '#fff',
                textColorFocus: '#fff',
                textColorPressed: '#fff',
              }" type="default" @click="router.push('/register')"
            >
              注册
            </n-button>
            <n-button
              :theme-overrides="{
                borderHover: '#fff',
                borderFocus: '#fff',
                borderPressed: '#fff',
                textColor: '#fff',
                textColorHover: '#fff',
                textColorFocus: '#fff',
                textColorPressed: '#fff',
              }" type="default" @click="router.push('/login')"
            >
              登录
            </n-button>
          </template>
          <template v-else>
            <n-popover
              trigger="click" :style="{
                borderRadius: '8px',
              }"
            >
              <template #trigger>
                <n-avatar round :src="avatarImg" />
              </template>
              <div p="2" cursor="pointer" text="center">
                <div p="x-4 y-2" hover="bg-gray-1" @click="router.push('/user/profile')">
                  {{ userInfo?.userName }}
                </div>
                <div p="x-4 y-2" hover="bg-gray-1" @click="store.loginOut(); router.push('/')">
                  退出
                </div>
              </div>
            </n-popover>
          </template>
        </div>

        <div flex="~ gap-4 items-center" lg="hidden">
          <n-popover
            trigger="click" :style="{
              borderRadius: '8px',
            }"
          >
            <template #trigger>
              <n-avatar round :src="avatarImg" />
            </template>
            <div p="2" cursor="pointer" text="center">
              <template v-if="isLogin">
                <div p="x-4 y-2" hover="bg-gray-1" @click="router.push('/user/profile')">
                  {{ userInfo?.userName }}
                </div>
                <div p="x-4 y-2" hover="bg-gray-1" @click="store.loginOut(); router.push('/')">
                  退出
                </div>
              </template>
              <template v-else>
                <div p="x-4 y-2" hover="bg-gray-1" @click="router.push('/login')">
                  登陆
                </div>
                <div p="x-4 y-2" hover="bg-gray-1" @click="router.push('/register')">
                  注册
                </div>
              </template>
            </div>
          </n-popover>
        </div>
      </div>
    </NAffix>
  </n-layout-header>

  <n-drawer v-model:show="showDrawer" mask-closable width="100vw" height="70vh" placement="top">
    <n-drawer-content title="湖北省微生物培养皿艺术设计大赛">
      <menuNode mode="vertical" />
    </n-drawer-content>
  </n-drawer>
</template>

<style>
.layout-menu.n-menu--horizontal {
  @apply h-full! text-6!;
  .n-menu-item {
    @apply h-full! mx-6!;
    .n-menu-item-content  {
      @apply h-full! border-b-6px!;
    }
  }

}
</style>
