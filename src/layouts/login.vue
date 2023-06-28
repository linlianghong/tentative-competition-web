<template>
  <n-layout
    class="app-layout-content flex-1!" :content-style="{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }"
  >
    <RouterView />
  </n-layout>
</template>

<style scoped>
.app-layout-content {
    @apply h-screen! bg-cover bg-no-repeat;

    background-image: url(src/assets/login/bg.png);
  }
</style>
