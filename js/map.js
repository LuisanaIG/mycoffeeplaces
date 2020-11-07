//Definir el mapa y mapa base//
let mymap = L.map('mapid')

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' + "| Icons made by <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.com/' title='Flaticon'> www.flaticon.com</a>",
	subdomains: 'abcd',
	maxZoom: 19
}).addTo(mymap);


//Marker personalizado de Flaction//
let iconMarker =  L.icon({
        iconUrl: "images/marker.png",
        iconSize: [34 , 34],
        iconAnchor: [15, 30]
      });

//Agregar Geojson//
let coffeeshop =  L.geoJson (coffeepoints,{
    onEachFeature: function(feature, layer){
      layer.bindPopup("<div class= 'popup'><h3><b>" + feature.properties.name + "</b></h3></div>"
      + "<div class ='infocafe'><p><b>Marca del Café: </b>" + feature.properties.coffee_brand
      + "<br><b>Origen: </b>" + feature.properties.origin
      + "<br><b>Tostado: </b>" + feature.properties.roasted_oring
      + "<br><b>Venden café en grano: </b>" + feature.properties.sell_coffee_bean
      + "<br><b>Teléfono: </b>" + feature.properties.phone
      + "<br><b>Horario: </b>" + feature.properties.schedule
      + "<br><b>Dirección: </b>" + feature.properties.address
      + "</div></p>");
      layer.setIcon(iconMarker)
    }
  }).addTo(mymap)
  mymap.fitBounds(coffeeshop.getBounds())
