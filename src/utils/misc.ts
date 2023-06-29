export function getAssetUrl(url: string) {
  return `${import.meta.env.VITE_APP_ASSET_ORIGIN}${url}`
}
