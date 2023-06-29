<script setup lang="ts">
import bg from 'src/assets/previous-works/p1.webp'
import SectionTitle from '~/components/SectionTitle.vue'
import PhotoCard from '~/pages/index/components/PhotoCard.vue'

const activeKey = ref('0')

//  const {data} = useRequest()
</script>

<template>
  <PageItem :bg="bg" show-footer>
    <div h-full my="4vw" @wheel.stop>
      <n-scrollbar>
        <n-tabs v-model:value="activeKey">
          <n-tab-pane name="0" label="第三届大赛作品" />
          <n-tab-pane name="1" label="第二届大赛作品" />
          <n-tab-pane name="2" label="第一届大赛作品" />
        </n-tabs>
        <div>
          <n-input-group class="w-full!">
            <n-input :style="{ width: '100%' }" />
            <n-button type="primary" ghost>
              <template #icon>
                <span class="i-carbon:search" />
              </template>
            </n-button>
          </n-input-group>
        </div>
        <div>
          <SectionTitle title="特等奖" />
          <div grid="~ cols-3 justify-center gap-4vw">
            <PhotoCard />
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
      </n-scrollbar>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
