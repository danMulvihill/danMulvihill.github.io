
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
    
  }else{
   //document.getElementById("whatsOn").innerText = $on;
   imageOn += 1;
   if(imageOn==7) document.getElementById("backImg").innerText = "Remove Background Image";
   if(imageOn==8) {
   	imageOn=null;
    	document.getElementById("backImg").innerText = "Add Background Image";
    	}
   document.body.style.backgroundImage = "url(img/"+imageOn+".jpg)";
   }
}

function upOp(opLevel){
//changes the opacity of the container with text
    document.getElementById("container").style.opacity = opLevel;
}
function hideControl(){
    document.getElementById("control").style.display = "none";
    document.getElementById("ctrl").style.display = "block";
 }
 function showControl(){
    document.getElementById("control").style.display = "block";
    document.getElementById("ctrl").style.display = "none";
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
