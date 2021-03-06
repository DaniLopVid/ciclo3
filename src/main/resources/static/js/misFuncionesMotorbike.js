function traerInformacionMotorbikes(){
    $.ajax({
        url:"http://168.138.131.29:8080/api/Motorbike/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMotorbikes(respuesta);
        }
    });
}



function pintarRespuestaMotorbikes(respuesta){

    let myTable='<div class="container"> <div  class= "row"> <div class="col-sm-4">';
    for(i=0;i<respuesta.length;i++){
        myTable+=`
            <div class="card m-2" >
            <div class="card-body">
            <h5 class ="card-title">  ${respuesta[i].id} - ${respuesta[i].brand}</h5>
            <p class= "card-text"> ${respuesta[i].year} <br> 
                                   ${respuesta[i].name} <br>              		
                                   ${respuesta[i].description}</p>
            <button class="btn btn-primary" onclick="actualizarInformacionMotorbikes(${respuesta[i].id} )" >Editar</button>
            <button  class="btn btn-danger" onclick="borrarMotorbikes(${respuesta[i].id} )">Borrar</button>
            </div>
            </div>
        ` 
    }
    myTable+='</div></div></div>';
    $("#resultado2").html(myTable);
}

function guardarInformacionMotorbikes(){
    let var3 = {
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val(),
        };
      
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var3),
        
        url:"http://168.138.131.29:8080/api/Motorbike/save",
       
        
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

function editarRegistro (id){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Motorbike/'+id,
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta+ "url" + "http://168.138.131.29:8080/api/Motorbike/"+id);
        let miTabla = '<table>';
               
        $("##Bname").val(respuesta.name),
        $("#Bbrand").val(respuesta.brand),
        $("#Byear").val(respuesta.year),
        $("#Bdescription").val(respuesta.description)
	},
    error : function(xhr, status) {
        alert('ha sucedido un problema:'+ status);
    }
});
}


function actualizarInformacionMotorbikes(idElemento){
    let myData={
        id:idElemento,
        name:$("#Bname").val(),
        brand:$("#Bbrand").val(),
        year:$("#Byear").val(),
        description:$("#Bdescription").val()        

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Motorbike/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#Bname").val("");
            $("#Bbrand").val("");
            $("#Byear").val("");
            $("#Bdescription").val("");
            traerInformacionMotorbikes();
            alert("se ha Actualizado correctamente la categoria")
        }
    });

}

function pintarSelect(id){
	$.ajax({    
    url : 'http://168.138.131.29:8080/api/Motorbike/all',
    type : 'GET',
    dataType : 'json',
    contentType: "application/json; charset=utf-8",
  
    success : function(respuesta) {
		console.log(respuesta);
		$("#resultado1").empty();
		miSelect='<option id="" ></option>';
		for (i=0; i<respuesta.length; i++){
                  if (respuesta[i].id == id){
                      miSelect += '<option selected value='+ respuesta[i].id+ '>'+respuesta[i].name+'</option>';
                  }   
                  else {
                        miSelect += '<option value='+ respuesta[i].id+ '>'+respuesta[i].name+'</option>'; 		
                    }
		}
	    $("#cat").append(miSelect);    

	},
    error : function(xhr, status) {
        alert('ha sucedido un problema en la carga del select:'+ status);
    }
});
	
}	
	
function borrarMotorbikes(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://168.138.131.29:8080/api/Motorbike/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacionMotorbikes();
            alert("Se ha eliminado.")
        }
    });

}
