$('#email').on('keyup', function(){
    console.log($('#email').val())
})
$('#password').on('keyup', function(){
    let password = $(this).val();
    console.log(password);
})
$('.login').on('click', function(){
 $('.content_footer').html('Login success');
 $('.content_footer').append('<div class="footer"> Div append</div>');
 $('.content_footer').addClass('error');
})