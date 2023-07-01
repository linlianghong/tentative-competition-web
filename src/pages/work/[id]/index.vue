<script setup lang="ts">
import bg from 'src/assets/previous-works/ABUIABACGAAgy6zOowYo1PXyoQYwgA84iCc.jpg.webp'
import { useRequest } from 'vue-request'
import { FreeMode, Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { getRegisterInfo, getWorkById } from '~/api'
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { getAssetUrl } from '~/utils/misc'

const route = useRoute()

const modules = [FreeMode, Navigation, Thumbs]

const thumbsSwiper = ref()

function setThumbsSwiper(swiper: any) {
  thumbsSwiper.value = swiper
}

const { run, data: registerInfo } = useRequest(getRegisterInfo, {
  manual: true,
})

const { data } = useRequest(getWorkById, {
  defaultParams: [route.params.id as string],
  onSuccess(data) {
    run(`${data.data.userId}`)
  },
})

const imgs = computed(() => {
  return [data.value?.data.worksImgMainVo, ...(data.value?.data.worksImgList ?? [])]
})
</script>

<template>
  <div bg="no-repeat cover" p="x-10vw t-5vw" h-full :style="{ backgroundImage: `url(${bg})` }">
    <div m="b-30px" text="20px center" font="700">
      {{ data?.data.worksName }}
    </div>
    <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :space-between="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
    >
      <SwiperSlide v-for="item of imgs" :key="item?.id">
        <img
          h-full w-full object-contain
          :src="getAssetUrl(item?.fileUrl ?? '')"
        >
      </SwiperSlide>
    </Swiper>
    <Swiper
      :space-between="10"
      :slides-per-view="4"
      :free-mode="true"
      :watch-slides-progress="true"
      :modules="modules"
      class="mySwiper"
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide v-for="item of imgs" :key="item?.id">
        <img
          w-full object-contain
          :src="getAssetUrl(item?.fileUrl ?? '')"
        >
      </SwiperSlide>
    </Swiper>

    <!-- <div flex="~ gap-4" m="b-47px">
      <n-avatar :src="avatarimg" size="medium" round />
      <div>
        <div text="14px" font="500">
          {{ registerInfo?.data.username }}
        </div>
        <div text="3 opacity-70">
          {{ registerInfo?.data.schoolName }}
        </div>
      </div>
    </div> -->

    <div leading="24px" text="4 #666" m="y-5">
      <div whitespace="pre-wrap">
        {{ data?.data.content }}
      </div>
      <!-- <div v-if="data?.data.awardName">
        【所获奖项】{{ data?.data.awardName }}
      </div>
      <div v-if="registerInfo?.data.memberInfos?.length">
        【团队成员】{{ registerInfo?.data.memberInfos.map(d => d.memberName).join('、') }}
      </div>
      <div v-if="data?.data.studyContent">
        【研究内容】{{ data?.data.studyContent }}
      </div>
      <div v-if="data?.data.worksOriginality">
        【创意理念】{{ data?.data.worksOriginality }}
      </div>
      <div v-if="data?.data.worksIntro">
        【作品简介】{{ data?.data.worksIntro }}
      </div> -->
    </div>

    <!-- <div flex="~ col gap-4">
      <div v-for="item of data?.data.worksImgList" :key="item.id">
        <n-image
          lazy
          width="1000"
          :src="item.fileUrl"
        />
      </div>
    </div> -->
  </div>
</template>

<style scoped>
.mySwiper2 {
  @apply h-700px;
  .swiper-slide {
    @apply text-center bg-white;
  }
}
.mySwiper {
  @apply h-150px;
}
</style>

<route lang="yaml">
meta:
  layout: detail
  </route>
