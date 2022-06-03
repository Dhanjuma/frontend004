//framewwork for asian model selection with specifics in mind.


let race = "asian";
let display;
if (race = "asian") {display = "proceed";}
console.log(display);


let age = 19;
let r;
if (age>18) {r = "eligible";}
else {r = "not eligible";}
console.log(r);


let gender = "male";
let r1;
if (gender ="male") {r1 = "enter";}
else {r1 = "try other door";}
console.log(r1);


let bloodgroup = "O+";
let feedback;
if (bloodgroup = "O+") {feedback = "proceed";}
else if (bloodgroup = "AB") {feedback = "also proceed";}
else {feedback = "sorry, try for another slot";}
console.log(feedback);


let bodybuild = "endomorph";
let r2;
if (bodybuild = "endomorph") {r2= "proceed";}
console.log(r2);


let weight = "128kg";
let r3;
if (weight>="120kg"&&weight<="150kg") {r3 = "proceed";}
console.log(r3);


let haircolor = "blonde";
let r4;
if (haircolor = "blonde") {r4 = "proceed";}
console.log(r4);


let hairstyling = "braids";
let r5;
if (hairstyling = "braids") {r5 = "proceed";}
console.log(r5);

let facialhair = "yes";
let r6;
if (facialhair = "yes") {r6 = "proceed";}
console.log(r6);


let height = "6'11";
let verdict;
if (height>"6'0"&&age>=18) {verdict = "selected";}
else if (height>"6'0"&&age<18) {verdict = "under further scrutiny";}
else {verdict = "do not qualify";}
console.log(verdict);

