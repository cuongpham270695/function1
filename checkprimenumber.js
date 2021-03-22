let num=parseInt(prompt("Enter your number"));
if (num===1){
    document.write("1 is not prime number");
}else if(num>1&&num<10000){
    function checkPrime(num){
        for(let i=2;i<num;i++){
            if (num%i===0){
                return false;
            }return true;
        }
    }
}else{
    document.write("Enter again");
}if(checkPrime(num)){
    document.write(num+" is prime number");
}else{
    document.write(num+" is not prime number");
}