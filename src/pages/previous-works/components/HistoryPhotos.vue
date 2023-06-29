<script setup lang="ts">
import bg from 'src/assets/previous-works/p1.webp'
import { getBasicsInfoInfo, getPreviousWorks, getSchedules } from '~/api'
import SectionTitle from '~/components/SectionTitle.vue'
import PhotoCard from '~/pages/index/components/PhotoCard.vue'

const activeKey = ref('0')

const workName = ref('')

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

const { data: basicInfo } = useRequest(getBasicsInfoInfo, {
  onSuccess(data) {
    getSchedulesApi('1')
  },
})

function search() {
  getList({ scheduleId: activeKey.value, worksName: workName.value })
}

function hanldeUpdate() {
  search()
}
</script>

<template>
  <PageItem :bg="bg" show-footer>
    <div h-full my="4vw" @wheel.stop>
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
          <div>
            <SectionTitle title="特等奖" />
            <div grid="~ cols-3 justify-center gap-4vw">
              <PhotoCard class="place-self-center" />
            </div>
          </div>
          <div>
            <SectionTitle title="一等奖" />
            <div grid="~ cols-3 justify-center gap-4vw">
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
            </div>
          </div>
          <div>
            <SectionTitle title="二等奖" />
            <div grid="~ cols-3 justify-center gap-4vw">
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
              <PhotoCard />
            </div>
          </div>
        </n-spin>
      </n-scrollbar>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
