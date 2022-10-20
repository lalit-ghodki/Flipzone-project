package com.springboot.angular.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	private String ProductName;
	private long ProductRate;
	private long ProductQuantity;
	private String ProductManufacturer;
	
	public Product(long id, String productName, long productRate, long productQuantity, String productManufacturer) {
		super();
		this.id = id;
		ProductName = productName;
		ProductRate = productRate;
		ProductQuantity = productQuantity;
		ProductManufacturer = productManufacturer;
	}
	public Product() {
		super();
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProductName() {
		return ProductName;
	}
	public void setProductName(String productName) {
		ProductName = productName;
	}
	public long getProductRate() {
		return ProductRate;
	}
	public void setProductRate(long productRate) {
		ProductRate = productRate;
	}
	public long getProductQuantity() {
		return ProductQuantity;
	}
	public void setProductQuantity(long productQuantity) {
		ProductQuantity = productQuantity;
	}
	public String getProductManufacturer() {
		return ProductManufacturer;
	}
	public void setProductManufacturer(String productManufacturer) {
		ProductManufacturer = productManufacturer;
	}
	
	
	

}
