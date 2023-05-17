function preload() {
}

function setup() {
    canvas=createCanvas(440, 340);
    canvas.position(425, 255);
    video=createCapture(VIDEO);
    video.hide();
    tintColor="";
}

function draw() {
    image(video, 0, 0, 440, 340);
    tint(tintColor);
}

function takeSnapshot() {
    save('myFilter.png');
}

function filterTint() {
    tintColor=document.getElementById("colorName").value;
}