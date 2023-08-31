
export function buildSearchParams(url: string) {
  if (!isValidUrl(url)) {
    return null
  }

  const searchParamsString = new URL(url).search
  const searchParams = new URLSearchParams(searchParamsString)
  const searchParamsObj = Object.fromEntries(searchParams)

  return Object.entries(searchParamsObj)
}

export function isValidUrl(str: string) {
  try {
    const url = new URL(str)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch (_err) {
    return false
  }
}
