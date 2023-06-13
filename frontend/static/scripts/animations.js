$('#earth').on('click', () => {
    $('#bonkAudio')[0].play();
    $('#earthCtl').prop('checked', false);
});

$('#alienCtl').on('click', () => {
    $('#explosionAudio')[0].play();
    $('#explosion').animate({
        'opacity': '1'
    });
    setTimeout(() => {
        $('#explosion').animate({
            'opacity': '0'
        });
    }, 500);
    setTimeout(() => {
        $('#alienCtl').prop('checked', false);
    }, 5000);
});

setInterval(() => {
    $('#comet').addClass('comet-animation');
    setTimeout(() => {
        $('#cometAudio')[0].play();
    }, 800);
    setTimeout(() => {
        $('#comet').removeClass('comet-animation');
    }, 8000);
}, 47000);

setInterval(() => {
    $('#ufo').addClass('ufo-animation');
    setTimeout(() => {
        $('#ufoAudio')[0].play();
    }, 600);
    setTimeout(() => {
        $('#ufo').removeClass('ufo-animation');
    }, 4000);
}, 27000);

setInterval(() => {
    $('#astronaut').addClass('astronaut-animation');
    setTimeout(() => {
        $('#astronautAudio')[0].play();
    }, 1200);
    setTimeout(() => {
        $('#astronaut').removeClass('astronaut-animation');
    }, 16000);
}, 80000);