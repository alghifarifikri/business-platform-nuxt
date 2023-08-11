const headers = {
  'Accept-Language': 'id',
  'Content-Type': 'application/json',
}

export const HttpRequest = async ({ url = '', method = 'GET', body = {} }) => {
  let response = ''
  try {
    if (method === 'GET') {
      response = await fetch(url, headers)
    } else if (method === 'POST') {
      response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      })
    }
    const temp = await response.json()
    return temp.data
  } catch (e) {
    console.log({ e })
    return e
  }
}
