// icons from https://mapicons.mapsmarker.com
// define shared options that will be inherited by all custom icons
var customIcon = L.Icon.extend({
    options: {
        iconAnchor:   [16, 37], // point of the icon which will correspond to marker's location
        popupAnchor:  [0, -37] // point from which the popup should open relative to the iconAnchor
    }
});
// then define the individual icons by feeding in the image URLs

var storeIcon = new customIcon({iconUrl: 'assets/icons/mall.png'});
