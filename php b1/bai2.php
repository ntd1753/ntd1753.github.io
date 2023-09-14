<!-- BÀI 2 -->
<!DOCTYPE html>
<html>
<head>
    <title>PHP If-ElseIf Exercise</title>
</head>
<body>
<h1>Tính điểme</h1>
<?php
$score = rand(0,100);
// TODO: Tính điểm của học sinh dựa vào $score.
// Scores>90 là A, 80-89: B, 70-79: C, 60-69: D, dưới 60: F.
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


