<script setup lang="ts">
import OrgCard from './OrgCard.vue'
import bg from '~/assets/home/home_3_06.png'
import h5bg from '~/assets/home/h5-home5.jpg'
import logoHuanong from '~/assets/home/logo-huanong.png'
import logoKexie from '~/assets/home/logo-kexie.png'

const a = [{
  logo: logoHuanong,
  unit: '华中农业大学',
  info: '主办方',
}, {
  logo: logoKexie,
  unit: '湖北省科学技术协会',
  info: '主办方',
}]

const b = [{
  logo: logoHuanong,
  unit: '华中农业大学',
  info: '承办方',
}, {
  logo: logoKexie,
  unit: '湖北省科学技术协会',
  info: '承办方',
}]
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" show-footer title="组织机构">
    <div mt-4vw h-full overflow-hidden>
      <div grid="~ cols-2  gap-8 lt-lg:cols-1" lt-lg="transform">
        <OrgCard v-for="item of a" :key="item.unit" :info="item.info" :logo="item.logo" :unit="item.unit" />
      </div>
      <div grid="~ cols-2 gap-8 lt-lg:cols-1" lt-lg="transform">
        <OrgCard v-for="item of b" :key="item.unit" :info="item.info" :logo="item.logo" :unit="item.unit" />
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
