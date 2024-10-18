
function digitsAverage(szam) {
    let b = 0;
    let szamol = 0;
    for (let i = 1; i <= szam.length; i++) {
        b += i;
        szamol++;
        
    }
return b/szamol;

    }
let szam = 268;
console.log(digitsAverage(szam))




function isLeapYear(ev) {
    if (ev % 4 == 0 ) {
        return "Szökőév";
    }
    else if(ev % 100 == 0){
return "Nem szökőév";
    }
    else if(ev % 400 == 0){
return "Szökőév";
    }
    } 
let ev = 2004;
console.log(isLeapYear(ev));

/* Egészítsd ki az stonePaperScissorsWinner() függvényt!
A függvény két nem negatív egész számot kap paraméterül, melyek
0 - papír
1 - kő
2 - olló.

A két szám rendre az első illetve második játékos értéke.
El kell dönteni, hogy a játékban ki nyer, vagy döntetlen-e a játék.
Ennek megfelelően a visszatérési értékek:
'The second player wins.'
'The game is a tie.'
'The first player wins.'

*/
function stonePaperScissors(player1, player2) {
    let papir = 0;
    let ko = 1;
    let ollo = 2;
    
if (player1 == player2) {
    return "The game is a tie.";
}
else if ((player1 == ollo && player2 == papir) || (player1== ko && player2 == ollo) || (player1 == papir && player2 == ko)) {
    return "The first player wins."
}
else if ((player1 == papir && player2 == ollo) || (player1== ko && player2 == papir) || (player2 == papir && player1 == ko)) {
    return "The second player wins.";
}
    } 
let player1 = 2;
let player2 = 1;
console.log(stonePaperScissors(player1,player2));

/* Egészítsd ki a gradeCalculator() függvényt!
A függvény két nem negatín egész számot kap paraméterül. Az első szám az elért pontszám, a második a maximális pontszám.
A függvény kiszámolja, hogy hány százalékot ér a pntszám a maximumból és ez alapján egy betűvel jelölt értékelést ad vissza.
Visszatérési értéke A, B, C, D, vagy F, az elért eredménytől függően.
A: 90%-tól 100%-ig
B: 80%-tól 90%-ig
C: 70%-tól 80%-ig
D: 60%-tól 70%-ig
E: 50%-tól 60%-ig
F: 0%-tól 50%-ig

 */

function gradeCalculator(score, maximum) {
    
  let scoreszazalak = ((score * 100 ) % maximum);

if (0 <= scoreszazalak < 50) {
    return "F";
}
  else if (50 <= scoreszazalak < 60) {
    return "E";
}
  else if (60 <= scoreszazalak < 70) {
    return "D";
}
  else if (70 <= scoreszazalak < 80) {
    return "C";
}
  else if (80 <= scoreszazalak < 90) {
    return "B";
}

  if (90 <= scoreszazalak <= 100) {
    return "A";
  }


    }

    let score = 55;
    let maximum = 100;
    console.log(gradeCalculator(score,maximum))