<template>
  <n-layout class="app-layout">
    <TheHeader />
    <n-layout-content
      :content-style="{

      }"
    >
      <n-layout
        flex-1 class="app-layout-content" :content-style="{
          height: `calc(100vh - var(--app-header-height))`,
          display: 'flex',
          flexDirection: 'column',
        }"
      >
        <n-layout-content flex-1 :content-style="{ height: '100%' }">
          <RouterView />
        </n-layout-content>
        <n-layout-footer>
          <TheFooter />
        </n-layout-footer>
      </n-layout>
    </n-layout-content>
  </n-layout>
</template>

<style scoped>
.app-layout{
  --app-header-height: 110px;

  @apply h-full;

  @media (max-width: 1023.9px) {
    --app-header-height: 50px;

  }
  .app-layout-content {
    @apply h-full;
  }
}
</style>
