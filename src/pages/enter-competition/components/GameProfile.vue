<script setup lang="ts">
import bg from '~/assets/enter-competition/c1.webp'
import h5bg from '~/assets/enter-competition/hc1.webp'
import img1 from '~/assets/enter-competition/xwj.png'
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛内容">
    <div text="5" h-full flex="~ gap-4 items-center justify-center lt-lg:col">
      <div w="58.33% lt-lg:full" class="article" border="2px gray-2 solid" p="4" bg="white opacity-70" overflow-auto rounded-4>
        <div>参赛团队依据大赛主题，通过微生物培养技术在培养皿上进行艺术创作，使在培养基上生长的、表达不同颜色的微生物组成各种各样积极向上的正能量图案；同时需对相关微生物的种类、生长情况、颜色情况等进行科学研究，以更好地利用微生物进行艺术创作，形成创意细菌画作品。</div>

        <div>大赛主要考察参赛团队的微生物基本知识、基本实验操作能力和研究能力、艺术设计和创造能力等。</div>
      </div>
      <div>
        <img :src="img1" class="w-full object-contain">
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
