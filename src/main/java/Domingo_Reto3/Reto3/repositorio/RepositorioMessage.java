/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.repositorio;

import Domingo_Reto3.Reto3.Message;
import Domingo_Reto3.Reto3.model.interfaceMessage;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danie
 */
@Repository

public class RepositorioMessage {
    @Autowired
    private interfaceMessage crud2;
    public List<Message> getAll(){
    return (List<Message>) crud2.findAll();
    }
    public Optional <Message> getMessage (int id) {
        return crud2.findById(id);
    }
    public Message save (Message message){
        return crud2.save(message);   
    }
    
    
    public void delete(Message message){
        crud2.delete(message);
    }

}