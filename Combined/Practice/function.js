alert("Connection to database successfull!")
const email = ['maazbinaasif123@outlook.com', "maazbinaasif@gmail.com"]
const pass = ["password", "password2"]

function signin(){
    var e = document.getElementById("emailid").value
    var p = document.getElementById("passid").value
    let index = email.indexOf(e)
    if (p == pass[index]){
        // alert("Welcome")
        // document.writeln("Welcome")
        var result = document.getElementById("answer")
        result.innerHTML = "Welcome 😊"
    }else{
        // alert("Good bye")
        var result = document.getElementById("answer")
        result.innerHTML = "😥 Email or Password is incorrect"
    }
    
}