<script setup lang="ts">
import bg from 'src/assets/previous-works/ABUIABACGAAgy6zOowYo1PXyoQYwgA84iCc.jpg.webp'
import avatarimg from 'src/assets/common/avatar1.png'
import { useRequest } from 'vue-request'
import { getRegisterInfo, getWorkById } from '~/api'

const route = useRoute()

const { run, data: registerInfo } = useRequest(getRegisterInfo, {
  manual: true,
})

const { data } = useRequest(getWorkById, {
  defaultParams: [route.params.id as string],
  onSuccess(data) {
    run(`${data.data.userId}`)
  },
})
</script>

<template>
  <div bg="no-repeat cover" p="x-10vw t-5vw" h-full :style="{ backgroundImage: `url(${bg})` }">
    <div m="b-30px" text="18px" font="bold">
      {{ data?.data.worksName }}
    </div>

    <div flex="~ gap-4" m="b-47px">
      <n-avatar :src="avatarimg" size="medium" round />
      <div>
        <div text="14px" font="500">
          {{ registerInfo?.data.username }}
        </div>
        <div text="3 opacity-70">
          {{ registerInfo?.data.schoolName }}
        </div>
      </div>
    </div>

    <div leading="5">
      {{ data?.data.studyContent }}
    </div>

    <div flex="~ col gap-4">
      <div v-for="item of data?.data.worksImgList" :key="item.id">
        <n-image
          lazy
          width="1000"
          :src="item.fileUrl"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
