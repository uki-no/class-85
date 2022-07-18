Canvas = document.getElementById("myCanvas")
ctx = Canvas.getContext("2d")
NasaArray = ["mars_img_1.jpg", "Mars_img_2.jpg", "Mars_img_3.jpg", "marsimg_4.jpg"]
var RandomNo = Math.floor(Math.random() * 4)

console.log(RandomNo)
Rover_width = 100
Rover_height = 90

bgimg = NasaArray[RandomNo]

console.log(bgimg)
Rover_image = "rover.png"

rover_x = 10
rover_y = 10

function add() {
    var bgimg_tag = new Image();
    bgimg_tag.onload = upload_Background;
    bgimg_tag.src = bgimg;
    var roverimg_tag = new Image();
    roverimg_tag.onload = upload_rover;
    roverimg_tag.src = Rover_image;
}

function upload_Background() {
    ctx.drawImage(bgimg_tag,0,0,canvas.width,canvas.height)
}

function upload_rover() {
    ctx.drawImage(roverimg_tag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keyPressed = e.keyCode
    console.log(keyPressed)
    if (keyPressed == "38") {
        up(); 
        console.log("up")
    }

    if (keyPressed == "40") {
        down(); 
        console.log("down")
    }

    if (keyPressed == "37") {
        left(); 
        console.log("left")
    }

    if (keyPressed == "39") {
        right(); 
        console.log("right")
    }
}

function up() {
    if(rover_y>=0)
    {rover_y=rover_y-10
      upload_Background()
      upload_rover()
    }
}

function down() {
    if(rover_y<=500)
    {rover_y=rover_y+10
      upload_Background()
      upload_rover()
    }
}

function right() {
    if(rover_x<=700)
    {rover_x=rover_x+10
      upload_Background()
      upload_rover()
    }
}

function left() {
    if(rover_x>=0)
    {rover_x=rover_x-10
      upload_Background()
      upload_rover()
    }
}

