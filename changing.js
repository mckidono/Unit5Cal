
    
function caljQ() {
var JqPrice=39.99;


    var NumberOfjq = $("#jQqty").val();
    NumberOfjq = parseFloat(NumberOfjq);

    var TotaljQ= JqPrice*NumberOfjq;
    

    var TotaljQDisplay= TotaljQ.toFixed(2);
    $("#jQTotal").text(TotaljQDisplay);

    $(".outputjQ").show();
    
    
    

    

    var DonoPrice=14.99;

    var NumberOfDono= $("#DonoQty").val();
    NumberOfDono= parseFloat(NumberOfDono);

    var TotalDono=DonoPrice*NumberOfDono;

    var TotalDonoDisplay= TotalDono.toFixed(2);
    $("#DonoTotal").text(TotalDonoDisplay);
    $(".outputDono").show();
    
    var total=TotalDono+TotaljQ;

    var TotalDisplay= total.toFixed(2);
    $("#Total").text(TotalDisplay);
    $(".outputTotal").show();


    
}


