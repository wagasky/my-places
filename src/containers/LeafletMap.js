import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl } from 'react-leaflet';
import AllMarkers from './AllMarkers';
// import { connect } from 'react-redux';

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: [ 39.742043, -104.991531 ]
    }
  }

  adjustCenter() {
    const { locations } = this.props
    if (locations.length) {
      const i = locations.length - 1;
      const recentLat = locations[i].lat;
      const recentLng = locations[i].lng;
      const center = [recentLat, recentLng];
      return center
    }
  }

  render() {
    const center  = this.adjustCenter()
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={ center || this.state.center }
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
