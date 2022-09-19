document.getElementById('messi-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = 'Messi';
    selectedPlayer.appendChild(li)

    const btnDisable = document.getElementById('messi-btn');
    btnDisable.setAttribute('disabled', true);
})


document.getElementById('ronaldo-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = 'Ronaldo';
    selectedPlayer.appendChild(li)

    const btnDisable = document.getElementById('ronaldo-btn');
    btnDisable.setAttribute('disabled', true);
})

document.getElementById('neymar-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = 'Neymar';
    selectedPlayer.appendChild(li);
    const btnDisable = document.getElementById('neymar-btn');
    btnDisable.setAttribute('disabled', true);
})

document.getElementById('messi2-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = 'Messi-2';
    selectedPlayer.appendChild(li);
    

    const btnDisable = document.getElementById('messi2-btn');
    btnDisable.setAttribute('disabled', true);

})


document.getElementById('ronaldo2-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement('li');
    li.innerText = 'Ronaldo-2';
    selectedPlayer.appendChild(li)

    const btnDisable = document.getElementById('ronaldo2-btn');
    btnDisable.setAttribute('disabled', true);
})

document.getElementById('neymar2-btn').addEventListener('click', function(){
    const selectedPlayer = document.getElementById('selected-players');
    const li = document.createElement("li");
    li.innerText = 'Neymar-2';
    selectedPlayer.appendChild(li)

    const btnDisable = document.getElementById('neymar2-btn');
    btnDisable.setAttribute('disabled', true);
})


document.getElementById('player-cost-btn').addEventListener('click', function(){
    const playerPrice = document.getElementById('player-price');
    const playerCostString = playerPrice.value;
    const playerCost = parseFloat(playerCostString);
    const selectedPlayer = document.querySelectorAll('.player-selected li');
    const totalSelectedString = selectedPlayer.length;
    
    const totalSelected = parseInt(totalSelectedString);
    const totalCost = playerCost * totalSelected;
    const playerExpenseCostString = document.getElementById('player-expense');
    const playerExpenseCost = playerExpenseCostString.innerText;
    const playerExpense = parseFloat(playerExpenseCost);
    playerExpenseCostString.innerText = totalCost;
})



document.getElementById('total-cost').addEventListener('click', function(){
    const managerCostValue = document.getElementById('manager-cost');
    const managerCostString = managerCostValue.value;
    const managerCost = parseFloat(managerCostString);

    const coachCostValue = document.getElementById('coach-cost');
    const coachCostString = coachCostValue.value;
    const coachCost = parseFloat(coachCostString);
    
    const inTotal = document.getElementById('total-amount');
    const inTotalString = inTotal.innerText;
    const inTotalCost = parseFloat(inTotalString);

    const playerExpenseCostString = document.getElementById('player-expense');
    const playerExpenseCost = playerExpenseCostString.innerText;
    const playerCost = parseFloat(playerExpenseCost);
      
    const inTotalAmountString = managerCost + coachCost + playerCost;
    const inTotalAmount = parseFloat(inTotalAmountString);


    inTotal.innerText = inTotalAmount;
    
})