import 'babel-polyfill'

const list = async () => {
  let query = await fetch('/characters.json')
  return await query.json()
}

export { list }
