<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import Banner from './components/Banner.vue'
import HistoryPhotos from './components/HistoryPhotos.vue'

const modules = [Mousewheel, Pagination]
</script>

<template>
  <Swiper
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
  >
    <SwiperSlide><Banner /></SwiperSlide>
    <SwiperSlide>
      <HistoryPhotos />
    </SwiperSlide>
  </Swiper>
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
