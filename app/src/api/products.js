import request from './client'
export const list = () => request('/api/products').then(({ products, count }) => {
  return {
    products: products.map(p => { return { ...p, price: parseFloat(p.price) } }),
    count,
  }
})