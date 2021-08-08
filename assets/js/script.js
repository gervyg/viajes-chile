var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

/*$(function(){

$("a").click(function(event){
    if (this.hash !=="") {
        event.defaultPrevented();

        var gato = this.hash;
        $("html,body").animate({ scolltop: $(gato.offset().top
        }, 800,funtion(){
            window.location.hash = gato;
        });
    
    }

});

});*/
