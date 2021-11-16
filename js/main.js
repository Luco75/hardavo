var menulateral = document.getElementById("lateralmenu");

var categorias = document.getElementById("categorias");

var footer = document.getElementById("footer");

var cpu = document.getElementById("cpu");
var gpu = document.getElementById("gpu");
var mb = document.getElementById("mb");
var ram = document.getElementById("ram");
var fuentes = document.getElementById("fuentes");
var discos = document.getElementById("discos");
var gabinetes = document.getElementById("gabinetes");
var cpuButton = document.getElementById("cpu-button");
var gpuButton = document.getElementById("gpu-button");
var mbButton = document.getElementById("mb-button");
var ramButton = document.getElementById("ram-button");
var fuentesButton = document.getElementById("fuentes-button");
var discosButton = document.getElementById("discos-button");
var gabinetesButton = document.getElementById("gabinetes-button");

var none = "none";
var block = "block";
var orange = "#ff7b00";
var gray = "#737373";

cpu.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, block, none, none, orange, gray, gray, gray, gray, gray, gray);
  generar("cpu");
}

cpuButton.onclick = function(){
  refresh(none, block, none, none, orange, gray, gray, gray, gray, gray, gray);
  generar("cpu");
}

gpu.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, none, none, gray, orange, gray, gray, gray, gray, gray);
  generar("gpu");
}

gpuButton.onclick = function(){
  refresh(none, none, none, none, gray, orange, gray, gray, gray, gray, gray);
  generar("gpu");
}

mb.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, block, none, gray, gray, orange, gray, gray, gray, gray);
  generar("mb");
}

mbButton.onclick = function(){
  refresh(none, none, block, none, gray, gray, orange, gray, gray, gray, gray);
  generar("mb");
}

ram.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, none, block, gray, gray, gray, orange, gray, gray, gray);
  generar("ram");
}

ramButton.onclick = function(){
  refresh(none, none, none, block, gray, gray, gray, orange, gray, gray, gray);
  generar("ram");
}

fuentes.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, none, none, gray, gray, gray, gray, orange, gray, gray);
  generar("fuentes");
}

fuentesButton.onclick = function(){
  refresh(none, none, none, none, gray, gray, gray, gray, orange, gray, gray);
  generar("fuentes");
}

discos.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, none, none, gray, gray, gray, gray, gray, orange, gray);
  generar("discos");
}

discosButton.onclick = function(){
  refresh(none, none, none, none, gray, gray, gray, gray, gray, orange, gray);
  generar("discos");
}

gabinetes.onclick = function(){
  categorias.style.display = "none";
  menulateral.style.display = "block";
  refresh(none, none, none, none, gray, gray, gray, gray, gray, gray, orange);
  generar("gabinetes");
}

gabinetesButton.onclick = function(){
  refresh(none, none, none, none, gray, gray, gray, gray, gray, gray, orange);
  generar("gabinetes");
}


