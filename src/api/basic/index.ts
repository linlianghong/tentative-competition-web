import type { BaseResponse } from '../http'

export function getBasicsInfoInfo() {
  return http.get<BaseResponse<any>>('/client/home-page/basics-info')
}
