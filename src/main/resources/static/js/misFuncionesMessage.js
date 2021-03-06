function traerInformacionMensajes(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    });
}



function pintarRespuestaMensajes(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                    <div class="card m-2" >
                    <div class="card-body">
                    <h5 class ="card-title">  ${respuesta[i].idMessage}</h5>
                    <p class= "card-text"> ${respuesta[i].messageText} </p>
                    <button class="btn btn-primary" onclick="actualizarInformacionMensajes(${respuesta[i].idMessage} )" >Editar</button>
                    <button  class="btn btn-danger" onclick="borrarMensajes(${respuesta[i].idMessage} )">Borrar</button>
                    </div>
                    </div>
                ` 
    }
    myTable+='</div></div></div>';
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var5 = {
        messageText:$("#messageText").val()
        
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        
        url:"http://168.138.131.29:8080/api/Message/save",
       
        
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

function editarRegistro (idMessage){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Message/'+idMessage,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta+ "url" + "http://168.138.131.29:8080/api/Message/"+idMessage);
        let miTabla = '<table>';
        $("#messageText").val(respuesta.messageText)
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}


function actualizarInformacionMensajes(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messageText").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messageText").val("");
            
            traerInformacionMensajes();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function pintarSelect(idMessage){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Message/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado1").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
                  if (respuesta[i].id == id){
                      miSelect += '<option selected value='+ respuesta[i].idMessage+ '>'+respuesta[i].name+'</option>';
                  }   
                  else {
                        miSelect += '<option value='+ respuesta[i].idMessage+ '>'+respuesta[i].name+'</option>'; 		
                    }
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema en la carga del select:'+ status);
    }
});
	
}	
	
function borrarMensajes(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMensajes();
            alert("Se ha eliminado.")
        }
    });

}
