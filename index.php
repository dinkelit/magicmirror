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
     <div id="leftSlide">
       <div id="calendar_bar"></div>
       <div id="calendar_encl">
         <iframe id = "calendar_frame" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=900&amp;wkst=1&amp;bgcolor=%23000000&amp;src=kontaktvdinkel%40gmail.com&amp;color=%23125A12&amp;src=de.german%23holiday%40group.v.calendar.google.com&amp;color=%230F4B38&amp;src=fglrvqbmlhp722l8u2gh25i2c4%40group.calendar.google.com&amp;color=%2323164E&amp;src=bb5jis13bcth9q49d8rmjun794%40group.calendar.google.com&amp;color=%235229A3&amp;src=1ofr5s22fspcg89bvthftfkrh0%40group.calendar.google.com&amp;color=%23875509&amp;ctz=Europe%2FBerlin" frameborder="0" scrolling="no"></iframe>
       </div>

     </div>
     <div id="upSlide">
         UpSlide
     </div>
     <div id="downSlide">
         DownSlide
     </div>
     <div id="rightSlide">
        <div id="weather_bar"></div>
        <div id="weather_encl">
          <iframe id = "weather_frame"
          src="https://www.accuweather.com/de/de/berlin/10178/may-weather/178087?monyr=5/1/2017" frameborder="0" scrolling="no"></iframe>
        </div>
        <div id="film_encl">
          <iframe id = "weather_frame_film"
          src="http://www.wetteronline.de/wetterfilm" frameborder="0" scrolling="no"></iframe>
      </div>

     </div>
		<div id="top">
      <div id="content_name">
        Kalender
      </div>
			<div id="date_wrapper">
        <div id="date"></div>
				<div id="clock"></div>

			</div>
		</div>
		<div id="mid_left">
      <div id="transport_list">Abfahrtzeiten:</div>
		</div>
		<div id="mid_mid">

		</div>
		<div id="mid_right">

		</div>
		<div class="clear"></div>
		<div id="bot">
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


		$("#pos").html(e.clientX+" "+e.clientY);

		var def_x = 400;
		var def_y = 274;


		if (e.clientX > def_x){
      console.log('LEFT');

      var effect = 'slide';
      var options = { direction: "left" };
      var duration = 350;

      $('#content_name').text("Kalender");
      $('#content_name').fadeIn();

      if (localStorage.getItem("activeSlide") == null || localStorage.getItem("activeSlide") == "none"){
        localStorage.setItem("activeSlide","left")
        $('#leftSlide').toggle(effect, options, duration);
      }else{
        if(localStorage.getItem("activeSlide") != "left"){
          $('#'+localStorage.getItem("activeSlide")+'Slide').toggle(effect, { direction: "right" }, duration);
          $('#leftSlide').toggle(effect, options, duration);
          localStorage.setItem("activeSlide","left")
        }else{
          localStorage.setItem("activeSlide","none")
          $('#leftSlide').toggle(effect, options, duration);
          $('#content_name').fadeOut();
        }
      }
		}
		else if (e.clientX < def_x || true){
      console.log('RIGHT');

      $('#content_name').text("Wetter");
      $('#content_name').fadeIn();

      var effect = 'slide';
      var options = { direction: "right" };
      var duration = 350;

      if (localStorage.getItem("activeSlide") == null || localStorage.getItem("activeSlide") == "none"){
        localStorage.setItem("activeSlide","right")
        $('#rightSlide').toggle(effect, options, duration);
      }else{
        if(localStorage.getItem("activeSlide") != "right"){
          $('#'+localStorage.getItem("activeSlide")+'Slide').toggle(effect, { direction: "left" }, duration);
          $('#rightSlide').toggle(effect, options, duration);
          localStorage.setItem("activeSlide","right")
        }else{
          localStorage.setItem("activeSlide","none")
          $('#rightSlide').toggle(effect, options, duration);
          $('#content_name').fadeOut();
        }
      }
		}
		else if (e.clientY >= localStorage.getItem("lastY")){
      console.log('UP');

      var effect = 'slide';
      var options = { direction: "up" };
      var duration = 350;
      if (localStorage.getItem("activeSlide") == null || localStorage.getItem("activeSlide") == "none"){
        localStorage.setItem("activeSlide","up")
        $('#upSlide').toggle(effect, options, duration);
      }else{
        if(localStorage.getItem("activeSlide") != "up"){
          $('#'+localStorage.getItem("activeSlide")+'Slide').toggle(effect, { direction: "down" }, duration);
          $('#upSlide').toggle(effect, options, duration);
          localStorage.setItem("activeSlide","up")
        }else{
          localStorage.setItem("activeSlide","none")
          $('#upSlide').toggle(effect, options, duration);
        }
      }
		}
		else if (e.clientY <= localStorage.getItem("lastY")){
      console.log('DOWN');

      var effect = 'slide';
      var options = { direction: "down" };
      var duration = 350;

      if (localStorage.getItem("activeSlide") == null || localStorage.getItem("activeSlide") == "none"){
        localStorage.setItem("activeSlide","down")
        $('#downSlide').toggle(effect, options, duration);
      }else{
        if(localStorage.getItem("activeSlide") != "down"){
          $('#'+localStorage.getItem("activeSlide")+'Slide').toggle(effect, { direction: "up" }, duration);
          $('#downSlide').toggle(effect, options, duration);
          localStorage.setItem("activeSlide","down")
        }else{
          localStorage.setItem("activeSlide","none")
          $('#downSlide').toggle(effect, options, duration);
        }
      }
		}

    localStorage.setItem("lastMove",Date.now());
    localStorage.setItem("lastX",e.clientX);
    localStorage.setItem("lastY",e.clientY);

    }
	})


	</script>
   </BODY>
</HTML>
