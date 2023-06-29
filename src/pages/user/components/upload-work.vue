<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { type SubmitWork, submitWork } from '~/api'

const emit = defineEmits<{
  (e: 'submit'): void
}>()

const store = useTeamInfoStore()

const { userInfo, basicInfo } = storeToRefs(store)

const formData = ref<SubmitWork>({
  id: '',
  scheduleId: basicInfo.value?.scheduleId,
  userId: userInfo.value?.userId,
  worksName: '',
  /** 是否作品组图(0，是1，否 */
  isGroupImg: '',
  /** 作品简介 */
  worksIntro: '',
  /** "创意理念 */
  worksOriginality: '',
  /** "研究内容 */
  studyContent: '',
  /** 参赛作品高清图，逗号隔 */
  worksImg: '',
  /** 作品主图 */
  worksImgMain: '',
  /** 承诺书附件ID */
  promise: '',
  /** 作品视频附件ID */
  worksVideo: '',
})

const worksImg = ref<string[]>([])
const promise = ref<string>('')
const worksVideo = ref<string[]>([])

const form = ref<FormInst | null>()

const message = useMessage()

const { run, loading } = useRequest(submitWork, {
  manual: true,
  onSuccess() {
    message.success('提交成功')
    emit('submit')
  },
})

function hanldeSubmit() {
  form.value?.validate().then((res) => {
    run(formData.value)
  })
}
</script>

<template>
  <n-scrollbar style="height: 60vh">
    <n-form ref="form" :model="formData">
      <n-grid>
        <n-form-item-gi path="worksName" span="24" label="参赛作品名称" :label-style="{ fontWeight: 500 }">
          <n-input v-model:value="formData.worksName" placeholder="请输入作品名称" />
        </n-form-item-gi>
        <n-form-item-gi path="isGroupImg" span="24" label="是否为系列组图" :label-style="{ fontWeight: 500 }">
          <n-select
            v-model:value="formData.isGroupImg" placeholder="请选择" :options="[{
              label: '是', value: 0,
            }, {
              label: '否', value: 1,
            }]"
          />
        </n-form-item-gi>
        <n-form-item-gi path="worksIntro" span="24" label="作品简介" :label-style="{ fontWeight: 500 }">
          <n-input v-model:value="formData.worksIntro" placeholder="请客观简要介绍作品的创意是什么，用什么细菌通过什么方法创作而成，100字以内。" type="textarea" />
        </n-form-item-gi>
        <n-grid-item span="24">
          <div text="3">
            参考模板：该作品秉承“国以农为本，人以食为天”的理念，依据华中农大百年学府勤扎耕，肩负重任再出发为创意原点进行构思。经过悉心设计，以灭
            菌细毛笔、粗端牙签为画笔，以粘质沙雷氏菌、大肠杆菌和金黄色葡萄球菌等偏暖色调菌种为颜料，在特制调色、渐变渲染的LB培养基上逐步创作而成。
          </div>
        </n-grid-item>
        <n-form-item-gi path="studyContent" span="24" label="研究内容" :label-style="{ fontWeight: 500 }">
          <n-input v-model:value="formData.studyContent" placeholder="请介绍参赛作品的研究目的、研究方法、研究过程、研究结果、研究总结等" type="textarea" />
        </n-form-item-gi>
        <n-form-item-gi path="worksImg" span="24" label="请提交高清作品图" :label-style="{ fontWeight: 500 }">
          <app-upload accept="image/*" :max="5" @success="worksImg.push($event.id); formData.worksImg = worksImg.join(',')" />
        </n-form-item-gi>
        <n-form-item-gi path="" span="24">
          <div text="3">
            注：最多五个文件，每个50M以内，图片尺寸不低于1024*768px，分辨率72dpi，格式为jpg，不低于1M
          </div>
        </n-form-item-gi>
        <n-form-item-gi path="worksVideo" span="24" label="请提交作品创作过程短视频" :label-style="{ fontWeight: 500 }">
          <app-upload accept="video/*" :max="3" @success="worksVideo.push($event.id); formData.worksVideo = worksVideo.join(',')" />
        </n-form-item-gi>
        <n-form-item-gi path="" span="24">
          <div text="3">
            注：最多3个文件，每个50M以内，视频市场1min以内，格式为MP4
          </div>
        </n-form-item-gi>
        <n-form-item-gi path="promise" span="24" label="请上传原创承诺书" :label-style="{ fontWeight: 500 }">
          <app-upload accept=".pdf" :max="1" @success="promise = $event.id; formData.promise = promise" />
        </n-form-item-gi>
        <n-form-item-gi path="" span="24">
          <div text="3">
            注：最多1个文件，每个50M以内，手写签字后扫描为PDF进行上传
          </div>
        </n-form-item-gi>
        <!-- <n-form-item-gi path="" span="24" label="邮箱验证" :label-style="{ fontWeight: 500 }">
          <n-input v-model:value="formData.studyContent" placeholder="请输入邮箱" />
        </n-form-item-gi>
        <n-form-item-gi path="" span="24" label="验证码" :label-style="{ fontWeight: 500 }">
          <n-input v-model:value="formData.studyContent" placeholder="输入验证码" />
        </n-form-item-gi> -->
        <n-grid-item span="24">
          <n-space justify="center">
            <div w="40">
              <n-button :loading="loading" type="primary" class="" block @click="hanldeSubmit">
                提交
              </n-button>
            </div>
            <!-- <div w="40">
              <n-button ghost block type="primary">
                暂存
              </n-button>
            </div> -->
          </n-space>
        </n-grid-item>
      </n-grid>
    </n-form>
  </n-scrollbar>
</template>

<style scoped>

</style>
