//Indicates if the screen is in light mode
var light=true;

//List of the CSS tags in which we toggle the theme
const tag_colors=  [ "header", "nav", "aside", "section", "article", "footer" ];

//List of the CSS classes in which we toggle the theme
const class_colors=  [ "resaltado", "importante1", "img_der", "definition" ];


//List of the CSS id's colors in light/dark version
const id_colors= [
      // 0: name of id class, 1: light color, 2: dark color
      ["constantes", "#add8e6", "#66064e"],
      ["cambiopags", "lime", "rgb(75,38,124)"],
      ["fondoresultados", "#7decbe", "rgb(38,43,124)"]

];



function change_theme() {
    light= !light;
    
    // Change body color
    document.body.classList.toggle("dark");
    
    //Change a:links color
    //var elems= document.getElementsByTagName("a");
    //for(var i=0; i<elems.length; i++) elems[i].classList.toggle("dark");
    

    //Toggle every tag element within "tag_colors" list into dark/light mode
    for(var i=0; i<tag_colors.length; i++) {
        var elems= document.getElementsByTagName(tag_colors[i]);
        for(var j=0; j<elems.length; j++) elems[j].classList.toggle("dark");
    }
    
    
    

    
    //Change definitions color
    for(var i=0; i<class_colors.length; i++) {
       var elems= document.getElementsByClassName(class_colors[i]);
       for(var j=0; j<elems.length; j++) elems[j].classList.toggle("dark-"+ class_colors[i]);
    }
    
    
    
    
    
    //Change background color to the id's elements within the "id_colors" list
    for(var i=0; i<id_colors.length; i++) {
      if(light) document.getElementById(id_colors[i][0]).style.background = id_colors[i][1];
      else document.getElementById(id_colors[i][0]).style.background = id_colors[i][2];
    }

}