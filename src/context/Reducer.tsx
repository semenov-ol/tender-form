export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD_TITLE':
			return {
				tender: {
					...state.tender,
					title: action.payload
				}
			};
		case 'ADD_DESC':
			return {
				tender: {
					...state.tender,
					description: action.payload
				}
			};
		case 'ADD_LOT':
			const item = state.tender.lots.find((item: any) => item.id === action.payload.id);
			if (item === undefined) {
				return {
					tender: {
						...state.tender,
						lots: [
							...state.tender.lots,
							{
								title: action.payload.title,
								id: action.payload.id
							}
						]
					}
				};
			} else {
				item.title = action.payload.title;
				item.id = action.payload.id;
				return {
					tender: {
						...state.tender
					}
				};
			}
		default:
			return state;
	}
};
