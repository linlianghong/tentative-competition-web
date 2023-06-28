<script setup lang="ts">

</script>

<template>
  <div h-full flex="~ col gap-4">
    <div bg="#fff" p="4">
      <div text="" font="500" mb-2>
        最新公告
      </div>
      <div text="opacity-70">
        作品提交时间不得晚于6月30日，请各位参赛者尽快上传作品，文件大小不小于1M
      </div>
    </div>
    <div bg="#fff" flex="~ 1 justify-center items-center" p="4">
      <div w="2/5">
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">队伍账号： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center" />
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">绑定邮箱： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center" />
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">绑定手机： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center" />
          </span>
        </div>
        <div flex="~ gap-4 items-start" m="b-4">
          <span w-5em text="right 4">密码： </span>
          <span text="center 4 opacity-79" p="b-2" flex="~ 1" border="b-1 solid #e8e8e8">
            <span flex="1" text="center">*************</span>
          </span>
        </div>

        <div class="mt-10">
          <n-button type="primary" block>
            退出登陆
          </n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
