<script setup lang="ts">
import type { FormInst, FormItemInst } from 'naive-ui'
import img from 'src/assets/login/img.png'
import { getCode, register as registerApi } from '~/api'

const form = ref<FormInst | null>()

const emailItem = ref<FormItemInst | null>()

const formData = ref({ name: '', email: '', code: '', psw1: '', psw2: '' })

const showCodeTime = ref(false)

const codeTime = ref(60)

const router = useRouter()

function register() {
  form.value?.validate().then(() => {
    registerApi({
      code: formData.value.code,
      email: formData.value.email,
      password: formData.value.psw1,
      // phonenumber: formData.value.code,
      // schoolName: formData.value.code,
      // status: formData.value.code,
      username: formData.value.name,
    }).then((res) => {
      console.log(res)

      router.push('/login')
    })
  })
}
function login() {
  router.push('/login')
}

async function sendCode() {
  await emailItem.value?.validate()

  getCode(formData.value.email).then((res) => {
    console.log(res)

    showCodeTime.value = true

    const timer = setInterval(() => {
      codeTime.value -= 1
      if (codeTime.value <= 0) {
        codeTime.value = 60
        showCodeTime.value = false
        clearInterval(timer)
      }
    }, 1000)
  })
}

function validatorPsw(v1: string, v2: string) {
  return v1 !== v2 ? new Error('密码不一致') : true
}
</script>

<template>
  <div w-60vw m="" p="" bg="#fff" rounded="xl" flex="~" overflow="hidden">
    <div flex="~ items-center 1" bg="#F8F8F8">
      <img object-contain :src="img">
    </div>
    <div flex="1" p="6">
      <header>
        <span title-board>注册</span>
      </header>
      <div m="t-6">
        <n-form ref="form" :model="formData">
          <n-grid>
            <n-form-item-gi span="24" label="账号" :label-style="{ fontSize: '16px' }" :rule="[{ trigger: 'blur', required: true, message: '请输入账号名' }]" path="name" :show-require-mark="false">
              <n-input v-model:value="formData.name" placeholder="请输入队伍名">
                <template #prefix>
                  <div class="i-carbon:user" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-form-item-gi ref="emailItem" span="24" label="邮箱" :label-style="{ fontSize: '16px' }" :rule="[{ trigger: 'blur', required: true, message: '请输入邮箱' }, { trigger: 'blur', type: 'email', message: '请输入正确的邮箱地址' }]" path="email" :show-require-mark="false">
              <n-input v-model:value="formData.email" placeholder="请输入邮箱">
                <template #prefix>
                  <div class="i-carbon:locked" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-form-item-gi span="24" label="验证邮箱" :label-style="{ fontSize: '16px' }" :rule="[{ trigger: 'blur', required: true, message: '请输入验证码' }]" path="code" :show-require-mark="false">
              <n-input-group>
                <n-input v-model:value="formData.code" placeholder="请输入邮箱验证码">
                  <template #prefix>
                    <div class="i-carbon:locked" opacity-40 />
                  </template>
                </n-input>
                <n-button :disabled="showCodeTime" type="primary" @click="sendCode">
                  {{ showCodeTime ? `${codeTime}秒` : '发送验证码' }}
                </n-button>
              </n-input-group>
            </n-form-item-gi>
            <n-form-item-gi span="24" label="密码" :label-style="{ fontSize: '16px' }" :rule="[{ trigger: 'blur', required: true, message: '请输入密码' }, { validator: (r, v) => validatorPsw(v, formData.psw2) }]" path="psw1" :show-require-mark="false">
              <n-input v-model:value="formData.psw1" placeholder="请输入密码" type="password">
                <template #prefix>
                  <div class="i-carbon:locked" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-form-item-gi span="24" label="请再次输入密码" :label-style="{ fontSize: '16px' }" :rule="[{ trigger: 'blur', required: true, message: '请输入密码' }, { validator: (r, v) => validatorPsw(v, formData.psw1) }]" path="psw2" :show-require-mark="false">
              <n-input v-model:value="formData.psw2" placeholder="请输入密码" type="password">
                <template #prefix>
                  <div class="i-carbon:locked" opacity-40 />
                </template>
              </n-input>
            </n-form-item-gi>
            <n-form-item-gi span="24" :show-feedback="false">
              <n-button type="primary" :block="true" @click="register">
                注册
              </n-button>
            </n-form-item-gi>
            <n-form-item-gi span="24">
              <n-button text :block="true" :show-feedback="false" class="text-primary!" @click="login">
                已有账号，立即登录
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
