<?php 

function connect() {
	global $pdo;
	$pdo = new PDO("mysql:host=localhost;dbname=sakila", "root", "root");
}

function get_actors() {
	//SELECT actor_id, first_name, last_name FROM actor	
}

 