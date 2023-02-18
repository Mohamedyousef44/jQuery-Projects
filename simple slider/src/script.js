
var btn = $(".photo button");
var imgs = $(".card img");

let i = 0 ;
let interval ;

btn.css({
    width : "40px",
    height : "30px",
    border : "none",
    color : "white",
    "border-radius" : "5%",
    "background-color" : "blue",
    cursor : "pointer",
    "margin-top" : "10px"
})
.on("click" , function(){

    clearInterval(interval);

})

window.addEventListener('load' , function(){

    hiding();
    interval = setInterval(hiding ,1000)
})

function hiding(){

    if(i < 4){

        imgs.eq(i).fadeOut(0);
        i++;

    }else{

        for(i=3;i>=0 ; i--){
            imgs.eq(i).fadeIn();
        }
        i = 0 ;
    }  
}
