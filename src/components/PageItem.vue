<script setup lang="ts">
import titlebg from '~/assets/common/title-bg.png'

defineProps({
  bg: String,
  title: String,
})
</script>

<template>
  <div h="full" bg="no-repeat center cover" relative flex="~ col justify-center items-center">
    <img :src="bg" h-full w-full absolute="~ inset-0" object="center cover">
    <div v-if="title" relative="~" flex="~ justify-center items-center" px="8em" m="t-4 b-8">
      <span relative z="2" text="28px" font="bold">{{ title }}</span>
      <img absolute="~ inset-0" :src="titlebg" alt="">
    </div>
    <slot />
  </div>
</template>

<style scoped>

</style>
