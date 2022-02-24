function openCity(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");
    
       for (i = 0; i < tabcontent.length; i++) { //esconde todos os conteúdos
       tabcontent[i].style.display = "none";
       }

       for (i = 0; i < tablinks.length; i++) { //tira o active de todos button
       tablinks[i].className = tablinks[i].className.replace(" active", "");
       }

       if (cityName != 'Clean'){
           document.getElementById(cityName).style.display = "inline-flex"; //deixa o conteúdo visível
           event.currentTarget.className += " active"; //deixa o button marcado
   }}

