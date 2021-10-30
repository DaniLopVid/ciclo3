
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

        
function pintarRespuesta(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
                myTable+=`
                            <div class="card m-2" >
                            <div class="card-body">
                            <h5 class ="card-title"> Reservas completadas </h5>
                            <p class= "card-text"> ${respuesta.completed}</p>
                            <h5 class ="card-title"> Reservas canceladas </h5>
                            <p class= "card-text"> ${respuesta.cancelled}</p>
                            </div>
                            </div>
                        `
    $("#resultadoStatus").html(myTable);
    myTable+='</div></div></div>';
    
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
            myTable+=`
                        <div class="card m-2" >
                        <div class="card-body">
                        <h5 class ="card-title">  ${respuesta[i].client.name}</h5>
                        <p class= "card-text"> Total de reservas: ${respuesta[i].total}</p>
                        <p class= "card-text"> ${respuesta[i].client.email} <br> 
                                            ${respuesta[i].client.age}</p>
                        </div>
                        </div>
                    ` 
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