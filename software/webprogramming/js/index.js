function changeColor(dot){
  dot.classList.toggle("red");
  exportMatrix();
}

function exportMatrix(){
  for (var i=0;i<8;i++) { 
    for (var j=0;j<8;j++) {
      console.log($("#r"+i+"c"+j)[0].classList.contains("red"));
    }
  }
}

$(document).ready(function() {
  
  // add dots
  for (var i=0;i<8;i++) { 
    for (var j=0;j<8;j++) {
      $("#dotmatrixcontainer").append("<a class='cl' id="+"r"+i+"c"+j+" onclick='changeColor(this);'></a>");
    }
  }
  
}); 