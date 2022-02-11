var readlineSync = require("readline-sync");
var score = 0;
var best = 4;
var userName = readlineSync.question("What is your name ? ");
console.log("Welcome " + userName);
console.log("This quiz is based on Solar System! ");
console.log("Points: Correct: 2 Incorrect: -1");
console.log(  );
console.log("Note: ");
console.log("IF you cross the score 4, you will go to the level 2");
console.log(  );
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer) {
    console.log("Good, correct answer! ");
    score = score + 2;
    console.log("keep it up ");
  } else {
    console.log("Oh no, Wrong answer! ");
    score = score - 1;
    console.log("try better");
  }
  console.log("******");
  console.log(  );
}
console.log( );

console.log("                    level 1");
console.log(   );
var quizQuestion = [{
  question: "1. How many planets are there in solar system ? ",
  answer: "8"
}, {
  question: "2. Which planet is closest to the sun ? ",
  answer: "mercury"
}, {
  question: "3. Which is the hottest planet ? ",
  answer: "venus"
}, {
  question: "4. What is the orbital period of moon ? ",
  answer: "27 days"
}, {
  question: "5. How many natural satellites of Earth ? ",
  answer: "1"
}];
for(i=0; i < quizQuestion.length; i++) {
  var currentQuestion = quizQuestion[i];
  play(currentQuestion.question, currentQuestion.answer);
}
 console.log(  );
console.log("Your score: " + score );

if (score < best){
  console.log("You are not qualified for level 2 "); return
} else {
  console.log("Well Done, Go Ahead ");
  console.log('');
}

console.log("                    level 2 ");
console.log( );
console.log(   );
console.log("Note: ");
console.log("Now if you cross the score 10, you will go to level 3 ");
console.log( );

var better = 6;
var quiz = [{
  question: "1. What is the name of our solar system ? ",a: 'Gama Ray', b: 'Andromeda Galaxy', c: 'Milky Way',
  answer: "c"
}, {
  question: "2. Which planet is called Twin sister of earth ? ", a: 'Venus', b: 'Naptune', c: 'Saturn',answer: "a"
}, {
  question: "3. Largest planet of solar system in size ? ", a: 'Uranus', b: 'Jupiter', c: 'Saturn', answer: "b"
}, {
  question: "4. What is huge system of stars is called ? ", a: 'Solar System', b: 'Universe', c: 'Galaxy',
  answer: "c"
}, {
  question: "5. Comets revolves around the .... ", a: 'Sun', b: 'Earth', c: 'Moon', answer: "a"
}];
for(var j=0; j < quiz.length; j++) {
     console.log(quiz[j].question);
     console.log('[a,b,c,]');
     console.log('A: ' +quiz[j].a);
     console.log('B: ' +quiz[j].b);
     console.log('C: '+quiz[j].c);
     console.log('');
     var answer = readlineSync.question('Answer: ');

     if(answer.toLowerCase() === quiz[j].answer.toLowerCase()) {
       console.log("Correct");
       score = score + 3;
     } else {
       console.log("Incorrect");
       score = score - 1;
     }
     console.log("******");
     console.log( );
   }
console.log("Your score: " + score);
console.log("You performed well.");
console.log(  );
if (score <= better){
  console.log("You are not qualified for level 3 ")
   return
} else {
  console.log('Enjoy your next level ');
}

console.log(  );
console.log(  );

console.log("                    level 3 ");
console.log( );
console.log( );
console.log("Note: ");
console.log("This is last level, answer correct to get good score ");
console.log( );

 var questions = [{
   question: "Name the inner planet ? ", a: 'Mercury', b: 'venus', c: 'Earth', d: 'Mars', e: 'All of the above',answer: 'e' }, {
     question: "How many planet made up of gas ? ",a: '2',b: '6',c: '4',d: '5',e: '8',answer: 'c'
   }, {
     question: "Which part of the sun is visible to the humans ? ",a: 'Photosphere', b: 'Core', c: "Corona", d: "Chromosphere", e: 'All of the above',answer: "a"
   }, {
     question: "Which planet in the Solar System has highest density ? ",a: 'Uranus', b: 'Saturn',c: 'Earth', d: 'Mars',e: 'Neptune',answer: 'c'
   }, {
     question: "Which planet has largest ring pattern ? ",a: "Uranus", b: 'Jupiter', c: 'Neptune', d: 'Saturn',e: 'b and c',answer: 'd'
   }];

   for(var k=0; k < questions.length; k++) {
     var n = k+1;
     console.log(n+'. '+questions[k].question);
     console.log('[a,b,c,d,e]');
     console.log('A: ' +questions[k].a);
     console.log('B: ' +questions[k].b);
     console.log('C: '+questions[k].c);
     console.log('D: '+questions[k].d);
     console.log('E: '+questions[k].e);
     console.log('');
     var answer = readlineSync.question('Answer: ');

     if(answer.toLowerCase() === questions[k].answer.toLowerCase()) {
       console.log("Correct");
       score = score + 2;
       console.log( );
     } else {
       console.log("Incorrect");
       score = score - 1;
       console.log( );
     }
   }
console.log('Congratulations! ' + userName );
console.log ("You rock by completed the game");
console.log( );

var firstScorer = {
  name: '1. Megha',
  score: '30'
};
console.log( );
var secondScorer = {
  name: '2. Eshi',
  score: '28'
}; 
console.log( "Score List");
console.log( );
var highScore = [firstScorer,secondScorer];
for(var m=0; m < highScore.length; m++ ){
  var currentScore = highScore[m];
console.log(currentScore.name ,currentScore.score );
}
if(score === firstScorer ) {
  console.log("Congratulations!");
  console.log("You beat the High Score!");

   if(score === secondScore){
    console.log("You get Second Position!");
    } else { 
    console.log("You get third position!");
  } 
} else {
  console.log("3." + userNmae + score);
    console.log( );
  }

console.log("Thanks for playing"); 
