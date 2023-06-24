<script setup lang="ts">
import bg from 'src/assets/enter-competition/c5.webp'
import img1 from 'src/assets/enter-competition/ABUIABAEGAAglpXRowYossfzmwQwkQI4twI.png.webp'
import img2 from 'src/assets/enter-competition/ABUIABAEGAAglpXRowYo0vncjwQwkQI4twI.png.webp'
import img3 from 'src/assets/enter-competition/ABUIABAEGAAglpXRowYosLT6-QIwkQI4twI.png.webp'
import img4 from 'src/assets/enter-competition/ABUIABAEGAAgl5XRowYotK7B0AQwkQI4twI.png.webp'
</script>

<template>
  <PageItem :bg="bg" title="评判标准" show-footer>
    <div h-full p="b-10vw" flex="~ col justify-between items-center">
      <div flex="lg:1" grid="~ gap-4vw rows-2 cols-2  lg:(items-center cols-4 rows-1)">
        <div><img w-full object-cover :src="img1"></div>
        <div><img w-full object-cover :src="img2"></div>
        <div><img w-full object-cover :src="img3"></div>
        <div><img w-full object-cover :src="img4"></div>
      </div>
      <div flex="~ gap-4vw justify-center">
        <div border="1px primary solid" cursor="pointer" rounded="2" p="y-2vw x-5vw">
          报名参赛
        </div>
        <div border="1px primary solid" cursor="pointer" rounded="2" p="y-2vw x-5vw">
          附件下载
        </div>
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
