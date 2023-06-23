<script setup lang="ts">
defineEmits<{ (e: 'detail'): void }>()
</script>

<template>
  <n-card hoverable class="news-item cursor-pointer rounded-4!" @click="$emit('detail')">
    <template #cover>
      <div p="4 b-0" class="w-full! overflow-hidden!">
        <img class="img" max-h="260px" object="contain center" src="https://30850783.s21i.faiusr.com/2/ABUIABACGAAg_YzJowYohpyj1gQwgAg4qgU!700x700.jpg.webp">
      </div>
    </template>
    <template #header>
      <div class="title" text="4!" font="bold!">
        <n-ellipsis>
          红船逐浪万里行
        </n-ellipsis>
      </div>
    </template>
    <div>
      <div text-14px>
        <n-ellipsis :line-clamp="2" :tooltip="{ contentStyle: { maxWidth: '50vw' } }">
          特等奖作品：《科技兴农》【作者】刘大【指导老师】泰勒【学校】华中农业大学【设计理念】本作品以二十大作为背景贯穿全作，运用了青年、党徽、稻穗、天安门、中国梦等元素，将投身于祖国的人民与党和实现伟大的中国梦相连，串成了一个小的故事。并以灭菌竹签和粗端牙签为画笔，以金黄色葡萄球菌、未知红色菌种和大肠杆菌为颜料，在普通LB培养基上逐步创作而成。【评委点评】秉承“变与不变”的理念，以古今飞天、汉字演变
        </n-ellipsis>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.news-item {

  &:hover {
    .title {
      @apply text-primary;
    }

    .img {
      @apply transition-width max-w-auto! w-[120%]!;
  }
}
}
</style>
