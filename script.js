$(document).ready(function() {
    // Hide blc and hm initially
    $('.blc, .hm').hide();

    // Click event for img2
    $('#img2').on('click', function() {
        // Fade-up2 animation on blc
        $('.blc').show().css('animation', 'fade-up1 0.5s ');

        // Fade-down2 animation on hm
        $('.hm').css('animation', 'fade-down1 0.5s').hide();

        // Hide hm after animation completion
        
    });

    // Click event for img1
    $('#img1').on('click', function() {
        // Fade-up2 animation on hm
        $('.hm').show().css('animation', 'fade-up1 0.5s');

        // Fade-down2 animation on blc
        $('.blc').css('animation', 'fade-down1 0.5s ').hide();

        // Hide blc after animation completion
      
    });
});
