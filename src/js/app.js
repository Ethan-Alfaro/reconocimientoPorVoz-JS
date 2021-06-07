var micro = document.querySelector(".microphone");
const content = document.querySelector(".cont");
micro.addEventListener("click", function () {
  if (annyang) {
    var voices;
    const cont = document.querySelector(".cont");
    //Configuramos el SpeechSynthesis
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = "es-ES";

    //Cargamos las Voces que tenemos en nuestro sistema
    window.speechSynthesis.onvoiceschanged = function () {
      voices = window.speechSynthesis.getVoices();
      console.log(voices);
    };

    //Define our commands
    const commandsList = [
      "Alex",
      "How are You",
      "What can you do",
      "Clean the content",
    ];
    const printCommands = () => commandsList.map((command) => command);
    var commands = {
      Alex: function () {
        utter.text = "Hi, Ethan";
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
      },
      "How are you": function () {
        utter.text = "Very well thank you";
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
      },
      "what can you do": function () {
        utter.text = "These are some commands you can use";
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
        cont.innerHTML = "";
        cont.innerHTML = printCommands();
      },
      "Clean content": function () {
        utter.text = "";
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
        cont.innerHTML = "";
      },
      "Open to-do list": function () {
        utter.text = "Okay";
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
      },
      //Integrar toDo List
      //Integrar api del tiempo
      //...
    };
    //Tu frase y posible frase
    annyang.addCallback("result", function (phrases) {
      console.log("Creo que has dicho: ", phrases[0]);
      console.log("Posibles frases que hayas podido decir: ", phrases);
    });
    //Add our Commands for annyang
    annyang.addCommands(commands);

    //Start Listening!
    annyang.start({ autoRestart: false, continuous: true });
  }
});
