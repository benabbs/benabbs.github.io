var vx = 3;
var vy = 2;

function hitLR(el, bounding) {
    if (el.offsetLeft <= 0 && vx < 0) {
        console.log('LEFT');
        vx = -1 * vx;
    }
    if ((el.offsetLeft + el.offsetWidth) >= bounding.offsetWidth) {
        console.log('RIGHT');
        vx = -1 * vx;
    }
    if (el.offsetTop <= 0 && vy < 0) {
        console.log('TOP');
        vy = -1 * vy;
    }
    if ((el.offsetTop + el.offsetHeight) >= bounding.offsetHeight) {
        console.log('BOTTOM');
        vy = -1 * vy;
    }
}

function mover(el, bounding) {
    hitLR(el, bounding);
    el.style.left = el.offsetLeft + vx + 'px';
    el.style.top = el.offsetTop + vy + 'px';
    setTimeout(function() {
        mover(el, bounding);
    }, 50);
}

setTimeout(function() {
    mover($('.bouncer')[0], $('.bouncyHouse')[0]);
}, 50);
