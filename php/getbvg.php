<?php

$hour = (time() / 3600 % 24)+2;
$minute = time() / 60 % 60;

if ($hour >= 24){
	$hour = $hour - 24;
}

if ($hour < 10){
	$hour = "0".$hour;
}

if ($minute < 10){
	$minute = "0".$minute;
}
//echo "here: ".$hour.":".$minute;
$ch = curl_init();

// set url
curl_setopt($ch, CURLOPT_URL, "http://fahrinfo.bvg.de/Fahrinfo/bin/stboard.bin/dn?ld=&L=&maxJourneys=30&input=+U+Alt-Tempelhof+%28Berlin%29&boardType=dep&start=1&application=FILTER&showProduct_64=1&showProduct_1=1&showProduct_2=1&showProduct_4=1&showProduct_8=1&showProduct_16=1&selectDate=today&dateBegin=".date('d').".".date('m').".".date('y')."&dateEnd=".date('d').".".date('m').".".(date('y')+1)."&time=".$hour."%3A".$minute."&performTransferSearch=Filtern");

//return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// $output contains the output string
$output = curl_exec($ch);
//echo "HERE: ".$output;
// close curl resource to free up system resources
curl_close($ch);


$elements = explode("<td class=\"nowrap ivuStBoardTime ivuVerticalMiddle\" headers=\"hafasSQarrTime\">", $output);
//var_dump($elements);

//var_dump($elements);
//echo $elements[1];

$ret = "";
for ($i=1; $i<sizeof($elements); $i++){
	$ret = $ret . $elements[$i]."~~~~~";
	//echo "yooo";
}

echo $ret;


?>
