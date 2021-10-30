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
    
    public Motorbike update(Motorbike motorbike){
        if(motorbike.getId()!=null){
            Optional<Motorbike> e=metodosCrud.getMotorbike(motorbike.getId());
            if(!e.isEmpty()){
                if(motorbike.getName()!=null){
                    e.get().setName(motorbike.getName());
                }
                if(motorbike.getBrand()!=null){
                    e.get().setBrand(motorbike.getBrand());
                }
                if(motorbike.getYear()!=null){
                    e.get().setYear(motorbike.getYear());
                }
                if(motorbike.getDescription()!=null){
                    e.get().setDescription(motorbike.getDescription());
                }
                if(motorbike.getCategory()!=null){
                    e.get().setCategory(motorbike.getCategory());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return motorbike;
            }
        }else{
            return motorbike;
        }
    }


    public boolean delete (int idMotorbike) {
        Boolean aBoolean = getMotorbike(idMotorbike).map(motorbike -> {
            metodosCrud.delete(motorbike);
            return true;
        }).orElse(false);
        return aBoolean;
    }
        
}