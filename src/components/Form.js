import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: '',
      lng: ''
    }
  }
  submitForm(e, data) {
    e.preventDefault();
    this.props.saveLocation(data);
  }

  setCoordinates(e) {
    const { value, name } = e.target
    this.setState({
      [name]: value
    }, () => this.enableSubmit())
  }

  enableSubmit() {
    const latCheck = this.validateLatitude(this.state.lat)
    const lngCheck = this.validateLongitude(this.state.lng)
  }

  validateLatitude(lat) {
    const num = parseInt(lat)
    const result = 
      (typeof num === 'number' && num <= 90 && num >= -90) ? true : false;
    return result
  }

  validateLongitude(lng) {
    const num = parseInt(lng)
    const result = 
      (typeof num === 'number' && num <= 180 && num >= -180) ? true : false;
    return result
  }

  render() {
    return (
      <form className="form">
        <label>
          Name
          <input
            ref={(input) => { this.name = input }}
            type="text"
          />
        </label>
        <label>
          Lat
          <input
            ref={(input) => { this.lat = input }}
            type="text"
            name="lat"
            placeholder="Enter latitude"
            onChange={(e) => this.setCoordinates(e)}
          />
        </label>
        <label>
          Lon
          <input
            ref={(input) => { this.lng = input }}
            type="text"
            name="lng"
            placeholder="Enter longitude"
            onChange={(e) => this.setCoordinates(e)}
          />

        </label>
        <button
          type="submit"
          onClick={(e) => this.submitForm(e, {
            name: this.name.value,
            lat: this.lat.value,
            lng: this.lng.value,
            id: Date.now()
          })}
        >
            Save
        </button>
      </form>
    );
  }
}

export default Form;
