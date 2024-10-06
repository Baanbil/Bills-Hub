const signBtn = document.getElementById("sign");
const intro = document.getElementById("intro");
const myH1 = document.getElementById("myH1");
const update = document.getElementById("update");
const input = document.getElementById("name");

signBtn.onclick = function(){
  myH1.textContent = `Welcome ${input.value}`
  intro.style.display = "none";
  update.style.display = "block"
}

const conbtn = document.getElementById("continue")
conbtn.onclick = function(){
  window.location.href = "continue.html"
}