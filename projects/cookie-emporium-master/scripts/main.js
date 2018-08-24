var cookie = Cookies.get('visited');

if( !cookie ){

    document.querySelector("#out").textContent = "I see you are new here."

    Cookies.set("visited", "visitor");
    Cookies.set("sug", 0);
    Cookies.set("choc", 0);
    Cookies.set("lemon", 0);

    document.querySelector("form").onsubmit = function(e){
        e.preventDefault();
        Cookies.set("visitorName", e.target[0].value)
        document.querySelector("#input0").style.display = "none"
        document.querySelector("#out").innerHTML = "Welcome "+e.target[0].value+"<br>Now buy some cookies!";
    }

 }else{
      
    document.querySelector("#input0").style.display = "none"
    let greet = Cookies.get("visitorName");
    if (greet == undefined) greet = "stranger";
    document.querySelector("#out").textContent = "Welcome Back, "+greet;
    document.querySelector("#sug .out").textContent = Cookies.get("sug");
    for (let i = 0; i<Cookies.get("sug"); i++){
        rainCookies("papayawhip")
    }
    document.querySelector("#choc .out").textContent = Cookies.get("choc");
    for(let i = 0; i<Cookies.get("choc"); i++){
        rainCookies("chocolate")
    }
    document.querySelector("#lemon .out").textContent = Cookies.get("lemon");
    for(let i = 0; i<Cookies.get("lemon"); i++){
        rainCookies("yellow")
    }
 }


    document.querySelector("#sug button").onclick = function(){
        var amt = Cookies.get("sug");
        amt++;
        Cookies.set("sug", amt);
        document.querySelector("#sug .out").textContent = amt;
        rainCookies("papayawhip")
    }

    document.querySelector("#choc button").onclick = function(){
        var amt = Cookies.get("choc");
        amt++;
        Cookies.set("choc", amt);
        document.querySelector("#choc .out").textContent = amt;
        rainCookies("chocolate")    
    }

    document.querySelector("#lemon button").onclick = function(){
        var amt = Cookies.get("lemon");
        amt++;
        Cookies.set("lemon", amt);
        document.querySelector("#lemon .out").textContent = amt;
        rainCookies("yellow")
    }

    document.querySelector("#clearButton").onclick = function(){
        var total = parseInt(Cookies.get("sug"))+parseInt(Cookies.get("choc"))+parseInt(Cookies.get("lemon"));
        console.log(total)
        Cookies.set("sug", 0);
        document.querySelector("#sug .out").textContent = 0; 
        Cookies.set("choc", 0);
        document.querySelector("#choc .out").textContent = 0;
        Cookies.set("lemon", 0);
        document.querySelector("#lemon .out").textContent = 0;
 

        for (let i=total; i>0; i--){
            var parent = document.querySelector("body");
            var child = document.querySelector("cookie");
            if (!child) break
            parent.removeChild(child);
        }    
    }
    
function rainCookies(bgColor){
    var cookieEl = document.createElement("cookie");
    document.querySelector("body").appendChild(cookieEl);
    var randX = Math.floor(Math.random()*98)+1;
    var randY = Math.floor(Math.random()*96)+1;
    cookieEl.setAttribute("style", "top:"+randY+"%; left:"+randX+"%; background-color: "+bgColor)

}



