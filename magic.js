var Mirror = {
    data    :[
		weatherDataTimeStamp = "",
		weatherData	= "",
		transportDataTimeStamp = "",
		transportData = ""
	],
	initialize: function() {

		//Clock timer every second
		setTimeout(function() { clock(); }, 100);
		function clock() {
			Mirror.updateClock();
			setTimeout(function() { clock(); }, 1000);
		}

		//Weather timer every second 700 seconds // now every 5 seconds
		setTimeout(function() { weather(); }, 100);
		function weather() {
			Mirror.updateWeather();
			setTimeout(function() { weather(); }, 5000);
		}

    Mirror.updateTransport()

		//var test = Mirror.updateTransport();

		console.log("Magic mirror initializing");
		localStorage['visited'] = "ok";

		console.log(localStorage['visited']);
		console.log("here: " + this.data["weatherData"]);
	},
	updateClock: function() {

    var wochentage = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
    var monate = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);
    // wochentage[today.getDay()]
		var time = h + ":" + m + "<div style='font-size:30px;float:right;padding:4px;'>" + s+"</div>";
    var date = wochentage[today.getDay()]+", "+today.getDate()+". "+monate[today.getMonth()+1]+", "+today.getFullYear()
		//var date = today.getDate() + "." + (today.getMonth()+1) + "." + today.getFullYear();
		$('#clock').html(time);
		$('#date').html(date);
		//console.log(h + ":" + m + ":" + s);

		function checkTime(i) {
			if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
			return i;
		}

		},
	downloadWeather: function(){
		console.log("download weather");
		$.ajax({
			dataType: "json",
      //url: "http://api.openweathermap.org/data/2.5/forecast/city?id=7290253&APPID=22e7377de5329fdc7ba312c612d5e670",
			url: "http://api.openweathermap.org/data/2.5/forecast?id=7290253&APPID=22e7377de5329fdc7ba312c612d5e670",
			//url: "http://ip.jsontest.com/",
			success: function(result){
				console.log("result!"+result);

        localStorage.setItem("weatherData",JSON.stringify(result));
        localStorage.setItem("weatherDataTimeStamp",Date.now());
        console.log("new Timestamp: "+Date.now())

				}
		});
	},
	updateWeather: function(){
		console.log("update weather");
    //localStorage.clear();

    // COSMETIC VISUAL UPDATES
    $('.highcharts-button-box').hide()
    $('.highcharts-button-symbol').hide()
    $('.highcharts-credits').hide()
    /*
    $($('.highcharts-xaxis-labels')[0].children).each(function() {
      this.style.fill= "rgb(255,255,255)"
    });
    $($('.highcharts-yaxis-labels')[0].children).each(function() {
      this.style.fill= "rgb(255,255,255)"
    });
    */
    // -----------------------

    if (localStorage['weatherData'] == null){
      console.log("Data is not present, start loading");
      this.downloadWeather();
    }else{
      console.log("Data is present, start reading");
      if ((Date.now() - localStorage.getItem("weatherDataTimeStamp"))/1000 > 720){
        console.log("Data is too old, start new download");
        this.downloadWeather();
      }else{
        console.log("Data is current, check if update is needed");

        //debugger
        if (localStorage.getItem("weatherDataTimeStamp")>$("#weather_timestamp").text() || $("#weather_timestamp").text() == "empty"){
          console.log("... displaying too old data, update running")

          var jsonResponse = JSON.parse(localStorage.getItem("weatherData"))
          $("#weather_timestamp").text(localStorage.getItem("weatherDataTimeStamp"))
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

        }else{
          console.log("... update is not needed")
        }
      }
    }

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
					categories: categories,
          labels:{
            style:{
              color:"#FFFFFF"
            }
          }
				},
				yAxis: {
					title: {
						text: 'Temperature',
						enabled:false
					},
          labels:{
            style:{
              color:"#FFFFFF"
            }
          }

				},
				plotOptions: {
					spline: {
						color: '#FFFFFF',
						lineWidth: 4,
						dataLabels: {
							enabled: true,
							color: '#FFFFFF'
						}
					}
				},
				series: [{
					name: 'Weather',
					data: data,
          marker: {
            width: 32,
            height: 32
          },

				}]
			});



		}
	},

	updateTransport: function(){
		console.log("updating transport");

		$.ajax({
			url: "/repo/magicmirror/php/getbvg.php",
			success: function(result){
				//console.log("result!"+result);
				var res = result.split("~~~~~");//$('<div>'+result+'</div>');
				//console.log("here: "+res[0]);

        var currTime = $('#clock').text().slice(0,-2).split(":");

        var i = 0
        var k = 0
				while (k<8) {
          i = i+1
					var jElem = $('<div>'+res[i]+'</div>');
					list = (jElem.text()).split("\n");

          var thisTime = list[1].split(":")
          if (!(thisTime[0]<currTime[0])){
            if (!(thisTime[0]==currTime[0] && thisTime[1]<=currTime[1])){

              min = thisTime[1]-currTime[1];
              hour_carry = 0;
              if(min < 0){
                  min += 60;
                  hour_carry += 1;
              }
              hour = thisTime[0]-currTime[0]-hour_carry;
              diff = hour + ":" + min;
              //debugger


              $('#transport_list').append('<div class="transport_element"><div class="transport_id">'+replaceHelper(list[6], 'linie_main')+'</div><div class="transport_time">'+diff.split(":")[1]+' min</div><div class="transport_dest">'+replaceHelper(list[11],"linie_sub")+'</div></div><div class="clear"></div>');
    					console.log(list[1]+" "+list[6].replace("Bus ","")+" "+list[11].replace(" (Berlin)",""));
              k = k+1
            }
          }

				}
				return jElem;
			}
		});

    function replaceHelper(origString, header){

      origString = origString.replace("Bus ","<img class='"+header+"' src='img/linien/bus.png'> ")
      origString = origString.replace("S+U ","<img class='"+header+"' src='img/linien/sbahn.png'>+<img class='"+header+"' src='img/linien/U.svg'> ")
      origString = origString.replace("U ","<img class='"+header+"' src='img/linien/U.svg'> ")
      origString = origString.replace("U6","<img class='"+header+"' src='img/linien/u6.png' span style='width:50px;'>")
      origString = origString.replace("S ","<img class='"+header+"' src='img/linien/sbahn.png'> ")
      origString = origString.replace(" (Berlin)","")

      return origString
    }

	}

}
