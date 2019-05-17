import { LIST_ERR, LIST_RESP, LIST_REQ } from "./actions";

const initialState = {
  items: {},
  count: 0,
  err: undefined,
  isFetching: false,
}

export const getItems = state => Object.keys(state.product.items).map((id) => state.product.items[id])
export const getCount = state => state.product.count
export const getItemsById = state => state.product.items
export const getErr = state => state.product.err
export const getIsFetching = state => state.product.isFetching

export default function reducer(s = initialState, action) {
  switch (action.type) {
    case LIST_REQ:
      return { ...s, isFetching: true, err: undefined }
    case LIST_ERR:
      const { err } = action.payload
      return { ...s, err, isFetching: false }
    case LIST_RESP:
      const { products, count } = action.payload
      const items = products.reduce((map, p) => {
        map[p.id] = p
        return map
      }, {})
      return { ...s, items, count, isFetching: false }
    default:
      return s
  }
}