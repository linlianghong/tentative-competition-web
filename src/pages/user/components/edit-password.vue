<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { updateUserInfo } from '~/api'

const show = ref(false)

const form = ref<FormInst | null>()

const formData = ref({ psw1: '', psw2: '' })

const message = useMessage()

const { run, loading } = useRequest(updateUserInfo, {
  manual: true,
  onSuccess() {
    show.value = false
    message.success('修改成功')
  },
})

function handleOpen() {
  show.value = true
}
const { userInfo } = storeToRefs(useTeamInfoStore())

function handleSubmit() {
  form.value?.validate().then(() => {
    run({ userId: userInfo.value?.userId, password: formData.value.psw1 })
  })
}

function validatorPsw(v1: string, v2: string) {
  return v1 !== v2 ? new Error('密码不一致') : true
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
    title="修改账户密码"
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
          <n-form-item-gi path="psw1" label="新密码" span="24" :rule="[{ trigger: 'blur', required: true, message: '请输入新密码' }, { trigger: 'blur', validator: (r, v) => validatorPsw(v, formData.psw2) }]">
            <n-input v-model:value="formData.psw1" type="password" placeholder="请输入密码" />
          </n-form-item-gi>
          <n-form-item-gi path="psw2" label="确认新密码" span="24" :rule="[{ trigger: 'blur', required: true, message: '请再次输入新密码' }, { trigger: 'blur', validator: (r:any, v:string) => validatorPsw(v, formData.psw1) }]">
            <n-input v-model:value="formData.psw2" type="password" placeholder="请再次输入新密码" />
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
