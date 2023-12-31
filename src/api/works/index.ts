import type { BaseResponse } from '../http'

export interface ScheduleItem {
  key: string
  val: string
}
export function getSchedules(scheduleId: string) {
  return http.get<BaseResponse<ScheduleItem[]>>(`/client/previous/schedule-pullDown/${scheduleId}`)
}
export interface PreviousWork {
  scheduleLabel: string
  awardName: string
  worksId: number
  worksName: string
  worksImgMain: number
  worksImgMainUrl: string
  worksImgCount: number
  worksImg: string
  authorName?: any
  userId: number
  worksOriginality: string
  description: string
  content: string
}
export function getPreviousWorks(params: { scheduleId: string; worksName?: string }) {
  return http.get<BaseResponse<PreviousWork[]>>('/client/previous/schedule-works', { params })
}

export interface WorksImgList {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorksImgMainVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface PromiseVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorksVideoVo {
  id: number
  fileName: string
  fileFormat: string
  fileUrl: string
}

export interface WorkInfo {
  id: number
  scheduleId: number
  userId: number
  worksName: string
  isGroupImg: number
  worksIntro: string
  worksOriginality: string
  studyContent: string
  worksImg: string
  worksImgList: WorksImgList[]
  worksImgMain: number
  worksImgMainVo: WorksImgMainVo
  promise: number
  promiseVo: PromiseVo
  worksVideo: number
  worksVideoVo: WorksVideoVo
  delFlag: number
  worksStatus: string
  operateType?: any
  createBy: number
  createTime: string
  awardConfigId: number
  awardName: string
  score: string
  finallyScore: number
  content: string
}

export function getWorkById(id: string) {
  return http.get<BaseResponse<WorkInfo>>(`/client/works/${id}`)
}

export interface MemberInfoVo {
  education: string
  grade: string
  id: number
  job: string
  memberName: string
  /**
   * TEAM_LEADER("队长"),
    TEAM_MEMBER("队员"),
    TEACHER("指导老师"),
    ART_TEACHER("老师");
   */
  memberType: 'ART_TEACHER' | 'TEACHER' | 'TEAM_LEADER' | 'TEAM_MEMBER'
  phone: string
  profession: string
  scheduleId: number
  sex: string
  unit: string
  userId: number
  idCard: string
}

export interface ImitateWorksItem {
  id: number
  imitateImagine: string
  imitateWorksName: string
  isGroupImg: number
  scheduleId: number
  userId: number
}

export interface SubmitApplyParams {
  imitateWorksList: ImitateWorksItem[]
  memberInfoVos: MemberInfoVo[]
  schoolName: string
  tempMemberInfoVos?: MemberInfoVo[]
}

/** 提交报名信息 */
export function submitApply(params: SubmitApplyParams) {
  return http.post<BaseResponse>('/client/works/submit-apply', params)
}

export function getSubmitApply() {
  return http.get<BaseResponse<SubmitApplyParams>>('/client/works/imitateWorksInfo')
}
