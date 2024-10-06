const movie = document.getElementById("Movie-grid");
const icon = document.getElementById("boss");
const test = document.getElementById("test")

icon.onclick = function(){
  if(icon.innerText === "About"){
    icon.innerHTML = "Back"
    movie.style.display = "none"
    movie.style.animation = "2s fadeIN"
    test.style.display = "flex"
  }
  else{
    icon.innerHTML = "About"
    movie.style.display = "grid";
    test.style.display = "none"
  }
}