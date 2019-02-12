var attackPower=0;
var healthPoints=15;

//PLAYER: SOFIA
$("#sofia").on("click", function(){
    $("#dorothy, #blanche, #rose").appendTo(".selectOpponent");
    $("#dorothy, #blanche, #rose").css({"display": "inline"});
    var dorothy=true;
    var blanche =true;
    var rose=true;

    // fight dorothy
    $("#dorothy").on("click", function(){
        $("#dorothy").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            var counterPowerDor=17;
            if (attackPower<counterPowerDor){
                healthPoints-=1
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Dorothy's attack power is "+counterPowerDor);
                }
            }
            else if (attackPower>counterPowerDor){
                $("#dorothy").hide();
                dorothy=false;
                if (healthPoints>0 && dorothy===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
        });
    });

    // fight blanche
    $("#blanche").on("click", function(){
        $("#blanche").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            var counterPowerBla=53;
            if (attackPower<counterPowerBla){
                healthPoints-=2
                if (healthPoints<1){
                    $("#yourstatus").text("GAME OVER!");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Blanche's attack power is "+counterPowerBla);
                }
            }
            else if (attackPower>counterPowerBla){
                $("#blanche").hide();
                blanche=false;
                if (healthPoints>0 && dorothy===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("blanche: "+counterPowerBla);
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("blanche: " + counterPowerBla);
                }
            }
            return;
        });
    });

    // fight rose
    $("#rose").on("click", function(){
        $("#rose").appendTo(".opponent");

        $("#attack").on("click", function(){
            attackPower+=6;
            var counterPowerRose=107;
            if (attackPower<counterPowerRose){
                healthPoints-=3;
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Rose's attack power is "+counterPowerRose);
                }
            }
            else if (attackPower>counterPowerRose){
                $("#rose").hide();
                rose=false;
                if (healthPoints>0 && dorothy===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });
});

//PLAYER: DOROTHY
$("#dorothy").on("click", function(){
    $("#sofia, #blanche, #rose").appendTo(".selectOpponent");
    //$("#sofia, #blanche, #rose").css({"display": "inline"});
    var sofia=true;
    var blanche =true;
    var rose=true;

    // FIGHT BLANCHE
    $("#blanche").on("click", function(){
        $("#blanche").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=17;
            if (attackPower<counterAttackPower){
                healthPoints-=1
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Blanche's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#blanche").hide();
                blanche=false;
                if (healthPoints>0 && sofia===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // FIGHT ROSE
    $("#rose").on("click", function(){
        $("#rose").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=53;
            if (attackPower<counterAttackPower){
                healthPoints-=2
                if (healthPoints<1){
                    $("#yourstatus").text("GAME OVER!");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Rose's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower) {
                $("#rose").hide();
                rose=false;
                if (healthPoints>0 && sofia===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // FIGHT SOFIA
    $("#sophia").on("click", function(){
        $("#sofia").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=107;
            if (attackPower<counterAttackPower){
                healthPoints-=3;
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Sofia's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#sofia").hide();
                sofia=false;
                if (healthPoints>0 && sofia===false && blanche===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });
});

//PLAYER: BLANCHE
$("#blanche").on("click", function(){
    $("#dorothy, #sofia, #rose").appendTo(".selectOpponent");
    $("#dorothy, #sofia, #rose").css({"display": "inline"});
    var dorothy=true;
    var sofia =true;
    var rose=true;

    // fight dorothy
    $("#dorothy").on("click", function(){
        $("#dorothy").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=17;
            if (attackPower<counterAttackPower){
                healthPoints-=1
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Dorothy's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#dorothy").hide();
                dorothy=false;
                if (healthPoints>0 && dorothy===false && sofia===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // fight sofia
    $("#sofia").on("click", function(){
        $("#sofia").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=53;
            if (attackPower<counterAttackPower){
                healthPoints-=2
                if (healthPoints<1){
                    $("#yourstatus").text("GAME OVER!");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Sophia's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#sofia").hide();
                sofia=false;
                if (healthPoints>0 && dorothy===false && sofia===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // fight rose
    $("#rose").on("click", function(){
        $("#rose").appendTo(".opponent");

        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=107;
            if (attackPower<counterAttackPower){
                healthPoints-=3;
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Rose's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#rose").hide();
                rose=false;
                if (healthPoints>0 && dorothy===false && sofia===false && rose===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });
});

//PLAYER: ROSE
$("#rose").on("click", function(){
    $("#dorothy, #blanche, #sofia").appendTo(".selectOpponent");
    $("#dorothy, #blanche, #sofia").css({"display": "inline"});
    var dorothy=true;
    var blanche =true;
    var sophia=true;

    // fight dorothy
    $("#dorothy").on("click", function(){
        $("#dorothy").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=17;
            if (attackPower<counterAttackPower){
                healthPoints-=1
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Dorothy's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#dorothy").hide();
                dorothy=false;
                if (healthPoints>0 && dorothy===false && blanche===false && sofia===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // fight blanche
    $("#blanche").on("click", function(){
        $("#blanche").appendTo(".opponent");
        
        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=53;
            if (attackPower<counterAttackPower){
                healthPoints-=2
                if (healthPoints<1){
                    $("#yourstatus").text("GAME OVER!");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Blanche's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#blanche").hide();
                blanche=false;
                if (healthPoints>0 && dorothy===false && blanche===false && sofia===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });

    // fight sofia
    $("#sofia").on("click", function(){
        $("#sofia").appendTo(".opponent");

        $("#attack").on("click", function(){
            attackPower+=6;
            counterAttackPower=107;
            if (attackPower<counterAttackPower){
                healthPoints-=3;
                if (healthPoints<1){
                    $("#yourstatus").text("game over");
                    $("#opponentstatus").text("");
                    // set reset 
                    $("#sofia, #dorothy, #blanche, #rose").hide();
                }
                else {
                    $("#yourstatus").text("Your attack power is  "+ attackPower+". Your health is "+healthPoints);
                    $("#opponentstatus").text("Sophia's attack power is "+counterAttackPower);
                }
            }
            else if (attackPower>counterAttackPower){
                $("#rose").hide();
                sophia=false;
                if (healthPoints>0 && dorothy===false && blanche===false && sofia===false){
                    $("#yourstatus").text("YOU REIGN VICTORIOUS");
                    $("#opponentstatus").text("");
                }
                else{
                    $("#yourstatus").text("You won! Pick your next opponent "+ attackPower);
                    $("#opponentstatus").text("");
                }
            }
            return;
        });
    });
});