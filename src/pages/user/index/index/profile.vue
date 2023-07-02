<script setup lang="ts">
import { storeToRefs } from 'pinia'
import EditEmail from '../../components/edit-email.vue'
import EditPhone from '../../components/edit-phone.vue'
import EditPassword from '../../components/edit-password.vue'

const store = useTeamInfoStore()

const { userInfo } = storeToRefs(store)

const router = useRouter()
function handleLogout() {
  store.loginOut()
  router.push('/')
}
</script>

<template>
  <div h-full flex="~ col gap-4">
    <div bg="#fff" p="4">
      <div text="" font="500" mb-2>
        最新公告
      </div>
      <div text="opacity-70">
        参赛报名时间不得晚于9月15日，请各位参赛团队尽快提交报名信息，大赛采取实名制，同一团队仅能注册一个账号，同一指导老师至多指导3个参赛团队。
      </div>
    </div>
    <div bg="#fff" flex="~ 1 justify-center items-center" p="4">
      <div w="2/5">
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">队伍账号： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center">{{ userInfo?.userName }}</span>
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">绑定邮箱： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center">{{ userInfo?.email }}</span>
            <EditEmail />
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">绑定手机： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center">{{ userInfo?.phonenumber }}</span>
            <EditPhone />
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">密码： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center">*************</span>
            <EditPassword />
          </span>
        </div>

        <div class="mt-10">
          <n-button type="primary" block @click="handleLogout">
            退出登陆
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
