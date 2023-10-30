let speech = new SpeechSynthesisUtterance();

let voice = [];

let voiceSelect = document.querySelector("select");
console.log(voiceSelect)


document.querySelector("button").addEventListener("click", ()=>{
speech.text = document.querySelector("textarea").value;
window.speechSynthesis.speak(speech);

})