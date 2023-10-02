<?php
interface Borrowable{
    // viết code định nghĩa 2 method  borrow() và returnItem()
    public function borrow();
    public function returnItem();
}

   Class Book implements Borrowable{
       private $title;
       private $author;
       private $isBrrowed;

       // viết hàm khởi tạo class
        public function __construct($title,$author,$isBrrowed)
        {
            $this -> author =$author;
            $this -> title =$title;
            $this -> isBrrowed =$isBrrowed;

        }
       // function borrow()
    public function borrow(){
            if(!$this->isBrrowed){
                echo "sách đã được mượn từ trước, ko thể mượn";
            }else{
                $this -> isBrrowed = false;
                echo "mượn thành công. sách $this->title của $this->author đã được mượn";
            }
    }
       // Nếu sách chưa được mượn thì thực hiện cho mượn và trả ra thông báo sách $title của $author đã được mượn
       // Nếu không thì trả về thông báo "sách đã được mượn từ trước, ko thể mượn"

       // function returnItem()
       // viết code trả sách và trả về thông báo trả sách thành công
       public function returnItem(){
            if ($this->isBrrowed){
                $this ->isBrrowed=false;
                echo "trả sách thành công";
            }else{
                echo "bạn ko mượn quyển sách này";
            }
       }
   }

   Class Paper implements Borrowable{
       private $title;
       private $date;
       private $isBorrowed;
       // Viết code còn lại giống Book
       public function borrow(){
           if($this->isBrrowed){
               echo "tờ báo đã được mượn từ trước, ko thể mượn";
           }else{
               $this -> isBrrowed = true;
               echo "mượn thành công. tờ báo $this->title của $this->author đã được mượn";
           }
       }
       // Nếu sách chưa được mượn thì thực hiện cho mượn và trả ra thông báo sách $title của $author đã được mượn
       // Nếu không thì trả về thông báo "sách đã được mượn từ trước, ko thể mượn"

       // function returnItem()
       // viết code trả sách và trả về thông báo trả sách thành công
       public function returnItem(){
           if ($this->isBrrowed){
               $this ->isBrrowed=false;
               echo "trả báo thành công";
           }else{
               echo "bạn ko mượn tờ báo này";
           }
       }
   }

$book1=new Book("sóng","Xuân Quỳnh","false");
$paper1=new Book("báo 16","17/5","false");
$book1 ->borrow();
echo "<br>";
$book1 -> borrow();
echo "<br>";
$book1 ->returnItem();
echo "<br>";
$paper1 ->borrow();
echo "<br>";
$paper1 -> borrow();
echo "<br>";
$paper1 ->returnItem();

