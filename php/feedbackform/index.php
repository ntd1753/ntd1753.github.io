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
    <script src="https://cdn.tailwindcss.com"></script>
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

	<!--// Stylesheets -->
	<!--fonts-->
	<link href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
	<!--//fonts-->
</head>

<body class="bg-[url('./images/banner.jpg')]">
	<!--background-->
    <h1 class="text-[#fdfbfb]  text-center mt-5 mb-3 text-2xl lg:text-6xl lg:mt-[1.8em] lg:mb-[0.9em]" style="text-shadow: 4px 3px 1px #000;"> Notable Feedback Form </h1>
    <div id="main" class="w-full flex justify-center">
        <div class="w-7/8 p-4 lg:w-1/2  bg-[white] md:p-10">
            <form action="check_form.php" method="post">
                <div class=" md:grid md:grid-cols-2 md:gap-5 md:mb-[25px]">
                    <div class="">
                        <label class=>Name :</label><br>
                        <input type="text" class="w-full h-[43px] border-solid border-[1px] border-[#4e4e4e]
                        shadow-[2px_2px_6px_rgba(0,0,0,0.49)]
                        py-[15px] px-[8px] mt-[10px] mb-[10px]
                        " required>
                    </div>
                    <div class="">
                        <label>
                            <i class="fa fa-envelope" aria-hidden="true"></i> Email :</label><br>
                        <input type="email" name="email" class="w-full h-[43px] border-solid border-[1px] border-[#4e4e4e]
                        shadow-[2px_2px_6px_rgba(0,0,0,0.49)]
                        py-[15px] px-[8px] mt-[10px] mb-[10px] md:mb-[0px]
                        " required>
                    </div>
                </div>

                <div class="clear"> </div>
                <div class="mb-[25px]">
                    <label >
                        <i class="fa fa-comments" aria-hidden="true"></i> Feedback type :</label>
                    <select  class="form-control  w-full h-[38px] border-solid border-[1px] border-[#4e4e4e]
                                    shadow-[2px_2px_6px_rgba(0,0,0,0.49)] text-[black]
                                     mt-[10px]" name="cate">
                        <option></option>
                        <option value="Comments" class="text-[black]">Comments</option>
                        <option value="Bug Reports" class="text-[black]">Bug Reports</option>
                        <option value="Questions" class="text-[black]">Questions</option>
                        <option value="uggestions" class="text-[black]">Suggestions</option>
                    </select>
                </div>
                <div class="mb-[25px]">
                    <label>
                        <i class="fa fa-comments" aria-hidden="true"></i> Describe Feedback :</label>
                    <textarea name="Comments" required class="w-full h-[100px] border-solid border-[1px] border-[#4e4e4e]
                        shadow-[2px_2px_6px_rgba(0,0,0,0.49)]
                        py-[15px] px-[8px] mt-[10px]"></textarea>
                </div>
                <div class="clear"> </div>
                <div class="flex justify-center">
                    <input type="submit" value="Submit"
                           class="h-[43px] bg-[#ff4c4c] text-[white]
                                  text-[1.1em] font-normal w-2/5 hover:bg-blue-500 cursor-pointer ">
                </div>
            </form><br>
            <div class="">
                <?php
                if(!empty($_SESSION['error'])){
                    foreach ($error as $item){
                        echo $item."<br>";
                    }}
                session_destroy();
                ?></div>
        </div>

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