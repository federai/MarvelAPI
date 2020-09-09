const url='https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=7d3efefb40aafffc7ddbec0348905a27&hash=56d298663a24b3e08f10bbb54d2b2b7e';
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
                <div class="col-4 heros">
                <a href="${hero.urls[0].url}" target="_blank">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail rounded mx-auto d-block">
                </a>
                <h4 class="title">${hero.name}</h3>
            </div>`;
    }
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
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
            let randomSuperhero = getRandomInt(0, totalRecords - 1);
  
            let backgroundSuperheroPath = response.data.results[randomSuperhero].thumbnail.path;
            let backgroundSuperheroExtension = response.data.results[randomSuperhero].thumbnail.extension;
            let backgroundSuperheroImage = backgroundSuperheroPath + '.' + backgroundSuperheroExtension;
            // console.log(randomSuperhero);
            // console.log(backgroundSuperheroPath + '.' + backgroundSuperheroExtension);
           
  
            for (let i = 0; i < response.data.results.length; i++) {
              
                output += '<div class="card">';
                output += '<div class="image" style="background-image: url(' + response.data.results[i].thumbnail.path + '.' + response.data.results[i].thumbnail.extension + ');"></div>';
                output += '<h2><a target="_blank" href="' + response.data.results[i].urls[0].url + '">' + response.data.results[i].name + ' </a></h2>';
                output += '<p>' + response.data.results[i].description + '</p>';
                output += '</div>';
            }
            document.getElementById('marvelhero').innerHTML = output;
        }
    };
    xmlhttp.send();
  
    return false;
  }

    

    


    