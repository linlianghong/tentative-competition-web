<script setup lang="ts">
import logogqt from 'src/assets/home/org-gqt.png'
import logohbwsw from 'src/assets/home/org-hbwsw.png'
import logojksw from 'src/assets/home/org-jksw.png'
import logosky from 'src/assets/home/org-sky.png'
import logozgwsw from 'src/assets/home/org-zgwsw.png'
import logokx from 'src/assets/home/logo-kexie.png'
import logoHuanong from 'src/assets/home/logo-huanong.png'
import OrgCard from './OrgCard.vue'
import h5bg from '~/assets/home/h5-home5.jpg'
import bg from '~/assets/home/home_3_06.png'

const a = [{
  logo: logoHuanong,
  unit: '华中农业大学',
  info: '主办方',
  url: 'http://www.hzau.edu.cn/',
},
{
  logo: logokx,
  unit: '湖北省科学技术协会',
  info: '主办方',
  url: 'http://www.hbkx.org.cn/',
},
{
  logo: logogqt,
  unit: '共青团湖北省委员会',
  info: '主办方',
  url: 'http://www.hbgqt.org.cn/',
},
]

const b = [{
  logo: logosky,
  unit: '华中农业大学生命科学技术学院',
  info: '承办方',
  url: 'http://lst.hzau.edu.cn/',
}, {
  logo: logoHuanong,
  unit: '华中农业大学现代农业生命科学技术科普基地',
  info: '承办方',
  url: 'http://lst.hzau.edu.cn/',
}, {
  logo: logoHuanong,
  unit: '华中农业大学科学技术协会',
  info: '承办方',
  url: 'http://www.hzau.edu.cn/',
},
]
const c = [{
  logo: logozgwsw,
  unit: '中国微生物学会',
  info: '协办方',
  url: 'http://www.csm1952.org.cn/',
}, {
  logo: logohbwsw,
  unit: '湖北微生物学会',
  info: '协办方',
  url: 'http://www.csm1952.org.cn/',
}, {
  logo: logohbwsw,
  unit: '武汉微生物学会',
  info: '协办方',
  url: 'http://whwswxh.shetuan365.cn/',
},
]
const d = [{
  logo: logojksw,
  unit: '微康益生菌（苏州）股份有限公司',
  info: '赞助商',
  url: 'http://www.wecare-bio.com/',
},
]

const logos = [a, b, c, d]
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" show-footer title="组织机构" :content-style="{ flex: 1 }">
    <div h-full lt-lg="mt-0 overflow-hidden" class="no-swiping" @wheel.stop>
      <n-scrollbar class="h-full!">
        <div v-for="(arr, i) of logos" :key="i" flex="~ gap-8 justify-center wrap lt-lg:(gap-2)" lt-lg="transform">
          <OrgCard v-for="item of arr" :key="item.unit" :url="item.url" :info="item.info" :logo="item.logo" :unit="item.unit" class="max-w-1/3 min-w-1/4 flex-1 lt-lg:(max-w-1/2 min-w-2/5)" />
        </div>
      </n-scrollbar>
    </div>
  </PageItem>
</template>

<style scoped>
:deep(.n-scrollbar-rail.n-scrollbar-rail--vertical) {
  display: none;
}
</style>
