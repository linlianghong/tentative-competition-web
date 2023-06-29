<script setup lang="ts">
import timeline from 'src/assets/home/time-line.png'
import bg from '~/assets/home/home_3_04.jpg'
import h5bg from '~/assets/home/h5-home3.webp'
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛时间">
    <div class="h-full w-full" p="x-1/10" flex="~ justify-center items-center">
      <img :src="timeline" w-full object-contain>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
