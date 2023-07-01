export function getAssetUrl(url: string) {
  return `${import.meta.env.VITE_APP_ASSET_ORIGIN}${url}`
}

export function downloadFile(file: Blob, fileName: string) {
  const aElement = document.createElement('a')
  aElement.setAttribute('download', fileName)
  const href = URL.createObjectURL(file)
  aElement.href = href
  aElement.setAttribute('target', '_blank')
  aElement.click()
  URL.revokeObjectURL(href)
}
