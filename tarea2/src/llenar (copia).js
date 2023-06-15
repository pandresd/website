var imagenarray = ["rest1.jpeg","rest2.jpeg","rest3.jpeg","rest4.jpeg"];
var titlearray =["Restaurante Il Forno","Taco Will","Salerno","La Trattoria"];
var descriptionarray =["Con 20 años de trayectoria, diversidad de sabores italianos que satisfacen cualquier paladar y espacios acogedores",
"Opciones geniales que combinan la cultura mexicana con los platos típicos que conocemos popularizados por los americanos.",
"Salerno es un espacio que por más de 50 años ha reunido a la familia vallecaucana en un viaje a través de Italia.",
"Toda nuestra comida es hecha con mucho amor de nuestra parte para ustedes, nuestros clientes amados."];

var dynamic = document.querySelector('.container');  
for (var i = 0; i < titlearray.length; i++) {
  var fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `<div id="cards${i}" class="boxes">
      <div class="row ms-4 mb-4 mt-4">
        <p>
        <img src="../img/${imagenarray[i]}" class="card-img-top" >
        <p>
        <h2>${titlearray[i]}</h2>
        <p>
          ${descriptionarray[i]}
        </p>
        
      </div>
    </div>` + fetch ; 
    var bgimg = document.getElementById(`cards${i}`);
    // bgimg.style.backgroundImage = `url('img/${imagenarray[i]}')`;
} 