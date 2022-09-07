nose_X=0;
nose_Y=0;


function preload(){
    moustache=loadImage('https://i.postimg.cc/7hkvMmpf/picture-removebg-preview.png');
}
 function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
 function draw(){
    image(video,0,0,300,300);
    fill(255,0,0);
    stroke(255,0,0);
    
    image(moustache,nose_X,nose_Y,45,40);

}
 function take_picture(){
save("picture.png");
}


function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){


        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        
        console.log("nose y: "+results[0].pose.nose.y);
        nose_X=results[0].pose.nose.x-20;

        nose_Y=results[0].pose.nose.y;

    };
}

