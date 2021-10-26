


function calculate(){
    const num1= Number(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);
    let total;
    if(num1 && num2 || (num1===0 || num2===0)){
        switch(operator){
            case '+':
                total=(num1+num2);
                break;
            case '-':
                total=num1-num2;
                break;
            case '*':
                total = num1*num2;
                break;
            case '/':
                if(num2 == 0){
                    total="can't divide by zero"
                }
                else{
                    total=num1/num2;  
                }
                break;
            default:
                total="Invalid Input"
                break;

        }
        document.getElementById("result").textContent=" = "+total;
    }

    
   
}