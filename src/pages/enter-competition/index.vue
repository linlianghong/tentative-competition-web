<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import bg from 'src/assets/enter-competition/WechatIMG88.jpeg'
import Banner from './components/Banner.vue'
import GameProfile from './components/GameProfile.vue'
import Participants from './components/Participants.vue'
import EntryRequirements from './components/EntryRequirements.vue'
import PrizeSettings from './components/PrizeSettings.vue'
import Standard from './components/Standard.vue'
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
      <PageItem :bg="bg" :h5bg="bg" title="大赛主题" :content-style="{ height: '70%' }">
        <div />
      </PageItem>
    </SwiperSlide>
    <SwiperSlide>
      <GameProfile />
    </SwiperSlide>
    <SwiperSlide>
      <Participants />
    </SwiperSlide>
    <SwiperSlide>
      <EntryRequirements />
    </SwiperSlide>
    <SwiperSlide>
      <PrizeSettings />
    </SwiperSlide>
    <SwiperSlide>
      <Standard />
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
