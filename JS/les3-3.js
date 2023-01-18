
  const getal1 = prompt('Noteer een getal', 'Getal');
  const getal2 = prompt('Noteer nog een getal', 'Getal' );

  const getal10 = parseFloat(getal1);
  const getal20 = parseFloat(getal2);
  const tekst = 'De door u opgegeven getallen zijn ';
 
  document.getElementById('getallen').innerHTML = tekst + '' + getal10 + ' en ' + getal20;


if(parseFloat(getal1) > parseFloat(getal2)) 
{ 
  document.getElementById('vergelijking').innerHTML= "Het grootste getal is "+ getal1+ ".";
} 
else
if(parseFloat(getal2) > parseFloat(getal1)) 
{ 
  document.getElementById('vergelijking').innerHTML= "Het grootste getal is "+ getal2+ ".";
    }
 
