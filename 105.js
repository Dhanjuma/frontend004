const artists =[
    "juicewrld", "xxxtentacion", "lil peep", "trippie redd", "powfu", "phora"
];
console.log(artists[3]);



const food = [
    "rice", "beans", "plantain", "yam", "potato", "melon"
];
console.log(food[0]+ " and "+food[1]);


const cereals =[
    "cornflakes", "goldenmorn", "cocopops", "quaker oats", "rice crispies", "fruits and fibre"
];
console.log(cereals[4]);

const evennumbs = [
    12,44,68,90,98,102
];
console.log(evennumbs.toString());



const oddnumbs = [
    3,14,67,85,17,75
];
console.log(oddnumbs.concat (' & ', evennumbs));
console.log(oddnumbs +" & " +evennumbs);



const daysoftheweek = [
"monday", "tuesday", "wednesday", "thursday", "friday", "saturday" 
];
daysoftheweek.push("sunday");
let num = daysoftheweek.push();
console.log(num);
console.log(daysoftheweek.toString());



const months = [
    "january", "february", "march", "april", "may", "june"
];
months.push("july");
console.log(months);
console.log(months.push());



const leapyears = [
    2000,2004,2008,2012,2016,2020
];
console.log(leapyears.shift());
console.log(leapyears);



const grains = [
    "rice", "wheat", "maize", "oats", "barley", "millet"
];
grains.push("rye");
console.log(grains);
console.log(grains.push());




const foodnutrients = [
    "proteins", "carbohydrate", "lipids", "vitamins", "minerals", "water"
];
console.log(foodnutrients.unshift("dietery fibre"));
console.log(foodnutrients);





const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruit)