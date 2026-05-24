const form = document.querySelector("form");
let n;
let res=document.querySelector("#res");
let previous=document.querySelector(".Previous")
let remaining=document.querySelector(".Remaining")
let c=1
let msg="";
let arr=new Array();
form.addEventListener('reset',function(){
    c=1;
    res.innerText=""
    previous.innerText=""
    remaining.innerText=""
    arr=[]
})
form.addEventListener('submit',function(e){
    if (c==1){
        n=Math.floor(Math.random()*100)+1
        arr=[]
    }

    e.preventDefault();
    const num=parseInt(form.querySelector("#num").value);
    arr.push(num);
    console.log(arr);
    
    
    if (num>100 || num<1){
        msg=`Please enter a valid number`;
    }
    else if (num==n){
        msg=`Congatulations !!! U guessed the correct number`;
        c=0
        
    }else if (num>n){
        msg=`Think of a smaller number`;
        
    }else{
        msg=`Think of a larger number`;
    }
    c++;
    console.log(c,n);
    res.innerText=msg;
    previous.innerText=`${arr}`;
    remaining.innerText=10-c+1;


    if(c==10){
        msg=`Limit Reached!!!\nCorrect answer is ${n}`
        console.log(msg);
        res.innerText=msg;
        remaining.innerText=0;
        c=1
        e.preventDefault();
    }
    
})
