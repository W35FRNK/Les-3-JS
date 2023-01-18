 
 
  const getal1 = prompt('Noteer een getal', 'Getal');
  const getal2 = prompt('Noteer nog een getal', 'Getal' );

  const som = parseFloat(getal1) + parseFloat(getal2);
  const tekst = 'De getallen die u invoerde waren ' + parseFloat(getal1) + ' en '+ parseFloat(getal2) ;
 

  document.getElementById('getallen').innerHTML = tekst;




 
if(parseFloat(getal1) > parseFloat(getal2)) 
  { 
  document.getElementById('vergelijking').innerHTML= "Het grootste getal van "+ getal1+ " en "+ getal2+ " is "+ getal1+ ".";
  } 
else
  if(parseFloat(getal2) > parseFloat(getal1)) 
  { 
  document.getElementById('vergelijking').innerHTML= "Het grootste getal van "+ getal1+ " en "+ getal2+ " is "+ getal2+ ".";
  }
  

  













