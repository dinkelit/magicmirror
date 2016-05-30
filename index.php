<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
   <HEAD>
	<link rel="stylesheet" type="text/css" href="magic.css" />
	<link href='https://fonts.googleapis.com/css?family=Francois+One' rel='stylesheet' type='text/css'>
	<script src="jquery.min.js"></script>
	<script src="magic.js" type="text/javascript"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
      <TITLE>Magic Mirror</TITLE>
   </HEAD>
   <BODY>
		<div id="top" onclick="console.log('UP');">
			<div id="date_wrapper">
				<div id="clock"></div>
				<div id="date"></div>
			</div>
		</div>
		<div id="mid_left" onclick="console.log('LEFT');">
			
		</div>
		<div id="mid_mid">
		
		</div>
		<div id="mid_right" onclick="console.log('RIGHT');">
			<div id="transport_list"></div>
		</div>
		<div class="clear"></div>
		<div id="bot" onclick="console.log('DOWN');">
			<div id="weather_wrapper">
				<div id="weather_today">
					<div id="weather_today_symbol"><p id="celsius"></div>
					<div id="weather_today_location"></div>
				</div>
				<div id="weather_forecast">
				</div>
			</div>
		</div>
	<script>
		Mirror.initialize();
	</script>
   </BODY>
</HTML>