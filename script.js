mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZHZpbGxhZ29tZXoiLCJhIjoiY21oOWM3cjkyMThvaTJwbjFtMHJ0dnBneiJ9.6UDCQcawzUXRsIqPY6jcMg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/richardvillagomez/cmh9cctbu00ps01r51wksady9',
  center: [-122.27, 37.8], // starting position [lng, lat]. note that lat must be set between -90 and 90
  zoom: 9 // starting zoom

    });

  map.on('load', function() {
    
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/richardvillagomez/BAHA-Map/refs/heads/main/data/183data.geojson'
    });

    // add layer to visualize points
    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#305f9c',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });

     // change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });

    // click event for popups
    map.on('click', 'points-layer', (e) => {
      
      // coordinates array
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;



      // create popup content using data properties
      const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
                
            </div>
        `;

        

        // add popup when point is clicked
        new mapboxgl.Popup({ className: 'custom-popup' })
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);


    });


});
