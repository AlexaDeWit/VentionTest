export const list = () =>
  fetch('/api/products')
    .then(response => {
      return response.json()
    })