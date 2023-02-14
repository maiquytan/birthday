(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `


    .....
    15/02/2023
    Happy birthday,Thu
    Chúc bạn luôn luôn hạnh phúc,
    vui vẻ yêu đời,
    ngày càng xinh đẹp và
    có một tuổi 22 "hồn nhiên giống như 12"

 ..........
 Thank you for your presence 
             
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 150);


var vAudio = document.getElementById("divAudio");
var hasInit = true;
function playMusic() {
  if (!false) {
    hasInit = true;
    vAudio.play();
  }
}

let heart = setInterval(()=>{
  let size = Math.floor(Math.random()*30) + 10;
  let lefDir = Math.floor(Math.random()*100) + 1;

  $('.container').append("<div class='heart' style='width:" + size +"px; left :" + lefDir + "%;" + "; animation: heart" + "10s" + "ease '</div>" );
},500);

function openFunction() {
  var x = document.getElementById("imgThu");
  if(window.getComputedStyle(x).display === "none"){
    x.style.display = "block";
  }
}

function closeFunction(){
  var x = document.getElementById("imgThu");
   if(window.getComputedStyle(x).display === "block"){
    x.style.display = "none";
  }
}
  
  // setTimeout(myFunction(),5000)

