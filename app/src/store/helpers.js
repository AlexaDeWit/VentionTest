// Just provides some cleaner object instantiation syntax in practice
export function createAction(type, payload) {
  return payload === undefined ? { type } : { type, payload }
}