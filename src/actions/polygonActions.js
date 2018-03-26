const storePolygon = (coordinates) => {
  return {
    type:'STORE_POLYGON', 
    data: coordinates
  }
}

const removeCoordinates = (newArray) => {
  return {
    type:'REMOVE_COORDINATES', 
    data: newArray
  }
}

export { storePolygon, removeCoordinates }