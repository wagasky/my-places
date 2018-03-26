/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker';
import { Polygon } from "react-leaflet";
import { storePolygon } from '../actions/polygonActions';

class AllMarkers extends Component {

  createPolygon(e) {
    const { lat, lng } = e.latlng
    const { storePolygon } = this.props
    this.props.storePolygon([lat, lng])
  }

  render() {
    const latlngs = [
      [[37, -109.05],
      [41, -109.03],
      [41, -102.05],
      [37, -102.04]]
    ]

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
      <Polygon color="blue" positions={latlngs} />
      </div>
    );
  }
}

export default AllMarkers;
