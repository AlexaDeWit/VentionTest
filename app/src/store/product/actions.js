import { createAction } from "../helpers";

export const LIST_REQ = "vention_test/product/LIST_REQ"
export const LIST_ERR = "vention_test/product/LIST_ERR"
export const LIST_RESP = "vention_test/product/LIST_RESP"

export const Actions = {
  listReq: () => createAction(LIST_REQ),
  listErr: (err) => createAction(LIST_ERR, { err }),
  listResp: (products, count) => createAction(LIST_RESP, { products, count }),
}