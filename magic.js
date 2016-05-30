var Mirror = {
    data    :[
		weatherDataTimeStamp = "";
		weatherData	= "",
		transportDataTimeStamp = "";
		transportData = ""
	],
	initialize: function() {

		if (localStorage['weatherData'] != ""){
			console.log("Data is present, start reading");
			this.data["dataPresent"] = true;
		}else{
			console.log("No Data is present, start loading ");
		}
		
		//Clock timer every second
		setTimeout(function() { clock(); }, 100);
		function clock() {
			Mirror.updateClock();
			setTimeout(function() { clock(); }, 1000);
		}
		
		//Clock timer every second 700 seconds
		setTimeout(function() { weather(); }, 100);
		function weather() {
			Mirror.updateWeather();
			setTimeout(function() { clock(); }, 700000);
		}
		
		//var test = Mirror.updateTransport();
		
		console.log("Magic mirror initializing");
		localStorage['visited'] = "ok";
		
		console.log(localStorage['visited']);
		console.log("here: " + this.data["weatherData"]);
	},
	updateClock: function() {
	
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
		var time = h + ":" + m + ":" + s;
		var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();
		$('#clock').html(time);
		$('#date').html(date);
		//console.log(h + ":" + m + ":" + s);

		function checkTime(i) {
			if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			return i;
		}
		
		},
		
	updateWeather: function(){
		console.log("updating weather today");
		this.data["weatherData"] = "test";
		$.ajax({
			dataType: "json",
			//url: "http://api.openweathermap.org/data/2.5/forecast/city?id=7290253&APPID=22e7377de5329fdc7ba312c612d5e670",
			url: "http://ip.jsontest.com/",
			success: function(result){
				console.log("result!"+result);
			  
				var jsonString = '{"city":{"id":7290253,"name":"Berlin Tempelhof","coord":{"lon":13.41027,"lat":52.476929},"country":"DE","population":0,"sys":{"population":0}},"cod":"200","message":0.0032,"cnt":40,"list":[{"dt":1463842800,"main":{"temp":298.33,"temp_min":295.421,"temp_max":298.33,"pressure":1024.43,"sea_level":1030.07,"grnd_level":1024.43,"humidity":59,"temp_kf":2.91},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.32,"deg":237.5},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-21 15:00:00"},{"dt":1463853600,"main":{"temp":297.57,"temp_min":294.807,"temp_max":297.57,"pressure":1024.36,"sea_level":1029.96,"grnd_level":1024.36,"humidity":53,"temp_kf":2.76},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":2.21,"deg":222.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-21 18:00:00"},{"dt":1463864400,"main":{"temp":292.74,"temp_min":290.134,"temp_max":292.74,"pressure":1023.82,"sea_level":1029.51,"grnd_level":1023.82,"humidity":66,"temp_kf":2.61},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":1.6,"deg":154.501},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-21 21:00:00"},{"dt":1463875200,"main":{"temp":290.37,"temp_min":287.919,"temp_max":290.37,"pressure":1023.33,"sea_level":1029.06,"grnd_level":1023.33,"humidity":73,"temp_kf":2.45},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":36},"wind":{"speed":2.12,"deg":171.003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-22 00:00:00"},{"dt":1463886000,"main":{"temp":289.98,"temp_min":287.679,"temp_max":289.98,"pressure":1022.21,"sea_level":1028.03,"grnd_level":1022.21,"humidity":75,"temp_kf":2.3},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":2.86,"deg":135.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 03:00:00"},{"dt":1463896800,"main":{"temp":293.68,"temp_min":291.532,"temp_max":293.68,"pressure":1021.78,"sea_level":1027.5,"grnd_level":1021.78,"humidity":63,"temp_kf":2.15},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":4.41,"deg":149},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 06:00:00"},{"dt":1463907600,"main":{"temp":298.16,"temp_min":296.166,"temp_max":298.16,"pressure":1021.1,"sea_level":1026.8,"grnd_level":1021.1,"humidity":64,"temp_kf":1.99},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":4.71,"deg":157.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 09:00:00"},{"dt":1463918400,"main":{"temp":300.54,"temp_min":298.699,"temp_max":300.54,"pressure":1019.44,"sea_level":1025.05,"grnd_level":1019.44,"humidity":55,"temp_kf":1.84},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":7.51,"deg":160.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 12:00:00"},{"dt":1463929200,"main":{"temp":301.73,"temp_min":300.044,"temp_max":301.73,"pressure":1017.78,"sea_level":1023.48,"grnd_level":1017.78,"humidity":45,"temp_kf":1.69},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":6.26,"deg":166.503},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 15:00:00"},{"dt":1463940000,"main":{"temp":300.26,"temp_min":298.724,"temp_max":300.26,"pressure":1017.12,"sea_level":1022.86,"grnd_level":1017.12,"humidity":44,"temp_kf":1.53},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.27,"deg":157.505},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-22 18:00:00"},{"dt":1463950800,"main":{"temp":295.2,"temp_min":293.82,"temp_max":295.2,"pressure":1017.05,"sea_level":1022.8,"grnd_level":1017.05,"humidity":48,"temp_kf":1.38},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.22,"deg":128.505},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-22 21:00:00"},{"dt":1463961600,"main":{"temp":293.34,"temp_min":292.112,"temp_max":293.34,"pressure":1016.7,"sea_level":1022.45,"grnd_level":1016.7,"humidity":63,"temp_kf":1.23},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":4.43,"deg":128.509},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-23 00:00:00"},{"dt":1463972400,"main":{"temp":291.41,"temp_min":290.34,"temp_max":291.41,"pressure":1016.6,"sea_level":1022.32,"grnd_level":1016.6,"humidity":67,"temp_kf":1.07},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":3.92,"deg":132.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-23 03:00:00"},{"dt":1463983200,"main":{"temp":294.19,"temp_min":293.27,"temp_max":294.19,"pressure":1016.18,"sea_level":1021.8,"grnd_level":1016.18,"humidity":60,"temp_kf":0.92},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":4.72,"deg":133},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-23 06:00:00"},{"dt":1463994000,"main":{"temp":298.07,"temp_min":297.305,"temp_max":298.07,"pressure":1015.83,"sea_level":1021.55,"grnd_level":1015.83,"humidity":61,"temp_kf":0.77},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.1,"deg":143.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-23 09:00:00"},{"dt":1464004800,"main":{"temp":300.27,"temp_min":299.652,"temp_max":300.27,"pressure":1015.29,"sea_level":1020.94,"grnd_level":1015.29,"humidity":58,"temp_kf":0.61},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.46,"deg":148.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-23 12:00:00"},{"dt":1464015600,"main":{"temp":297.37,"temp_min":296.909,"temp_max":297.37,"pressure":1014.71,"sea_level":1020.4,"grnd_level":1014.71,"humidity":73,"temp_kf":0.46},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":24},"wind":{"speed":3.01,"deg":159.003},"rain":{"3h":1.78},"sys":{"pod":"d"},"dt_txt":"2016-05-23 15:00:00"},{"dt":1464026400,"main":{"temp":295,"temp_min":294.689,"temp_max":295,"pressure":1015.09,"sea_level":1020.73,"grnd_level":1015.09,"humidity":73,"temp_kf":0.31},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":44},"wind":{"speed":2.82,"deg":314.501},"rain":{"3h":2.665},"sys":{"pod":"d"},"dt_txt":"2016-05-23 18:00:00"},{"dt":1464037200,"main":{"temp":292.89,"temp_min":292.733,"temp_max":292.89,"pressure":1015.28,"sea_level":1021.04,"grnd_level":1015.28,"humidity":73,"temp_kf":0.15},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":4.12,"deg":326.502},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-23 21:00:00"},{"dt":1464048000,"main":{"temp":291.131,"temp_min":291.131,"temp_max":291.131,"pressure":1014.52,"sea_level":1020.29,"grnd_level":1014.52,"humidity":74,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":32},"wind":{"speed":2.96,"deg":354.004},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-24 00:00:00"},{"dt":1464058800,"main":{"temp":290.136,"temp_min":290.136,"temp_max":290.136,"pressure":1014.29,"sea_level":1020.04,"grnd_level":1014.29,"humidity":79,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.61,"deg":107},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-24 03:00:00"},{"dt":1464069600,"main":{"temp":293.559,"temp_min":293.559,"temp_max":293.559,"pressure":1015.06,"sea_level":1020.73,"grnd_level":1015.06,"humidity":75,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.31,"deg":129},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-24 06:00:00"},{"dt":1464080400,"main":{"temp":297.083,"temp_min":297.083,"temp_max":297.083,"pressure":1015.49,"sea_level":1021.04,"grnd_level":1015.49,"humidity":71,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.27,"deg":137.004},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-24 09:00:00"},{"dt":1464091200,"main":{"temp":298.961,"temp_min":298.961,"temp_max":298.961,"pressure":1015.53,"sea_level":1021.1,"grnd_level":1015.53,"humidity":63,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":5.65,"deg":145.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-24 12:00:00"},{"dt":1464102000,"main":{"temp":298.556,"temp_min":298.556,"temp_max":298.556,"pressure":1015.5,"sea_level":1021.18,"grnd_level":1015.5,"humidity":62,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":12},"wind":{"speed":4.26,"deg":172.501},"rain":{"3h":0.78},"sys":{"pod":"d"},"dt_txt":"2016-05-24 15:00:00"},{"dt":1464112800,"main":{"temp":296.98,"temp_min":296.98,"temp_max":296.98,"pressure":1016.11,"sea_level":1021.81,"grnd_level":1016.11,"humidity":56,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":56},"wind":{"speed":3.56,"deg":244.004},"rain":{"3h":0.32},"sys":{"pod":"d"},"dt_txt":"2016-05-24 18:00:00"},{"dt":1464123600,"main":{"temp":293.083,"temp_min":293.083,"temp_max":293.083,"pressure":1017.63,"sea_level":1023.3,"grnd_level":1017.63,"humidity":60,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":56},"wind":{"speed":5.35,"deg":271.503},"rain":{"3h":0.11},"sys":{"pod":"n"},"dt_txt":"2016-05-24 21:00:00"},{"dt":1464134400,"main":{"temp":290.482,"temp_min":290.482,"temp_max":290.482,"pressure":1018.75,"sea_level":1024.48,"grnd_level":1018.75,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":5.21,"deg":283.5},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-25 00:00:00"},{"dt":1464145200,"main":{"temp":288.645,"temp_min":288.645,"temp_max":288.645,"pressure":1019.57,"sea_level":1025.2,"grnd_level":1019.57,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":4.76,"deg":292.002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-25 03:00:00"},{"dt":1464156000,"main":{"temp":289.26,"temp_min":289.26,"temp_max":289.26,"pressure":1020.18,"sea_level":1026,"grnd_level":1020.18,"humidity":70,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":4.22,"deg":307.504},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-25 06:00:00"},{"dt":1464166800,"main":{"temp":291.352,"temp_min":291.352,"temp_max":291.352,"pressure":1020.66,"sea_level":1026.4,"grnd_level":1020.66,"humidity":73,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":3.24,"deg":322.503},"rain":{"3h":0.02},"sys":{"pod":"d"},"dt_txt":"2016-05-25 09:00:00"},{"dt":1464177600,"main":{"temp":294.173,"temp_min":294.173,"temp_max":294.173,"pressure":1020.49,"sea_level":1026.27,"grnd_level":1020.49,"humidity":74,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":48},"wind":{"speed":2.36,"deg":321.5},"rain":{"3h":0.0025},"sys":{"pod":"d"},"dt_txt":"2016-05-25 12:00:00"},{"dt":1464188400,"main":{"temp":295.67,"temp_min":295.67,"temp_max":295.67,"pressure":1019.73,"sea_level":1025.64,"grnd_level":1019.73,"humidity":72,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":24},"wind":{"speed":2.06,"deg":318.5},"rain":{"3h":0.3},"sys":{"pod":"d"},"dt_txt":"2016-05-25 15:00:00"},{"dt":1464199200,"main":{"temp":295.411,"temp_min":295.411,"temp_max":295.411,"pressure":1019.88,"sea_level":1025.64,"grnd_level":1019.88,"humidity":64,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":0},"wind":{"speed":1.61,"deg":353.5},"rain":{"3h":0.6},"sys":{"pod":"d"},"dt_txt":"2016-05-25 18:00:00"},{"dt":1464210000,"main":{"temp":290.467,"temp_min":290.467,"temp_max":290.467,"pressure":1020.59,"sea_level":1026.51,"grnd_level":1020.59,"humidity":78,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":0},"wind":{"speed":0.41,"deg":26.5009},"rain":{"3h":0.0875},"sys":{"pod":"n"},"dt_txt":"2016-05-25 21:00:00"},{"dt":1464220800,"main":{"temp":288.513,"temp_min":288.513,"temp_max":288.513,"pressure":1021.56,"sea_level":1027.36,"grnd_level":1021.56,"humidity":83,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":24},"wind":{"speed":0.62,"deg":333.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2016-05-26 00:00:00"},{"dt":1464231600,"main":{"temp":287.467,"temp_min":287.467,"temp_max":287.467,"pressure":1022.19,"sea_level":1028.01,"grnd_level":1022.19,"humidity":88,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":1.26,"deg":339.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-26 03:00:00"},{"dt":1464242400,"main":{"temp":290.813,"temp_min":290.813,"temp_max":290.813,"pressure":1023.14,"sea_level":1028.89,"grnd_level":1023.14,"humidity":73,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":64},"wind":{"speed":2.72,"deg":27.502},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-26 06:00:00"},{"dt":1464253200,"main":{"temp":295.714,"temp_min":295.714,"temp_max":295.714,"pressure":1023.93,"sea_level":1029.77,"grnd_level":1023.93,"humidity":74,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":36},"wind":{"speed":3.36,"deg":60.0016},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-26 09:00:00"},{"dt":1464264000,"main":{"temp":296.342,"temp_min":296.342,"temp_max":296.342,"pressure":1024.38,"sea_level":1029.97,"grnd_level":1024.38,"humidity":66,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":24},"wind":{"speed":5.36,"deg":53.5002},"rain":{},"sys":{"pod":"d"},"dt_txt":"2016-05-26 12:00:00"}]}';
				
				jsonResponse = JSON.parse(jsonString);
				//jsonResponse = result;
				
				$('#celsius').html(formatKC(jsonResponse["list"][0]["main"]["temp"])+" &#x2103;"); // 
				$('#weather_today_symbol').css("background-image", "url('img/weather/"+jsonResponse["list"][0]["weather"][0]["icon"]+".png')")//jsonResponse["list"][0]["weather"][0]["icon"]
				$('#weather_today_location').html(jsonResponse["city"]["name"]); // -273,15
				
				
				// Update forecast
				var categories2 = [];
				var data2 = [];
				for (i = 1; i < 6; i++) { 
					categories2.push(((jsonResponse["list"][i]["dt_txt"]).split(" ")[1]).split(":")[0]);
					data2.push(
					{
					y: formatKC(jsonResponse["list"][i]["main"]["temp"]),
					marker: {
						symbol: "url(img/weather/"+jsonResponse["list"][i]["weather"][0]["icon"]+".png)"
					}
					});
				}
				updateForecast(categories2, data2);
				}
		});
		
		function formatKC(i){
			i =  i-273.15;
			return Number((i).toFixed(1));
		}
		
		function updateForecast(categories, data) {
			$('#weather_forecast').highcharts({
				chart: {
					type: 'spline',
					backgroundColor: '#000000'
				},
				legend: {
					enabled: false
				},
				title: {
					text: ''
				},
				xAxis: {
					categories: categories
				},
				yAxis: {
					title: {
						text: 'Temperature',
						enabled:false
					}
					
				},
				plotOptions: {
					spline: {
						marker: {
							radius: 2,
							lineColor: '#FFFFFF',
							lineWidth: 5
						},
						color: '#FFFFFF',
						lineWidth: 4,
						dataLabels: {
							enabled: true,
							color: '#FFFFFF',
						}
					}
				},
				series: [{
					name: 'Weather',
					marker: {
						symbol: 'square'
					},
					data: data

				}]
			});
		}
	},
	
	updateTransport: function(){
		console.log("updating transport");

		$.ajax({
			url: "/magicmirror/js/php/getbvg.php",
			success: function(result){
				//console.log("result!"+result);
				var res = result.split("~~~~~");//$('<div>'+result+'</div>');
				//console.log("here: "+res[0]);
				for (i = 1; i < 11; i++) { 
					var jElem = $('<div>'+res[i]+'</div>');
					list = (jElem.text()).split("\n");
					
					$('#transport_list').append('<div class="transport_element"><div class="transport_time">'+list[1]+'</div><div class="transport_id">'+list[6].replace("Bus ","")+'</div><div class="transport_dest">'+list[11].replace(" (Berlin)","")+'</div></div><div class="clear"></div>');
					
					console.log(list[1]+" "+list[6].replace("Bus ","")+" "+list[11].replace(" (Berlin)",""));
					//$('#transport_list').append(list[1]+" "+list[6].replace("Bus ","")+" "+list[11].replace(" (Berlin)","")+"<br />");
				}
				return jElem;
			}
		});

		//var test = $('<div>00:43</td><td headers="hafasSQarrLine" class="nowrap ivuStBoardLine ivuVerticalMiddle"><img src="/Fahrinfo/img/products/8_pic.png" class="middle product" alt="" /><a href="/Fahrinfo/bin/traininfo.bin/dn/373545/143087/589570/170271/80?ld=0.1&amp;L=&amp;showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&&amp;input=9068202&amp;boardType=dep&amp;time=00:37&amp;maxJourneys=30&amp;dateBegin=22.05.16&amp;dateEnd=22.05.17&amp;selectDate=today&amp;dirInput=&amp;backLink=sq&amp;">Bus  M46</a><input id="prod_bit_dep_2" type="hidden" value="8" /></td><td headers="hafasSQarrDest" class="ivuVerticalMiddle"><a href="/Fahrinfo/bin/stboard.bin/dn?ld=0.1&amp;L=&amp;showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&showProduct_16=1&showProduct_8=1&showProduct_4=1&showProduct_2=1&showProduct_1=1&showProduct_64=1&input=9004181&start=1" title="S+U Zoologischer Garten">S+U Zoologischer Garten</a></td></tr><script type="text/javascript">if(typeof ivuDirSetdep != undefined){ivuDirSet.add("Bus  M46");ivuRouteSet.add("S+U Zoologischer Garten");}</script><tr class=""></div>');
		
		
	}
	
}