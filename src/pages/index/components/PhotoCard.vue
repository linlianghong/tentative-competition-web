<script setup lang="ts">
const props = defineProps({
  id: [String, Number],
  title: String,
  desc: String,
  imgUrl: String,
  maxHeight: {
    type: Number,
    default: 120,
  },
})
const emit = defineEmits<{ (e: 'detail'): void }>()

const router = useRouter()

function onClick() {
  if (!props.id)
    return
  router.push(`work/${props.id}`)
  emit('detail')
}
</script>

<template>
  <n-card hoverable class="news-item cursor-pointer rounded-4!" @click="onClick">
    <template #cover>
      <div p="4 b-0" class="w-full! overflow-hidden!">
        <img class="img" :style="{ maxHeight: `${maxHeight}px`, minHeight: '100px' }" object="contain center" :src="imgUrl ? getAssetUrl(imgUrl) : 'https://30850783.s21i.faiusr.com/2/ABUIABACGAAg_YzJowYohpyj1gQwgAg4qgU!700x700.jpg.webp'">
      </div>
    </template>
    <template #header>
      <div class="title" text="4!" font="bold!">
        <n-ellipsis>
          {{ title }}
        </n-ellipsis>
      </div>
    </template>
    <div>
      <div text-14px>
        <n-ellipsis :line-clamp="2" :tooltip="{ contentStyle: { maxWidth: '50vw' } }">
          <div v-html="desc" />
        </n-ellipsis>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.news-item {

  &:hover {
    .title {
      @apply text-primary;
    }

    .img {
      @apply transition-width max-w-auto! w-[120%]!;
  }
}
}
</style>
