<script setup lang="ts">
</script>

<template>
  <n-layout class="app-layout">
    <n-layout-content
      :content-style="{

      }"
    >
      <n-layout
        class="app-layout-content" :content-style="{ height: `100%` }"
      >
        <n-layout-content
          h-full
          :content-style="{ height: `100vh` }"
        >
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.app-layout{
  --app-header-height: 80px;

  @apply h-full! flex-1!;

  @media (max-width: 1023.9px) {
    --app-header-height: 50px;

  }
  .app-layout-content {
    @apply h-full!;
  }
}
</style>
