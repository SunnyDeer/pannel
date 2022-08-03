window.onload = function(){
    function setmark(){
        let panelMark = document.querySelector(".panel_mark");
        let panelItem = "";
        for(let i = 0 ;i < 60;i++){
            panelItem += '<li class="panel_item" style = "transform:rotate('+i*6+'deg)")><span class="mark_num"></span></li>';
            panelMark.innerHTML = panelItem;
        }
        let markNum = document.querySelectorAll(".mark_num");
        for( let i = 0;i < markNum.length;i++){
            if(i*4 < markNum.length){
                markNum[i*4].innerHTML = 20*i;
            }
        }
    }
    
    setmark();
    let panelHand = document.querySelector(".panel_head");

    let panelSpeed = document.querySelector(".panel_speed");
    function speedUp(deg){
        panelHand.style = "transform:rotate("+deg+"deg)";
    }
    let speedDeg = 0,flagDown = true,timeDown,timeUp,kmh = 0;
    document.onkeydown = function(e){
        if(e.key == "ArrowUp" && flagDown){
            flagDown = false;
            clearInterval(timeUp);
            timeDown = setInterval(function(){
                kmh++;
                if(kmh >= 200 ){
                    kmh = 200;
                    clearInterval(timeDown)
                }
                speedDeg = kmh / 0.8 - 125;
                panelSpeed.innerHTML = kmh + " km/h";
                speedUp(speedDeg);
            },20)
        }
    }
    document.onkeyup = function(e){
        if(e.key == "ArrowUp" ){
            flagDown = true;
            clearInterval(timeDown);

            timeUp = setInterval(function(){
                kmh--;
                if(kmh <= 0){
                    kmh = 0;
                    clearInterval(timeUp)
                }
                speedDeg = kmh / 0.8 - 125;
                panelSpeed.innerHTML = kmh + " km/h";
                speedUp(speedDeg);
            },20)
        }
    }
}
