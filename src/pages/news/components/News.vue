<script setup lang="ts">
import Notice from './Notice.vue'

import bg from '~/assets/home/home_3_03.jpg'
import h5bg from '~/assets/home/h5-home2.webp'

// const page = ref(0)
</script>

<template>
  <PageItem align="flex-start" :bg="bg" :h5bg="h5bg" show-footer style="justify-content: flex-start;">
    <div h-full gap-4 pt-4vw flex="~ col-reverse ">
      <div p="4" bg="white" h-full flex-1 overflow-hidden rounded-4 lt-gt="h-auto " flex="~ col ">
        <div min-h="4/5" flex-1 overflow-hidden>
          <n-scrollbar class="h-full!">
            <div flex="~ col gap-4">
              <!-- <NewsItem v-for="i of 10" :key="i" /> -->
            </div>
          </n-scrollbar>
        </div>
        <div m="t-4" flex="~ justify-center ">
          <!-- <n-pagination v-model:page="page" :page-size="10" :page-count="100" :page-slot="7" /> -->
        </div>
      </div>

      <Notice />
    </div>
  </PageItem>
</template>

<style scoped>

</style>
