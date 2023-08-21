$(document).ready(function() {
    // Apply hover effect and cursor change on card hover
    $('.card').hover(function() {
        $(this).css({
            transform: 'scale(1.05)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer'
        });
    }, function() {
        $(this).css({
            transform: 'scale(1)',
            boxShadow: 'none',
            cursor: 'default'
        });
    });

    // Apply a different hover effect on card body
    $('.card-body').hover(function() {
        $(this).css('backgroundColor', '#f0f0f0');
    }, function() {
        $(this).css('backgroundColor', 'transparent');
    });
});
