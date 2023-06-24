<script setup lang="ts">
import titlebg from '~/assets/common/title-bg.png'

defineProps({ title: String })
</script>

<template>
  <div v-if="title" relative="~" text="28px" font="bold" flex="~ justify-center items-center" px="8em" m="t-6vw b-8 " lt-lg="mt-6vw text-16px">
    <span relative z="2">{{ title }}</span>
    <img absolute="~ inset-0" :src="titlebg" alt="">
  </div>
</template>
