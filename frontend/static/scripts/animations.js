$('#earth').on('click', () => {
    $('#bonkAudio')[0].play();
    $('#earthCtl').prop('checked', false);
});

$('#alienCtl').on('click', () => {
    $('#alienCtl').prop('checked', true);
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

function getPositions(element) {
    const pos = element.offset();
    const width = element.width();
    const height = element.height();
    return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}
          
function comparePositions(p1, p2) {
    const x1 = p1[0] < p2[0] ? p1 : p2;
    const x2 = p1[0] < p2[0] ? p2 : p1;
    return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}
  
function checkCollisions(){
    const alien = getPositions($("#alien"));
    const comet = getPositions($('#comet'));
    const ufo = getPositions($('#ufo'));
  
    const cometHorizontalMatch = comparePositions(alien[0], comet[0]);
    const cometVerticalMatch = comparePositions(alien[1], comet[1]);      
    const ufoHorizontalMatch = comparePositions(alien[0], ufo[0]);
    const ufoVerticalMatch = comparePositions(alien[1], ufo[1]);       
    const match = (cometHorizontalMatch && cometVerticalMatch) || (ufoHorizontalMatch && ufoVerticalMatch);
    if (match) { $("#alienCtl").click(); }
}

setInterval(checkCollisions, 200);