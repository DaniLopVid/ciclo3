/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.service;

import Domingo_Reto3.Reto3.Reservation;
import Domingo_Reto3.Reto3.repositorio.RepositorioReservation;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author danie
 */
@Service
public class ServicioReservation {
    @Autowired
    private RepositorioReservation metodosCrud;
    
    public List<Reservation> getAll(){
         return metodosCrud.getAll();
    }
        
    public Optional<Reservation> getReservation (int idReservation) {
        return metodosCrud.getReservation(idReservation);
    }
    
    public Reservation save(Reservation reservation){
        if (reservation.getIdReservation()==null){
           return metodosCrud.save(reservation);
        } else {
            Optional<Reservation> evt=metodosCrud.getReservation(reservation.getIdReservation());
            if (evt.isEmpty()){
                return metodosCrud.save(reservation);
                } else {
                return reservation;
            }
        }
    
    }
        
}