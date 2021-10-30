/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Domingo_Reto3.Reto3.model;

import Domingo_Reto3.Reto3.Reservation;
import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author danie
 */
public interface interfaceReservation extends CrudRepository<Reservation,Integer>{
  
    public List<Reservation> findAllByStatus (String status);
    
    public List<Reservation> findAllByStartDateAfterAndStartDateBefore(Date dateOne, Date dateTwo);
    
    
    // SELECT clientid, COUNT(*) AS total FROM reservacion group by clientid order by desc;
    @Query ("SELECT c.client, COUNT(c.client) from Reservation AS c group by c.client order by COUNT(c.client)DESC")
    public List<Object[]> countTotalReservationsByClient();

    
}


