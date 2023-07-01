import type { BaseResponse } from '../http'

export function getHomeHistoryWorks(scheduleId: string) {
  return http.get<BaseResponse>(`/client/home-page/previous-works/${scheduleId}`)
}

export function getHomeIntro(scheduleId: string) {
  return http.get<BaseResponse>(`/client/home-page/intro/${scheduleId}`)
}
