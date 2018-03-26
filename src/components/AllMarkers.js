/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapMarker from './Marker';
import { Polygon } from "react-leaflet";
import { storePolygon, removeCoordinates } from '../actions/polygonActions';

class AllMarkers extends Component {

  createPolygon(e) {
    const { lat, lng } = e.latlng
    const newLatlng = [ lat, lng ]
    this.checkCoordinates(newLatlng)
  }

  checkCoordinates(newLatlng) {
    const polygons  = JSON.stringify(this.props.polygons);
    const stringLatLng = JSON.stringify(newLatlng);
    const currentLatLng = newLatlng;

    !polygons.includes(stringLatLng) ?
      this.props.storePolygon(currentLatLng) :
      this.removeMarker(currentLatLng);
  }

  removeMarker(currentLatLng) {
    const current = currentLatLng
    const newArray = this.props.polygons.filter( latlng => {
      if (JSON.stringify(latlng) !== JSON.stringify(current)) {
        return latlng
      }
    })
    this.props.removeCoordinates(newArray);
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
