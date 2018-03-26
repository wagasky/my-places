/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';
import { storePolygon, removeCoordinates } from '../actions/polygonActions';

const mapStateToProps = (state) => {
  return { 
    locations: state.Locations.data,
    polygons: state.Polygons.data
   }
}

const mapDispatchToProps = (dispatch) => ({
  storePolygon: coordinates => dispatch(storePolygon(coordinates)),
  removeCoordinates: array => dispatch(removeCoordinates(array))
})

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
