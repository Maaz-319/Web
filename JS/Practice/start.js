var num1 = 0
var num2 = 0
var oper = ''
var agin = ""

function whole(){
    num1 = parseFloat(window.prompt("Enter first number"))
    oper = window.prompt("Now enter a operator(+, -, /, *)")
    num2 = parseFloat(window.prompt("Enter second number"))
    if (oper == '+'){
        document.write(num1 + " " + "+ " +  + num2 + " " + " = ")
        document.writeln(num1 + num2)
        document.write("<br>")
    }else if (oper == '-'){
        document.write(num1 + " " + "- " +  + num2 + " " + " = ")
        document.writeln(num1 - num2)
        document.write("<br>")
    }else if(oper == '/'){
        document.write(num1 + " " + "/ " +  + num2 + " " + " = ")
        document.writeln(num1 / num2)
        document.write("<br>")
    }else if(oper == '*'){
        document.write(num1 + " " + "* " +  + num2 + " " + " = ")
        document.writeln(num1 * num2)
        document.write("<br>")
    }else{
        whole()
    }
    user = parseInt(window.prompt("Choose: \n1) Again\n2) Exit"))
    if (user == 1){
        whole()}
    else if (user == 2){
        os.system(exit())}
}

/*function again(){
    var user_Choice = parseInt(window.prompt("Choose\n\n1) Run again\n2) Exit\nAnswer: "))
    if (user_Choice == 1){
        whole()
    }else if (user_Choice == 2){
        window.close() 
    }else{
        again()
    }
}
*/
function again(){
    user = parseInt(window.prompt("Choose: \n1) Again\n2) Exit"))
    if (user == 1){
        whole()}
    else if (user == 2){
        os.system(exit())}
    else{
        again()}
}
whole()