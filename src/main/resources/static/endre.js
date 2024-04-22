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

    $("#feilFilm").html(" ");
    $("#feilAntall").html(" ");
    $("#feilFornavn").html(" ");
    $("#feilEtternavn").html(" ");
    $("#feilEpost").html(" ");
    $("#feilTelefon").html(" ");

    const film = $("#film").val();
    const antall = parseInt($("#antall").val());
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const epost = $("#epost").val();
    const sjekkMail = /^[\w\.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    const telefon = $("#telefon").val();

    if(film === ""){
        $("#feilFilm").html("Ugyldig input")
        return;
    }
    if (isNaN(antall)){
        $("#feilAntall").html("Ugyldig valg")
        return;
    }
    if (fornavn.trim()==="" || /^\d+$/.test(fornavn)){
        $("#feilFornavn").html("Ugyldig input")
        return;
    }
    if (etternavn.trim()==="" || /^\d+$/.test(etternavn)){
        $("#feilEtternavn").html("Ugyldig input")
        return;
    }
    if (isNaN(telefon) || Number.isFinite(telefon)){
        $("#feilTelefon").html("Ugyldig input")
        return;
    }
    if(!sjekkMail.test(epost)){
        $("#feilEpost").html("Ugyldig input")
        return;
    }

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

    });
    window.location.href = '/index.html';
}