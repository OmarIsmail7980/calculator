


function calculate(){
    const num1= Number(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = Number(document.getElementById("num2").value);
    let total;
    if(num1 && num2){
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
    }else{
        console.log("enter numbers")
    }

    document.getElementById("result").textContent=" = "+total;
   
}