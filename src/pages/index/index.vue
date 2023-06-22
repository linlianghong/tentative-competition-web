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

const modules = [Mousewheel, Pagination]
</script>

<template>
  <Swiper
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
    <SwiperSlide><Welcome /></SwiperSlide>
    <SwiperSlide><GameDynamics /></SwiperSlide>
    <SwiperSlide><GameProfile /></SwiperSlide>
    <SwiperSlide><GameDate /></SwiperSlide>
    <SwiperSlide><GameDynamics /></SwiperSlide>
    <SwiperSlide><GameWork /></SwiperSlide>
    <SwiperSlide><GameOrg /></SwiperSlide>
  </Swiper>
</template>

<style scoped>
.mySwiper {
  @apply h-full;
}
</style>
