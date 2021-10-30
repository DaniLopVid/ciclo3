
function traerReporteStatus(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

`
            <div class="card m-2" >
            <div class="card-body">
            <h6 class ="card-title"> Completadas </h6>
            <p class= "card-text"> ${respuesta[i].respuesta.completed}</p>
            <h6 class ="card-title"> Canceladas </h6>
            <p class= "card-text"> ${respuesta[i].respuesta.cancelled}</p>

            </div>
            </div>
        ` 

function pintarRespuesta(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
    myTable+=`
                <div class="card m-2" >
                <div class="card-body">
                <h6 class ="card-title"> Completadas </h6>
                <p class= "card-text"> ${respuesta[i].respuesta.completed}</p>
                <h6 class ="card-title"> Canceladas </h6>
                <p class= "card-text"> ${respuesta[i].respuesta.cancelled}</p>

                </div>
                </div>
            ` 
    myTable+='</div></div></div>';

    $("#resultadoStatus").html(myTable);
}

function traerReporteClientes(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}

function pintarRespuestaClientes(respuesta){

    let myTable="<table>";
    myTable+='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
      
        for(i=0;i<respuesta.length;i++){
            myTable+="<th>total</th>";
            myTable+="<td>"+respuesta[i].total+"</td>";
            myTable+="<td>"+respuesta[i].client.name+"</td>";
            myTable+="<td>"+respuesta[i].client.email+"</td>";
            myTable+="<td>"+respuesta[i].client.age+"</td>";
        // myTable+="<td><a href= "javascript:pintarRespuestaClientesReservaciones" target="+respuesta[i].client.reservations+">Ver reservaciones</a></td>";//
        
        myTable+="</tr>";
        }
    myTable+='</div></div></div>';
    $("#resultadoClientes").html(myTable);
}

function pintarRespuestaClientesReservaciones(respuesta){
console.log(respuesta);
    let myTable="<table>";
    myTable+="<tr>";
      
    for(i=0;i<respuesta.length;i++){
    myTable+="<th>total</th>";
        myTable+="<td>"+respuesta[i].startDate+"</td>";
        
       
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}