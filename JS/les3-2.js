 
 function optellenSom() {
  const getal1 = prompt('Noteer een getal', 'Getal');
  const getal2 = prompt('Noteer nog een getal', 'Getal' );

  const som = parseFloat(getal1) + parseFloat(getal2);
  const tekst = 'De som van uw gegeven getallen is ';
  console.log(tekst + som);
}

optellenSom();