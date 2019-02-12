//target number to reach
var targetNumber= (Math.floor(Math.random()*101))+19;
$("#target").text(targetNumber)

//create counter
var counter=0;

//create score 
var win=0;
var lose=0;

//Assigning values to images 
$("#bob").attr("dataBB", Math.ceil(Math.random()*11));
$("#linda").attr("dataBB", Math.ceil(Math.random()*11));
$("#gene").attr("dataBB", Math.ceil(Math.random()*11));
$("#louise").attr("dataBB", Math.ceil(Math.random()*11));

$(".gem").on("click", function(){
    var valueBB=($(this).attr("dataBB"));
    valueBB=parseInt(valueBB);
    counter +=valueBB;
    console.log(valueBB)
    console.log(counter)
    
if (counter===targetNumber){
    win++;
    resetgame();
}
else if (counter>=targetNumber){
    lose++;
    resetgame();
}
$("#counter").text(counter);
$("#losses").text(lose);
$("#wins").text(win);

});

function resetgame(){
    targetNumber= (Math.floor(Math.random()*101))+19;
    $("#target").text(targetNumber)
    counter=0;

    $("#bob").attr("dataBB", Math.ceil(Math.random()*11));
    $("#linda").attr("dataBB", Math.ceil(Math.random()*11));
    $("#gene").attr("dataBB", Math.ceil(Math.random()*11));
    $("#louise").attr("dataBB", Math.ceil(Math.random()*11));

}


