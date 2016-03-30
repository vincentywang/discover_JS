<?php 

function connect() {
	global $pdo;
	$pdo = new PDO("mysql:host=localhost;dbname=sakila", "root", "root");
}

function get_actors() {
	
}

 