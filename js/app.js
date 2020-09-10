const url='https://gateway.marvel.com:443/v1/public/characters?&limit=25&ts=1&apikey=7d3efefb40aafffc7ddbec0348905a27&hash=56d298663a24b3e08f10bbb54d2b2b7e';
function draw(){
var contenido = document.querySelector('#marvelhero')
const search = document.querySelector('search')

fetch (url)
    .then (res => res.json() )
    .then (datos=> {
        //console.log (datos)
        heroes(datos.data.results)
        
    })

function heroes(datos) {
    //console.log(datos)
    contenido.innerHTML='';
    for ( const hero of datos){
        //console.log(valor.name)
       contenido.innerHTML+=`
                <div class="col-6 col-md-4 card">
                <div class="d-flex justify-content-center"><img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="card-img-top"></div>
                <div class="card-body"><h1><a id="link" href="${hero.urls[0].url}" target="_blank" > ${hero.name} </a> </h1></div>
               
            </div>`;
    }
}
}
draw();


function getSuperhero(e) {
    let xmlhttp = new XMLHttpRequest();
    let superhero = document.getElementById('superhero').value;
  
    let url = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith=' + superhero + '&ts=1&apikey=7d3efefb40aafffc7ddbec0348905a27&hash=56d298663a24b3e08f10bbb54d2b2b7e';
  
    e.preventDefault();
  
    xmlhttp.open("GET", url, true);
  
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = JSON.parse(xmlhttp.responseText);
            let output = '';
  
            let totalRecords = response.data.results.length;
            
  
            for (let i = 0; i < response.data.results.length; i++) {
              
                output += '<div class="col-6 col-md-4 card">';
                output += '<div class="d-flex justify-content-center"><img src=' + response.data.results[i].thumbnail.path + '.' + response.data.results[i].thumbnail.extension + ' alt="" class="card-img-top"></div>'
                output += '<div class="card-body"><h1><a id="link" target="_blank" href="' + response.data.results[i].urls[0].url + '">' + response.data.results[i].name + ' </a></h1></div>';
                output += '<div><p>' + response.data.results[i].description + '</p></div>';
                output += '</div>';
            }
            document.getElementById('marvelhero').innerHTML = output;
        }
    };
    xmlhttp.send();
  
    return false;
  }





