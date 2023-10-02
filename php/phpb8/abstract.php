<?php
abstract class Shape{
    public $name;
    public function __construct($name) {
        $this->name = $name;
    }
    function caculate(){
        return 0;
    }
}

class Cricle extends  Shape {
    private $radius;
    public function __construct($radius)
    {
        $this -> radius = $radius;
    }
    public function caculate()
    {
        return pi()*$this->radius*$this->radius ;
    }
}
$cri= new Cricle(1);
echo $cri -> caculate()."<br>";
class square extends  Shape {
    private $width;
    public function __construct($width)
    {
        $this -> width = $width;
    }
    public function caculate()
    {
        return $this->width*$this->width ;
    }
}
$sq= new square(1);
echo $sq -> caculate();