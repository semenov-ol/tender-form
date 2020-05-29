export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case 'ADD_TITLE':
			return {
				title: action.payload,
				description: state.description,
				unit: state.unit
			};
		case 'ADD_DESC':
			return {
				title: state.title,
				description: action.payload,
				unit: state.unit
			};
		case 'ADD_UNIT':
			return {
				title: state.title,
				description: state.description,
				unit: action.payload
			};
		default:
			return state;
	}
};
