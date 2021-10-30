/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.repositorio;

import Domingo_Reto3.Reto3.Client;
import Domingo_Reto3.Reto3.model.interfaceClient;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danie
 */
@Repository

public class RepositorioClient {
    @Autowired
    private interfaceClient crud1;
    public List<Client> getAll(){
    return (List<Client>) crud1.findAll();
    }
    public Optional <Client> getClient (int id) {
        return crud1.findById(id);
    }
    public Client save (Client client){
        return crud1.save(client);   
    }
    
    
    public void delete (Client client){
        crud1.delete(client);
    }   
   

}