<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import Banner from './components/Banner.vue'
import HistoryPhotos from './components/HistoryPhotos.vue'
import { useLayoutStore } from '~/stores/layout'

const modules = [Mousewheel, Pagination]
const swiperInst = ref()
const activeIndex = ref(0)
const { isMobile } = storeToRefs(useLayoutStore())
</script>

<template>
  <Swiper
    :allow-touch-move="isMobile"
    no-swiping
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

    @active-index-change="activeIndex = $event.activeIndex"
    @init="swiperInst = $event"
  >
    <SwiperSlide><Banner /></SwiperSlide>
    <SwiperSlide>
      <HistoryPhotos />
    </SwiperSlide>
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
