var companies = [
  ['Comp1', 59.61054, 16.55104, 4, '<h1>Company 1</h1><p>en massa kul text om Company 1</p><p><a href="http://www.quicksound.sw">Link</a></p>'],
  ['Comp2', 59.611850, 16.540824, 5, '<h1>Company 2</h1><p>en massa kul text om Company 2</p><p><a href="http://www.quicksound.se">Link</a></p>'],
  ['Comp3', 59.610413, 16.55094, 3, '<h1>Company 3</h1><p>en massa kul text om Company 3</p><p><a href="http://www.quicksound.se">Link</a></p>']
];		
		
var Map = {};

Map.Instance = (function(){

	var startPos(62.60827, 16.54541);

  	var image = new google.maps.MarkerImage('img/icons/MapsMarker.png',
	new google.maps.Size(32, 32),
		new google.maps.Point(0,0),
  		new google.maps.Point(16, 31)
	);		
				
	return {			
		initialize: function(element) {	
			var startPos = new google.maps.LatLng(startPos);
			
			var mapOptions = {
				zoom: 13,
				center: startPos,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};					
			
			var map = new google.maps.Map(document.getElementById(element), mapOptions);
					 	
			this.setMarkers(map, companies);						
			infowindow = new google.maps.InfoWindow();
		},
	
		setMarkers: function(map, locations) {
			for (var i = 0; i < locations.length; i++) {
			    var company = locations[i];
			    var myLatLng = new google.maps.LatLng(company[1], company[2]);
			    var marker = new google.maps.Marker({
			        position: myLatLng,
			        map: map,
			        icon: image,
			        title: company[0],
			        zIndex: company[3],
					content: company[4]
			    });														
																
				google.maps.event.addListener(marker, 'click', function() {					
					infowindow.setContent(this.content),
				  	infowindow.open(map,this)
				});				
			}
		}	
	}
})();

Map.Locations = (function() {
	
	return{
		addLocation: function(locationObject) {
			
		}	
	}	
})();