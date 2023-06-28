<script setup lang="ts">

</script>

<template>
  <n-scrollbar style="height: 60vh">
    <n-form>
      <n-grid>
        <n-form-item-gi span="24" label="参赛作品名称" :label-style="{ fontWeight: 500 }">
          <n-input />
        </n-form-item-gi>
        <n-form-item-gi span="24" label="是否为系列组图" :label-style="{ fontWeight: 500 }">
          <n-input />
        </n-form-item-gi>
        <n-form-item-gi span="24" label="作品简介" :label-style="{ fontWeight: 500 }">
          <n-input type="textarea" />
        </n-form-item-gi>
        <n-grid-item span="24">
          <div text="3">
            参考模板：该作品秉承“国以农为本，人以食为天”的理念，依据华中农大百年学府勤扎耕，肩负重任再出发为创意原点进行构思。经过悉心设计，以灭
            菌细毛笔、粗端牙签为画笔，以粘质沙雷氏菌、大肠杆菌和金黄色葡萄球菌等偏暖色调菌种为颜料，在特制调色、渐变渲染的LB培养基上逐步创作而成。
          </div>
        </n-grid-item>
        <n-form-item-gi span="24" label="研究内容" :label-style="{ fontWeight: 500 }">
          <n-input type="textarea" />
        </n-form-item-gi>
        <n-form-item-gi span="24" label="请提交高清作品图" :label-style="{ fontWeight: 500 }">
          <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            list-type="image-card"
          />
        </n-form-item-gi>
        <n-grid-item span="24">
          <div text="3">
            注：最多五个文件，每个50M以内，图片尺寸不低于1024*768px，分辨率72dpi，格式为jpg，不低于1M
          </div>
        </n-grid-item>
        <n-form-item-gi span="24" label="请提交作品创作过程短视频" :label-style="{ fontWeight: 500 }">
          <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            list-type="image-card"
          />
        </n-form-item-gi>
        <n-grid-item span="24">
          <div text="3">
            注：最多3个文件，每个50M以内，视频市场1min以内，格式为MP4
          </div>
        </n-grid-item>
        <n-form-item-gi span="24" label="请上传原创承诺书" :label-style="{ fontWeight: 500 }">
          <n-upload
            action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            list-type="image-card"
          />
        </n-form-item-gi>
        <n-grid-item span="24">
          <div text="3">
            注：最多1个文件，每个50M以内，手写签字后扫描为PDF进行上传
          </div>
        </n-grid-item>
        <n-form-item-gi span="24" label="邮箱验证" :label-style="{ fontWeight: 500 }">
          <n-input />
        </n-form-item-gi>
        <n-form-item-gi span="24" label="验证码" :label-style="{ fontWeight: 500 }">
          <n-input />
        </n-form-item-gi>
        <n-grid-item span="24" label="验证码" :label-style="{ fontWeight: 500 }">
          <n-space justify="center">
            <div w="40">
              <n-button block type="primary" class="">
                提交
              </n-button>
            </div>
            <div w="40">
              <n-button ghost block type="primary">
                暂存
              </n-button>
            </div>
          </n-space>
        </n-grid-item>
      </n-grid>
    </n-form>
  </n-scrollbar>
</template>

<style scoped>

</style>
