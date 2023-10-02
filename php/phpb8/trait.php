<?php
trait Greeting {
    public function sayHello(){
        echo "hello";
    }
}
trait Wellcome{
    public function sayHello(){
        echo "goodbye";
    }
}

class User {
    use Greeting,Wellcome;
}
$user = new User();
$user ->sayHello();