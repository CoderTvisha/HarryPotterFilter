noseX = "";
noseY = "";
leftEyeX="";
leftEyeY="";
leftShoulderX = "";
leftShoulderY = "";



function preload(){
img = loadImage("https://i.postimg.cc/nhRGFCW6/1693741-200-removebg-preview.png");
img2= loadImage("https://i.postimg.cc/5NKs0Qcw/213-2138815-scar-clipart-lightning-bolt-harry-potter-scar-png-removebg-preview.png")
img3 = loadImage("https://i.postimg.cc/d3bgS52j/84-840228-scarf-harrypotter-gryffindor-hogwarts-clothing-accesso-harry-potter-removebg-preview.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modeolLoaded);
    poseNet.on('pose', gotPoses);
}

function modeolLoaded(){
    console.log('poseNet is initialized')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftEyeX= results[0].pose.leftEye.x;
        leftEyeY= results[0].pose.leftEye.y;
        leftShoulderX = results[0].pose.leftShoulder.x;
        leftShoulderY = results[0].pose.leftShoulder.y;

        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
image(img, noseX-57, noseY-86, 120, 120);
image(img2, leftEyeX-60, leftEyeY-50, 40, 40);
image(img3, leftShoulderX-140, leftShoulderY-50, 140, 170);

}

function takescreenshot(){
    save('harryPotterFilter.png');
}