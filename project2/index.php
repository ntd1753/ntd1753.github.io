
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Images Manager</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <?php
        $imageDirectory = './uploads/';
        $images = scandir($imageDirectory);

        // Xóa ảnh
        // Viết code xóa ảnh

        // Sửa tên ảnh
        //Viết code sửa tên ảnh

    ?>
    <!--Title-->
    <div class="flex justify-center mt-8">
        <h1 class="text-3xl font-bold uppercase text-blue-600">Images Manager</h1>
    </div>

    <!-- Images Gallery-->
    <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-8">
        <div class="flex justify-end">
            <a href="upload_file.php">
                <button type="button" class="px-6 py-2 rounded border-2 border-green-500 bg-green-500
                text-white text-lg hover:bg-white hover:text-green-500 font-bold"> Thêm mới hình ảnh</button>
            </a>
        </div>
        <div class="w-full mt-8">
            <div class="-m-1 flex flex-wrap md:-m-2">

            <?php
            foreach ($images as $image) {
                if ($image !== '.' && $image !== '..') {
            ?>
                <div class="flex w-1/4 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                        <img
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="<?php echo $imageDirectory . $image ?>" />
                    </div>
                    <div class="w-full p-2 flex justify-between">
                        <div class="text-left pl-4 text-gray-500 text-lg">
                            <?php echo $image ?>
                        </div>
                        <div>
                            <div class="flex justify-end gap-2">
                                <div>
                                    <button type="button" onclick="edit_file_name('<?php echo $image?>')" class="text-lg text-blue-500 hover:text-black">
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </button>
                                </div>
                                <div>
                                    <form method="post" action="">
                                        <input type="hidden" name="image_name" value="<?php echo $image?>" />
                                        <button type="submit" name="delete_image" class="text-lg text-red-500 hover:text-black">
                                            <i class="fa-regular fa-trash-can"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            <?php
                }
            }
            ?>
            </div>
        </div>
    </div>
    <div class="absolute w-full h-screen bg-black/50 top-0 left-0 hidden" id="edit_form">
        <div class="flex justify-center items-center">
            <div class="w-1/3 bg-white p-8 mt-36 rounded">
                <div class="edit-form">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="col-span-1">
                            <img
                                id="edit_image_src"
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="./uploads/sample_1.png" />
                        </div>
                        <div class="col-span-1">
                            <form method="post" action="">
                                <h3 class="text-center font-bold text-blue-600 uppercase text-lg"> Sửa tên</h3>
                                <div class="mt-2 w-full">
                                    <p class="text-left font-bold text-base text-gray-600"> Tên cũ:</p>
                                    <input class="px-2 py-1 border border-gray-400 rounded w-full mt-1 focus:outline-blue-500"
                                           type="text" name="image_name" id="editImageName" value="sample_1.png" readonly/>
                                </div>

                                <div class="mt-2 w-full">
                                    <p class="text-left font-bold text-base text-gray-600"> Tên mới:</p>
                                    <input class="px-2 py-1 border border-gray-400 rounded w-full mt-1 focus:outline-blue-500"
                                           type="text" name="new_image_name" id="newImageName" value="sample_1.png" required/>
                                </div>
                                <div class="flex justify-end gap-2 mt-4">
                                    <button type="button" class="px-5 py-2 bg-gray-500 text-white text-base border border-gray-500
                                                       hover:text-gray-500 hover:bg-white rounded" onclick="close_edit_form()">Hủy</button>
                                    <button type="submit" class="px-5 py-2 bg-orange-500 text-white text-base border border-orange-500
                                                       hover:text-orange-500 hover:bg-white rounded " name="update_image_name">Cập nhật</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        let imgDir = '<?php echo $imageDirectory ?>';
        function edit_file_name(filename){
            console.log(filename);
            document.getElementById("edit_form").style.display="inline-block";
            document.getElementById("edit_image_src").src= imgDir + filename;
            document.getElementById("editImageName").value= filename;
            document.getElementById("newImageName").value= "";
        }
        function close_edit_form(){
            document.getElementById("edit_form").style.display="none";
        }



    </script>


</body>
</html>