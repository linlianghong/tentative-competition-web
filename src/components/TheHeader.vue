<script setup lang="tsx">
import { type MenuOption, NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import bg from '~/assets/header/header-bg.png'

const activeKey = ref('')

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
function menuNode() {
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
  mode="horizontal"
  options={menuOptions}
/>
}
</script>

<template>
  <n-layout-header h="$app-header-height!">
    <n-affix w="full!" h="$app-header-height!" :top="0!" text="#fff!" bg="no-repeat! cover!" :style="{ backgroundImage: `url(${bg})` }">
      <div flex="~ justify-between items-center " h="full" class="px-1/10 lt-lg:(justify-between px-4)">
        <n-popover>
          <template #trigger>
            <div class="i-carbon:menu cursor-pointer text-21px lg:hidden" />
          </template>
          <menuNode />
        </n-popover>
        <div text="28px" font="bold" max-w="253px" m="r-8" class="lt-lg:(max-w-none text-13px)" word-break="break-all">
          湖北省第二届微生物培养皿艺术设计大赛
        </div>
        <div h="full" class="lt-lg:hidden">
          <menuNode />
        </div>
        <div class="i-carbon:user cursor-pointer text-21px lg:hidden" />
        <div class="flex gap-4 lt-lg:hidden">
          <n-button type="default">
            注册
          </n-button>
          <n-button type="default">
            登录
          </n-button>
        </div>
      </div>
    </n-affix>
  </n-layout-header>
</template>

<style>
.layout-menu {
  @apply h-full! text-8!;
  .n-menu-item {
    @apply h-full!;
    .n-menu-item-content  {
      @apply h-full! border-b-6px!;
    }
  }

}
</style>
