<script setup lang="tsx">
import { type DataTableColumns, NButton, NSpace } from 'naive-ui'
import { usePagination } from 'vue-request'
import UploadWork from '../../components/upload-work.vue'
import { getSubmitWorkList } from '~/api'

const showModal = ref(false)

// const data = ref([])

const store = useTeamInfoStore()

const { basicInfo, userInfo } = storeToRefs(store)

const { data, current, total, pageSize, run } = usePagination(getSubmitWorkList, {
  defaultParams: [{
    scheduleId: basicInfo.value?.scheduleId,
    userId: userInfo.value?.userId,
    pageNumber: 1,
    pageSize: 10,
  }],
  pagination: {
    currentKey: 'pageNumber',
    pageSizeKey: 'pageSize',
    totalKey: 'total',
  },
})

const columns: DataTableColumns = [
  {
    title: '缩略图',
    key: 'no',
  },
  {
    title: '作品名称',
    key: 'title',
  },
  {
    title: '提交日期',
    key: 'length',
  },
  {
    title: '状态',
    key: 'length',
  },
  {
    title: '操作',
    key: 'length',
    render(row) {
      return <NSpace>
        <NButton>提交</NButton>
        <NButton>查看</NButton>
        <NButton>修改</NButton>
      </NSpace>
    },
  },
]

function handleUpload() {
  showModal.value = true
  // modal.create({
  //   title: '上传作品',
  //   // internalStyle: {
  //   //   width: '80vw',
  //   // },
  //   width: '80vw',
  //   style: { width: '80vw' },
  //   action: () => null,
  //   content: () => <UploadWork />,
  // })
}

function handleSubmit() {
  showModal.value = false
  current.value = 0
  run({
    pageNumber: current.value,
    pageSize: pageSize.value,
    scheduleId: basicInfo.value?.scheduleId,
    userId: userInfo.value?.userId,
  })
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
    <div bg="#fff" flex="~ 1  col" p="4">
      <n-data-table
        remote
        flex-height
        :columns="columns"
        :data="data?.data"
        :bordered="false"
        :pagination="{
          itemCount: total,
          pageSize,
          page: current,
          onUpdatePage(page) {
            current.value = page
          },
        }"
      />

      <div text="4 " font="500" m="y-4">
        提交作品
      </div>

      <div cursor="pointer" w="100px" h="100px" border="~ #ECECEC solid " flex="~ justify-center items-center" @click="handleUpload">
        <div class="i-carbon:add text-50px" />
      </div>

      <div text="opacity-70" m="t-4">
        注：最多提交3个作品
      </div>
    </div>
  </div>

  <n-modal v-model:show="showModal" closable>
    <n-card
      style="width: 80vw;  overflow: hidden;"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header>
        <div text="center">
          上传作品
        </div>
      </template>
      <UploadWork @submit="handleSubmit" />
    </n-card>
  </n-modal>
</template>

<style scoped>

</style>
