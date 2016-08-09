var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradeA = 0;
var gradeB = 0;
var gradeC = 0;
var gradeD = 0;
var gradeF = 0;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] <= 60) {
    gradeF++;
  }
  else if (scores[i] <= 70 && scores[i] >= 61) {
    gradeD++;
  }
  else if (scores[i] <= 80 && scores[i] >= 71) {
    gradeC++;
  }
  else if (scores[i] <= 90 && scores[i] >= 81) {
    gradeB++;
  }
  else if (scores[i] <= 100 && scores[i] >= 91) {
    gradeA;
  }
}

console.log("   A : " + gradeA + "   B : " + gradeB  + "   C : " + gradeC + "   D : " + gradeD + "   F : " + gradeF);


for (var i = 0; i < scores.length; i++) {
  var highestGrade =  Math.max.apply(Math, scores);
  console.log(highestGrade);
}

for (var i = 0; i < scores.length; i++) {
  var lowestGrade = Math.min.apply(Math, scores);
  console.log(lowestGrade);
}





