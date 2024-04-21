$(function (){
    const id = window.location.search.substring(1);
    const url = "/hentEnBillet?"+id;
    $.get(url, function (billet){
        $("#id").val(billet.id),
        $("#film").val(billet.film),
        $("#antall").val(billet.antall),
        $("#fornavn").val(billet.fornavn),
        $("#etternavn").val(billet.etternavn),
        $("#epost").val(billet.epost),
        $("#telefon").val(billet.telefon);
    });
});

function endreBillet(){
    const billet = {
    id : $("#id").val(),
    film : $("#film").val(),
    antall : $("#antall").val(),
    fornavn : $("#fornavn").val(),
    etternavn : $("#etternavn").val(),
    epost : $("#epost").val(),
    telefon : $("#telefon").val()
    }
    $.post("/endreEnKunde", billet, function (){
        window.location.href = 'index.html';
    });
}