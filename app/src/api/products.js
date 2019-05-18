import request from './client'
export const list = () => request('/api/products')