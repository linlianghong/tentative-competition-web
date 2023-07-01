<script setup lang="ts">
import bg from 'src/assets/enter-competition/c4.webp'
import cup from 'src/assets/enter-competition/ABUIABAEGAAgl5XRowYokKiplQcw8QQ4ggQ!600x600.png.webp'
import no0 from 'src/assets/enter-competition/ABUIABAEGAAg8vzRowYooeC_iQIw9QU4kgE!600x600.png.webp'
import no1 from 'src/assets/enter-competition/ABUIABAEGAAg8-zRowYooNXR8wYw9QE4jAI!200x200.png.webp'
import no2 from 'src/assets/enter-competition/ABUIABAEGAAg8vzRowYo68iD7gEw2QE4_wE.png.webp'
import no3 from 'src/assets/enter-competition/ABUIABAEGAAg8vzRowYomNPfsAcw2QE4_wE.png.webp'
import no4 from 'src/assets/enter-competition/ABUIABAEGAAg8-zRowYogOikrwMw9QU4kgE!600x600.png.webp'
</script>

<template>
  <PageItem :bg="bg" title="奖项设置" :title-style="{ marginBottom: '4vw' }">
    <div h-full grid="~ cols-1 gap-4vw items-center lg:cols-2">
      <div grid="~ cols-3 items-center gap-4" font="bold">
        <div grid="col-span-3">
          <img w-full object="cover" :src="no0">
        </div>
        <div>
          <img w-full object="cover" :src="no1">
        </div>
        <div>
          <img w-full object="cover" :src="no2">
        </div>
        <div>
          <img w-full object="cover" :src="no3">
        </div>
        <div grid="col-span-3">
          <img w-full object="cover" :src="no4">
        </div>
      </div>
      <div>
        <img :src="cup" class="w-full object-contain">
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
