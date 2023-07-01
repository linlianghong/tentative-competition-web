<script setup lang="ts">
import bg from '~/assets/home/home_3_03.jpg'
import h5bg from '~/assets/home/h5-home2.webp'
import img1 from '~/assets/home/pym.png'
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛简介">
    <div grid="~ cols-1 gap-4 items-center lg:cols-2">
      <div border="2px gray-2 solid" p="4" rounded-4 article bg="white opacity-70">
        湖北省微生物培养皿艺术设计大赛由华中农业大学、湖北省科学技术协会主办，通过微生物培养技术在培养皿上进行艺术创作，使在培养基上生长的、表达不同颜色的微生物组成各种各样积极向上的正能量图案，形成创意细菌画作品，展示微生物多姿多彩的“微”美世界，促进科学、人文与艺术融合，动员和激励广大青年学生参与科普创作，进一步推动微生物学知识科普。
      </div>
      <div>
        <img :src="img1" class="w-full object-contain">
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
