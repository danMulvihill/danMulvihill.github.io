
document.getElementById("backImg").addEventListener("click", addImg );
document.getElementById("show").addEventListener("click", showControl );
document.getElementById("hide").addEventListener("click", hideControl );

var imageOn;
function addImg() {
//toggles through different background images depending on user input  
  if(!imageOn){
    //document.getElementById("whatsOn").innerText = $on;
    imageOn = 1;
    
    document.body.style.backgroundImage = "url(img/1.jpg)";
    document.getElementById("backImg").innerText = "Change Background Image";
    document.querySelector("#color-panel").style.display = "none";
    document.getElementById("opControl").style.display = "inline";
    
  }else{
   //document.getElementById("whatsOn").innerText = $on;
   imageOn += 1;
   if(imageOn==4) {
      document.getElementById("backImg").innerText = "Remove Background Image";
    
   }
   if(imageOn==5) {
   	  imageOn=null;
      document.getElementById("backImg").innerText = "Add Background Image";
      document.querySelector("#color-panel").style.display = "inline";
      document.getElementById("opControl").style.display = "none";
    	}
   document.body.style.backgroundImage = "url(img/"+imageOn+".jpg)";
   }
}

function changeCol(colorChoice){
  document.body.style.backgroundColor = colorChoice
}

function upOp(opLevel){
//changes the opacity of the container with text
    document.getElementById("container").style.opacity = opLevel;
}
function hideControl(){
    document.getElementById("toggle-hide").style.display = "none";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "inline";

 }
 function showControl(){
    document.getElementById("toggle-hide").style.display = "inline";
    document.getElementById("hide").style.display = "inline";
    document.getElementById("show").style.display = "none";
 }



//By default (on page load)
//if a firstName cookie is set, update the DOM to display the val of the cookie
// window.addEventListener("load", function(){ 
//   if (Cookies.get('fname')){
//     console.log("found it");
//     document.getElementById("greeting").innerHTML = "Welcome Back, "+ Cookies.get('fname');   
//   }
// });

//gets and sets a cookie:

//Cookies.set("fname","Dan");
//document.getElementById("button").addEventListener("click", function(){
//   var fname = document.getElementById("fname").value;
//   Cookies.set("fname", fname);
//   document.getElementById("greeting").style.display = "none";
//   document.getElementById("cookieform").innerHTML = "Enjoy your cookie, " +fname; 
//});
