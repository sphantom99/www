<?php
	include_once "./Login/header.php";
?>
<header id="header" class="">
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>	

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>

   <style>
   	#map {
   		height: 500px;
   		width : 500px;
   	}
   </style>
   
</header><!-- /header -->

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


  
<script type="text/javascript" src="leaflet-heat.js"></script>
  



<div id=map> </div>


<script type="text/javascript"> 



	var mymap = L.map('map').setView([38.246208, 21.735069], 10); 

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic3BoYW50b205OSIsImEiOiJja2kzZHUwMWo3YTExMnRsNjg3dGJ2eXBqIn0.i30glj5An3xOnhtOrzHBRA'
}).addTo(mymap);

	
	function heatmap(long,lat) {

		var heat = L.heatLayer([
		[lat,long],
		[38.246208, 21.735069, 1], // lat, lng, intensity
		
		
		[52.520008, 13.404954, 1],
		[50.6, 30.4, 0.5],
	], {radius: 200}).addTo(mymap);
	}

	$(document).ready( function() {
		const Url = "https://freegeoip.app/json/151.101.129.69";
		$.getJSON(Url , function(res) {
			var long = res.longitude;
			var lat = res.latitude;
			console.log(long + "" + lat);
			heatmap(long,lat);
		}
			
		)
	})
	
</script>


