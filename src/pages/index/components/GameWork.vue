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
      /** todo */
      // run(d.data[0].key)
      run(`${basicInfo.value!.scheduleId}`)
  },
})

function handleDetail() {}
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="往届作品">
    <div m="" grid="~ cols-4 gap-4 lt-lg:cols-2">
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
      <PhotoCard @detail="handleDetail" />
    </div>
  </PageItem>
</template>

<style scoped>

</style>
