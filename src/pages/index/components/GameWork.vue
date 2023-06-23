<script setup lang="ts">
import PhotoCard from './PhotoCard.vue'
import bg from '~/assets/home/home_3_05.jpg'
import h5bg from '~/assets/home/h5-home4.webp'

function handleDetail() {}
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛作品">
    <div m="t-4vw" grid="~ cols-4 gap-4 lt-lg:cols-2">
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
