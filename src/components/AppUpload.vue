<script lang="ts">
import { defineComponent } from 'vue'
import type { UploadCustomRequestOptions } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { uploadFile } from '~/api'

export default defineComponent({
  props: {
    accept: String,
    max: Number,
  },
  emits: ['success'],
  setup(props, { emit }) {
    const message = useMessage()
    const customRequest = ({
      file,
      data,
      headers,
      withCredentials,
      action,
      onFinish,
      onError,
      onProgress,
    }: UploadCustomRequestOptions) => {
      // const formData = new FormData()
      // if (data) {
      //   Object.keys(data).forEach((key) => {
      //     formData.append(
      //       key,
      //       data[key as keyof UploadCustomRequestOptions['data']],
      //     )
      //   })
      // }
      // formData.append(file.name, file.file as File)
      uploadFile(file.file as File)
        // .post(action as string, {
        //   withCredentials,
        //   headers: headers as Record<string, string>,
        //   body: formData,
        //   onUploadProgress: ({ percent }) => {
        //     onProgress({ percent: Math.ceil(percent) })
        //   },
        // })
        .then((res) => {
          message.success('上传成功')
          onFinish()
          emit('success', res)
        })
        .catch(() => {
          onError()
        })
    }
    return {
      customRequest,
    }
  },
})
</script>

<template>
  <n-upload
    multiple
    :custom-request="customRequest"
    list-type="image-card"
    :max="max"
    :accept="accept"
  >
    <!-- <n-button>上传文件</n-button> -->
  </n-upload>
</template>
