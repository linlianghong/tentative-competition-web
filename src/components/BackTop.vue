<script setup lang="ts">
import type Swiper from 'swiper'

const props = defineProps<{
  swiper: Swiper
  activeIndex: number
}>()
function handleClick() {
  props?.swiper?.slideTo?.(0)
}
</script>

<template>
  <div :class="activeIndex === 0 ? 'hidden' : ''" position="fixed right-21px bottom-47px z-1" cursor-pointer transition="~ all 300">
    <n-icon size="48" @click="handleClick">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>回到顶部</title> <rect width="48" height="48" rx="24" ry="24" fill="rgba(186, 54, 210, 1)" /> <path d="M31.71,26.3l-7-7a1,1,0,0,0-1.4,0l-7,7a1,1,0,0,0,1.4,1.4L24,21.39l6.31,6.31a1,1,0,0,0,1.4-1.4Z" fill="#fff" fill-rule="evenodd" /></svg>
    </n-icon>
  </div>
</template>

<style scoped>

</style>
