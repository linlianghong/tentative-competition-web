<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { type ImitateWorksItem, type MemberInfoVo, type SubmitApplyParams, getSubmitApply, submitApply } from '~/api'

// const {data: info } = useRequest(getAttendInfo)

const store = useTeamInfoStore()
const { applyInfo, userInfo, basicInfo } = storeToRefs(store)

const formData = ref<SubmitApplyParams>()

const form = ref<FormInst | null>()

const isEdit = ref(false)

useRequest(getSubmitApply, {
  onSuccess(data) {
    formData.value = initParams(data.data)
  },
})

const { run, loading } = useRequest(submitApply, {
  manual: true,
  onSuccess() {
    store.updateApplyInfo().then((res) => {
      formData.value = res
    })
  },
})

const gradeOptions = new Array(10).fill({ label: '', value: 0 }).map((d, i) => ({
  value: new Date().getFullYear() - i,
  label: `${new Date().getFullYear() - i}级`,
}))

const sexOptions = [{ label: '男', value: 'MAN' }, { label: '女', value: 'WOMAN' }]

function initParams(data: SubmitApplyParams) {
  const memberInfoVos = data?.memberInfoVos?.map(d => ({ ...d }))
  const arr1 = memberInfoVos?.filter(d => d.memberType === 'TEAM_LEADER' || d.memberType === 'TEAM_MEMBER')
  const arr2 = memberInfoVos?.filter(d => d.memberType === 'TEACHER' || d.memberType === 'ART_TEACHER')
  return {
    ...data,
    imitateWorksList: data?.imitateWorksList?.length ? data?.imitateWorksList?.map(d => ({ ...d })) : [getInitiImitateWorks()],
    memberInfoVos: arr1?.length ? arr1.map(d => ({ ...d })) : [getInitiMemberInfo('TEAM_LEADER')],
    tempMemberInfoVos: arr2?.length ? arr2.map(d => ({ ...d })) : [getInitiMemberInfo('TEACHER')],
  }
}

function getInitiImitateWorks(): Partial<ImitateWorksItem> {
  return {
    scheduleId: basicInfo.value?.scheduleId,
    userId: userInfo.value?.userId,
  }
}

function getInitiMemberInfo(type: MemberInfoVo['memberType']): Partial<MemberInfoVo> {
  return {
    memberType: type,
    userId: userInfo.value?.userId,
  }
}

function addMember() {
  formData.value?.memberInfoVos.push(getInitiMemberInfo('TEAM_MEMBER'))
}

function deleteMember() {
  formData.value?.memberInfoVos.pop()
}

function addArtTeacher() {
  if (formData.value?.tempMemberInfoVos?.length < 2)
    formData.value?.tempMemberInfoVos.push(getInitiMemberInfo('ART_TEACHER'))

  else
    formData.value?.tempMemberInfoVos?.pop()
}

function addWorks() {
  formData.value?.imitateWorksList.push(getInitiImitateWorks())
}
function deleteWorks() {
  formData.value?.imitateWorksList.pop()
}

