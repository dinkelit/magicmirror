<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
   "http://www.w3.org/TR/html4/strict.dtd">
<HTML>
   <HEAD>
	<link rel="stylesheet" type="text/css" href="magic.css" />
	<link href='https://fonts.googleapis.com/css?family=Francois+One' rel='stylesheet' type='text/css'>
	<script src="jquery.min.js"></script>
  <script src="jquery-ui.js"></script>
	<script src="magic.js" type="text/javascript"></script>
	<script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
      <TITLE>Magic Mirror</TITLE>
   </HEAD>
   <BODY>

      <!--<div id="dxy" style="position:absolute;z-index:1500;width:100px; height:100px; background-color:red; top:50px;"></div>-->

     <div id="leftSlide" onClick="Mirror.slideLeft();">
       <div id="calendar_bar"></div>
       <div id="calendar_encl">

         <iframe id = "calendar_frame" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=1370&amp;wkst=1&amp;bgcolor=%23000000&amp;src=kontaktvdinkel%40gmail.com&amp;color=%23125A12&amp;src=de.german%23holiday%40group.v.calendar.google.com&amp;color=%230F4B38&amp;src=fglrvqbmlhp722l8u2gh25i2c4%40group.calendar.google.com&amp;color=%2323164E&amp;src=bb5jis13bcth9q49d8rmjun794%40group.calendar.google.com&amp;color=%235229A3&amp;src=1ofr5s22fspcg89bvthftfkrh0%40group.calendar.google.com&amp;color=%23875509&amp;ctz=Europe%2FBerlin" frameborder="0" scrolling="no"></iframe>

       </div>

     </div>
     <div id="upSlide" onClick="Mirror.slideUp();">
         UpSlide
     </div>
     <div id="downSlide" onClick="Mirror.slideDown();">
         DownSlide
     </div>
     <div id="rightSlide" onClick="Mirror.slideRight();">
        <div id="weather_bar"></div>
        <div id="weather_encl">
          <!--http://www.wetteronline.de/wetterfilm -->
          <iframe id = "weather_frame"
          src="https://www.accuweather.com/de/de/berlin/10178/may-weather/178087?monyr=5/1/2017" frameborder="0" scrolling="no"></iframe>

        </div>
        <div id="film_encl">
          <!--
          <iframe id = "weather_frame_film"
          src="https://www.niederschlagsradar.de/image.ashx?type=regioloop&regio=bln&j=&m=&d=&mi=&uhr=&bliksem=0&voor=&srt=loop1stunde&tijdid=201755246" frameborder="0" scrolling="no"></iframe>
        -->
        <img src="php/weather.gif" id="weather_frame_film" />
      </div>

     </div>
		<div id="top" onClick="Mirror.slideUp();">
      <div id="content_name">
        Kalender
      </div>
      <!--<input type=text id=myInput>
      <input type=text id=myInput2>-->
			<div id="date_wrapper">
        <div id="date"></div>
				<div id="clock"></div>

			</div>
		</div>
		<div id="mid_left" onClick="Mirror.slideLeft();">
      <div id="transport_list">Abfahrtzeiten:</div>
		</div>
		<div id="mid_mid" onClick="Mirror.slideNear();">

		</div>
		<div id="mid_right" onClick="Mirror.slideRight();">

		</div>
		<div class="clear"></div>
		<div id="bot" onClick="Mirror.slideDown();">
			<div id="weather_wrapper">
        <div id="weather_timestamp" style="visibility:hidden;height:0px;">empty</div>
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

    $("body").mousemove(function(e){
      // Gate so that event doesn't fire too often

      if ((Date.now() - localStorage.getItem("lastMove"))>2500 ){ // && !(e.clientX == localStorage.getItem("lastX") && e.clientY == localStorage.getItem("lastY"))
    		//alert(e.clientX+" "+e.clientY);
        //debugger
    		if (e.clientX == 0 && e.clientY == 1){
          console.log('UP');
          Mirror.slideDown();
    		}
    		else if (e.clientX == 0 && e.clientY == 2){
          console.log('DOWN');
          Mirror.slideUp();
    		}
    		else if (e.clientX == 0 && e.clientY == 3){
          console.log('LEFT');
          Mirror.slideRight();
    		}
    		else if (e.clientX == 0 && e.clientY == 4){
          console.log('RIGHT');
          Mirror.slideLeft();
    		}
        else if (e.clientX == 0 && e.clienty == 5){
          Mirror.slideNear();
          console.log('NEAR');
        }
        else if (e.clientX == 0 && e.clienty == 6){
          Mirror.slideFar();
          console.log('FAR');
        }

        localStorage.setItem("lastMove",Date.now());
        localStorage.setItem("lastX",e.clientX);
        localStorage.setItem("lastY",e.clientY);

    }
	})

  window.onload = addListeners();

  function addListeners(){
      document.getElementById('dxy').addEventListener('mousedown', mouseDown, false);
      window.addEventListener('mouseup', mouseUp, false);

  }

  function mouseUp()
  {
      window.removeEventListener('mousemove', divMove, true);
  }

  function mouseDown(e){
    window.addEventListener('mousemove', divMove, true);
  }

  function divMove(e){
      var div = document.getElementById('dxy');
    div.style.position = 'absolute';
    div.style.top = e.clientY + 'px';
    div.style.left = e.clientX + 'px';
  }

  onload = function () {
     var e = document.getElementById('myInput');
     e.oninput = test;
     e.onpropertychange = e.oninput; // for IE8
     // e.onchange = e.oninput; // FF needs this in <select><option>...
     // other things for onload()
     var e = document.getElementById('myInput2');
     e.oninput = test2;
     e.onpropertychange = e.oninput;
     function test(){
       console.log("test")
       var e = document.getElementById('myInput');
       var i = document.getElementById('dxy');
       $(i).css("height", e.value+"px")
       //debugger
     }
     function test2(){
       console.log("test2")
       var e = document.getElementById('myInput2');
       var i = document.getElementById('dxy');
       $(i).css("width", e.value+"px")
       //debugger
     }
    };


	</script>
   </BODY>
</HTML>
