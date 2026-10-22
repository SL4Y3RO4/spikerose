let rightArrow = document.getElementById("rightArrow");
let image = document.querySelector("img");
let darkmode = document.getElementById("darkmode");
let leftArrow = document.getElementById("leftArrow");
let arr = ["imgs/image.png", "imgs/oof.jpg", "imgs/image3.png"];
let li = document.querySelectorAll("li");
let booler = false;
let menu_list = document.querySelectorAll(".menu_list");
let h3 = document.querySelectorAll("h1");
let bookname = document.getElementById("bookname");
let j = 0;
let timing;

window.onload = function() {
    cmd.style.display = "none";
}


document.addEventListener("keydown", (ev) => {

    if(ev.key == "Escape") {
        cmd.style.display = "block";
    }

});


function animation1() {
    clearInterval(timing);
    str = "";
    let r = 255;
    let g = 255;
    let b = 255;

    timing = setInterval(function() {

        str = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = str;
        r--;
        g--;
        b--;

        if(r <= 0 && g <= 0 && b <= 0) {
               clearInterval(timing);
               r = 255;
               g = 255;
               b = 255;
        }

    }, 5); 
}



function animation2() {
    clearInterval(timing);
    str = "";
    let r = 0;
    let g = 0;
    let b = 0;

    timing = setInterval(function() {

        str = "rgb(" + r + "," + g + "," + b + ")";
        document.body.style.background = str;
        r++;
        g++;
        b++;

        if(r >= 255 && g >= 255 && b >= 255) {
               clearInterval(timing);
               r = 0;
               g = 0;
               b = 0;
        }

    }, 5); 

}



let whiteTime;

function setWhite() {

    clearInterval(whiteTime);
    let r = 0;
    let g = 0;
    let b = 0;

    whiteTime = setInterval(() => {

        for(let i = 0; i < h3.length; i++) {
             h3[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
         }

        for(let i = 0; i < li.length; i++) {
             li[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
        }

        if(r >= 255 && g >= 255 && b >= 255) {
            clearInterval(whiteTime);
            r = 0;
            g = 0;
            b = 0;
        }

        r++;
        g++;
        b++;

    }, 5);        
}

function setDefault() {
    clearInterval(whiteTime);
    let r = 255;
    let g = 255;
    let b = 255;

    whiteTime = setInterval(() => {

        for(let i = 0; i < h3.length; i++) {
             h3[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
         }

        for(let i = 0; i < li.length; i++) {
             li[i].style.color = "rgb(" + r + "," + g + "," + b + ")";
        }

        if(r <= 0 && g <= 0 && b <= 0) {
            clearInterval(whiteTime);
            r = 255;
            g = 255;
            b = 255;
        }

        r--;
        g--;
        b--;

    }, 5);     
}

function setToDarkmode() {

     darkmode.addEventListener("mousedown", function() {
            if(!booler) {
                animation1();
                setWhite();
                booler = true;
            } else {      
                animation2();
                setDefault();
                booler = false;
            }
    });
        
    
}

//menu animation method
function menuAnimation() {

    let pixel = 0;
    let phpmerda;

    for(let i = 0; i < menu_list.length; i++) {

            menu_list[i].addEventListener("mouseover", () => { 
                phpmerda = setInterval(() => {
                    menu_list[i].style.textShadow = "pink " + pixel + "px " + pixel + "px";
                    
                    if(pixel == 5) {
                       clearInterval(phpmerda);
                       pixel = 0;
                       return;
                    }

                    pixel++;
                }, 5);
                          
            })
      
            menu_list[i].addEventListener("mouseout", () => { 
                menu_list[i].style.textShadow = "pink 0px 0px";            
            }) 
    }
       
}


function setToDarkmode() {

     darkmode.addEventListener("mousedown", function() {
        animation1();
        setWhite();
        booler = true;
        if(booler) {
            darkmode.addEventListener("mousedown", function() {
            animation2();
            setDefault();
            setToDarkmode();
        });
        }
     });  
}

//bookShower

booknames = ["moon bite", "oof", "sweet"];

function swap() {

    rightArrow.addEventListener("mousedown", function() {
        if(j == arr.length - 1) {
            return;
        }
        j++;
        image.src = arr[j];
        bookname.innerText = booknames[j];
    }); 
}

function swap2() {
   leftArrow.addEventListener("mousedown", function() {
        if(j == 0) {
            return;
        }
        j--;
        image.src = arr[j];
        bookname.innerText = booknames[j];
   });
}

swap();
swap2();
setToDarkmode();
menuAnimation(); 
