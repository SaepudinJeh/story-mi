export const FetchData = async ({ url, payload }) => {
  const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
  })

  const result = await response.json()
  
  console.log('result', result)
  
  return result;
}