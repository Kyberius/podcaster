export const allOrigins = (url: string) =>
  `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
