import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers';
// import { connect } from 'react-redux';

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  adjustCenter() {
    if (this.props.locations.length) {
      const i = this.props.locations.length - 1;
      const recentLat = (Object.entries(this.props.locations[i])[2])[1];
      const recentLng = (Object.entries(this.props.locations[i])[3])[1];
      const newCenter = [recentLat, recentLng];
      return newCenter
    }
  }

  render() {
    const newCenter = this.adjustCenter()
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={newCenter}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers />
        </Map>
      </div>
    );
  }
}


export default LeafletMap;
