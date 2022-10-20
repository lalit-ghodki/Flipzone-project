package com.springboot.angular.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.angular.exception.ResourceNotFoundException;
import com.springboot.angular.model.Product;
import com.springboot.angular.repository.ProductRepository;


@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/product")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	//Get all:
	@GetMapping("/products")
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}
	
	//Create:
	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product) {
		return productRepository.save(product);
	}
	
	//get employee by Id rest API
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id) {
			Product product = productRepository.findById(id).orElseThrow(() -> 
					new ResourceNotFoundException("Product not exists with id: " + id));
			return ResponseEntity.ok(product);
		}
		
	//update employee rest API
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable Long id,  
				@RequestBody Product productDetails){
			Product product = productRepository.findById(id)
					.orElseThrow( ()-> 
					new ResourceNotFoundException("Employee not exist with id;" +id));
			product.setProductManufacturer(productDetails.getProductManufacturer());
			product.setProductName(productDetails.getProductName());
			product.setProductQuantity(productDetails.getProductQuantity());
			product.setProductRate(productDetails.getProductRate());
			
			Product updateProduct=productRepository.save(product);
			return ResponseEntity.ok(updateProduct);	
		}
		
	//Delete:
	  @DeleteMapping("/products/{id}")
	    public Map<String, Boolean> deleteProduct(@PathVariable(value = "id") Long id)
	         throws ResourceNotFoundException {
	        Product product = productRepository.findById(id)
	       .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + id));
	        productRepository.delete(product);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
	

}
