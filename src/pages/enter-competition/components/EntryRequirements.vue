<script setup lang="ts">
import bg from 'src/assets/enter-competition/c3.webp'
import { downloadFile } from '~/utils/misc'

const { basicInfo } = storeToRefs(useTeamInfoStore())

const { run, loading } = useRequest(() => {
  return http.get(basicInfo.value?.letterUrl, {
    responseType: 'blob',
    returnOrigin: true,
  }).then((res: any) => {
    const fileName = '原创承诺书模板'
    downloadFile(res.data, fileName)
  })
}, {
  manual: true,
})

function handleDownload() {
  run()
}
</script>

<template>
  <PageItem :bg="bg" title="参赛要求">
    <div text="5" grid="~ cols-1 gap-4 items-center lg:cols-1" my="4vw lt-lg:0">
      <div :style="{ textIndent: 0 }" class="article" border="2px gray-2 solid" p="4" bg="white opacity-70" overflow-auto rounded-4>
        1.微生物、培养基类型、培养时间及其他仪器设备不限，通过微生物培养来创作艺术图形，不得直接使用画笔与颜料描绘。<br>
        2.参赛团队应保证作品的首创性与可复制性，无著作权争议，不得对上传作品的图形和颜色进行后期修饰，为提升作品的美感，可以进行亮度、对比度、清晰度调节。
        <br>
        3.上传作品须按示例作品样式，保证作品图形的清晰可见，图片尺寸不低于1024*768px，分辨率72dpi，格式为JPG。<br>
        4.每个参赛团队最多只能提交三幅作品，每幅作品可以是单图，也可以是系列组图，组图不得超过5张，每张图只能在一个培养皿中完成(培养皿尺寸与形制不限)。
        <br>
        5.上传作品时需按照要求填写作品信息，提交细菌画作品图、作品创作过程短视频（1min以内，大小不超过500M）、原创承诺书（手写签字后扫描），作品图片上不得留有参赛团队相关信息。
        <br>
        6.参赛作品主题要积极向上，弘扬正能量。
        <br>
        7.本次大赛不收取报名费，所有入选及参赛作品恕不退还。
        <br>
        8.获奖作品参赛团队须允许主办与承办单位将获奖作品用于以宣传、展览、出版画册及媒体等用途，不再另付稿酬，作者享有署名权。
        <br>
        9.参赛作品涉及著作权、肖像权、署名权、名誉纠纷等法律责任由作者负责，举办单位不负任何连带责任。参赛作品如发现剽窃、侵权或第三方提出权利主张的，大赛组委会有权随时撤销该作品的参赛权，收回已获得的奖励和荣誉，并在相关媒体予以通报。
        <br>
        10.带宣传效果的作品，如企业商标、logo、名称、二维码的作品不得参赛；有违反国家法律法规、违背公序良俗的作品不得参赛。<br>
      </div>
      <!-- <div>
        <img :src="img1" class="w-full object-contain">
      </div> -->
      <div text="center" m="t-2vw" :class="loading ? 'cursor-wait pointer-events-none' : ''">
        <div btn @click="handleDownload">
          原创承诺书模版下载
        </div>
      </div>
    </div>
  </PageItem>
</template>

<style scoped>

</style>
