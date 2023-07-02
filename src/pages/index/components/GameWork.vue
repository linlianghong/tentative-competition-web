<script setup lang="ts">
import PhotoCard from './PhotoCard.vue'
import bg from '~/assets/home/home_3_05.jpg'
import h5bg from '~/assets/home/h5-home4.webp'
import { getHomeHistoryWorks, getSchedules } from '~/api'

const { basicInfo } = storeToRefs(useTeamInfoStore())

const { data, run } = useRequest(getHomeHistoryWorks, {
  manual: true,
})

useRequest(getSchedules, {
  defaultParams: [`${basicInfo.value?.scheduleId}`],
  onSuccess(d) {
    if (d.data?.length)
      // TODO
      // run(d.data[0].key)
      run()
  },
})

function handleDetail() {}

const router = useRouter()
function handleMore() {
  router.push('/previous-works')
}
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="往届作品">
    <div m="" grid="~ cols-4 gap-4 lt-lg:cols-2">
      <PhotoCard v-for="item of data?.data" :id="item.worksId" :key="item.worksId" :img-url="item.imgUrl" :title="item.worksName" :desc="item.content" @detail="handleDetail" />
    </div>

    <div m="t-2vw" text="center">
      <div btn @click="handleMore">
        查看更多
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
