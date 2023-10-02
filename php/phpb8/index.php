<?php
interface Shape {

    public function perimeter();
    public function  area();
}

class  square implements Shape {
    private $edge;
    public function __construct($edge)
    {
        $this ->edge = $edge;

    }
    public function perimeter(){
        return $this->edge*4;
    }
    public function area(){
        return $this->edge*$this->edge;
    }
}

class  rectangle implements Shape {
    private $length;
    private $width;
    public function __construct($length,$width)
    {
        $this ->length = $length;
        $this ->width= $width;
    }

    public function perimeter(){
        return ($this->width+$this->length)*2;
    }
    public function area(){
        return $this->length*$this->width;
    }
}
$rec1= new rectangle(4,8);
$sq1= new  square(7);
echo $rec1 -> perimeter(). "<br>";
echo $rec1 -> area(). "<br>";
echo $sq1 -> perimeter(). "<br>";
echo $sq1 -> area(). "<br>";