<script setup lang="ts">

</script>

<template>
  <div m="x-10vw y-3vh" p="4" bg="#fff" rounded="xl">
    <div>
      <img>
    </div>
    <div p="4">
      <header>登陆</header>
      <n-form>
        <n-grid>
          <n-form-item-gi span="24">
            <n-input />
          </n-form-item-gi>
          <n-form-item-gi span="24">
            <n-input />
          </n-form-item-gi>
          <n-grid-item span="24">
            忘记密码
          </n-grid-item>
          <n-grid-item span="24">
            <n-button>登录</n-button>
          </n-grid-item>
          <n-grid-item span="24">
            <n-button>立即注册</n-button>
          </n-grid-item>
        </n-grid>
      </n-form>
    </div>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: login
</route>
