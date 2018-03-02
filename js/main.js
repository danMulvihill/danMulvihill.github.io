
//jQuery animate:

$(document).ready(function(){
   var cookieSet = !Cookies.get('imageCookie') && !Cookies.get('colorChoice');
   console.log(cookieSet);
   if(cookieSet){
      
      $("#col1").animate({
          left: '215px'
      },250);
      $("#col2").animate({
        left: '190px'
      },500);
      $("#col3").animate({
        left: '165px'
      },1000);
      $("#col4").animate({
        left: '140px'
      },2000, fadeCtrls); 
      function fadeCtrls(){
        $("#hide").fadeOut(3000);
        $("#toggle-hide").fadeOut(3000);
        $("#show").delay(3001).fadeIn(300);
       }
 
  }else{
    hideControl();
    $("#col1").css("left", "215px");
    $("#col2").css("left", "190px");
    $("#col3").css("left","165px");
    $("#col4").css("left", "140px");
  }

    if (Number(Cookies.get('imageCookie'))>0){
      console.log("imageCookie: ", Cookies.get("imageCookie"));
      imageOn = Number(Cookies.get("imageCookie"));
      document.body.style.backgroundImage = "url(img/"+imageOn+".jpg)";
      if(imageOn) document.getElementById("backImg").innerText = "Change Background Image";
      opLevel = Cookies.get("opLevel");
      document.getElementById("container").style.opacity = opLevel; 
      document.querySelector("#color-panel").style.display = "none";
      document.getElementById("opControl").style.display = "inline";
      
    }else if (Cookies.get('colorChoice')){
      console.log("colorChoie cookie: ", Cookies.get("colorChoice"));
      imageOn = 0;
      colorChoice = Cookies.get("colorChoice");
      document.body.style.backgroundColor = colorChoice;
      

    }else{
      imageOn = 0;
      console.log("no cookie", imageOn)
    }
});//end document.ready


document.getElementById("backImg").addEventListener("click", addImg );
document.getElementById("show").addEventListener("click", showControl );
document.getElementById("hide").addEventListener("click", hideControl );


function addImg() {
//toggles through different background images depending on user input  
  if(!imageOn){
    console.log("first if", imageOn);
    imageOn = 1;
    
    document.body.style.backgroundImage = "url(img/1.jpg)";
    document.getElementById("backImg").innerText = "Change Background Image";
    document.querySelector("#color-panel").style.display = "none";
    document.getElementById("opControl").style.display = "inline";
    Cookies.set("imageCookie", imageOn);
  }else{
   console.log("else", imageOn);
   imageOn += 1;
   Cookies.set("imageCookie",imageOn);
   if(imageOn==4) {
      document.getElementById("backImg").innerText = "Remove Background Image";
       
   }
   if(imageOn==5) {
        imageOn=null;
        Cookies.set("imageCookie",imageOn);
        document.getElementById("backImg").innerText = "Add Background Image";
        document.querySelector("#color-panel").style.display = "inline";
        document.getElementById("opControl").style.display = "none";
    	}
   document.body.style.backgroundImage = "url(img/"+imageOn+".jpg)";
   }
}

function changeCol(colorChoice){
  document.body.style.backgroundColor = colorChoice;
  Cookies.set("colorChoice", colorChoice);
}

function upOp(opLevel){
//changes the opacity of the container with text
    document.getElementById("container").style.opacity = opLevel; 
    Cookies.set("opLevel", opLevel);
}

//toggles the hide/show button
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

// //gets and sets a cookie:

// Cookies.set("fname","Dan");
// document.getElementById("button").addEventListener("click", function(){
//   var fname = document.getElementById("fname").value;
//   Cookies.set("fname", fname);
//   document.getElementById("greeting").style.display = "none";
//   document.getElementById("cookieform").innerHTML = "Enjoy your cookie, " +fname; 
// });
