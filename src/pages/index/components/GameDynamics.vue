<script setup lang="ts">
import NewsCard from './NewsCard.vue'
import bg from '~/assets/home/home_3_02.jpg'
import h5bg from '~/assets/home/h5-home1.jpg'

const router = useRouter()
function handleClick() {
  router.push('/news')
}

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
      <div btn @click="handleClick">
        了解更多
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
