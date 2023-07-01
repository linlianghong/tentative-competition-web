<script setup lang="ts">
import type { CSSProperties, PropType } from 'vue'
import titlebg from '~/assets/common/title-bg.png'

const props = defineProps({
  bg: String,
  h5bg: String,
  title: String,
  align: String,
  contentStyle: Object as PropType<CSSProperties>,
  titleStyle: Object as PropType<CSSProperties>,
  showHeader: { type: Boolean, default: false },
  showFooter: { type: Boolean, default: false },
})

const isShowFooter = ref(false)

const footerEl = ref<HTMLDivElement | null>()

function handleMousewheel(e: WheelEvent) {
  if (!props.showFooter)
    return
  const wheelDelta = (e as any).wheelDelta as number ?? e.detail
  if (wheelDelta > 0 && isShowFooter.value) { // 当鼠标滚轮向上滚动时
    e.stopPropagation()
    isShowFooter.value = false
  }
  if (wheelDelta < 0) { // 当鼠标滚轮向下滚动时
    isShowFooter.value = true
  }
}
</script>

<template>
  <div
    class="page-item"
    h="full" bg="no-repeat center cover" relative flex="~ col items-center justify-center" :style="{
      '--page-item-bg': `url(${bg})`,
      '--page-item-h5-bg': `url(${h5bg ?? bg})`,
      'marginTop': isShowFooter ? `-${footerEl?.clientHeight}px` : 0,
      'justifyContent': props.align,
      'backgroundPositionY': showHeader ? `var(--app-header-height)` : '',
    }"
    transition="margin duration-500"
    @wheel="handleMousewheel"
  >
    <TheHeader v-if="showHeader" />

    <!-- <img :src="bg" h-full w-full absolute="~ inset-0" object="center cover"> -->
    <div v-if="title" relative="~" text="28px" font="bold" flex="~ justify-center items-center" px="8em" m="t-4 b-8 " lt-lg="mt-6vw text-16px" :style="titleStyle">
      <span relative z="2">{{ title }}</span>
      <img absolute="~ inset-0" :src="titlebg" alt="">
    </div>
    <div w-full overflow-hidden px="1/10" :style="contentStyle">
      <slot />
    </div>
  </div>
  <div v-if="showFooter" ref="footerEl" w-full>
    <TheFooter />
  </div>
</template>

<style scoped>
.page-item {
  background-image: var(--page-item-bg);
}
@screen lt-lg {
  .page-item {
    background-image: var(--page-item-h5-bg);
  }
}
</style>
