function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(10,50);

    canvas = createCanvas(550, 500);
    canvas.positon(560, 125);

    poseNet = ml5.poseNet(video, modelDone);
    poseNet.on('pose', gotPoses);
}

function modelDone()
{
    console.log("PoseNet is Intialized and Loaded!!");
}

function draw()
{
    background("a1e3f0");
}

function gotPoses(results,error)
{
   if(error)
   {
    console.error(error);
   }

   if(results.length > 0)
   {
    console.log(results);

    console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
    console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
   }
}