/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker'

class AllMarkers extends Component {

  createPolygon(e) {
    const latlng = e.latlng
    const lat = latlng.lat
    const lng = latlng.lng
    console.log(lat, lng)
  }

  render() {
    const markerArray = this.props.locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          handleClick={e => this.createPolygon(e)}
        />
      )
    })

    return (
      <div className="paths-container">
        {markerArray}
      </div>
    );
  }
}

export default AllMarkers;
