<script setup lang="ts">
</script>

<template>
  <n-layout class="app-layout">
    <TheHeader />
    <n-layout-content
      :content-style="{

      }"
    >
      <n-layout
        class="app-layout-content" :content-style="{ height: `calc(100vh - var(--app-header-height))` }"
      >
        <n-layout-content
          h-full
          :content-style="{ height: `calc(100vh - var(--app-header-height))` }"
        >
          <RouterView />
        </n-layout-content>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.app-layout{
  --app-header-height: 110px;

  @apply h-full! flex-1!;

  @media (max-width: 1023.9px) {
    --app-header-height: 50px;

  }
  .app-layout-content {
    @apply h-full!;
  }
}
</style>
