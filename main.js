difference = 0;
rightWristX = 0;
leftWristX = 0;
name = " ";
function setup(){
    video = createCapture(VIDEO);
    video.size(300, 300);

    canvas = createCanvas(250, 250);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
        if(results.length > 0)
        {
            console.log(results);

            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX +"difference = "+difference);
        }
}

function draw(){
    background('#969A97');
    document.getElementById("word_size").innerHTML = "Width and Height of the word will be = "+difference+"px";

    fill('#f686F2');
    textSize(difference);
    stroke('#f686F2');
    text('name', 50, 400);
}