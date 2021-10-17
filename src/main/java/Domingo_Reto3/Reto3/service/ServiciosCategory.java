/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Domingo_Reto3.Reto3.service;

import Domingo_Reto3.Reto3.Category;
import Domingo_Reto3.Reto3.repositorio.RepositorioCategory;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author danie
 */
@Service
public class ServiciosCategory {
    @Autowired
    private RepositorioCategory metodosCrud;
    
    public List<Category> getAll(){
         return metodosCrud.getAll();
    }
        
    public Optional<Category> getCategory (int idCategory) {
        return metodosCrud.getCategory(idCategory);
    }
    
    public Category save(Category category){
        if (category.getId()==null){
           return metodosCrud.save (category);
        } else {
            Optional<Category> e=metodosCrud.getCategory(category.getId());
            if (e.isEmpty()){
                return metodosCrud.save(category);
                } else {
                return category;
            }
        }
    
    }
}