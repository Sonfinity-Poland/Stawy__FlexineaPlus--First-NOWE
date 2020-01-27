$today = new Date();
$yesterday = new Date($today);
$yesterday.setDate($today.getDate() - 4);

var $dd = $yesterday.getDate();
var $mm = $yesterday.getMonth()+1; //January is 0!

var $yyyy = $yesterday.getFullYear();
if($dd<10){$dd='0'+$dd} if($mm<10){$mm='0'+$mm} $yesterday = $dd+'/'+$mm+'/'+$yyyy;
document.getElementById('date').innerHTML = $yesterday;


function wyswietlDane()
{
  var data = new Date();
  var godziny = data.getHours();
  var minuty = data.getMinutes();
  var sekundy = data.getSeconds();
  var czas = godziny;
  czas += ((minuty < 10) ? ":0" : ":") + minuty;
  czas += ((sekundy < 10) ? ":0" : ":") + sekundy;
  var miesiac = data.getMonth() + 1;
  if (miesiac < 9){
    miesiac = "0" + miesiac;
  }
  var dzien = data.getDate();
  if (dzien < 10){
    dzien = "0" + dzien;
  }
  var rok = data.getYear();
  if (rok < 1000){
    rok = 2000 + rok - 100;
  }
  var dzisiaj = dzien + "." + miesiac + "." + rok;

  var dzienTygodnia = data.getDay();
  switch(dzienTygodnia){
    case 0: dzienTygodnia = "niedzieli"; break;
    case 1: dzienTygodnia = "poniedziałku"; break;
    case 2: dzienTygodnia = "wtorku"; break;
    case 3: dzienTygodnia = "środy"; break;
    case 4: dzienTygodnia = "czwartku"; break;
    case 5: dzienTygodnia = "piątku"; break;
    case 6: dzienTygodnia = "soboty"; break;
  }

  var tekst = dzienTygodnia + " " + dzisiaj;

  document.getElementById("dataLayer").innerHTML = tekst;
  timerID = setTimeout("wyswietlDane()",1000);
}

