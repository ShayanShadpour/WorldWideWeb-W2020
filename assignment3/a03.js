window.addEventListener("load", init);

var last_color = 0; // NOTE: bit 2 is red, bit 1 is green, bit 0 is blue
var counter = 0; // counter variable
var bcolor = 0; // page background colour: 0 for black, 1 is white

function init()
{
    document.getElementById("box1").addEventListener("click", box1_click);
    
    document.getElementById("box3").addEventListener("click", box3_click);
    
    document.getElementById("box4").addEventListener("click", box4_click);
    
    document.getElementById("box2").addEventListener("dragstart", box2_dragstart);
    
    document.getElementById("box2").setAttribute("draggable","true");
    
    
    document.getElementById("box5").addEventListener("drop", box5_drop);
    
    document.getElementById("box5").addEventListener("dragover", box5_dragover);
}


function box1_click(evt){
    if(last_color==8) {last_color = 0}
    last_color++;
    
    var color_to_set = "#";
    
    color_to_set += (last_color & 4) ? '0' : 'F';
    color_to_set += (last_color & 2) ? '0' : 'F';
    color_to_set += (last_color & 1) ? '0' : 'F';
    
    var bcolor_to_set = "#";
    bcolor_to_set += (last_color & 4) ? 'F' : '0';
    bcolor_to_set += (last_color & 2) ? 'F' : '0';
    bcolor_to_set += (last_color & 1) ? 'F' : '0';
    
    this.style.backgroundColor = bcolor_to_set;
    this.style.color = color_to_set;
    
}

function box3_click(evt){
    counter++; //changed counter to be ahead of next line so dragging the box would not change the counter
    this.innerHTML = "<p>Count = " + counter + ".</p>";
}

function box4_click(evt){
    if(bcolor == 0){
        document.documentElement.style.backgroundColor = "#000";
        bcolor = 1;
    } else if(bcolor == 1){
        document.documentElement.style.backgroundColor = "#FFF";
        bcolor = 0;
    }
}

function box2_dragstart(evt){
    evt.dataTransfer.setData("text/plain", counter);
}

function box5_drop(evt){
    evt.preventDefault();
    var data = evt.dataTransfer.getData("text/plain");
    evt.target.innerHTML = "counter =" + data;
}

function box5_dragover(evt){
    evt.preventDefault();
}