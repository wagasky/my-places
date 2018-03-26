import React, { Component } from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet'
import leaf from '../imgs/leaf-green.png'
import shadow from '../imgs/leaf-shadow.png'

class MapMarker extends Component {

  render() {
    let icon = L.icon({
      iconUrl: leaf,
      shadowUrl: shadow,

      iconSize:     [38, 95], 
      shadowSize:   [50, 64], 
      iconAnchor:   [22, 94], 
      shadowAnchor: [4, 62],  
      popupAnchor:  [-3, -76] 
    });

    const handleClick = this.props.handleClick

    return (
      <div className="marker-container">
          <Marker
            position={this.props.location}
            icon={icon}
            onClick={handleClick}
          >
            <Tooltip
              sticky
              interactive
            >
              <div>
                <h4>{this.props.name}</h4>
              </div>
            </Tooltip>
          </Marker>
        </div>
    )
  }
}

export default MapMarker;
