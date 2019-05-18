import { ADD_ITEM, REMOVE_ITEM } from './actions'
const initialState = {
  items: {}
}

export const getItems = state => Object.keys(state.cart.items).map((id) => state.cart.items[id])
export const getItemsById = state => state.cart.items

export default function reducer(s = initialState, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const { item } = action.payload
      const items = {
        ...s.items,
        [item.id]: item,
      }
      return { ...s, items }
    }
    case REMOVE_ITEM: {
      const { item } = action.payload
      const { [item.id]: deletedItem, ...items } = s.items
      return { ...s, items }
    }
    default:
      return s
  }
}