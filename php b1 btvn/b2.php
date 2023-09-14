   <!DOCTYPE html>
   <html lang="en">
   <head>
       <title>Kiểm tra điểm số</title>
   </head>
   <body>
   <h1>Kiểm tra điểm số</h1>
       <?php
       // TODO: Kiểm tra điểm số và hiển thị thông báo tương ứng.
       // Scores >= 90 là A, 80-89: B, 70-79: C, 60-69: D, dưới 60: F.
       $score = rand(0,100);
       if($score >=90){
           $result =  "A";
       }else{
           if($score >=80){
               $result =  "B";
           }else{
               if ($score>=70){
                   $result =  "C";
               }else{
                   if ($score >=60){
                       $result = "D";
                   }else{
                       $result =  "F";
                   }
               }
           }
       }
?>
   <p>Điểm của bạn là: <?php echo $score; ?> và đạt mức <?php echo $result; ?></p>


   </body>
   </html>

