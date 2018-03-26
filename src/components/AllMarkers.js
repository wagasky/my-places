/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker';
import { Polygon } from "react-leaflet";
import { storePolygon } from '../actions/polygonActions';

class AllMarkers extends Component {

  createPolygon(e) {
    const { lat, lng } = e.latlng
    const newLatlng = [ lat, lng ]
    const { storePolygon, polygons } = this.props

    this.props.storePolygon(newLatlng)

  }

  render() {
    const latlngs = this.props.polygons

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
