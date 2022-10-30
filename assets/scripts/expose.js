// expose.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  //document.getElementById("horn-select").src = document.getElementById("horn-select").value.src;
  //document.getElementById("horn-select").src = ".assets/images/"+document.getElementById("horn-select").value + ".svg";
  //console.log(document.getElementById("horn-select").value);
  //const selectPic = document.getElementById('horn-select');
  const selectPic = document.querySelector("#horn-select");
  //console.log(selectPic.value);
  const resultPic = document.querySelector("img");
  var flag = 0;
  selectPic.addEventListener('change', (event) => {
    //const resultPic = document.querySelector("[type='image']");
    //const resultPic = document.querySelector("img");
    //resultPic.src = ".assets/images/"+event.target.value + ".svg";
    //src = ".assets/images/"+event.target.value + ".svg";
    resultPic.src = "assets/images/"+event.target.value + ".svg";
    if(event.target.value=="party-horn")flag=1;
  });

  // const selectAud = document.querySelector("#horn-select");
  // var tempAud = document.querySelector("audio");
  // selectAud.addEventListener('change', (event) => {
  //   const resultAud = document.querySelector("audio");
  //   resultAud.src = "assets/audio/"+event.target.value + ".mp3";
  //   //console.log(resultAud.src);
  //   tempAud.src=resultAud.src;
  // });
  const selectAud = document.querySelector("#horn-select");
  //var tempAud = document.querySelector("audio");
  const resultAud = document.querySelector("audio");
  selectAud.addEventListener('change', (event) => {
    
    resultAud.src = "assets/audio/"+event.target.value + ".mp3";
    //console.log(resultAud.src);
    //tempAud.src=resultAud.src;
  });

  const selectVol = document.getElementById('volume-controls');
  var tempVol= document.querySelector("audio");
  selectVol.addEventListener('input', (event) => {
    const resultAudP = document.getElementById('volume-controls').querySelector("img");
    //console.log(event.target.value);
    tempVol.volume=event.target.value*0.01;
    //console.log(tempVol.volume);
    //console.log(tempVol.value);
    if(event.target.value==0)
    {
      resultAudP.src = "assets/icons/volume-level-0.svg";//console.log("no");
    }
    else if(event.target.value>0 && event.target.value<33)
    {
      resultAudP.src = "assets/icons/volume-level-1.svg";//console.log("s");
    }
    else if(event.target.value>=33 && event.target.value<67)
    {
      resultAudP.src = "assets/icons/volume-level-2.svg";//console.log("m");
    }
    else if(event.target.value>=67)
    {
      resultAudP.src = "assets/icons/volume-level-3.svg";//console.log("l");
    }
    //console.log(resultAud.src);
  });
  //console.log("before start");
  //console.log(tempAud.src);
  //console.log(tempVol.volume);
  //const selectPlay = document.querySelector('Play Sound');
  //const selectPlay = document.querySelector("audio");
  const selectPlay = document.querySelector('button');
  selectPlay.addEventListener('click', (event) => {
    //console.log("start");
    var resultPlay = document.querySelector("audio");
    //var resultPlay = document.querySelector('Play Sound');
    // resultPlay.src = event.target.src;
    // resultPlay.volume = event.target.value;
    resultPlay.src = resultAud.src;
    resultPlay.volume = tempVol.volume;
    resultPlay.play();
    //console.log(resultPic.src.length);
    if(flag==1)
    {
      //console.log("start");
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      //console.log("startw");
    }
    // console.log(resultPlay.src);
    // console.log(resultPlay.volume);
  });
}