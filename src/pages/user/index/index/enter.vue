<script setup lang="ts">
import type { FormInst } from 'naive-ui'
import { providerApplyPreview } from '../../composables'
import FormItemPreview from '../../components/form-item-preview.vue'
import { type ImitateWorksItem, type MemberInfoVo, type SubmitApplyParams, getSubmitApply, submitApply } from '~/api'

// const {data: info } = useRequest(getAttendInfo)
const reg = /^1[0-9]{10}$/

const store = useTeamInfoStore()

const { applyInfo, userInfo, basicInfo } = storeToRefs(store)

const formData = ref<SubmitApplyParams>()

const form = ref<FormInst | null>()

const route = useRoute()

const isEdit = ref(!!route.query.edit)

useRequest(getSubmitApply, {
  onSuccess(data) {
    formData.value = initParams(data.data)
  },
})

const { run, loading } = useRequest(submitApply, {
  manual: true,
  onSuccess() {
    message.success('提交报名成功')
    isEdit.value = false
    store.updateApplyInfo().then((res) => {
      formData.value = initParams(res)
    })
  },
})

const gradeOptions = new Array(10).fill({ label: '', value: 0 }).map((d, i) => ({
  value: new Date().getFullYear() - i,
  label: `${new Date().getFullYear() - i}级`,
}))

const sexOptions = [{ label: '男', value: 'MAN' }, { label: '女', value: 'WOMAN' }]

const eduOptions = [{ label: '专科生', value: '专科生' }, { label: '本科生', value: '本科生' }, { label: '硕士研究生', value: '硕士研究生' }, { label: '博士研究生', value: '博士研究生' }]

const eduMapping = eduOptions.reduce<any>((obj, d) => {
  obj[d.value] = d.label
  return obj
}, {})

const gradeMapping = gradeOptions.reduce<any>((obj, d) => {
  obj[d.value] = d.label
  return obj
}, {})

providerApplyPreview(isEdit)

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

function validIsGroupImg(r, v: string) {
  if (v === undefined || v === null)
    return new Error('请选择是否为系列组图')
  return true
}

function validatorGrade(r, v: string) {
  if (v === undefined || v === null)
    return new Error('请选择年级')
  return true
}

function validatorId(r: any, v = '') {
  if (v?.length !== 18)
    return new Error('请输入正确的身份证号')
  return true
}

