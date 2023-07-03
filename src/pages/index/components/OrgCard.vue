<script setup lang="ts">
defineProps<{
  unit: string
  logo: string
  info: string
  url: string
}>()
</script>

<template>
  <a :href="url" target="_blank" m="t-70px" rounded-4 bg="white opacity-70" shadow="~ md" lt-lg="mt-50px">
    <div flex="~ justify-center">
      <div bg="white opacity-70" p="2" class="-mt-50px" h-100px w-100px rounded="1/2" lt-lg="h-70px w-70px -mt-35px">
        <img h-full w-full object="contain" :src="logo">
      </div>
    </div>
    <div text="center 5" m="t-4 b-6" lt-lg="text-3">
      {{ unit }}
    </div>
    <div text="6 center" font-500 border="t solid #ECECEC" p="y-4" lt-lg="text-4">
      {{ info }}
    </div>
  </a>
</template>

<style scoped>

</style>
