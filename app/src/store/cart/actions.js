import { createAction } from "../helpers";

export const ADD_ITEM = "vention_test/cart/ADD_ITEM"
export const REMOVE_ITEM = "vention_test/cart/REMOVE_ITEM"

export const Actions = {
  addItem: (item) => createAction(ADD_ITEM, { item }),
  removeItem: (item) => createAction(REMOVE_ITEM, { item }),
}