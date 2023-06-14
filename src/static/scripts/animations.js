const cometAudio = new Howl({ src: ['static/audio/comet.mp3'], autoplay: false });
const ufoAudio = new Howl({ src: ['static/audio/ufo.mp3'], autoplay: false });
const astronautAudio = new Howl({ src: ['static/audio/astronaut.mp3'], autoplay: false });
const explosionAudio = new Howl({ src: ['static/audio/explosion.mp3'], autoplay: false });
const bonkAudio = new Howl({ src: ['static/audio/bonk.mp3'], autoplay: false });

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

function createAnimationTimer(target, d, dt, k, a, at) {
    function timerFactory(delay) {
        setTimeout(() => {
            $(`#${target}`).addClass(`${target}-animation`);
            setTimeout(() => {
                a.play();
            }, at);
            setTimeout(() => {
                $(`#${target}`).removeClass(`${target}-animation`);
            }, k);
            timerFactory(d + (Math.random() * dt));
        }, delay);
    }
    timerFactory(d + (Math.random() * dt));
}

createAnimationTimer('comet', 40000, 8000, 8000, cometAudio, 800);
createAnimationTimer('ufo', 23000, 9000, 4000, ufoAudio, 600);
createAnimationTimer('astronaut', 60000, 40000, 16000, astronautAudio, 1200);

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