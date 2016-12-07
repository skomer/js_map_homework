
var infoWindow;

var MapWrapper = function(container, center, zoom) {
    this.googleMap = new google.maps.Map(container, { center: center, zoom: zoom });
}

MapWrapper.prototype = {

    addMarker: function(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: this.googleMap
        });
        marker.addListener('click', function() {
            infoWindow.open(this.googleMap, marker);
        });
    },
    addClickEvent: function() {
        google.maps.event.addListener(this.googleMap, 'click', function(event) {
            var coords = event.latLng;
            console.log(coords.lat(), coords.lng());
            this.addMarker(coords);
        });
    },
    addInfoWindow: function(contentString) {
        infoWindow = new google.maps.InfoWindow({
            content: contentString
        });
    },
    goTo: function(coords) {
        
    }


}