


$(".card p")
.css({
    "background-color": "grey",
    color : 'white'
})
.hide();

$(".card img").on('click' , function(e){
 
$(this).parent().find('.para').slideToggle('slow')   

})