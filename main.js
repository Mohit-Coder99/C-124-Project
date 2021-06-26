function setup(){
     video = createCapture(VIDEO);
     video.size(600, 600);
     video.position(50, 135);

     canvas = createCanvas(550, 550);
     canvas.position(740, 150);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function gotPoses(results){
     if(results.length > 0){
          console.log(results);
     }
}

function modelLoaded(){
     console.log("Posenet is Initialized");
}

function draw(){
     background('#FF6347');
}