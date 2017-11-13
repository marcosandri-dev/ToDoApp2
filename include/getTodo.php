<?php 

	include 'simpleConn.php';

	$query = $mysqli->query("SELECT * FROM todotable");

	if(mysqli_num_rows($query) > 0){
		while($row = mysqli_fetch_assoc($query)){
			$data[] = $row;
		}
		print json_encode($data);
	}
	
	mysqli_close($conn);

?>