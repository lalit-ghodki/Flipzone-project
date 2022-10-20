package com.springboot.angular.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.angular.exception.ResourceNotFoundException;
import com.springboot.angular.model.User;
import com.springboot.angular.repository.UserRepository;

@RestController
@RequestMapping("/api/flip/user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserRepository userrepo;
	
	@PostMapping
	public User createUser(@RequestBody User user) {
		return userrepo.save(user);
		
	}
	
	@GetMapping
	public List<User> getAllUser(){
		return userrepo.findAll();
		
	}
	@GetMapping("{id}")
	public ResponseEntity<User> getEmployeeById(@PathVariable Long id) {
		User user = userrepo.findById(id)
				.orElseThrow(() -> 
				new ResourceNotFoundException("Employee not exists with id: " + id));
		return ResponseEntity.ok(user);
	}
	@PutMapping("{id}")
	public ResponseEntity<User> updateEmployee(@PathVariable Long id,  
			@RequestBody User userDetails){
		User user1 = userrepo.findById(id)
				.orElseThrow( ()-> 
				new ResourceNotFoundException("User not exist with id;" +id));
		user1.setUser_name(userDetails.getUser_name());
		user1.setUser_email(userDetails.getUser_email());
		user1.setUser_password(userDetails.getUser_password());
		user1.setUser_address(userDetails.getUser_address());
		user1.setUser_mobilenumber(userDetails.getUser_mobilenumber());
		
		User updateUser=userrepo.save(user1);
		return ResponseEntity.ok(updateUser);
	}
	

}
