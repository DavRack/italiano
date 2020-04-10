function navbar(){
    text=''
    text+='<ul class="nav_links">'
    text+='    <li class="pagina"><a href="index.html">Inicio</a></li>'
    text+='    <div id="paginas">'
    text+='        <li class="pagina"><a href="gramatica.html">Gramatica</a></li>'
    text+='        <li class="pagina"><a href="vocabulario.html">Vocabulario</a></li>'
    text+='        <li class="pagina"><a href="pronunciacion.html">Pronunciación</a></li>'
    text+='    </div>'
    text+='</ul>'
    document.getElementsByTagName("nav")[0].innerHTML=text
} 

navbar()
