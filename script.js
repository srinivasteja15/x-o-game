var divs = document.querySelectorAll(".cont div"),
    result = document.querySelector(".result"),
    button = document.querySelector("button"),
    cont = document.querySelector(".cont");
// Adding The classes
for(i = 0; i < divs.length; i++){
    divs[i].classList.add("item" );
    divs[i].classList.add("item" + i);



    // Strat Coding The Game
    divs[i].onclick = function(){
        cont.classList.add("theNextIsForX")
        this.innerHTML = "o";
        if(cont.classList.contains("theNextIsForO")){
            this.onclick = function(t){
                t.preventDefault();
            };
            this.innerHTML = "o";
            cont.classList.replace("theNextIsForO" , "theNextIsForX");
        }
        else if(cont.classList.contains("theNextIsForX")){
            this.onclick = function(t){
                t.preventDefault();
            };
            this.innerHTML = "x";
            cont.classList.replace("theNextIsForX" , "theNextIsForO");
        }
        if(document.querySelector(".item0").innerHTML == "x" && document.querySelector(".item1").innerHTML == "x" && document.querySelector(".item2").innerHTML == "x" || document.querySelector(".item3").innerHTML == "x" && document.querySelector(".item4").innerHTML == "x" && document.querySelector(".item5").innerHTML == "x" || document.querySelector(".item6").innerHTML == "x" && document.querySelector(".item7").innerHTML == "x" && document.querySelector(".item8").innerHTML == "x" || document.querySelector(".item0").innerHTML == "x" && document.querySelector(".item4").innerHTML == "x" && document.querySelector(".item8").innerHTML == "x" || document.querySelector(".item2").innerHTML == "x" && document.querySelector(".item4").innerHTML == "x" && document.querySelector(".item6").innerHTML == "x" || document.querySelector(".item0").innerHTML == "x" && document.querySelector(".item3").innerHTML == "x" && document.querySelector(".item6").innerHTML == "x" || document.querySelector(".item1").innerHTML == "x" && document.querySelector(".item4").innerHTML == "x" && document.querySelector(".item7").innerHTML == "x" || document.querySelector(".item2").innerHTML == "x" && document.querySelector(".item5").innerHTML == "x" && document.querySelector(".item8").innerHTML == "x"){
            result.innerHTML = "X win" + result.innerHTML ;
            result.classList.replace("d-none" , "d-flex")
            cont.classList.add("d-none")
            for(x = 0; x < divs.length; x++){
                divs[x].innerHTML = ""
            };
        }
        else if(document.querySelector(".item0").innerHTML == "o" && document.querySelector(".item1").innerHTML == "o" && document.querySelector(".item2").innerHTML == "o" || document.querySelector(".item3").innerHTML == "o" && document.querySelector(".item4").innerHTML == "o" && document.querySelector(".item5").innerHTML == "o" || document.querySelector(".item6").innerHTML == "o" && document.querySelector(".item7").innerHTML == "o" && document.querySelector(".item8").innerHTML == "o" || document.querySelector(".item0").innerHTML == "o" && document.querySelector(".item4").innerHTML == "o" && document.querySelector(".item8").innerHTML == "o" || document.querySelector(".item2").innerHTML == "o" && document.querySelector(".item4").innerHTML == "o" && document.querySelector(".item6").innerHTML == "o" || document.querySelector(".item0").innerHTML == "o" && document.querySelector(".item3").innerHTML == "o" && document.querySelector(".item6").innerHTML == "o" || document.querySelector(".item1").innerHTML == "o" && document.querySelector(".item4").innerHTML == "o" && document.querySelector(".item7").innerHTML == "o" || document.querySelector(".item2").innerHTML == "o" && document.querySelector(".item5").innerHTML == "o" && document.querySelector(".item8").innerHTML == "o"){
            result.innerHTML = "O win" + result.innerHTML ;
            result.classList.replace("d-none" , "d-flex")
            cont.classList.add("d-none")
            for(x = 0; x < divs.length; x++){
                divs[x].innerHTML = ""
            };
        };
    };
};