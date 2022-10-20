package com.springboot.angular.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.angular.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