function handleSubmit() {
  form.value?.validate().then((res) => {
    if (formData.value) {
      const params: SubmitApplyParams = {
        schoolName: formData.value.schoolName,
        imitateWorksList: formData.value.imitateWorksList,
        memberInfoVos: [...formData.value.memberInfoVos, ...(formData.value.tempMemberInfoVos || [])],
      }
      console.log(params)
      run(params)
    }
  })
}
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
    <div v-if="formData" bg="#fff" flex="~ 1 justify-center items-center" p="4" overflow-hidden>
      <n-scrollbar>
        <n-form ref="form" class="w-full!">
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                队伍信息
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="队伍信息">
              <n-input :maxlength="100" readonly :value="userInfo?.userName" placeholder="" />
            </n-form-item-gi>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="8" label="学校名称">
              <n-input v-model:value="formData.schoolName" :maxlength="100" placeholder="" />
            </n-form-item-gi>
          </n-grid>
          <n-grid x-gap="16" y-gap="16">
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                队员信息
              </div>
            </n-grid-item>
            <template v-for="(item, i) of formData.memberInfoVos" :key="i">
              <n-form-item-gi :path="['memberInfoVos', i, 'memberName'].join('.')" :label-style="{ fontWeight: 500 }" span="8" :label="item.memberType === 'TEAM_LEADER' ? '队长姓名' : `团队成员${i}`">
                <n-input v-model:value="item.memberName" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['memberInfoVos', i, 'sex'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="性别">
                <n-select v-model:value="item.sex" placeholder="" :options="sexOptions" />
              </n-form-item-gi>
              <n-form-item-gi :path="['memberInfoVos', i, 'education'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="在读学历">
                <n-select v-model:value="item.education" placeholder="" :options="[{ label: '专科生', value: '专科生' }, { label: '本科生', value: '本科生' }, { label: '硕士研究生', value: '硕士研究生' }, { label: '博士研究生', value: '博士研究生' }]" />
              </n-form-item-gi>
              <n-form-item-gi :path="['memberInfoVos', i, 'profession'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="专业">
                <n-input v-model:value="item.profession" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['memberInfoVos', i, 'grade'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="年级">
                <n-select v-model:value="item.grade" placeholder="" :options="gradeOptions" />
              </n-form-item-gi>
              <n-form-item-gi :path="['memberInfoVos', i, 'phone'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
                <n-input v-model:value="item.phone" :maxlength="100" placeholder="" />
              </n-form-item-gi>
            </template>
            <n-grid-item span="24">
              <div text="center">
                <n-space justify="center">
                  <div v-if="formData.memberInfoVos.length < 3" text="center">
                    <n-button type="primary" @click="addMember">
                      添加队员
                    </n-button>
                  </div>
                  <div v-if="formData.memberInfoVos.length > 1">
                    <n-button ghost type="primary" @click="deleteMember">
                      删除队员
                    </n-button>
                  </div>
                </n-space>
              </div>
            </n-grid-item>
          </n-grid>

          <n-grid>
            <n-grid-item span="24">
              <div text="primary 4 " font="500">
                指导老师信息
              </div>
            </n-grid-item>
          </n-grid>
          <template v-for="(item, i) of formData.tempMemberInfoVos" :key="i">
            <n-grid x-gap="16" y-gap="16">
              <n-form-item-gi :path="['tempMemberInfoVos', i, 'memberName'].join('.')" :label-style="{ fontWeight: 500 }" span="8" :label="item.memberType === 'TEACHER' ? '科学指导老师' : `艺术指导老师`">
                <n-input v-model:value="item.memberName" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['tempMemberInfoVos', i, 'sex'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="性别">
                <n-select v-model:value="item.sex" placeholder="" :options="sexOptions" />
              </n-form-item-gi>
              <n-form-item-gi :path="['tempMemberInfoVos', i, 'unit'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="单位">
                <n-input v-model:value="item.unit" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['tempMemberInfoVos', i, 'job'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="职务/职称">
                <n-input v-model:value="item.job" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['tempMemberInfoVos', i, 'phone'].join('.')" :label-style="{ fontWeight: 500 }" span="8" label="联系方式">
                <n-input v-model:value="item.phone" :maxlength="100" placeholder="" />
              </n-form-item-gi>
            </n-grid>
          </template>

          <n-grid>
            <n-grid-item span="24">
              <div text="center">
                <n-button type="primary" @click="addArtTeacher">
                  {{ formData.tempMemberInfoVos?.length < 2 ? '添加' : '删除' }}艺术指导老师
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
            <template v-for="(item, i) of formData.imitateWorksList" :key="i">
              <n-form-item-gi :path="['imitateWorksList', i, 'imitateWorksName'].join('.')" :label-style="{ fontWeight: 500 }" span="24" label="拟参赛作品名称">
                <n-input v-model:value="item.imitateWorksName" :maxlength="100" placeholder="" />
              </n-form-item-gi>
              <n-form-item-gi :path="['imitateWorksList', i, 'isGroupImg'].join('.')" :label-style="{ fontWeight: 500 }" span="24" label="是否为系列组图">
                <n-select v-model:value="item.isGroupImg" placeholder="" :options="[{ label: '是', value: 1 }, { label: '否', value: 0 }]" />
              </n-form-item-gi>
              <n-form-item-gi :path="['imitateWorksList', i, 'imitateImagine'].join('.')" :label-style="{ fontWeight: 500 }" span="24" label="拟参赛作品设想">
                <n-input v-model:value="item.imitateImagine" :maxlength="500" type="textarea" placeholder="" />
              </n-form-item-gi>
            </template>
            <n-grid-item span="24">
              <div text="center">
                <n-space justify="center">
                  <div v-if="formData.imitateWorksList.length < 3" text="center">
                    <n-button type="primary" @click="addWorks">
                      添加作品
                    </n-button>
                  </div>
                  <div v-if="formData.imitateWorksList.length > 1">
                    <n-button ghost type="primary" @click="deleteWorks">
                      删除作品
                    </n-button>
                  </div>
                </n-space>
              </div>
            </n-grid-item>
            <n-grid-item span="12" offset="6">
              <div text="center">
                <n-space>
                  <n-button v-if="isEdit" type="primary" @click="handleSubmit">
                    提交
                  </n-button>
                  <n-button v-else type="primary" @click="isEdit = true">
                    编辑
                  </n-button>
                </n-space>
              </div>
            </n-grid-item>
          </n-grid>
        </n-form>
      </n-scrollbar>
    </div>
  </div>
</template>

<style scoped>

</style>
