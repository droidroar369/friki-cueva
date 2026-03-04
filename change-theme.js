//Indicates if the screen is in light mode
var light=true;

function change_theme() {
    light= !light;
    if(light) document.cookie= "theme=light";
    else document.cookie= "theme=dark";
    
    // Change body class to dark (it also applies to every child element)
    document.body.classList.toggle("dark");
}


document.addEventListener("load", ()=> {
    
   var result= document.cookie.match(/theme=(dark|light)/);
   if(result.length < 2) return;
   if(result[1]=="dark") change_theme();
});
