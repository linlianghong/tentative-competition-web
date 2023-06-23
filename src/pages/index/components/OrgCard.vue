<script setup lang="ts">
defineProps<{
  unit: string
  logo: string
  info: string
}>()
</script>

<template>
  <div m="t-70px" rounded-4 bg="white opacity-70" shadow="~ md">
    <div flex="~ justify-center">
      <div bg="white opacity-70" p="2" class="-mt-50px" h-100px w-100px rounded="1/2">
        <img h-full w-full rounded="1/2" :src="logo">
      </div>
    </div>
    <div text="center 5" m="t-4 b-6">
      {{ unit }}
    </div>
    <div text="6 center" font-500 border="t solid #ECECEC" p="y-4">
      {{ info }}
    </div>
  </div>
</template>

<style scoped>

</style>
