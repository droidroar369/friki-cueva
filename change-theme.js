//Indicates if the screen is in light mode
var light=true;


function change_theme() {
    light= !light;
    
    // Change body class to dark (it also applies to every child element)
    document.body.classList.toggle("dark");
}
