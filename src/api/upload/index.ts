import type { BaseResponse } from '../http'

export function uploadFile(file: File) {
  const formData = new FormData()
  formData.append('file', file)
  return http.post<BaseResponse<UploadRes>>('/file/fileUpload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
export interface UploadRes {
  id: number
  createBy: number
  createTime: string
  updateBy?: any
  updateTime?: any
  fileName: string
  fileUrl: string
  fileFormat: string
  delFlag: number
}

// {
//   "id": 77,
//   "createBy": 104,
//   "createTime": "2023-06-30T00:53:16.825+08:00",
//   "updateBy": null,
//   "updateTime": null,
//   "fileName": "弹幕开启_20230630005314A001.png",
//   "fileUrl": "/profile/upload/2023/06/30/弹幕开启_20230630005314A001.png",
//   "fileFormat": "png",
//   "delFlag": 0
// }
