prediction_1 = ""


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SXbAakvwg/model.json',modelLoaded);
function modelLoaded()
{ 
console.log("modelo cargado");
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="la primera predicion es..."+prediction_1;
  
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);

    synth(utterThis);
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if(error)
        console.error(error);
     else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
      
        prediction_1=results[0].label;
        
        speak();
        if(results[0].label == "feliz");
        {
            document.getElementById("update_emoji").innerHTML="&#128522";

        }
        if(results[0].label == "triste");
        {
            document.getElementById("update_emoji").innerHTML="&#128532";
            
        }
        if(results[0].label == "enojado");
        {
            document.getElementById("update_emoji").innerHTML="&#128548";
            
        }
        if(results[1].label == "feliz");
        {
            document.getElementById("update_emoji").innerHTML="&#128522";

        }
        if(results[1].label == "triste");
        {
            document.getElementById("update_emoji").innerHTML="&#128532";
            
        }
        if(results[1].label == "enojado");
        {
            document.getElementById("update_emoji").innerHTML="&#128548";
            
        }
    }
}