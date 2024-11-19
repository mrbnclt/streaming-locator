export default async (endpoint: string) => {
  const res = await fetch(endpoint)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await res.json()
}
