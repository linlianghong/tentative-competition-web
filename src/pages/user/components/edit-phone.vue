<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { updateUserInfo } from '~/api'

const reg = /^1[0-9]{10}$/

const show = ref(false)

const form = ref<FormInst | null>()

const formData = ref({ phone: '', code: '' })

const message = useMessage()

const store = useTeamInfoStore()
const { userInfo } = storeToRefs(store)

const { run, loading } = useRequest(updateUserInfo, {
  manual: true,
  onSuccess() {
    show.value = false
    message.success('修改成功')
    store.updateTeamInfo()
  },
})

function handleOpen() {
  show.value = true
}
function handleSubmit() {
  form.value?.validate().then(() => {
    run({ userId: userInfo.value?.userId, phonenumber: formData.value.phone })
  })
}
</script>

<template>
  <n-button text @click="handleOpen">
    <div class="i-carbon:edit" />
  </n-button>

  <n-modal
    v-model:show="show"
    class="w-50vw! lt-lg:w-90vw!"
    preset="card"
    title="修改绑定手机"
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

    <div m="x-20% lt-lg:x-0">
      <n-form ref="form" :model="formData">
        <n-grid>
          <n-form-item-gi path="phone" label="手机号" span="24" :rule="[{ required: true, message: '请输入手机号', trigger: 'blur' }, { trigger: 'blur', pattern: reg, message: '请输入正确的手机号' }]">
            <n-input v-model:value="formData.phone" placeholder="请输入手机号" />
          </n-form-item-gi>
          <!-- <n-form-item-gi name="code" label="验证码" span="24">
            <n-input-group>
              <n-input v-model:value="formData.code" placeholder="请输入邮箱验证码" :rule="[{ required: true, message: '请输入验证码' }]">
                <template #prefix>
                  <div class="i-carbon:locked" opacity-40 />
                </template>
              </n-input>
              <n-button :disabled="showCodeTime" type="primary" text :loading="codeLoading" @click="sendCode">
                {{ showCodeTime ? `${codeTime}秒` : '发送验证码' }}
              </n-button>
            </n-input-group>
          </n-form-item-gi> -->
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
