const TOKEN_KEY = 'APP-TOKEN'

export function setTokenStorage(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function getTokenStorage() {
  return localStorage.getItem(TOKEN_KEY) ?? ''
}

export function clearTokenStorage() {
  localStorage.removeItem(TOKEN_KEY)
}
