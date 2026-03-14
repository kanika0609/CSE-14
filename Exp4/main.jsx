function calculateResult(){
    let n=document.getElementById("subjects").Value;
    let total=0;
    for(let i=1;i<=n;i++){
        let marks=parseFloat(prompt("Enter no of subject"+i))
        total=total+marks;
    }
    let average=Number;
    average=total/n;
    let grade;
    let result;
    if (average>=90){
        grade="A";
    }
    else if(average>=80 && average<90){
        grade="B";
    }
    else if(average>=60 && average<80){
        grade="C";
    }
    else if(average>=40 && average<60){
        grade="D";
    }
    else{
        grade="E";
    }

    if(average>=40){
        result="Pass";
    }
    else{
        result="Fail";
    }
    
    document.getElementById("result").innerHTML=
    "Total Marks: "+total+"<br>"+"Average Marks: "+average.tofixed(2)+"<br>"
    +"Grade: "+grade+"<br>"+"Result: "+result;

}