/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
DESAFIO:

1. A player loose his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
(Hint: Always save the previuous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winnin score, so that they can change the predefined
score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity
to use google to figure this out :)
3. Add another dice to the game, so tht there are two dice now. The player looses his current score when one of
them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)



*/

//activePlaye=0 para o primeiro jogador e 1 para o segundo jogador

var roundScore, score, activePlayer, gamePlaying, seizao, valUser;

init();


/*O comando document.querySelector('#[variavel nomeada por um id]')
Este comando seleciona um elemento do html que esta identificado por algum id
*/

//O innerHTML permite que utilize algumas funções do html dentro do contexto capturado.
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';




//var x = document.querySelector('#score-' + activePlayer).classList;



document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
            
        var dice = Math.floor(Math.random() * 6) +1;
		
        
        dice === 6 ? seizao += dice : seizao = 0;
		
        
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
		

        if( dice !== 1 && seizao !== 12){
            roundScore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundScore;

        } else {
			
			//verifica se foi rodado o numero 6 em seguida
			var zerascore = document.getElementById('score-' + activePlayer);
			(seizao === 12) ? (zerascore.textContent = 0, score[activePlayer] = 0 ) : seizao = 0;

            nextPlayer();

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        }
    }

})


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(gamePlaying){
    
        score[activePlayer] += roundScore;

        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];


        if(score[activePlayer] >= 100 ){

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



//Funçao para trocar o jogador q ativo (Que esta rolando os dados)

function nextPlayer (){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
	seizao = 0;
        
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    seizao = 0;
    
    valUser = document.querySelector('#name-1').textContent;
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    document.getElementById('name-0').textContent = 'Jogador 1';
    document.getElementById('name-1').textContent = 'Jogador 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.dice').style.display = 'none';    
}




/*

A player looses his ENTIRE score when he rolls two 6 in a row

*/

















