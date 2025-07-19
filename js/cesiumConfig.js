const cesiumAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZDkzNzY1My05Mjc0LTQwYWEtYTMzYS02NTk3MzE2MTRjNGUiLCJpZCI6MzIwMjA1LCJpYXQiOjE3NTIxMzM5OTd9.o4Vw85lP6309CtHrSPBTSgIdWMAn888-E2OsewgfSA8'

const targetLocation = {
    destination: Cesium.Cartesian3.fromDegrees( 110.372489, -7.791729, 250),
      orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-15.0),
      }};



export {cesiumAccessToken, targetLocation};