function handleSubmit() {
  form.value?.validate().then((res) => {
    if (formData.value) {
      const params: SubmitApplyParams = {
        schoolName: formData.value.schoolName,
        imitateWorksList: formData.value.imitateWorksList,
        memberInfoVos: [...formData.value.memberInfoVos, ...(formData.value.tempMemberInfoVos || [])],
      }
      run(params)
    }
  }, () => {
    message.error('提交信息不完整，请检查')
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
        参赛报名时间不得晚于9月15日，请各位参赛团队尽快提交报名信息，大赛采取实名制，同一团队仅能注册一个账号，同一指导老师至多指导3个参赛团队。
      </div>
    </div>
    <div v-if="formData" bg="#fff" flex="~ 1 justify-center items-center" p="4" overflow-hidden>
      <n-scrollbar>
        <n-form ref="form" class="w-full!" :model="formData">
          <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
            <n-grid-item span="3">
              <div text="primary 4 " font="500">
                队伍信息
              </div>
            </n-grid-item>
            <n-form-item-gi :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="团队名称">
              <FormItemPreview :value="userInfo?.userName">
                <n-input :maxlength="100" readonly :value="userInfo?.userName" placeholder="" />
              </FormItemPreview>
            </n-form-item-gi>
            <n-form-item-gi path="schoolName" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="学校名称" :rule="[{ trigger: 'blur', required: true, message: '请输入学校名称' }]">
              <FormItemPreview :value="formData.schoolName">
                <n-input v-model:value="formData.schoolName" :maxlength="100" placeholder="请输入规范全称" />
              </FormItemPreview>
            </n-form-item-gi>
          </n-grid>
          <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
            <n-form-item-gi span="3">
              <div text="primary 4 " font="500">
                队员信息
              </div>
            </n-form-item-gi>
          </n-grid>

          <template v-for="(item, i) of formData.memberInfoVos" :key="i">
            <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入姓名' }]" :path="['memberInfoVos', i, 'memberName'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" :label="item.memberType === 'TEAM_LEADER' ? '队长姓名' : `团队成员${i}`">
                <FormItemPreview :value="item.memberName">
                  <n-input v-model:value="item.memberName" :maxlength="100" placeholder="请输入姓名" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请选择性别' }]" :path="['memberInfoVos', i, 'sex'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="性别">
                <FormItemPreview :value="item.sex" :value-mapping="{ MAN: '男', WOMAN: '女' }">
                  <n-select v-model:value="item.sex" placeholder="请选择性别" :options="sexOptions" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请选择在读学历' }]" :path="['memberInfoVos', i, 'education'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="在读学历">
                <FormItemPreview :value="item.education" :value-mapping="eduMapping">
                  <n-select v-model:value="item.education" placeholder="请选择在读学历" :options="eduOptions" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入专业' }]" :path="['memberInfoVos', i, 'profession'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="专业">
                <FormItemPreview :value="item.profession">
                  <n-input v-model:value="item.profession" :maxlength="100" placeholder="请输入规范全称，如“生物工程“" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi show-require-mark :rule="[{ trigger: 'blur', validator: validatorGrade }]" :path="['memberInfoVos', i, 'grade'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="年级">
                <FormItemPreview :value="item.grade" :value-mapping="gradeMapping">
                  <n-select v-model:value="item.grade" placeholder="请选择年级" :options="gradeOptions" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入联系方式' }, { trigger: 'blur', pattern: reg, message: '请输入正确的手机号' }]" :path="['memberInfoVos', i, 'phone'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="联系方式">
                <FormItemPreview :value="item.phone">
                  <n-input v-model:value="item.phone" :maxlength="100" placeholder="请输入联系方式" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', validator: validatorId }]" :path="['memberInfoVos', i, 'idCard'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="身份证号码">
                <FormItemPreview :value="item.idCard">
                  <n-input v-model:value="item.idCard" :maxlength="18" placeholder="请输入身份证号" />
                </FormItemPreview>
              </n-form-item-gi>
            </n-grid>
          </template>
          <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
            <n-grid-item v-if="isEdit" span="3">
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

          <n-grid cols="3">
            <n-form-item-gi span="3">
              <div text="primary 4 " font="500">
                指导老师信息
              </div>
            </n-form-item-gi>
          </n-grid>
          <template v-for="(item, i) of formData.tempMemberInfoVos" :key="i">
            <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入姓名' }]" :path="['tempMemberInfoVos', i, 'memberName'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" :label="item.memberType === 'TEACHER' ? '科学指导老师' : `艺术指导老师`">
                <FormItemPreview :value="item.memberName">
                  <n-input v-model:value="item.memberName" :maxlength="100" placeholder="请输入姓名" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请选择性别' }]" :path="['tempMemberInfoVos', i, 'sex'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="性别">
                <FormItemPreview :value="item.sex" :value-mapping="{ MAN: '男', WOMAN: '女' }">
                  <n-select v-model:value="item.sex" placeholder="请选择性别" :options="sexOptions" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入单位' }]" :path="['tempMemberInfoVos', i, 'unit'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="单位">
                <FormItemPreview :value="item.unit">
                  <n-input v-model:value="item.unit" :maxlength="100" placeholder="请输入单位" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入职务/职称' }]" :path="['tempMemberInfoVos', i, 'job'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="职务/职称">
                <FormItemPreview :value="item.job">
                  <n-input v-model:value="item.job" :maxlength="100" placeholder="请输入职务/职称" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入手机号码' }, { trigger: 'blur', pattern: reg, message: '请输入正确的手机号' }]" :path="['tempMemberInfoVos', i, 'phone'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="联系方式">
                <FormItemPreview :value="item.phone">
                  <n-input v-model:value="item.phone" :maxlength="100" placeholder="请输入手机号码" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', validator: validatorId }]" :path="['tempMemberInfoVos', i, 'idCard'].join('.')" :label-style="{ fontWeight: 500 }" span="xs:3 m:1" label="身份证号码">
                <FormItemPreview :value="item.idCard">
                  <n-input v-model:value="item.idCard" :maxlength="18" placeholder="请输入身份证号" />
                </FormItemPreview>
              </n-form-item-gi>
            </n-grid>
          </template>

          <n-grid v-if="isEdit" item-responsive responsive="screen" cols="3">
            <n-grid-item span="3">
              <div text="center">
                <n-button type="primary" :ghost="!(formData.tempMemberInfoVos?.length < 2)" @click="addArtTeacher">
                  {{ formData.tempMemberInfoVos?.length < 2 ? '添加' : '删除' }}艺术指导老师
                </n-button>
              </div>
            </n-grid-item>
          </n-grid>
          <n-grid item-responsive responsive="screen" cols="3" x-gap="16" y-gap="16">
            <n-grid-item span="3">
              <div text="primary 4 " font="500">
                拟参赛信息
              </div>
            </n-grid-item>
            <n-grid-item span="3">
              <div text=" 14px " font="400">
                最终以提交作品时的信息为准
              </div>
            </n-grid-item>
            <template v-for="(item, i) of formData.imitateWorksList" :key="i">
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入拟参赛作品名称' }]" :path="['imitateWorksList', i, 'imitateWorksName'].join('.')" :label-style="{ fontWeight: 500 }" span="3" label="拟参赛作品名称">
                <FormItemPreview :value="item.imitateWorksName">
                  <n-input v-model:value="item.imitateWorksName" :maxlength="100" placeholder="请输入拟参赛作品名称" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi show-require-mark :rule="[{ trigger: 'blur', validator: validIsGroupImg, message: '请选择是否为系列组图' }]" :path="['imitateWorksList', i, 'isGroupImg'].join('.')" :label-style="{ fontWeight: 500 }" span="3" label="是否为系列组图">
                <FormItemPreview :value="item.isGroupImg" :value-mapping="{ 0: '否', 1: '是' }">
                  <n-select v-model:value="item.isGroupImg" placeholder="请选择是否为系列组图" :options="[{ label: '是', value: 1 }, { label: '否', value: 0 }]" />
                </FormItemPreview>
              </n-form-item-gi>
              <n-form-item-gi :rule="[{ trigger: 'blur', required: true, message: '请输入拟参赛作品设想' }]" :path="['imitateWorksList', i, 'imitateImagine'].join('.')" :label-style="{ fontWeight: 500 }" span="3" label="拟参赛作品设想">
                <FormItemPreview :value="item.imitateImagine">
                  <n-input v-model:value="item.imitateImagine" :maxlength="500" type="textarea" placeholder="请简要介绍拟参赛作品的创意设想、研究设想，500字以内" />
                </FormItemPreview>
              </n-form-item-gi>
            </template>
            <n-grid-item v-if="isEdit" span="3">
              <div text="center" m="b-4">
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
            <n-grid-item span="xs:3 m:1" offset="sm:0 m:1">
              <div v-if="isEdit">
                <n-space justify="center">
                  <n-button :loading="loading" type="primary" block @click="handleSubmit">
                    提交
                  </n-button>
                  <n-button ghost type="primary" block @click="isEdit = false">
                    取消
                  </n-button>
                </n-space>
              </div>
              <n-button v-else type="primary" ghost block @click="isEdit = true">
                编辑
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
