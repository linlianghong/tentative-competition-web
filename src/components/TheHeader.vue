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
    label: () => <RouterLink to="">大赛动态</RouterLink>,
    key: '1',
  },
  {
    label: () => <RouterLink to="">我要参赛</RouterLink>,
    key: '2',
  },
  {
    label: () => <RouterLink to="">往届作品</RouterLink>,
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
  <n-layout-header h="$app-header-height">
    <n-affix w="full" h="$app-header-height" :top="0" text="#fff" bg="no-repeat" :style="{ backgroundImage: `url(${bg})` }">
      <div flex="~ justify-center items-center lt-lg:(justify-between px-4)" h="full">
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
      </div>
    </n-affix>
  </n-layout-header>
</template>

<style>
.layout-menu {
  @apply h-full text-8;
  .n-menu-item {
    @apply h-full;
    .n-menu-item-content  {
      @apply h-full border-b-6px!;
    }
  }

}
</style>
