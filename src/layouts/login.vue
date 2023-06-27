<template>
  <n-layout
    class="app-layout-content flex-1!" :content-style="{
    }"
  >
    <n-layout-content class="flex-1!" :content-style="{ height: '100%' }">
      <RouterView />
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.app-layout-content {
    @apply h-full!;
  }
</style>
