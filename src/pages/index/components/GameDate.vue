<script setup lang="ts">
import timeline from 'src/assets/home/time-line.png'
import timeline5 from 'src/assets/home/time-line-verticle.png'
import bg from '~/assets/home/home_3_04.jpg'
import h5bg from '~/assets/home/h5-home3.jpg'

const router = useRouter()

const { isLogin } = storeToRefs(useTeamInfoStore())

function handleClick() {
  router.push(isLogin.value ? '/user/profile' : '/register')
}
</script>

<template>
  <PageItem :bg="bg" :h5bg="h5bg" title="大赛时间">
    <div class="h-full w-full" m="b-1/10" p="t-1/10" flex="~ col justify-center items-center">
      <img :src="timeline" w-full object-contain lt-lg:hidden>
      <img :src="timeline5" w-full object-contain lg:hidden>

      <div text="center" w="full" m="t-4vw">
        <div btn @click="handleClick">
          我要参赛
        </div>
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
