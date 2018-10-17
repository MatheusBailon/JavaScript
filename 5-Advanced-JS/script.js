// Function construction
/*
var john = {
    name: 'John',
    yeaerOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
        console.log(2018 - this.yearOfBirth);
    }

Person.prototype.lastName = 'Smith';


var john = new Person('John Again',1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

console.log(jane.lastName);
console.log(mark.lastName);
console.log(john.lastName);
*/

// Object.create

/*
var personProto = {
    calculateAge: function(){
        console.log(2018 - this.yearOfBirth)
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.job = 'techer';
john.yearOfBirth = 1995;

var jane = Object.create(personProto, {
    
    name: { value: 'Jane'},
    yearOfBirth: { value : 1969},
    job: { value: 'designer'}
});

*/

//Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// Objects
var ob1 = {
    name: 'John',
    age: 26
};

var ob2 = ob1;

ob1.age = 30;
console.log(ob1.age);
console.log(ob2.age);


// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};


function change(a,b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);

*/

//////////////////////////////////////////
// Lecture: Passing functions as arguments

/*

var years = [1990, 1965, 1937, 2005, 1998];



// feito por mim
/*
function calcArray (arr){
    var arrAge = [];
    for( var i = 0; i < arr.length; i++){
        arrAge.push(2018 - arr[i]);
    }
    return arrAge;
}

*

// Done by teacher Jonas

function arrayCalc(arr, fn){
    var arrAge = [];
    for (var i = 0; i < arr.length; i++){
        arrAge.push(fn(arr[i]));
    }
    return arrAge;
}

//calculate the age using the year of birth
function calculateAge(el){
    return 2018 - el;
}

//verify if the people has a fullage
function isFullAge(el){
    return el >= 18;
}

//verify the maximum rate of the heart based with the yours ages
function maxHeartRate(el){
    if(el >= 18){
        return Math.round(206.9 - (0.67 * el));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var maxRate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(maxRate);


*/


//////////////////////////////////////
/*
// Lecture: Functions returning functions

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you pleas explain what ux design is?');
        }
    }else if(job ===  'techer'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}


var teachQuestion = interviewQuestion('techer');

teachQuestion('Matheus');


interviewQuestion('designer')('Eu mesmo');

*/



////////////////////////////////////////////
//Lecture: IIFE (Immediately Invoked Function Expression)

/*
function game(){
    var score = (Math.random() * 10);
    console.log(score>= 5);
}

game();


(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score>=5 - goodLuck);
})(3);
*/
/*



////////////////////////////////////////////////
//Lecture: Closures


function retirement(rentirementAge){
    var a= ' years left until retirement.';
    var data = new Date;
    
    
    return function(yearOfBirth){
        var age = data.getFullYear() - yearOfBirth;
        console.log((rentirementAge - age) + a);
    }
}

//Chamando a função diretamente
//retirement(66)(1990);

//Armazena a função principal na variavel e passa os seus parametros
//var retirementUS = retirement(66);

//Passa o parametro para a função secundária
//retirementUS(1990);


var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceLand = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceLand(1990);
/*
//Usando da forma antiga (retorno de uma função dentro de outra função)
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you pleas explain what ux design is?');
        }
    }else if(job ===  'techer'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}



//Usando closures
function interviewQuestion(job){
    return function(name){
        if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }else if(job === 'designer'){
            console.log(name + ', can you pleas explain what ux design is?');
        }else{
            console.log('Hello '+ name + ', what do you do?');
        }
    }
}


interviewQuestion('techer')('Matheus');


*/
/*

/////////////////////////////////////////
// Lecture: Bind, call and aply


var john = {
    name: 'John',
    age: 19,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ladies and gentleman! I\'m ' + this.name + ', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old.');
        }
        else if(style === 'friendly'){
                console.log('Hey! What\'s up? I\'m ' + this.name+ ', I\'m a '+ this.job + ' and I\'m '+ this.age + ' years old. Have a nice '+ timeOfDay+'.');
                }
    }
};

var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
};


john.presentation('formal','morning');

//Usando o metodo call conseguimos usar o metodo de um objeto em outro que tem estrutura similar, ou seja, sempre que aparece o this o seu valor fora alterado do valor de john para o de emily. Desta forma conseguimos usar um metodo de um objeto para outros objetos similares
john.presentation.call(emily,'friendly','afternoon');


//Usando o apply, funciona da mesma forma que o call, onde a diferença é que temos que colocar os parametros da função em um array:
//john.presentation.apply(emily,['formal','night']);

//Usando o bind. Neste caso usa-se armazenando-o em uma variavel (aparentemente é assim). Funcionando de maneira similiar ao esquema de função que retorna função.
var johnFriendly = john.presentation.bind(john,'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily,'formal');

emilyFormal('afternoon');


*/

////////////////////////////////////////























