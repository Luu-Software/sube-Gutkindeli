/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR

  let reg = registrada.value;
let dist = distancia.value;
let precio = tarifa.innerText;

if (reg === "si"){
  if (dist <=3){
    tarifa.innerText="715.24"
  }
  else if (dist >= 4 && dist <= 6){
      tarifa.innerText="794.74"
  }
  else if (dist >= 7 && dist <= 12){
    tarifa.innerText="855.97"
  }
  else if (dist >=13 && dist <= 27){
    tarifa.innerText="917.24"
  }

}
   
if (reg === "no"){
  if (dist <=3){
    tarifa.innerText="1137.23"
  }
  else if (dist >= 4 && dist <= 6){
      tarifa.innerText="1263.64"
  }
  else if (dist >= 7 && dist <= 12){
    tarifa.innerText="1360.99"
  }
  else if (dist >=13 && dist <= 27){
    tarifa.innerText="1458.41"
  }


}

if (reg ==="social"){
  if (dist <=3){
    tarifa.innerText=" 339,18"
  }
  else if (dist >= 4 && dist <= 6){
      tarifa.innerText="376,88"
  }
  else if (dist >= 7 && dist <= 12){
    tarifa.innerText=" 405,91"
  }
  else if (dist >=13 && dist <= 27){
    tarifa.innerText="434,97"
  }
  

}

});

