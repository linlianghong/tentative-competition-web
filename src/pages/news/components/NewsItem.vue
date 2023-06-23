<script setup>
import { formatDate } from '@vueuse/core'
</script>

<template>
  <div p="4" flex="~ row gap-4 lt-lg:col">
    <div min-w="180px" flex="shrink-1 basis-180px">
      <img w-full object="contain" src="https://30850783.s21i.faiusr.com/2/ABUIABACGAAg_YzJowYohpyj1gQwgAg4qgU!700x700.jpg.webp">
    </div>
    <div flex="~ 1 col justify-between ">
      <div>
        <div text="18px" mb-4 font-500>
          <n-ellipsis>2023芬兰AG设计奖中芬国际文华大使进行标题占位标题占位标题</n-ellipsis>
        </div>
        <div text="14px">
          {{ formatDate(new Date(), 'YYYY-MM-DD') }}
        </div>
      </div>
      <div text="4" border="b-1 solid">
        <n-ellipsis
          :line-clamp="2" :tooltip="{
            contentStyle: {
              maxWidth: '50vw',
            },
          }"
        >
          5月15日，针对阿里达摩院自动驾驶实验室并入菜鸟集团一事，界面新闻记者独家获悉，此次业标题占位标题占位标题占位标题占位标题占位标题占位标题占位标题占位标题占位标题占位...
        </n-ellipsis>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
