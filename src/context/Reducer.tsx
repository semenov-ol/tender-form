export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TITLE':
      return {
        tender: {
          ...state.tender,
          title: action.payload,
        },
      };
    case 'ADD_DESC':
      return {
        tender: {
          ...state.tender,
          description: action.payload,
        },
      };
    case 'ADD_UNIT':
      return {
        tender: {
          ...state.tender,
          lots: [
            ...state.tender.lots,
            {
              id: action.payload.id,
              title: state.tender.title,
            },
          ],
          items: [
            ...state.tender.items,
            {
              id: action.payload.id,
              description: state.tender.description,
              relatedLot: action.payload.id,
              classification: {
                scheme: 'CPV',
                id: '',
                description: '',
              },
              additionalClassification: [
                {
                  scheme: 'CPV',
                  id: '',
                  description: '',
                },
              ],
              quantity: 5,
              unit: action.payload.title,
            },
          ],
        },
      };

    case 'ADDITIONAL':
      const addItem = state.tender.lots.find((item: any) => item.id === action.payload.id);
      if (addItem === undefined) {
        return {
          tender: {
            ...state.tender,
            lots: [
              ...state.tender.lots,
              {
                id: action.payload.id,
                title: action.payload.title,
              },
            ],
            items: [
              ...state.tender.items,
              {
                id: action.payload.id,
                description: '',
                relatedLot: action.payload.id,
                classification: {
                  scheme: 'CPV',
                  id: '',
                  description: '',
                },
                additionalClassification: [
                  {
                    scheme: 'CPV',
                    id: '',
                    description: '',
                  },
                ],
                quantity: 5,
              },
            ],
          },
        };
      } else {
        addItem.title = action.payload.title;
        return {
          tender: {
            ...state.tender,
          },
        };
      }

    case 'ADDITIONAL_DESC':
      const item = state.tender.items.find((item: any) => item.id === action.payload.id);
      if (item === undefined) {
        return {
          tender: {
            ...state.tender,
            items: [
              ...state.tender.items,
              {
                id: action.payload.id,
                description: action.payload.desc,
                relatedLot: action.payload.id,
                classification: {
                  scheme: 'CPV',
                  id: '',
                  description: '',
                },
                additionalClassification: [
                  {
                    scheme: 'CPV',
                    id: '',
                    description: '',
                  },
                ],
                quantity: 5,
              },
            ],
            lots: [
              ...state.tender.lots,
              {
                id: action.payload.id,
                title: '',
              },
            ],
          },
        };
      } else {
        item.description = action.payload.desc;
        return {
          tender: {
            ...state.tender,
          },
        };
      }
    default:
      return state;
  }
};
