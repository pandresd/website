var imagenarray = ["rest1.jpeg","rest2.jpeg","rest3.jpeg","rest4.jpeg"];
var titlearray =["Restaurante Il Forno","Taco Will","Salerno","La Trattoria"];
var descriptionarray =["Con 20 años de trayectoria, diversidad de sabores italianos que satisfacen cualquier paladar y espacios acogedores",
"Opciones geniales que combinan la cultura mexicana con los platos típicos que conocemos popularizados por los americanos.",
"Salerno es un espacio que por más de 50 años ha reunido a la familia vallecaucana en un viaje a través de Italia.",
"Toda nuestra comida es hecha con mucho amor de nuestra parte para ustedes, nuestros clientes amados."];


let dynamic = document.querySelector('.container');  
for (var i = 0; i < titlearray.length; i++) {
  let fetch = document.querySelector('.container').innerHTML;  
  dynamic.innerHTML = `
  <div class="card-group">
  <div class="col-sm-6   mt-4">
    
  
        <div class="card" style="width: 18rem; " >
          <img src="../img/${imagenarray[i]}" class="card-img-top" >
          <div class="card-body">
              <h5 class="card-title">${titlearray[i]}</h5>
              <p class="card-text">${descriptionarray[i]}</p>
          </div>
        </div>
    
  </div>
  </div>
  ` + fetch ;    
} 