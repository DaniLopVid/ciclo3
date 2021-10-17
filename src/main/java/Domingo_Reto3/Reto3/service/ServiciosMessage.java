/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.service;

import Domingo_Reto3.Reto3.Message;
import Domingo_Reto3.Reto3.repositorio.RepositorioMessage;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author danie
 */
@Service
public class ServiciosMessage {
    @Autowired
    private RepositorioMessage metodosCrud;
    
    public List<Message> getAll(){
         return metodosCrud.getAll();
    }
        
    public Optional<Message> getMessage (int idMessage) {
        return metodosCrud.getMessage(idMessage);
    }
    
    public Message save(Message message){
        if (message.getIdMessage()==null){
           return metodosCrud.save(message);
        } else {
            Optional<Message> evt=metodosCrud.getMessage(message.getIdMessage());
            if (evt.isEmpty()){
                return metodosCrud.save(message);
                } else {
                return message;
            }
        }
    
    }
        
}