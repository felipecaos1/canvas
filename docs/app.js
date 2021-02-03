
var teclas = {LEFT:37,UP:38,RIGHT:39,DOWN:40};
document.addEventListener("mousemove",dibujarMouse)//para detectar el evento de precionar tecla
document.addEventListener("mousedown",mousePrecionado)
document.addEventListener("mouseup",mouseNoPresionado)
document.addEventListener("keyup",dibujarMouse)
//para dibujar 
var d=document.getElementById("dibujo");
var lienzo = d.getContext("2d");
//  dibujar_linea(149,149,151,151,"red");
var ClientRect = d.getBoundingClientRect();//arroja las cordenadas en este caso del cuadro del canvas dentro de la ventana total del navegador 
// var xi = evento.clientX-ClientRect.left;
// var yi = evento.clientY-ClientRect.top;
var estado=0;
function dibujarbyteclas(evento) 
{
    console.log(evento)
    var colorcito= "red";
    var paso=20;
    switch (evento.keyCode) {
        case teclas.LEFT:
            dibujar_linea(xi,yi,xi-paso,yi,colorcito);
            xi=xi-20;
            break;
        case teclas.UP:
            dibujar_linea(xi,yi,xi,yi-paso,colorcito);
            yi=yi-20
            break;
        case teclas.RIGHT:
            dibujar_linea(xi,yi,xi+paso,yi,colorcito);
            xi=xi+20;
            break;
        case teclas.DOWN:
            dibujar_linea(xi,yi,xi,yi+paso,colorcito);
            yi=yi+20;
            break;
        default:
            break;
    }    
}

function dibujarMouse(evento)
{   if(estado==1)
    {  
        dibujar_linea(xi,yi,evento.clientX-ClientRect.left,evento.clientY-ClientRect.top,"red")
        xi = evento.clientX-ClientRect.left;
        yi = evento.clientY-ClientRect.top; 
    }    
}

 function mousePrecionado (evento2)
 {  
    xi = evento2.clientX-ClientRect.left;
    yi = evento2.clientY-ClientRect.top;
    estado = 1;
 }
 function mouseNoPresionado()
 {
     estado=0;
 }
function dibujar_linea(x1,x2,y1,y2,color) 
{
    lienzo.beginPath();//inicializa el trazo
    lienzo.strokeStyle=color;//le da color al trazo
    lienzo.lineWidth = 1;//ancho de la trazo
    lienzo.moveTo(x1,x2); //cordenada de inicion del trazo
    lienzo.lineTo(y1,y2);//cordenadas finales del trazo
    lienzo.stroke();
    lienzo.closePath(); //cierra el trazo
}
