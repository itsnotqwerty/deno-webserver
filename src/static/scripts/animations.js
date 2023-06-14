const cometAudio = new Howl({
    src: ['static/audio/comet.mp3'],
    autoplay: false,
});

const ufoAudio = new Howl({
    src: ['static/audio/ufo.mp3'],
    autoplay: false
});

const astronautAudio = new Howl({
    src: ['static/audio/astronaut.mp3'],
    autoplay: false
});

const explosionAudio = new Howl({
    src: ['static/audio/explosion.mp3'],
    autoplay: false
});

const bonkAudio = new Howl({
    src: ['static/audio/bonk.mp3'],
    autoplay: false
});

let alienOnCooldown = false;

$('#earth').on('click', () => {
    bonkAudio.play();
    $('#earthCtl').prop('checked', false);
});

$('#alienCtl').on('click', () => {
    $('#alienCtl').prop('checked', true);
    if (alienOnCooldown) { return; }
    alienOnCooldown = true;
    explosionAudio.play();
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
        alienOnCooldown = false;
    }, 4000);
});

function cometTimer(delay) {
    setTimeout(() => {
        $('#comet').addClass('comet-animation');
        setTimeout(() => {
            cometAudio.play();
        }, 800);
        setTimeout(() => {
            $('#comet').removeClass('comet-animation');
        }, 8000);
        cometTimer(40000 + (Math.random() * 8000));
    }, delay);
}
cometTimer(40000 + (Math.random() * 8000));

function ufoTimer(delay) {
    setTimeout(() => {
        $('#ufo').addClass('ufo-animation');
        setTimeout(() => {
            ufoAudio.play();
        }, 600);
        setTimeout(() => {
            $('#ufo').removeClass('ufo-animation');
        }, 4000);
        ufoTimer(27000 + (Math.random() * 9000));
    }, delay);
}
ufoTimer(26000 + (Math.random() * 5000));

function astronautTimer(delay) {
    setTimeout(() => {
        $('#astronaut').addClass('astronaut-animation');
        setTimeout(() => {
            astronautAudio.play();
        }, 1200);
        setTimeout(() => {
            $('#astronaut').removeClass('astronaut-animation');
        }, 16000);
        astronautTimer(60000 + (Math.random() * 40000));
    }, delay);
}
astronautTimer(60000 + (Math.random() * 40000));

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
    if (match) { $("#alienCtl").click(); console.log("Collision detected"); }
}

setInterval(checkCollisions, 200);