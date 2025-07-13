
  mapboxgl.accessToken=mapToken;
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/dark-v11', // style URL
    center: listing.geometry.coordinates,
    zoom: 9 // starting zoom level
    });



    // console.log(coordinates);

    const marker1 = new mapboxgl.Marker({color: "red"})
        .setLngLat(listing.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h4>${listing.location}</h4><p>Exact Location will be provided after booking!</p>`))
        .addTo(map);
