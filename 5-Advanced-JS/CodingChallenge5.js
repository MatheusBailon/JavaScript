//CODING CHALLENGE 

/* DESCRIPTION

--Let's build a fun quiz game in the console!--

1.Build a function constroctor called Question to describe a question. A question should include:

a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data scructure here, array, object, etc.)
c) correct answer (I would use a number for this).

2. Create a couple of questions using the contructor.

3. Store them all inside an array.

4. Select one random question and log it on the console, together with the possible aswers (eache question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct aswer such as you display it on Task 4.

6. Check if the aswer is correct and print to the console whether the answer is correct or nor (Hint: write another method for this).

7. Suppose this code would be a plugin for another programmers to use in their code. So make sure that all your code s private and doesn't interfere with the other programmers codee (Hint: we learned a special technique to do exactly that).


--- EXPERT LEVEL ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/


var Question = function(question,answers,correctAnswer){
    this.question = question;
    this.answers = answers.slice();
    this.rightAnswer = correctAnswer;

    this.showQuestion = function(){
        console.log(this.question + '\n');
        for(i=0;i<this.answers.length ;i++){
            console.log(i + ') - ' + this.answers[i]);
        }

        this.ShowScore();
    }
};

Question.prototype.ShowScore = function(){
    console.log('-------------------- Your score: ' + Score + '\n');
}

Question.prototype.CheckAnswer = function(UserAnswer){
    
    if(UserAnswer == this.rightAnswer){
        console.log('Isso aí! Resposta certa!');
        Score ++;

    }
    else{
        console.log('Que pena, você errou :-(');
    }
}

var Score = 0;

var portuguese = new Question('Qual das seguintes palavras está escrita corretamente?',['idéia','caxassa','guarda-chuva','estória'],3);

var time = new Question('Qual o melhor time do mundo?',['Cruzeiro','São Paulo','Flamerda','Barcelona'],1);

var copa = new Question('Qual destas seleções não foi campeã do mundo?',['Brasil','Uruguai','Holanda','Espanha'],2);

var geografia = new Question('Qual a capital da Russia ?',['São Paulo','Sochi', 'São Petersburgo','Moscou'],3);

var listaQuestoes = [portuguese,time,copa,geografia];

var CallRandQuestion = function(QtdQuestao){
    var random = Math.round(Math.random() * QtdQuestao);
    var Objeto = listaQuestoes[random];

    Objeto.showQuestion();
    
    var Answer = prompt('informe um valore entre 0 e ' + (Objeto.answers.length-1));
    
    if(Answer.toLowerCase !== 'exit'){
        
        Objeto.CheckAnswer(Answer);
        
        CallRandQuestion(listaQuestoes.length - 1);
    }

};

CallRandQuestion(listaQuestoes.length - 1);