export default async function request(url, options) {
  const config = {
    method: 'GET',
    ...options,
  };
  const errors = []
  if (!config.body && config.method !== 'GET' && config.method !== 'DELETE') {
    errors.push(`Missing body for request type: ${config.method}`)
  }
  if ((config.method === 'GET' || config.method === 'DELETE') && config.body) {
    errors.push(`Body found for request that does not support it: ${config.method}`)
  }
  if (!url) {
    errors.push('Missing Url')
  }

  if (errors.length !== 0) {
    throw new Error(`Could not prepare request as desired: ${errors.join('` , `')}`)
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
  }

  const params = {
    headers,
    method: config.method,
  }

  if (config.body) {
    params.body = JSON.stringify(config.body)
  }

  const response = await fetch(url, params)

  if (!response.ok) {
    throw new Error(`Request failed with: { Code: ${response.status}, Text: ${response.statusText}}`)
  }

  // Use includes as content type strings can be formatted to include charset
  if (!response.headers.get('content-type').includes('application/json')) {
    throw new Error("Response did not contain json.")
  }
  const result = await response.json()

  return result
}
