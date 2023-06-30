<script setup lang="ts">
import bg from 'src/assets/previous-works/p1.webp'
import type { PreviousWork } from '~/api'
import { getPreviousWorks, getSchedules } from '~/api'
import SectionTitle from '~/components/SectionTitle.vue'
import PhotoCard from '~/pages/index/components/PhotoCard.vue'

const activeKey = ref('0')

const workName = ref('')

const store = useTeamInfoStore()

const { basicInfo } = storeToRefs(store)

const { data: works, run: getList } = useRequest(getPreviousWorks, {
  manual: true,
})

const { run: getSchedulesApi, data: schedules, loading } = useRequest(getSchedules, {
  manual: true,
  onSuccess(d) {
    activeKey.value = d.data[0]?.key
    getList({ scheduleId: activeKey.value, worksName: '' })
  },
})

const groupList = computed(() => {
  if (!works.value)
    return {}
  return works.value.data.reduce<Record<string, PreviousWork[]>>((obj, d) => {
    if (!obj[d.awardName]?.length)
      obj[d.awardName] = []
    obj[d.awardName].push(d)

    return obj
  }, {})
})

if (basicInfo.value?.scheduleId)
  getSchedulesApi(`${basicInfo.value.scheduleId}`)

// const { data: basicInfo } = useRequest(getBasicsInfoInfo, {
//   onSuccess(data) {
//     getSchedulesApi('1')
//   },
// })

function search() {
  getList({ scheduleId: activeKey.value, worksName: workName.value })
}

function hanldeUpdate(key: string) {
  activeKey.value = key
  search()
}
</script>

<template>
  <PageItem :bg="bg" show-footer :content-style="{ flex: 1 }">
    <div h-full py="4vw" @wheel.stop>
      <n-scrollbar>
        <n-spin :show="loading">
          <n-tabs v-model:value="activeKey" @update-value="hanldeUpdate">
            <n-tab-pane v-for="item of schedules?.data" :key="item.key" :name="item.key" :label="`${item.val}大赛作品`" />
          </n-tabs>
          <div>
            <n-input-group class="w-full!">
              <n-input v-model:value="workName" :style="{ width: '100%' }" placeholder="请输入作品名称" />
              <n-button type="primary" ghost @click="search">
                <template #icon>
                  <span class="i-carbon:search" />
                </template>
              </n-button>
            </n-input-group>
          </div>
          <!-- <div>
            <SectionTitle title="特等奖" />
            <div grid="~ cols-3 justify-center gap-4vw">
              <PhotoCard class="place-self-center" />
            </div>
          </div> -->
          <div>
            <SectionTitle title="一等奖" />
            <div flex="~ justify-center gap-4vw">
              <PhotoCard v-for="item of groupList['一等奖']" :id="item.worksId" :key="item.worksId" :max-height="220" :title="item.worksName" :desc="item.description" :img-url="item.worksImgMainUrl" />
            </div>
          </div>
          <div>
            <SectionTitle title="二等奖" />
            <div grid="~ cols-4 justify-center gap-4vw">
              <PhotoCard v-for="item of groupList['二等奖']" :id="item.worksId" :key="item.worksId" :max-height="150" :title="item.worksName" :desc="item.description" :img-url="item.worksImgMainUrl" />
            </div>
          </div>
          <div>
            <SectionTitle title="三等奖" />
            <div grid="~ cols-4 justify-center gap-4vw">
              <PhotoCard v-for="item of groupList['三等奖']" :id="item.worksId" :key="item.worksId" :max-height="150" :title="item.worksName" :desc="item.description" :img-url="item.worksImgMainUrl" />
            </div>
          </div>
          <div>
            <SectionTitle title="优秀奖" />
            <div grid="~ cols-4 justify-center gap-4vw">
              <PhotoCard v-for="item of groupList['优秀奖']" :key="item.worksId" :max-height="150" :title="item.worksName" :desc="item.description" :img-url="item.worksImgMainUrl" />
            </div>
          </div>
        </n-spin>
      </n-scrollbar>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
