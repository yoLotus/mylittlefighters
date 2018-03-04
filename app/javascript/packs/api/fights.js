import 'babel-polyfill'

const list = async () => {
  let query = await fetch('/fights.json')
  return await query.json()
}

const create = async pretendors => {
  let query = await fetch('/fights.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fight: { pretendors } })
  })
  return await query.json()
}

export { list, create }
