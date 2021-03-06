function traerInformacionReservaciones(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaReservaciones(respuesta);
        }
    });
}


function pintarRespuestaReservaciones(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
        <div class="card m-2" >
        <div class="card-body">
        <h5 class ="card-title">  ${respuesta[i].idReservation} </h5>
        <p class= "card-text"> ${respuesta[i].startDate} <br> 
                               ${respuesta[i].devolutionDate}</p>
        <button class="btn btn-primary" onclick="actualizarInformacionReservaciones(${respuesta[i].idReservation} )" >Editar</button>
        <button  class="btn btn-danger" onclick="borrarReservaciones(${respuesta[i].idReservation} )">Borrar</button>
        </div>
        </div>
        ` 
    }
    myTable+='</div></div></div>';
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var6 = {
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
       
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var6),
        
        url:"http://168.138.131.29:8080/api/Reservation/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });

}

function editarRegistro (idReservation){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Reservation/'+idReservation,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta+ "url" + "http://168.138.131.29:8080/api/Reservation/"+idReservation);
        let miTabla = '<table>';
              
        $("startDate").val(respuesta.startDate),
        $("#devolutionDate").val(respuesta.devolutionDate)
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}


function actualizarInformacionReservaciones(idElemento){
    let myData={
        idReservation:idElemento,
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val()
        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservaciones();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function pintarSelect(id){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Reservation/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado1").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
                  if (respuesta[i].id == id){
                      miSelect += '<option selected value='+ respuesta[i].idReservation+ '>'+respuesta[i].name+'</option>';
                  }   
                  else {
                        miSelect += '<option value='+ respuesta[i].idReservation+ '>'+respuesta[i].name+'</option>'; 		
                    }
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema en la carga del select:'+ status);
    }
});
	
}	
	
function borrarReservaciones(idElemento){
    let myData={
        idReservation:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Reservation/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionReservaciones();
            alert("Se ha eliminado.")
        }
    });

}

//Comments
