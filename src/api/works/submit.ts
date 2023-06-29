import type { BaseResponse, PageRequest } from '../http'

interface ListParams extends PageRequest {
  scheduleId?: number
  userId?: number
  worksName?: string
}

export interface SubmitWork {
  id?: string
  scheduleId?: number
  userId?: number
  worksName: string
  /** 是否作品组图(0，是1，否 */
  isGroupImg: string
  /** 作品简介 */
  worksIntro: string
  /** "创意理念 */
  worksOriginality: string
  /** "研究内容 */
  studyContent: string
  /** 参赛作品高清图，逗号隔 */
  worksImg: string
  /** 作品主图 */
  worksImgMain: string
  /** 承诺书附件ID */
  promise: string
  /** 作品视频附件ID */
  worksVideo: string
}

export function getSubmitWorkList(params: ListParams) {
  return http.post<BaseResponse<any>>('/client/works/list', { params })
}
export function submitWork(params: SubmitWork) {
  return http.post<BaseResponse<any>>('/client/works/submit-works', { params })
}
export function deleteWorkById(ids: string) {
  return http.delete<BaseResponse<any>>(`/client/works/${ids}`)
}
export function getSubmitWorkById(id: string) {
  return http.get<BaseResponse<any>>(`/client/works/${id}`)
}