function AbrirFichero(fichXML){
  var xmlDoc=undefined;
  try{
  if (document.all) {
  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  }
  else {
  xmlDoc = document.implementation.createDocument("","",null);
  }
  xmlDoc.async=false;
  xmlDoc.load(fichXML);
  }catch(e){
  try { //otros safari, chrome
  var xmlhttp = new window.XMLHttpRequest();
  xmlhttp.open("GET",fichXML,false);
  xmlhttp.send(null);
  xmlDoc = xmlhttp.responseXML.documentElement;
  return xmlDoc;
  }
  catch (e)
  {
  return undefined;
  } }
  return xmlDoc;
  }

  function clear(){
    const parent = document.getElementById("principal");
    while (parent.firstChild) {
        parent.firstChild.remove();
    }
  }
  
  function refresh(ca,co,bo,inf,c1,c2,c3,c4,c5,c6,c7){
    clear();
    categorias.style.display = ca;
    cpuButton.style.backgroundColor = c1;
    gpuButton.style.backgroundColor = c2;
    mbButton.style.backgroundColor = c3;
    ramButton.style.backgroundColor = c4;
    fuentesButton.style.backgroundColor = c5;
    discosButton.style.backgroundColor = c6;
    gabinetesButton.style.backgroundColor = c7;
  }

  function positionScreen(x, y){
    if (screen.width <= 500){
      window.scrollTo(x, x);
      window.scrollTo(x, y);
    }
    else
    {
      window.scrollTo(x, x);
    } 
  }

  function generar (tipo) {

  footer.style.display = "block";

  

  clear();

  var xmlname;

  switch(tipo){
    case 'cpu': positionScreen(0, 600); xmlname = "listas/lista-cpu.xml"; cpuButton.style.backgroundColor = orange; break;
    case 'gpu': positionScreen(0, 600); xmlname = "listas/lista-gpu.xml"; gpuButton.style.backgroundColor = orange; break;
    case 'mb': positionScreen(0, 600); xmlname = "listas/lista-mb.xml"; mbButton.style.backgroundColor = orange; break;
    case 'ram': positionScreen(0, 600); xmlname = "listas/lista-ram.xml"; ramButton.style.backgroundColor = orange; break;
    case 'fuentes': positionScreen(0, 600); xmlname = "listas/lista-fuentes.xml"; fuentes.style.backgroundColor = orange; break;
    case 'discos': positionScreen(0, 600); xmlname = "listas/lista-discos.xml"; discosButton.style.backgroundColor = orange; break;
    case 'gabinetes': positionScreen(0, 600); xmlname = "listas/lista-gabinetes.xml"; gabinetesButton.style.backgroundColor = orange; break;
  }

  var xmlFile = AbrirFichero(xmlname);
  var catalogo = xmlFile.getElementsByTagName("articulo")

  for (i = 0 ; i < catalogo.length ; i++){

    var modeloXML = catalogo[i].getElementsByTagName("modelo")[0].textContent;
    
    var s1 = catalogo[i].getElementsByTagName("spec1")[0].textContent;
    var s2 = catalogo[i].getElementsByTagName("spec2")[0].textContent;
    var s3 = catalogo[i].getElementsByTagName("spec3")[0].textContent;
    var s4 = catalogo[i].getElementsByTagName("spec4")[0].textContent;
    var spec1XML = (s1 == "NA")? "" : s1;
    var spec2XML = (s2 == "NA")? "" : s2;
    var spec3XML = (s3 == "NA")? "" : s3;
    var spec4XML = (s4 == "NA")? "" : s4;

    var precioXML = catalogo[i].getElementsByTagName("precio")[0].textContent;
    var imagenXML = catalogo[i].getElementsByTagName("imagen")[0].textContent;
    
    var item = document.createElement("div"); item.setAttribute("class", "item");
    
    var cajaImagen = document.createElement("div"); cajaImagen.setAttribute("class", "boxzoom2");
    var imagen = document.createElement("img"); 
    imagen.setAttribute("loading", "lazy"); 
    imagen.setAttribute("class", "articulo");
    imagen.setAttribute("src", imagenXML);
    imagen.setAttribute("alt", modeloXML + ". " + spec1XML + ". " + spec2XML + ". " + spec3XML + ". " + spec4XML);
    imagen.setAttribute("title", modeloXML);
    imagen.setAttribute("style", "width: 150px");
    imagen.setAttribute("style", "height: 150px");

    
    var cajaArticle = document.createElement("article");
    cajaArticle.setAttribute("class", "info")
    var titulo = document.createElement("h2");
    var detalle1 = document.createElement("p");
    var detalle2 = document.createElement("p");
    var detalle3 = document.createElement("p");
    var detalle4 = document.createElement("p");
    var precio = document.createElement("h3");
    var contenido1 = document.createTextNode(modeloXML);
    var contenido2 = document.createTextNode(spec1XML);
    var contenido3 = document.createTextNode(spec2XML);
    var contenido4 = document.createTextNode(spec3XML);
    var contenido5 = document.createTextNode(spec4XML);
    var contenido6 = document.createTextNode("$" + precioXML);

    titulo.appendChild(contenido1);
    detalle1.appendChild(contenido2);
    detalle2.appendChild(contenido3);
    detalle3.appendChild(contenido4);
    detalle4.appendChild(contenido5);
    precio.appendChild(contenido6);
    cajaArticle.appendChild(titulo);
    cajaArticle.appendChild(detalle1);
    cajaArticle.appendChild(detalle2);
    cajaArticle.appendChild(detalle3);
    cajaArticle.appendChild(detalle4);
    cajaArticle.appendChild(precio);
    cajaImagen.appendChild(imagen);
    
    item.appendChild(cajaImagen);
    item.appendChild(cajaArticle);
    
    var principal = document.getElementById("principal");
    principal.appendChild(item);
    }

    var modal = document.getElementById("myModal");
    var images = document.querySelectorAll(".articulo");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("modal-text");
    for(let i = 0; i < images.length; i++){
      images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
    }
    
    var span = document.getElementsByClassName("close")[0];
    
    span.onclick = function() {
      modal.style.display = "none";
    }
        
}

function Desplegar(){
  var x = document.getElementById("MovilMenu");
  if(x.style.display == "block"){
      x.style.display = "none";
  }
  else{
      x.style.display = "block";
  }
}
