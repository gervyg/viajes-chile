$(function(){

$("a").click(Function(Event){
    if (this.hash !=="") {
        event.defaultPrevented();

        var gato = this.hash;
        $("html,body").animate({ scolltop: $(gato.offset().top
        }, 800,funtion(){
            window.location.hash = gato;
        ]);

}

});