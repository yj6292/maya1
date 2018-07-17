var fact = 0;
var afact = 0;
function changeheading(){
  if (fact == 0){
    document.getElementById("title").innerHTML="welcome";
    fact = fact + 1;
  }
  else {
    document.getElementById("title").innerHTML="<strong> hi my name is maya :)</strong>";
    fact = fact - 1;
  }
}
function swappic(){
  if (afact == 0){
    document.getElementById("intropic").src="pic3.JPG";
    afact = afact + 1;
  }
  else {
    document.getElementById("intropic").src="pic.jpg";
    afact = afact - 1;
  }
}
