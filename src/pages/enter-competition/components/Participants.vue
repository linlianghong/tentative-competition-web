<script setup lang="ts">
import img1 from 'src/assets/enter-competition/people.png'
import bg from '~/assets/enter-competition/c2.webp'
import h5bg from '~/assets/enter-competition/hc2.webp'
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="参赛对象">
    <div text="5" h-full flex="~ gap-4 items-center justify-center lt-lg:col">
      <div>
        <img :src="img1" class="w-full object-contain">
      </div>
      <div
        :style="{ textIndent: 0 }" class="article" font="bold" text="4" border="2px gray-2 solid" p="4" rounded-4 bg="white opacity-70" lg="w-58%"
      >
        <ul list="disc " m="l-4" text="5">
          <li>湖北省内普通高等学校、科研院所相关专业学生均可参加。</li>
          <li>每支参赛队伍由团队成员、指导教师组成，团队成员最多<span text="primary 30px" font="700">3</span><span font="700">名</span>，指导教师最多<span text="primary 30px" font="700">2</span><span font="700">名</span>（其中必须包含<span text="primary 30px" font="700">1</span><span font="700">名科学指导教师</span>，可以包含<span text="primary 30px" font="700">1</span><span font="700">名艺术指导教师</span>），每名指导教师最多指导<span text="primary 30px" font="700">3</span><span font="700">支</span>团队。</li>
        </ul>
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
