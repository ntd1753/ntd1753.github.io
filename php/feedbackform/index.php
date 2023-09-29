<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<?php
session_start();
if(!empty($_SESSION['error'])){
    $error=$_SESSION['error'];}
?>
<!DOCTYPE HTML>
<html>

<head>
	<title>Notable Feedback Form Responsive Widget Template :: w3layouts</title>
	<!-- Meta Tags -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="Notable Feedback Form template Responsive, Login form web template,Flat Pricing tables,Flat Drop downs Sign up Web Templates, 
 Flat Web Templates, Login sign up Responsive web template, SmartPhone Compatible web template, free web designs for Nokia, Samsung, LG, SonyEricsson, Motorola web design">
	<script type="application/x-javascript">
		addEventListener("load", function () {
			setTimeout(hideURLbar, 0);
		}, false);

		function hideURLbar() {
			window.scrollTo(0, 1);
		}
	</script>
	<!--// Meta Tags -->
	<!-- Stylesheets -->
	<link href="css/font-awesome.css" rel="stylesheet">
	<link href="css/style.css" rel='stylesheet' type='text/css' />
	<!--// Stylesheets -->
	<!--fonts-->
	<link href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
	<!--//fonts-->
</head>

<body>
	<!--background-->
	<h1> Notable Feedback Form </h1>
	<div class="feedback-w3layouts">
		<form action="check_form.php" method="post">
			<div class="field-w3-agile-grid leftf">
				<label>
					<i class="fa fa-user" aria-hidden="true"></i> Name :</label>
				<input type="text" name="name" placeholder=" " required="" />
			</div>
			<div class="field-w3-agile-grid rightf">
				<label>
					<i class="fa fa-envelope" aria-hidden="true"></i> Email :</label>
				<input type="email" name="email" placeholder=" " required="" />
			</div>
			<div class="clear"> </div>
			<div class="form-option-w3-agileits">
				<label>
					<i class="fa fa-comments" aria-hidden="true"></i> Feedback type :</label>
				<select class="form-control" name="cate">
					<option></option>
					<option>Comments</option>
					<option>Bug Reports</option>
					<option>Questions</option>
					<option>Suggestions</option>
				</select>
			</div>
			<div class="text-field-agileits-w3layouts">
				<label>
					<i class="fa fa-comments" aria-hidden="true"></i> Describe Feedback :</label>
				<textarea name="Comments" placeholder=" " required=""></textarea>
			</div>
			<div class="clear"> </div>
			<input type="submit" value="Submit">
		</form><br>
        <div class="text-[white]">
        <?php
        if(!empty($_SESSION['error'])){
            foreach ($error as $item){
                echo $item."<br>";
            }}
        session_destroy();
        ?></div>
	</div>
	<!--copyright-->
	<div class="copy-wthree">
		<p>© 2018 Notable Feedback Form . All Rights Reserved | Design by
			<a href="http://w3layouts.com/" target="_blank">W3layouts</a>
		</p>
	</div>
	<!--//copyright-->

</body>

</html>