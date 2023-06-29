import { http } from '../http'
import type { BaseResponse } from '../http/types'

export interface MemberInfo {
  education: string
  grade: string
  job: string
  memberName: string
  memberType: string
  phone: string
  profession: string
  sex: string
  unit: string
  userId: number
}

export interface RegisterInfo {
  code: string
  email: string
  memberInfos: MemberInfo[]
  password: string
  phonenumber: string
  schoolName: string
  status: string
  username: string
}
export interface UserInfo {
  createBy: string
  createTime: string
  updateBy?: any
  updateTime?: any
  remark?: any
  userId: number
  deptId?: any
  userName: string
  nickName: string
  email: string
  phonenumber: string
  sex: string
  avatar: string
  password: string
  status: string
  delFlag: string
  loginIp: string
  loginDate: string
  dept?: any
  roles: any[]
  roleIds?: any
  postIds?: any
  roleId?: any
  admin: boolean
}

export function login(params: {
  password: string
  username: string
}) {
  return http.post<BaseResponse & { token: string }>('/client/login', params)
}

export function register(params: Partial<RegisterInfo>) {
  return http.post<BaseResponse<RegisterInfo>>('/client/register', params)
}

export function getRegisterInfo(id: string) {
  return http.get<BaseResponse<RegisterInfo>>('/client/getRegisterInfo', { params: { id } })
}

export function getCode(email: string) {
  return http.post<BaseResponse<any>>('/client/code/getCode', email)
}

export function getUserInfo() {
  return http.get<BaseResponse & { user: UserInfo }>('/getInfo')
}
