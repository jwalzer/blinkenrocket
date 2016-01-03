function changeColor(dot){
  dot.classList.toggle("red");
  console.log(dot);
}

$(document).ready(function() {
  
  // add dots
  for (var i=0;i<8;i++) { 
    for (var j=0;j<8;j++) {
      $("#container").append("<a class='cl' id="+"r"+i+"c"+j+" onclick='changeColor(this);'></a>");
    }
  }
  
}); 