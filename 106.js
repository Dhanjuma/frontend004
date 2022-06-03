person1 ={
    fname: "danjuma",
    lname: "yahaya",
    age: 21,
    job:{
        oc1:"student",
        oc2:"webdev"
    },
    devices:["phone","pc"],
    about: ()=> `${person1.fname} ${person1.lname} is a ${person1.job.oc1} learning ${person1.job.oc2} with his ${person1.devices[1]}`
};
console.log(person1.about());



person2 ={
    fname: "john",
    lname: "wick",
    age: 27,
    fullname: function(){
        return this.fname+ " " + this.lname;
    },
    job:{
        oc:"hitman"
    },
    devices:["phone","pc","guns"]
};
console.log(person2.fullname()+" is a " + person2.job.oc);



person3 ={
    fname: "black",
    lname: "widow",
    age: 25,
    job:{
        oc1:"assassin",
        oc2:"avenger"
    },
    devices:["phone","pc","guns","daggers"],
    bio: ()=>{fullname = ()=>{
        return person3.fname+person3.lname;
    }
        return `${fullname()} is an ${person3.job.oc1} who uses ${person3.devices[2]}`}
};
console.log(person3.bio());




person4 ={
    fname: "steven",
    lname: "strange",
    age: 27,
    fullname: function(){
        return this.fname+ " " + this.lname;
    },
    job:{
        oc1:"doctor",
        oc2:"sorcerer supreme"
    },
    devices:["cloak","spells","timestone"]
};
console.log( person4.fullname()+" is the "+person4.job.oc2);



person5 ={
    fname: "jared",
    lname: "higgins",
    age: 24,
    status:"deceased",
    fullnameAndage: function(){
        return this.fname+ " " + this.lname + " "+ this.age
        ;
    },
    job:{
        oc1:"rapper",
        oc2:"artist"
    },
    alias:"juice wrld"
};
console.log(person5.alias+ " is my favorite " + person5.job.oc2 );





person6 = {
    fname:"john",
    lname:"doe",
    age:"unknown",
    alias:"jack the ripper",
};
console.log(`${person6.alias} was never officially caught`);




obj = {
    name:"monalisa",
    artist:"leonardo da vinci",
    dimensions:"77cm x 53cm",
    location:"louvre museum",
    created:1503,
    subject:"lisa gherardini",
};
console.log(obj.name+" was created by "+obj.artist+" in "+obj.created);


obj1 = {
    name:"hellraiser",
    type:"movie franchise",
    created:1987,
    istallments:["1","2","3","4","5","6","7","8","9","10","11"],
    basedon:"the hellbound heart  novella"
};
console.log(obj1.name+" is a "+obj1.type+" i am trying to download.")


obj3 ={
    name:"ford",
    type:"car brand",
    founded:1903
};
console.log(obj3)



obj4 = {
    name:"multiply",
    do:function (a,b){
        return a*b
    }
};
console.log(obj4.do(3,4))