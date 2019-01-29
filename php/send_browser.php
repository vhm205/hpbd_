<?php
	include('./config.php');
	try {
		$data = $_POST['data'];
		$conn = new PDO('mysql:host='.HOSTNAME.';dbname='.DBNAME,USERNAME,PASSWORD,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$sql = "INSERT INTO info(INFOMATION) VALUES(:INFOMATION)";
		$pre = $conn->prepare($sql);
		$pre->bindParam(':INFOMATION', $data);
		$pre->execute();
	} catch (PDOException $e) {
		echo $e->getMessage();	
	}
?>