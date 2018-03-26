import { combineReducers } from 'redux';
import Locations from './LocationsReducer';
import Polygons from './PolygonsReducer';

const RootReducer = combineReducers({
  Locations,
  Polygons
});

export default RootReducer;
