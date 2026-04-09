function calculator(){
    let n=document.getElementById("num").value;
    let total=0;
    for(let i =0;i<n;i++){
        let k=parseInt(prompt("enter marks"));
        total=total+k;
    }
    let average=total/n;
    let grade;
    if(average>=90){
        grade="A";
    }
    else if (average>=80 && average<90){
        grade="B";
    }
    else if (average>=70 && average<80){
        grade="C";
    }
    else if (average>=60 && average<70){
        grade="D";
    }
    else{
        grade="E";
    }
    document.getElementById("result").innerHTML="Total="+total+"<br>"+"Average="+average+"<br>"+"Grade="+grade;
}