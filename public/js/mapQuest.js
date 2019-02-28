function initMap() {

L.mapquest.key = 'SvGJE4XWkKG2s7ZY3i8cuV4ska2evWAy';

var map = L.mapquest.map('map', {
	center: [32.878, -117.236],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
});

L.marker([32.878, -117.236]).addTo(map);

}