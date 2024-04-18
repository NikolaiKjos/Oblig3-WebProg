function regBillett(){

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
    if (fornavn === ""){
        $("#feilFornavn").html("Ugyldig input")
        return;
    }
    if (etternavn === ""){
        $("#feilEtternavn").html("Ugyldig input")
        return;
    }
    if (isNaN(telefon) || telefon === ""){
        $("#feilTelefon").html("Ugyldig input")
        return;
    }
    if(!sjekkMail.test(epost)){
        $("#feilEpost").html("Ugyldig input")
        return;
    }


    const billet = {
        film : film,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        epost : epost,
        telefon : telefon
    }

    $.post("/lagre",billet, function (){
        hentAlle();
    });

    $("#film").val("");
    $("#antall").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#epost").val("");
    $("#telefon").val("");

}

function hentAlle(){
    $.get("/hentalle", function (billeter){
        formaterData(billeter);
    }).fail(function (error){
        console.log("Error", error);
    });
}

function slettallebilletter(){
    $.ajax({
        type: "DELETE",
        url: "/slettalle",
        success: function () {
            $("#billetter").html("");
            $("#film").val("");
            $("#seter").val("");
            $("#fornavn").val("");
            $("#etternavn").val("");
            $("#mail").val("");
            $("#tlf").val("");
        }
    });
}

function formaterData(billeter){
    let ut = "  <table class='table table-striped'><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>E-post</th>" +
        "</tr>";
    for(let b of billeter){
        ut += "<tr>";
        ut += "<td>"+b.film +"</td><td>"+b.antall +"</td><td>"+b.fornavn +"</td><td>"+b.etternavn +"</td><td>"+b.telefon +"</td><td>"+b.epost +"</td>";
        ut += "</tr>";
    }
    ut += "</table>";
    $("#billetter").html(ut);
}
