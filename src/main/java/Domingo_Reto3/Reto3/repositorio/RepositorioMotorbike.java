/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.repositorio;

import Domingo_Reto3.Reto3.Motorbike;
import Domingo_Reto3.Reto3.model.interfaceMotorbike;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author danie
 */
@Repository

public class RepositorioMotorbike {
    @Autowired
    private interfaceMotorbike crud3;
    
    public List<Motorbike> getAll(){
        return (List<Motorbike>) crud3.findAll();
    }
    public Optional <Motorbike> getMotorbike (int id) {
        return crud3.findById(id);
    }
    public Motorbike save (Motorbike motorbike){
        return crud3.save(motorbike);   
    }
    
    public void delete(Motorbike motorbike){
        crud3.delete(motorbike);
    }

}