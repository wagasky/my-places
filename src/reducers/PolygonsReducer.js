const initialState = {
  data: [],
};

const Polygons = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_POLYGON':
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
};

export default Polygons;