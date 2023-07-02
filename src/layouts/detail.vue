<template>
  <n-layout class="app-layout">
    <TheHeader />
    <n-layout-content
      :content-style="{
        minHeight: 'calc(100vh - var(--app-header-height))',
      }"
    >
      <n-layout
        class="app-layout-content flex-1!" :content-style="{
          minHeight: 'calc(100vh - var(--app-header-height))',

        }"
      >
        <n-layout-content>
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
  --app-header-height: 80px;

  @apply h-full!;

  @media (max-width: 1023.9px) {
    --app-header-height: 50px;

  }
  .app-layout-content {
    @apply h-full!;
  }
}
</style>
