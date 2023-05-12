function mostrarTxt(){
    let elDivTxt = document.getElementsByClassName('textoImg');
    elDivTxt[0].classList.remove('d-none');
    let laImg = document.getElementById('imgActiva');
    
}
function ocultarTxt(){
    let elDivTxt = document.getElementsByClassName('textoImg');
    elDivTxt[0].classList.add('d-none');
    let laImg = document.getElementById('imgActiva');
}
function cambiarContenido(){
    let laImg = document.getElementById('imgActiva');

    let valorLista = document.getElementById('listaSelect').value;
    let tituloImagen =  document.getElementById('tituloImg');
    let subTituloImagen = document.getElementById('subTituloImg');
    let descrip = document.getElementById('txtDesc');
    // let referencias = document.getElementById('referencia')

    if(valorLista ==1){
        tituloImagen.innerText='TREKKING';
        subTituloImagen.innerText='Volcan Villarrica';
        descrip.innerText= 'Modalidad de excursion que consiste en reccorrer a pie largas distancia o zonas determinadas.';
        laImg.style.backgroundImage ="url('assets/img/treking.jpg')";
        referencias.innerText="https://patagonia-chile.com/?gclid=CjwKCAjwx_eiBhBGEiwA15gLN3bwNhMw-webJ1Iwrvla4XguRCJXd8gn91On0ylDOGfcpGA5VtgzUhoCJlAQAvD_BwE";
    }else if(valorLista==2){
        tituloImagen.innerText='NATACION';
        subTituloImagen.innerText='Lago Cochrane';
        descrip.innerText= 'Deporte o ejercicio que consiste en nadar, en las pruebas de natación se compite en velocidad ';
        laImg.style.backgroundImage = "url('assets/img/natacion.jpg')"
       referencias.innerText="https://es.wikiloc.com/rutas/natacion/chile/los-lagos/dalcahue";
    
    }else if(valorLista==3){
        tituloImagen.innerText='FERRY';
        subTituloImagen.innerText='Lago Llanquihue';
        descrip.innerText= 'Embarcación que realiza alternativamente el mismo recorrido estre dos puntos. ';
        laImg.style.backgroundImage ="url('assets/img/ferry.jpg')";
       referencias.innerText="https://www.barcazas.cl/barcazas/nuevos-horarios-lago-general-carrera/";
    } 
}

function asignarEventos(){
    let divImg = document.getElementById('imgActiva');
    divImg.addEventListener('mouseover', mostrarTxt);
    divImg.addEventListener('mouseout', ocultarTxt);

    let laLista =  document.getElementById('listaSelect');
    laLista.addEventListener('change',cambiarContenido);
}