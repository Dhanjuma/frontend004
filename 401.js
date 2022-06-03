let a = "#####";
for(let i=1; i<5; i++){
        console.log(a);
}



let ai ="";
for (i=0;i<4;i++){
    for(j=0;j<5;j++){
        ai+="#"
    }
    console.log(ai);
    ai="";
} 

 

let b = "";
for(i=0;i<4;i++){
    for(j=0;j<5;j++){
        if ((i==3)&&((j==0)||(j==4))){
            b+=" ";} else{b+="*";}
    }
    console.log(b);
    b = "";
}


 let c = "";
for(let i=1; i<5; i++){
        c+="#"
        console.log(c);
}
