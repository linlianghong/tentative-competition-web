<script setup lang="ts">
import { useSwiper } from 'swiper/vue'
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

const swiper = useSwiper()

// if (swiper.value)
//   swiper.value.allowTouchMove = false

// swiperEvent()

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

// const scrolling = ref(false)

function handleContentWheel(e: WheelEvent) {
  const target = e.currentTarget as HTMLDivElement

  console.log('wheel')

  if (!target)
    return

  const { scrollHeight, clientHeight, scrollTop } = target

  if (scrollHeight > clientHeight) {
    const wheelDelta = (e as any).wheelDelta as number ?? e.detail
    if (wheelDelta > 0) { // 当鼠标滚轮向上滚动时
      if (scrollTop > 0)
        e.stopPropagation()
    }
    if (wheelDelta < 0) { // 当鼠标滚轮向下滚动时
      if (scrollTop >= 0 && (scrollTop + clientHeight) < scrollHeight)
        e.stopPropagation()
    }
  }
}

function handleContentScroll() {

}

const { handleTouchStart, handleTouchMove } = (() => {
  let startX = 0
  let startY = 0
  let moveEndX = 0
  let moveEndY = 0
  let X
  let Y

  let timer = 0

  function handleTouchStart(e: TouchEvent) {
    e.preventDefault()
    return

    startX = e.touches[0].pageX

    startY = e.touches[0].pageY
  }

  function handleTouchMove(e: TouchEvent) {
    // swiper.value.allowTouchMove = true
    e.preventDefault()

    return

    const target = e.currentTarget as HTMLDivElement
    // console.dir(target)

    if (!target)
      return

    const { scrollHeight, clientHeight, scrollTop } = target

    // e.preventDefault()

    moveEndX = e.changedTouches[0].pageX

    moveEndY = e.changedTouches[0].pageY

    X = moveEndX - startX

    Y = moveEndY - startY

    if (Math.abs(X) > Math.abs(Y) && X > 0) {

      // alert('向右')
    }

    else if (Math.abs(X) > Math.abs(Y) && X < 0) {

      // alert('向左')
    }

    else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
      console.log('向下')
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (scrollHeight > clientHeight) {
          if (scrollTop > 0 && (scrollTop + clientHeight) < scrollHeight)
            e.stopPropagation()
          // e.stopImmediatePropagation()
          // e.preventDefault()
          // swiper.value.allowTouchMove = false

          else
            swiper.value.slidePrev()
        }
        else {
          swiper.value.slidePrev()
        }
      })
    }

    else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
      console.log('向上')
      if (scrollHeight > clientHeight) {
        if (scrollTop > 0)
          e.stopPropagation()
          // e.stopImmediatePropagation()
          // e.preventDefault()

        // swiper.value.allowTouchMove = false

        else
          swiper.value.slideNext()

        // swiper.value.allowTouchMove = true
      }
      else {
        swiper.value.slideNext()
      }
    }
    else {
      // swiper.value.allowTouchMove = true
    }

    // else

    // alert('没滑动')
  }
  return { handleTouchMove, handleTouchStart }
})()
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
    overflow="hidden"
    @wheel="handleMousewheel"
  >
    <TheHeader v-if="showHeader" />

    <!-- <img :src="bg" h-full w-full absolute="~ inset-0" object="center cover"> -->
    <div v-if="title" relative="~" text="28px" font="bold" flex="~ justify-center items-center" px="8em" m="t-4 b-8 " lt-lg="mt-6vw text-16px" :style="titleStyle">
      <span relative z="2">{{ title }}</span>
      <img absolute="~ inset-0" :src="titlebg" alt="">
    </div>
    <div w-full overflow-auto px="1/10" :style="contentStyle" class="" @wheel="handleContentWheel" @scroll="handleContentScroll" @touchmove="handleTouchMove" @touchstart="handleTouchStart">
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
