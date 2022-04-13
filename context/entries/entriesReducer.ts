import { EntriesState } from './';

type EntriesActionType =
  | { type: '[Entries] Action One' }
  | { type: '[Entries] Action Two' };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entries] Action One':
      return {
        ...state,
      };
    case '[Entries] Action Two':
      return {
        ...state,
      };
    default:
      return state;
  }
};
