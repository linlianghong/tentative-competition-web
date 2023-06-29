<script setup lang="ts">
// const formData = ref()

// const {data: info } = useRequest(getAttendInfo)
const teamCount = ref(0)

const hasTeacher = ref(false)
</script>

<template>
  <div h-full flex="~ col gap-4">
    <div bg="#fff" p="4">
      <div text="" font="500" mb-2>
        最新公告
      </div>
      <div text="opacity-70">
        作品提交时间不得晚于6月30日，请各位参赛者尽快上传作品，文件大小不小于1M
      </div>
    </div>
    <div bg="#fff" flex="~ 1 justify-center items-center" p="4" overflow-hidden>
      <n-scrollbar>
        <n-form class="w-full!">
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                队伍信息
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="队伍信息">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="学校名称">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="归属院校">
              <n-input placeholder="" />
            </n-form-item-gi>
          </n-grid>
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                队员信息
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="队长姓名">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="性别">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="在读学历">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="学院">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="专业班级">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
              <n-input placeholder="" />
            </n-form-item-gi>
          </n-grid>
          <n-grid x-gap="16" y-gap="16">
            <template v-for="i of teamCount" :key="i">
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" :label="`团队成员${i}`">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="性别">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="在读学历">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="学院">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="专业班级">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
                <n-input placeholder="" />
              </n-form-item-gi>
            </template>
            <n-grid-item span="24">
              <div text="center">
                <n-space justify="center">
                  <div v-if="teamCount < 3" text="center">
                    <n-button type="primary" @click="teamCount++">
                      添加队员
                    </n-button>
                  </div>
                  <div v-if="teamCount > 0">
                    <n-button ghost type="primary" @click="teamCount--">
                      删除队员
                    </n-button>
                  </div>
                </n-space>
              </div>
            </n-grid-item>
          </n-grid>
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                指导老师信息
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="科学指导老师">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="性别">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="单位">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="职务/职称">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
              <n-input placeholder="" />
            </n-form-item-gi>
            <template v-if="hasTeacher">
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="艺术指导老师">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="性别">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="单位">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="职务/职称">
                <n-input placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
                <n-input placeholder="" />
              </n-form-item-gi>
            </template>

            <n-grid-item span="24">
              <div text="center">
                <n-button type="primary" @click="hasTeacher = !hasTeacher">
                  {{ !hasTeacher ? '开启' : '关闭' }}艺术指导老师
                </n-button>
              </div>
            </n-grid-item>
          </n-grid>
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                拟参赛信息
              </div>
            </n-grid-item>
            <n-grid-item span="24">
              <div text=" 14px " font="400">
                最终以提交作品时的信息为准
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="24" label="拟参赛作品数量">
              <n-input placeholder="" />
            </n-form-item-gi>
            <n-grid-item span="24">
              <div text=" 14px " font="400">
                队伍信息详情仅能提交一次，不得修改，请在提交前务必再次仔细核对
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="24" label="" :show-label="false">
              <n-input placeholder="" />
            </n-form-item-gi>

            <n-grid-item span="12" offset="6">
              <n-button block type="primary">
                提交
              </n-button>
            </n-grid-item>
          </n-grid>
        </n-form>
      </n-scrollbar>
    </div>
  </div>
</template>

<style scoped>

</style>
