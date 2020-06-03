import { set } from 'lodash';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'set':
      const newState = { ...set(state, action.path, action.payload) };
      return newState;

    case 'REMOVE_LOT':
      const item1 = state.tender.lots.find((item: any) => item.id === action.payload.id);
      const index = state.tender.lots.indexOf(item1);
      const newLot = [...state.tender.lots.slice(0, index), ...state.tender.lots.slice(index + 1)];
      return {
        tender: {
          ...state.tender,
          lots: newLot,
        },
      };
    case 'EDIT_LOT':
      const item = state.tender.lots.find((item: any) => item.id === action.payload.id);
      item.title = action.payload.title;
      return {
        ...state,
      };
    case 'ADD_ITEM':
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items,
            {
              id: action.payload.id,
              description: '',
              relatedLot: action.payload.relatedId,
            },
          ],
        },
      };
    default:
      return state;
  }
};
