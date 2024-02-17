window.onload = function(){
    for(var i = 0; i < 9; i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }

    var hod = 0;

    document.getElementById('game').onclick = function(event){
        console.log(event);
        if(event.target.className == 'block'){
            if(hod % 2 == 0){
                event.target.innerHTML = 'X';
            }
            else{
                event.target.innerHTML = 'O';
            }
            hod++;
            checkWinner();
        }
    }

    function checkWinner(){
        var allBlock = document.getElementsByClassName('block');
        //console.log(allBlock);
        if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X' ||
           allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X' ||
           allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X' ||
           allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X' ||
           allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X' ||
           allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X' ||
           allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X' ||
           allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('Xs won');
        else if(allBlock[0].innerHTML == 'O' && allBlock[1].innerHTML == 'O' && allBlock[2].innerHTML == 'O' ||
                allBlock[0].innerHTML == 'O' && allBlock[3].innerHTML == 'O' && allBlock[6].innerHTML == 'O' ||
                allBlock[0].innerHTML == 'O' && allBlock[4].innerHTML == 'O' && allBlock[8].innerHTML == 'O' ||
                allBlock[1].innerHTML == 'O' && allBlock[4].innerHTML == 'O' && allBlock[7].innerHTML == 'O' ||
                allBlock[2].innerHTML == 'O' && allBlock[5].innerHTML == 'O' && allBlock[8].innerHTML == 'O' ||
                allBlock[2].innerHTML == 'O' && allBlock[4].innerHTML == 'O' && allBlock[6].innerHTML == 'O' ||
                allBlock[3].innerHTML == 'O' && allBlock[4].innerHTML == 'O' && allBlock[5].innerHTML == 'O' ||
                allBlock[6].innerHTML == 'O' && allBlock[7].innerHTML == 'O' && allBlock[8].innerHTML == 'O') alert('Os won');
    }
}
