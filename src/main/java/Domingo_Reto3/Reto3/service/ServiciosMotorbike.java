/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.service;

import Domingo_Reto3.Reto3.Motorbike;
import Domingo_Reto3.Reto3.repositorio.RepositorioMotorbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author danie
 */
@Service
public class ServiciosMotorbike {
    @Autowired
    private RepositorioMotorbike metodosCrud;
    
    public List<Motorbike> getAll(){
         return metodosCrud.getAll();
    }
        
    public Optional<Motorbike> getMotorbike (int idMotorbike) {
        return metodosCrud.getMotorbike(idMotorbike);
    }
    
    public Motorbike save(Motorbike motorbike){
        if (motorbike.getId()==null){
           return metodosCrud.save(motorbike);
        } else {
            Optional<Motorbike> evt=metodosCrud.getMotorbike(motorbike.getId());
            if (evt.isEmpty()){
                return metodosCrud.save(motorbike);
                } else {
                return motorbike;
            }
        }
    
    }
        
}