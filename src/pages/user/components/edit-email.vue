<script setup lang="ts">
import type { FormInst, FormItemInst } from 'naive-ui'
import { getEmailCode, updateUserInfoByCode } from '~/api'

const show = ref(false)

const emailItem = ref<FormItemInst | null>()

const form = ref<FormInst | null>()

const formData = ref({ email: '', code: '' })

const store = useTeamInfoStore()
const { userInfo } = storeToRefs(store)

const message = useMessage()

const { run, loading } = useRequest(updateUserInfoByCode, {
  manual: true,
  onSuccess() {
    show.value = false
    store.updateTeamInfo()
    message.success('修改成功')
  },
})

const showCodeTime = ref(false)

const codeTime = ref(60)

const { run: sendEmailCode, loading: codeLoading } = useRequest(getEmailCode, {
  manual: true,
  onSuccess() {
    message.success('发送验证码成功')

    showCodeTime.value = true

    const timer = setInterval(() => {
      codeTime.value -= 1
      if (codeTime.value <= 0) {
        codeTime.value = 60
        showCodeTime.value = false
        clearInterval(timer)
      }
    }, 1000)
  },
})

function handleOpen() {
  show.value = true
}

async function sendCode() {
  await emailItem.value?.validate()

  sendEmailCode(formData.value.email)
}

function handleSubmit() {
  form.value?.validate().then(() => {
    run({ userId: userInfo.value?.userId, email: formData.value.email, code: formData.value.code })
  })
}
</script>

<template>
  <n-button text @click="handleOpen">
    <div class="i-carbon:edit" />
  </n-button>

  <n-modal
    v-model:show="show"
    class="custom-card"
    preset="card"
    :style="{ width: '50vw' }"
    title="修改绑定邮箱"
    size="huge"
    :bordered="false"
    :segmented="{
      content: 'soft',
      footer: 'soft',
    }"
    :content-style="{

    }"
    closable
  >
    <!-- <template #header-extra>
      噢!
    </template> -->

    <div m="x-20%">
      <n-form ref="form" :model="formData">
        <n-grid>
          <n-form-item-gi ref="emailItem" path="email" label="邮箱" span="24" :rule="[{ required: true, trigger: 'blur', message: '请输入邮箱' }, { type: 'email', trigger: 'blur', message: '请输入正确的邮箱' }]">
            <n-input v-model:value="formData.email" placeholder="请输入邮箱" />
          </n-form-item-gi>
          <n-form-item-gi path="code" label="验证码" span="24" :rule="[{ required: true, trigger: 'blur', message: '请输入验证码' }]">
            <n-input v-model:value="formData.code" placeholder="请输入邮箱验证码">
              <template #suffix>
                <n-button :disabled="showCodeTime" type="default" class="text-primary!" text :loading="codeLoading" @click="sendCode">
                  {{ showCodeTime ? `${codeTime}秒` : '发送验证码' }}
                </n-button>
              </template>
            </n-input>
          </n-form-item-gi>
          <n-grid-item span="24">
            <n-button block type="primary" :loading="loading" @click="handleSubmit">
              确定
            </n-button>
          </n-grid-item>
        </n-grid>
      </n-form>
    </div>
    <template #footer />
  </n-modal>
</template>

<style scoped>

</style>
