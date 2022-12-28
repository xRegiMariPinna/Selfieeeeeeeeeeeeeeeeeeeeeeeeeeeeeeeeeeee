var SpeechRecogntion = window.webkitSpeeckRecogntion;
var recogntion = new SpeechRecogntion();
var Textbox = document.getElementById("textbox");

function start(){
    Textbox.inner= "";
    recogntion.start();
}
recogntion.onresult = function (event){
    console.log(event);
    var content = event.results[0][0]. transcript;
    textbox.innerHTML = content;
    console.log(content);

    if(content== "tire minha selfie"){
        console.log("tirando selfie --- ");
        speak();
    }

}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tirando sua selfie em 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    Webcam.attach(camera);
    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);
}

camera = document.getElementById("camera");
 
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

//Defina a função.
function take_selfie() {
    //Webcam.snap() é uma função predefinida de webcam.js utilizada para tirar uma selfie. 
    //Essa função contém data_uri que pode ser utilizada para mostrar a pré-visualização da imagem gerada após a captura. 
    //Portanto, primeiro, defina Webcam.snap():
    Webcam.snap(function (data_uri) {
        //Agora, vamos atualizar a div que criamos para conter a selfie, em index.html, 
        //com essa data_uri que possui a selfie tirada:
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '"/>';
    });
}


function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

