const initialState = {
  data: [],
};

const Polygons = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_POLYGON':
      return Object.assign({}, state, {
        data: [action.data, ...state.data],
      });
    case 'REMOVE_COORDINATES':
      return { 
        data: action.data 
      };
    default:
      return state;
  }
};

export default Polygons;