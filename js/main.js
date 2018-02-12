
document.getElementById("backImg").addEventListener("click", addImg );
document.getElementById("show").addEventListener("click", showControl );
document.getElementById("hide").addEventListener("click", hideControl );

var $on;
function addImg() {
//toggles through different background images depending on user input  
  if(!$on){
    //document.getElementById("whatsOn").innerText = $on;
    $on = 1;
    
    document.body.style.backgroundImage = "url(gear1.jpg)";
    document.getElementById("backImg").innerText = "Change Background Image";
    
  }else{
   //document.getElementById("whatsOn").innerText = $on;
   $on += 1;
   if($on==7) document.getElementById("backImg").innerText = "Remove Background Image";
   if($on==8) {
   	$on=null;
    	document.getElementById("backImg").innerText = "Add Background Image";
    	}
   document.body.style.backgroundImage = "url(img/"+$on+".jpg)";
   }
}

function upOp($opLevel){
//changes the opacity of the container with text
    document.getElementById("container").style.opacity = $opLevel;
}
function hideControl(){
    document.getElementById("control").style.display = "none";
    document.getElementById("ctrl").style.display = "block";
 }
 function showControl(){
    document.getElementById("control").style.display = "block";
    document.getElementById("ctrl").style.display = "none";
 }