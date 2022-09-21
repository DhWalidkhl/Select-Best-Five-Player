// add Player to the selected player div

function addPlayer(name, button){
    const playerList = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.classList.add('playerSelected')
    li.innerHTML = name;
    const playerListLeng = document.querySelectorAll(".playerSelected");
    if(playerListLeng.length < 5){
        playerList.appendChild(li);
    }
    else{
        alert("You Can not Add more than 5 Player");
        return;
    }
    button.setAttribute('disabled', true);
}



// Selected Player Cost

function playerCost(){
    const playerPriceString = document.getElementById('player-price').value;
    const playerExpenseCostString = document.getElementById('player-expense');
    playerExpenseCostString.innerText = parseFloat(playerPriceString) * document.querySelectorAll(".playerSelected").length;
}


// calculate total cost
function totalCost(){
    const playerExpenseCostString = document.getElementById('player-expense').innerText;
    const coachPriceString = document.getElementById('coach-cost').value || 0;
    const managerPriceString = document.getElementById('manager-cost').value || 0;
    const inTotal = document.getElementById('total-amount');
    inTotal.innerText = parseFloat(coachPriceString) + parseFloat(managerPriceString) + parseFloat(playerExpenseCostString);
}

