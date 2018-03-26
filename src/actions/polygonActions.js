const storePolygon = (coordinates) => {
  return {
    type:'STORE_POLYGON', 
    data: coordinates
  }
}

export { storePolygon }