<script setup lang="ts">
import img1 from 'src/assets/enter-competition/ABUIABAEGAAgl5XRowYo4NTr3gEwoAU4lgQ!400x400.png.webp'
import bg from '~/assets/enter-competition/c2.webp'
import h5bg from '~/assets/enter-competition/hc2.webp'
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="参赛对象">
    <div text="5" h-full grid="~ cols-1 rows-2 gap-4 items-center lg:(cols-2 rows-1)" my="4vw">
      <div>
        <img :src="img1" class="w-full object-contain">
      </div>
      <div class="article" font="bold" text="4" border="2px gray-2 solid" p="4" rounded-4 bg="white opacity-70">
        湖北省内普通高等学校、科研院所相关专业学生。
        每支参赛队伍由团队成员、指导教师组成，团队成员最多3名，指导教师最多2名（其中必须包含1名科学指导教师，可以包含1名艺术指导教师），每名指导教师最多指导3支团队。
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
