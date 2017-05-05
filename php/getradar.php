<?php
/*
$ch = curl_init('https://www.niederschlagsradar.de/image.ashx?type=regioloop&regio=bln&j=&m=&d=&mi=&uhr=&bliksem=0&voor=&srt=loop1stunde&tijdid=201755246');
$fp = fopen('weather.gif', 'wb');
curl_setopt($ch, CURLOPT_FILE, $fp);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_exec($ch);
curl_close($ch);
fclose($fp)*/

$url = 'https://www.niederschlagsradar.de/image.ashx?type=regioloop&regio=bln&j=&m=&d=&mi=&uhr=&bliksem=0&voor=&srt=loop1stunde&tijdid=201755246';
$img = 'weather.gif';
file_put_contents($img, file_get_contents($url));

?>