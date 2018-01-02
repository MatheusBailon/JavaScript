/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//activePlaye=0 para o primeiro jogador e 1 para o segundo jogador

var roundScore, score, activePlayer, gamePlaying, seizao, valUser, play1, play2;

function enter(e){
    if (e.which === 13)
        document.querySelector('.btn-send').click();
}

document.addEventListener('keypress',enter);

document.querySelector('.btn-send').addEventListener('click',function(){
    var form = document.querySelector('.form');
    var gameSpace = document.querySelector('.wrapper');
    
    form.style.display = 'none';
    gameSpace.style.display = 'block';
    
    document.removeEventListener('keypress',enter);
    
    init();
    
})



/*O comando document.querySelector('#[variavel nomeada por um id]')
Este comando seleciona um elemento do html que esta identificado por algum id
*/

//O innerHTML permite que utilize algumas funções do html dentro do contexto capturado.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




//var x = document.querySelector('#score-' + activePlayer).classList;



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
            
        if (dado('dice') || dado('dado')) {
            
            var zerascore = document.getElementById('score-' + activePlayer);
            seizao === 12 ? (zerascore.textContent = 0, score[activePlayer]=0) : seizao = 0;
            nextPlayer();
            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        }
    }

})

function dado(diceName){
    
    var dice = Math.floor(Math.random() * 6) +1;

    dice === 6 ? seizao += 6 : seizao = 0;


    var diceDOM = document.querySelector('.'+diceName);
    diceDOM.style.display = 'block';
    diceDOM.src = diceName + '-' + dice + '.png';

    if( dice !== 1 && seizao !== 12){
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        return false;
    } else 
        return true;
}


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
    
        score[activePlayer] += roundScore;

        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];


        if(score[activePlayer] >= valUser ){

        document.querySelector('#name-' + activePlayer).textContent = 'Vencedor';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;    
        } else {
            nextPlayer();
        }
    }
    
    
})



//Funçao para trocar o jogador q está ativo (Que esta rolando os dados)

function nextPlayer (){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    seizao = 0;
    
        
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dado').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    seizao = 0;
    
    play1 = document.getElementById('nomear-0').value;
    play2 = document.getElementById('nomear-1').value;
    valUser = document.querySelector('#valorToWin').value;
    
    var displayName1 = document.getElementById('name-0');
    var displayName2 = document.getElementById('name-1');
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    play1 === "" ? displayName1.textContent = 'Jogador 1' : displayName1.textContent = play1;
    play2 === "" ? displayName2.textContent = 'Jogador 2' : displayName2.textContent = play2;
    
    if (valUser === "")
        valUser = 100;
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dado').style.display = 'none';

}




/*

A player looses his ENTIRE score when he rolls two 6 in a row

Added the input field in the HTML, and added fields to two players

*/



















