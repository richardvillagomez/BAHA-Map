mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZHZpbGxhZ29tZXoiLCJhIjoiY21oOWM3cjkyMThvaTJwbjFtMHJ0dnBneiJ9.6UDCQcawzUXRsIqPY6jcMg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/richardvillagomez/cmh9cctbu00ps01r51wksady9',
  center: [0, 0], // starting position [lng, lat]. note that lat must be set between -90 and 90
  zoom: 0 // starting zoom

    });