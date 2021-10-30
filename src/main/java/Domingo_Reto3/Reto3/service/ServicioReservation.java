/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.service;

import Domingo_Reto3.Reto3.Reportes.ContadorClientes;
import Domingo_Reto3.Reto3.Reportes.StatusReservation;
import Domingo_Reto3.Reto3.Reservation;
import Domingo_Reto3.Reto3.repositorio.RepositorioReservation;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
    
    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e= metodosCrud.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){

                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }

    public boolean deleteReservation(int idReservation) {
        Boolean aBoolean = getReservation(idReservation).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    public StatusReservation reporteStatus (){
        List<Reservation>completed=metodosCrud.ReservationStatus("completed");
        List<Reservation>cancelled=metodosCrud.ReservationStatus("cancelled");
        return new StatusReservation(completed.size(), cancelled.size());
        
    }
    
    public List<Reservation> datesReservation (String datoA, String datoB){
        SimpleDateFormat parser = new SimpleDateFormat ("yyyy-MM-dd");
        Date datoUno = new Date();
        Date datoDos = new Date();
        
        try{
            
            datoUno = parser.parse(datoA);
            datoDos = parser.parse(datoB);
        
        } catch(ParseException evt){
                evt.printStackTrace();
            
        }if (datoUno.before(datoDos)){
            
           return metodosCrud.ReservationDates(datoUno, datoDos);
                } else {
            return new ArrayList<>();
           }
             
        
    }
    
    
    public List<ContadorClientes> reporteClientesServicio(){
            return metodosCrud.getRepositorioClient();
        }

    
       
    
        
}