function traerInformacionClientes(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaClientes(respuesta);
        }
    });
}


function pintarRespuestaClientes(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
                    <div class="card m-2" >
                    <div class="card-body">
                    <h5 class ="card-title">  ${respuesta[i].idClient} - ${respuesta[i].name}</h5>
                    <p class= "card-text"> ${respuesta[i].email} <br> 
                                        ${respuesta[i].password} <br>              		
                                        ${respuesta[i].age}</p>
                    <button class="btn btn-primary" onclick="actualizarInformacionClientes(${respuesta[i].idClient} )" >Editar</button>
                    <button  class="btn btn-danger" onclick="borrarClientes(${respuesta[i].idClient} )">Borrar</button>
                    </div>
                    </div>
                ` 
    }
    myTable+='</div></div></div>';
    $("#resultado3").html(myTable);
}

function guardarInformacionClientes(){
    let var4 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        
        url:"http://168.138.131.29:8080/api/Client/save",
       
        
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

function editarRegistro (idClient){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Client/'+idClient,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta+ "url" + "http://168.138.131.29:8080/api/Client/"+idClient);
        let miTabla = '<table>';
              
        $("#CLemail").val(respuesta.email),
        $("#CLpassword").val(respuesta.password),
        $("#CLname").val(respuesta.name),
        $("#CLage").val(respuesta.age)
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}


function actualizarInformacionClientes(idElemento){
    let myData={
        idClient:idElemento,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function pintarSelect(idClient){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Client/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado1").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
                  if (respuesta[i].id == id){
                      miSelect += '<option selected value='+ respuesta[i].idClient+ '>'+respuesta[i].name+'</option>';
                  }   
                  else {
                        miSelect += '<option value='+ respuesta[i].idClient+ '>'+respuesta[i].name+'</option>'; 		
                    }
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema en la carga del select:'+ status);
    }
});
	
}	
	
function borrarClientes(idElemento){
    let myData={
        idClient:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionClientes();
            alert("Se ha eliminado.")
        }
    });

}
