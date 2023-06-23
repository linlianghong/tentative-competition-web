<script setup lang="ts">
import NewsCard from './NewsCard.vue'
import bg from '~/assets/home/home_3_02.jpg'
import h5bg from '~/assets/home/h5-home1.jpg'

function handleDetail() {}
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛动态">
    <div m="t-4vw" grid="~ cols-4 gap-4 lt-lg:cols-2">
      <NewsCard @detail="handleDetail" />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
    <div text-center m="t-5vw">
      <div text="20px" border="1 primary solid" p="y-4 x-8vw" inline-block rounded-2 font-600 lt-lg="px-4vw py-2vw text-4" hover=" text-white bg-primary">
        了解更多
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
