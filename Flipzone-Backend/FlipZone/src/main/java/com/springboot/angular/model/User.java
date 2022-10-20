package com.springboot.angular.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long userid;
	
	@Column(name="user_name")
	private String user_name;
	
	@Column(name="user_email")
	private String user_email;
	
	@Column(name="user_password")
	private String user_password;
	
	@Column(name="user_address")
	private String user_address;
	
	@Column(name="user_mobnumber")
	private int user_mobilenumber;

	//General Constructor
	public User() {
		super();
	}

	//Parametrized constructor
	public User(long userid, String user_name, String user_email, String user_password, String user_address, int user_mobilenumber) {
		super();
		this.userid = userid;
		this.user_name = user_name;
		this.user_email = user_email;
		this.user_password = user_password;
		this.user_address = user_address;
		this.user_mobilenumber = user_mobilenumber;
	}

	//Getters and Setters
	public long getUserid() {
		return userid;
	}

	public void setUserid(long userid) {
		this.userid = userid;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_email() {
		return user_email;
	}

	public void setUser_email(String user_email) {
		this.user_email = user_email;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_address() {
		return user_address;
	}

	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}

	public int getUser_mobilenumber() {
		return user_mobilenumber;
	}

	public void setUser_mobilenumber(int user_mobilenumber) {
		this.user_mobilenumber = user_mobilenumber;
	}


	

	
	
}