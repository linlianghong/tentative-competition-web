<script setup lang="ts">
import { injectApplyPreview } from '../composables'

const props = defineProps<{ value: string; valueMapping?: Record<string, string> }>()

const isEdit = injectApplyPreview()
</script>

<template>
  <div v-if="!isEdit" p="b-1" border="#e8e8e8 b-1 solid " w="full" min-h="22.3px">
    {{ valueMapping ? valueMapping[props.value] : props.value }}
  </div>
  <slot v-else name="default" />
</template>

<style scoped>

</style>
