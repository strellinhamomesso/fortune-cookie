
const cookieBtn = document.querySelector("#cookieBtn");
const openCookie = document.querySelector("button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

cookieBtn.addEventListener('click', handleClick);
openCookie.addEventListener('click', handleBtnClick);

function handleClick(){
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function handleBtnClick(){
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}

function cookiePhrases(){
  let phrase = ["You didn't come this far to only come this far",
                "Do it scared",
                "I never dreamed about success. I worked for it.",
                "If you want the rainbow, you gotta put up with the rain !",
                "All we have to decide is what to do with the time that is given to us",
                "One bad chapter doesn't mean your story is over",
                "It is never too late to be what you might have been",
              ]

      const i = Math.floor(phrase.length * Math.random())  
      document.getElementById("luckyQuote").innerHTML = phrase[i];
  } 