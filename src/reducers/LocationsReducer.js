const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: action.data,
      });
    default:
      return state;
  }
};

export default Locations;
