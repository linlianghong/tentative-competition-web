<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import img from 'src/assets/login/img.png'
import { login as loginApi } from '~/api'

const form = ref<FormInst | null>()

const formData = ref({ name: '', psw: '' })

const router = useRouter()

const store = useTeamInfoStore()

const { run: api, loading } = useRequest(loginApi, {
  manual: true,
  onSuccess(res) {
    setTokenStorage(res.token)
    store.updateTeamInfo()
    router.push('/user/profile')
  },

})

function login() {
  form.value?.validate().then(() => {
    api({ password: formData.value.psw, username: formData.value.name })
  })
}
function register() {
  router.push('/register')
}

function handleBack() {
  router.back()
}
</script>

<template>
  <div w-60vw m="" p="" bg="#fff" rounded="xl" flex="~" overflow="hidden">
    <div flex="1" bg="#F8F8F8">
      <img object-contain :src="img">
    </div>
    <div flex="~ 1 col justify-center" p="6">
      <div m="b-4">
        <div class="i-carbon:arrow-left cursor-pointer text-4 font-700 text-primary" @click="handleBack" />
      </div>
      <header>
        <span title-board>登录</span>
      </header>
      <div m="t-6">
        <n-form ref="form" :model="formData">
          <n-grid>
            <n-form-item-gi span="24" label="队伍名" :label-style="{ fontSize: '16px' }" :rule="[{ required: true, message: '请输入队伍名' }]" path="name" :show-require-mark="false">
              <n-input v-model:value="formData.name" placeholder="请输入队伍名">
                <template #prefix>
                  <div class="i-carbon:user" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-form-item-gi span="24" label="密码" :label-style="{ fontSize: '16px' }" :rule="[{ required: true, message: '请输入密码' }]" path="psw" :show-require-mark="false">
              <n-input v-model:value="formData.psw" placeholder="请输入密码" type="password">
                <template #prefix>
                  <div class="i-carbon:locked" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-grid-item span="24" text-right>
              <n-button text>
                忘记密码
              </n-button>
            </n-grid-item>
            <n-form-item-gi span="24" :show-feedback="false">
              <n-button type="primary" :block="true" :loading="loading" @click="login">
                登录
              </n-button>
            </n-form-item-gi>
            <n-form-item-gi span="24">
              <n-button text :block="true" :show-feedback="false" class="text-primary!" @click="register">
                立即注册
              </n-button>
            </n-form-item-gi>
          </n-grid>
        </n-form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

<route lang="yaml">
meta:
  layout: login
</route>
