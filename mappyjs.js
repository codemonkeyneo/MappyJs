/**
 * Mappy helper Lib v1.0.0
 * simply include this simple library to then have a Mappy helper
 * to perform common operation required when working with Maps.
 *
 */
var Mappy = function() {
	
	var DEG_TO_RAD = Math.PI / 180;
	var DEG_PER_RAD = (180.0/Math.PI);
	var EARTH_RADIUS = 6371; // 3,959 miles ( 6,371 km )
	
	return {
		distanceBetweenLatLng: function(lat1, lon1, lat2, lon2) {
			var dLat = (lat2-lat1)* DEG_TO_RAD;  
			var dLon = (lon2-lon1)* DEG_TO_RAD;   
			var a = Math.sin(dLat/2) * Math.sin(dLat/2) +  
					Math.cos(lat1* DEG_TO_RAD) * Math.cos(lat2* DEG_TO_RAD) *   
					Math.sin(dLon/2) * Math.sin(dLon/2);   
			var c = 2 * Math.asin(Math.sqrt(a));   
			var distance = EARTH_RADIUS * c;  
			
			return distance;
		},
		bearingBetweenLatLng: function(lat1,lon1, lat2, lon2) {
			var dLon = lon2 - lon1;
			var y = Math.sin(dLon) * Math.cos(lat2);
			var x = Math.cos(lat1)*Math.sin(lat2)-Math.sin(lat1)*Math.cos(lat2)*Math.cos(dLon);
			return DEG_PER_RAD * Math.atan2(y, x);
		}
	}

}();