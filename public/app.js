var contentString = '<h2>Antananarivo</h2><p>Antananarivo is the capital of Madagascar</p>';




var init = function() {
    var container = document.getElementById('main-map');
    var center = { lat: -18.880300444535074, lng: 47.5048828125 };
    var mainMap = new MapWrapper(container, center, 8);
    mainMap.addInfoWindow(contentString); 
    mainMap.addMarker(center);
    mainMap.addClickEvent();
}

window.onload = init;