let squareBox = $(".squareBox");

let isMousedown = false, isTouchstart = false;
let direction = undefined;
let x, y;

// 电脑端滑动方向确定
squareBox.on("mousedown mouseup", function (e) {

    if (e.type == "mousedown") {
        console.log("mousedown");
        isMousedown = true;
        x = e.pageX;
        y = e.pageY;
    }

    if (e.type == "mouseup") {
        console.log("mouseup");
        isMousedown = false;
        direction = undefined;
    }
});
squareBox.mousemove(function (e) {

    if (isMousedown && !direction) {

        if (x - e.pageX > 5) {
            direction = "l";
        }
        if (x - e.pageX < -5) {
            direction = "r";
        }
        if (y - e.pageY < -5) {
            direction = "d";
        }
        if (y - e.pageY > 5) {
            direction = "u";
        }
        console.log(direction)
    }
});
// 移动端滑动方向确定
squareBox.on("touchstart touchend", function (e) {

    if (e.type == "touchstart") {
        console.log("touchstart");
        isTouchstart = true;
        x = e.originalEvent.touches[0].pageX;
        y = e.originalEvent.touches[0].pageY;
    }

    if (e.type == "touchend") {
        console.log("touchend");
        isTouchstart = false;
        direction = undefined;
    }
});
squareBox.on("touchmove", function (e) {

    if (isTouchstart && !direction) {

        if (x - e.originalEvent.touches[0].pageX > 5) {
            direction = "l";
        }
        if (x - e.originalEvent.touches[0].pageX < -5) {
            direction = "r";
        }
        if (y - e.originalEvent.touches[0].pageY < -5) {
            direction = "d";
        }
        if (y - e.originalEvent.touches[0].pageY > 5) {
            direction = "u";
        }
        console.log(direction)
    }

});

(() => {
    const htmlObj = document.documentElement;
    // if (htmlObj.clientWidth > 992) {
    // htmlObj.style.fontSize = htmlObj.clientWidth / 20 + "px";
    // }
    // else {
    htmlObj.style.fontSize = htmlObj.clientWidth / 10 + "px";
    // }
})()

