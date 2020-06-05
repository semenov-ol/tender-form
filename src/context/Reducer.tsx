import { set } from 'lodash';

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'set':
      const newState = { ...set(state, action.path, action.payload) };
      return newState;

    case 'REMOVE_LOT':
      const items = state.tender.items.filter((item: any) => item.relatedLot !== action.payload.id);
      const item1 = state.tender.lots.find((lot: any) => lot.id === action.payload.id);
      const index = state.tender.lots.indexOf(item1);
      const newLot = [...state.tender.lots.slice(0, index), ...state.tender.lots.slice(index + 1)];
      return {
        tender: {
          ...state.tender,
          lots: newLot,
          items: items,
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

    case 'remove_item':
      const newItem = [...state.tender.items.slice(0, action.payload), ...state.tender.items.slice(action.payload + 1)];
      return {
        tender: {
          ...state.tender,
          items: newItem,
        },
      };

    case 'remove_class':
      const itemIndex = action.payload.index;
      const classIndex = action.payload.classIndex;

      const currentItem = state.tender.items[itemIndex];

      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, itemIndex),
            {
              ...currentItem,
              additionalClassification: [
                ...state.tender.items[itemIndex].additionalClassification.slice(0, classIndex),
                ...state.tender.items[itemIndex].additionalClassification.slice(classIndex + 1),
              ],
            },
            ...state.tender.items.slice(itemIndex + 1),
          ],
        },
      };

    case 'add_class':
      const t = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const indx = state.tender.items.indexOf(t);

      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, indx),
            {
              ...t,
              additionalClassification: [
                ...t.additionalClassification,
                {
                  scheme: action.payload.scheme,
                  id: action.payload.id,
                  description: action.payload.description,
                },
              ],
            },
            ...state.tender.items.slice(indx + 1),
          ],
        },
      };
    case 'set_item_desc':
      const i = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const idx = state.tender.items.indexOf(i);
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, idx),
            {
              ...i,
              description: action.payload.value,
            },
            ...state.tender.items.slice(idx + 1),
          ],
        },
      };
    case 'set_class_id':
      const it = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id = state.tender.items.indexOf(it);
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id),
            {
              ...it,
              classification: {
                ...it.classification,
                id: action.payload.value,
              },
            },
            ...state.tender.items.slice(id + 1),
          ],
        },
      };

    case 'set_class_desc':
      const it1 = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id1 = state.tender.items.indexOf(it1);
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id1),
            {
              ...it1,
              classification: {
                ...it1.classification,
                description: action.payload.value,
              },
            },
            ...state.tender.items.slice(id1 + 1),
          ],
        },
      };
    case 'set_quantity':
      const it2 = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id2 = state.tender.items.indexOf(it2);
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id2),
            {
              ...it2,
              quantity: action.payload.value,
            },
            ...state.tender.items.slice(id2 + 1),
          ],
        },
      };
    case 'set_unit':
      const it3 = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id3 = state.tender.items.indexOf(it3);
      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id3),
            {
              ...it3,
              unit: {
                id: action.payload.id,
                name: action.payload.name,
              },
            },
            ...state.tender.items.slice(id3 + 1),
          ],
        },
      };
    case 'add_additional_class_id':
      const it4 = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id4 = state.tender.items.indexOf(it4);
      const classification = it4.additionalClassification[action.payload.classIndex];

      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id4),
            {
              ...it4,
              additionalClassification: [
                ...it4.additionalClassification.slice(0, action.payload.classIndex),
                {
                  ...classification,
                  id: action.payload.value,
                },
                ...it4.additionalClassification.slice(action.payload.classIndex + 1),
              ],
            },
            ...state.tender.items.slice(id4 + 1),
          ],
        },
      };
    case 'set_additional_class_desc':
      const it5 = state.tender.items.filter((item: any) => item.id === action.payload.itemId)[0];
      const id5 = state.tender.items.indexOf(it5);
      const classification1 = it5.additionalClassification[action.payload.classIndex];

      return {
        tender: {
          ...state.tender,
          items: [
            ...state.tender.items.slice(0, id5),
            {
              ...it5,
              additionalClassification: [
                ...it5.additionalClassification.slice(0, action.payload.classIndex),
                {
                  ...classification1,
                  description: action.payload.value,
                },
                ...it5.additionalClassification.slice(action.payload.classIndex + 1),
              ],
            },
            ...state.tender.items.slice(id5 + 1),
          ],
        },
      };
    default:
      return state;
  }
};
