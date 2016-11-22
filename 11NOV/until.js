window.untils = {};
window.untils.getMouseMove = function(ele) {
    var move = {
        x: 0,
        y: 0
    };
    ele.addEventListener('mousemove', function(e) {
        var x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY
        } else {
            x = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
            y = e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
        }
        x -= ele.offsetLeft;
        y -= ele.offsetTop;
        move.x = x;
        move.y = y;
    })
    return move;
}
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.webkitRrequestAnimationFrame ||
        window.mozRequestAnimationFrame ||

        function(callback) {
            setTimeout(() => {
                callback
            }, 17)
        })
}
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||
        window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
        window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
        window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
        window.clearTimeout)
}
