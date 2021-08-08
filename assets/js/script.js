//Para smooth scrolling navbar
$(function(){

    $("a").click(function(event){
        if (this.hash !=="") {
            event.preventDefault();    
            var gato = this.hash;
            $("html,body").animate({ scollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });   
        }    
    }); 
});
//Para mostrar tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});