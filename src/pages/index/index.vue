<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import Welcome from './components/Welcome.vue'
import GameDynamics from './components/GameDynamics.vue'
import GameProfile from './components/GameProfile.vue'
import GameWork from './components/GameWork.vue'
import GameOrg from './components/GameOrg.vue'
import GameDate from './components/GameDate.vue'
import { useLayoutStore } from '~/stores/layout'

const modules = [Mousewheel, Pagination]

const swiperInst = ref()
const activeIndex = ref(0)

const { isMobile } = storeToRefs(useLayoutStore())
</script>

<template>
  <Swiper
    no-swiping
    :allow-touch-move="isMobile"
    :speed="1000"
    direction="vertical"
    :slides-per-view="1"
    :space-between="0"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
    no-swiping-class="no-swiping"
    @active-index-change="activeIndex = $event.activeIndex"
    @init="swiperInst = $event"
  >
    <SwiperSlide><Welcome /></SwiperSlide>
    <SwiperSlide><GameDynamics /></SwiperSlide>
    <SwiperSlide><GameProfile /></SwiperSlide>
    <SwiperSlide><GameDate /></SwiperSlide>
    <SwiperSlide><GameWork /></SwiperSlide>
    <SwiperSlide><GameOrg /></SwiperSlide>
  </Swiper>

  <BackTop :swiper="swiperInst" :active-index="activeIndex" />
</template>

<style scoped>
.mySwiper {
  @apply h-full;
}
</style>

<route lang="yaml">
meta:
  layout: no-footer
</route>
