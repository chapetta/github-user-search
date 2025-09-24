
export const searchProfile = async (name: string) => {

  const response = await fetch(`https://api.github.com/users/${name}`)
  const data = response.json()

  return data
}