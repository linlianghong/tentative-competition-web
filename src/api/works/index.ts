import type { BaseResponse } from '../http'

export function getSchedules(scheduleId: string) {
  return http.get<BaseResponse<any>>(`/client/previous/schedule-pullDown/${scheduleId}`)
}

export function getPreviousWorks(scheduleId: string, worksName: string) {
  return http.get<BaseResponse<any>>('/client/previous/schedule-works', { params: { worksName, scheduleId } })
}
