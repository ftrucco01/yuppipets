mapboxgl.accessToken = 'pk.eyJ1IjoieXVwcGlwZXRzIiwiYSI6ImNsZ2Y3cjduZjAzY28zZHFrd2ZzOWwzdDMifQ.MEFuP3mRJQl-YQgtBBn9yA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-74.5, 40],
  zoom: 9
});

// Agregar la capa de calles
  map.on('load', function () {
    map.addLayer({
        'id': 'street-layer',
        'type': 'line',
        'source': 'composite',
        'source-layer': 'road',
        'paint': {
        'line-color': '#bbb',
        'line-width': 1
        }
    });
  });

function botonUbicacionManual()
{
    restartMap();
    onRadioClick();

    const marker = new mapboxgl.Marker({
        draggable: true
    })
    .setLngLat([-74.5, 40])
    .addTo(map);

  marker.on('dragend', () => {
    const lngLat = marker.getLngLat();
    const lng = lngLat.lng;
    const lat = lngLat.lat;

    // Actualizar la dirección en el input
    actualizarDireccion(lng, lat);
  });
}

// Función para actualizar la dirección en el input
function actualizarDireccion(lng, lat) {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${mapboxgl.accessToken}`)
  .then(response => response.json())
  .then(data => {
    const direccion = data.features[0].place_name;
    document.getElementById('direccion').value = direccion;
  });
}

function botonUbicacionTiempoReal()
{
    onRadioClick();

    navigator.geolocation.getCurrentPosition(posicion => {
    const lng = posicion.coords.longitude;
    const lat = posicion.coords.latitude;

    map.setCenter([lng, lat]);

    // Actualizar la dirección en el input
    actualizarDireccion(lng, lat);

    // Crear un marcador en la ubicación actual
    new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
    });
}

function restartMap() {
// Remueve el mapa actual
map.remove();

// Crea un nuevo mapa
map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-74.5, 40],
  zoom: 9
});

// Limpia el valor del input de dirección
document.getElementById('direccion').value = '';

}

function onRadioClick(){
    const continuarBtn = document.getElementById('continuarBtn');
    continuarBtn.style.display = 'inline-flex';

    const direccion = document.getElementById('direccion');
    direccion.style.display = 'inline-flex';

    const mapa = document.getElementById('map');
    mapa.style.display = 'block';

    const checkedImages = document.querySelectorAll('.checked');
    for (let i = 0; i < checkedImages.length; i++) {
      if (checkedImages[i].style.display === 'inline-flex') {
        checkedImages[i].style.display = 'none';
      }
    }
    const checked = event.target.parentNode.querySelector('.checked');
    checked.style.display = 'inline-flex';
  }