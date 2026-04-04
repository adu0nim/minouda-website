export const escapeHTML = (unsafe: string) => {
  // Handle undefined, null, or non-string values
  if (!unsafe) {
    return ""
  }
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export const unescapeHTML = (html: string) => {
  if (!html) {
    return ""
  }
  return html
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#039;", "'")
}
