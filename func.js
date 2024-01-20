function playSound (q) {
    switch (q) {
        case "q":
            sound("tom-1");
            break;

        case "w":
            sound("tom-2");
            break;
        case "e":
            sound("tom-3");
            break;
        case "r":
            sound("tom-4");
            break;
        case "t":
            sound("crash");
            break;
        case "y":
            sound("kick-bass");
            break;
        case "d":
            sound("snare");
            break;


        case "Q":
            sound("tom-1");
            break;

        case "W":
            sound("tom-2");
            break;
        case "E":
            sound("tom-3");
            break;
        case "R":
            sound("tom-4");
            break;
        case "T":
            sound("crash");
            break;
        case "Y":
            sound("kick-bass");
            break;
        case "D":
            sound("snare");
            break;
    
        default:
            console.log("wrong BUtton pressed");
            break;
    }
}

function sound(Sname)
{
    var s= new Audio(Sname+".mp3");
    s.play();
}

function ani(currentbutton)
{
   var curentbutton=currentbutton.toLocaleLowerCase();
    var but=document.querySelector("."+ curentbutton).classList;
    but.add("clicked");
    setTimeout(function (){
        but.remove("clicked");
    },100);
}

var Buttons=document.querySelectorAll("button");

for(var i=0;i<Buttons.length;i++)
{
    Buttons[i].addEventListener("click",function (){
        playSound(this.innerHTML);
        ani(this.innerHTML);
    });

    Buttons[i].addEventListener("keypress",function(e){
        console.log(e.key);
        playSound(e.key);
        ani(e.key);
    });
}

