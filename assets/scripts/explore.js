// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // function populateVoiceList() {
  //   if (typeof speechSynthesis === 'undefined') {
  //     return;
  //   }
  
  //   const voices = speechSynthesis.getVoices();
  
  //   for (let i = 0; i < voices.length; i++) {
  //     const option = document.createElement('option');
  //     option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
  //     if (voices[i].default) {
  //       option.textContent += ' — DEFAULT';
  //     }
  
  //     option.setAttribute('data-lang', voices[i].lang);
  //     option.setAttribute('data-name', voices[i].name);
  //     document.getElementById("voice-select").appendChild(option);
  //     console.log("1");
  //   }
  // }
  
  // populateVoiceList();
  // if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  //   speechSynthesis.onvoiceschanged = populateVoiceList;
  // }
  // console.log("2");





  const synth = window.speechSynthesis;
  const button = document.querySelector("button");
  //const inputForm = document.querySelector("#explore");
  //const inputTxt = document.querySelector("#text-to-speak");
  const inputTxt = document.getElementById('text-to-speak');
  const voiceSelect = document.querySelector("select");
  //const resultPic = document.querySelector("img");
  // const pitch = document.querySelector("#pitch");
  // const pitchValue = document.querySelector(".pitch-value");
  // const rate = document.querySelector("#rate");
  // const rateValue = document.querySelector(".rate-value");
  let voices = [];
  //resultPic.src = "assets/images/smiling-open.png";
  function populateVoiceList() {
    voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase();
      const bname = b.name.toUpperCase();

      if (aname < bname) {
        return -1;
      } else if (aname == bname) {
        return 0;
      } else {
        return +1;
      }
    });
    const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      //console.log(i);

      if (voices[i].default) {
        option.textContent += " -- DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
      //document.getElementById("voice-select").appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
  }

  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  function speak() {
   // resultPic.src = "assets/images/smiling-open.png";
    //resultPic.src = "assets/images/smiling-open.png";
    //console.log("smiling-open");
    if (synth.speaking) {
      //resultPic.src = "assets/images/smiling-open.png";
      console.error("speechSynthesis.speaking");
      return;
    }

    if (inputTxt.value !== "") {
      const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

      utterThis.onend = function (event) {
        //resultPic.src = "assets/images/smiling-open.png";
        const resultPic = document.querySelector("img");
          resultPic.src = "assets/images/smiling.png";
        console.log("SpeechSynthesisUtterance.onend");
      };

      utterThis.onerror = function (event) {
        console.error("SpeechSynthesisUtterance.onerror");
      };

      const selectedOption =
        voiceSelect.selectedOptions[0].getAttribute("data-name");

      for (let i = 0; i < voices.length; i++) {
        
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];



          const resultPic = document.querySelector("img");
          resultPic.src = "assets/images/smiling-open.png";
            //console.log("a");
          // resultPic.addEventListener('load', () => {
          //   // execute drawImage statements here
          //   resultPic.src = "assets/images/smiling-open.png";
          //   console.log("a2");
          // },true);
          // resultPic.src = "assets/images/smiling-open.png";
          //   console.log("a3");
          // resultPic.src = "assets/images/smiling-open.png";
          break;
        }
      }
      //utterThis.pitch = pitch.value;
      //utterThis.rate = rate.value;
      //resultPic.src = "assets/images/smiling-open.png";
      synth.speak(utterThis);
      // if(synth.speaking)
      // {
      //   resultPic.src = "assets/images/smiling-open.png";
      //   console.log("smiling-open2");
      // }
    }
    
    //resultPic.src = "assets/images/smiling-open.png";
    // if(!synth.pending)
    // {
    //   resultPic.src = "assets/images/smiling.png";
    // }
    // if(synth.speaking)
    // {
    //   resultPic.src = "assets/images/smiling-open.png";
    //   console.log("smiling-open2");
    // }
  }
  
  // inputForm.onsubmit = (event) => {
  //   event.preventDefault();

  //   speak();

  //   inputTxt.blur();
  // };
  // button.onclick=(event) => {
  //   event.preventDefault();

  //   speak();

  //   inputTxt.blur();
  // };
  // pitch.onchange = function () {
  //   pitchValue.textContent = pitch.value;
  // };

  // rate.onchange = function () {
  //   rateValue.textContent = rate.value;
  // };
  button.addEventListener('click', (event) => {
    event.preventDefault();
    //resultPic.src = "assets/images/smiling-open.png";
    //console.log("1");
    speak();

    inputTxt.blur();
    const resultPic = document.querySelector("img");
          //resultPic.src = "assets/images/smiling.png";
            //console.log("a")
    //resultPic.src = "assets/images/smiling.png";
    
  });
  // inputForm.onsubmit = (event) => {
  //   event.preventDefault();

  //   speak();

  //   inputTxt.blur();
  // };
  voiceSelect.onchange = function () {
    //resultPic.src = "assets/images/smiling-open.png";
    //resultPic.sh
    //console.log("2");
    //speak();
    const resultPic = document.querySelector("img");
          resultPic.src = "assets/images/smiling.png";
            //console.log("a")
    //resultPic.src = "assets/images/smiling.png";
  };

  // if(synth.pending)
  // {
  //  // resultPic.src = "assets/images/smiling-open.png";
  //   //console.log("smiling-open2");
  // }
// if(synth.speaking){
//   resultPic.src = "assets/images/smiling-open.png";
// }
// resultPic.src = "assets/images/smiling.png";

}