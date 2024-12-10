document.getElementById("body").style.justifyItems = "center"
let formm = document.getElementById("formm")
formm.style.backgroundColor = "aqua"
formm.style.padding = "10%"
function valid(){
    let mail = document.forms['formm']['email'].value;
    let password = document.forms['formm']['password'].value;
    if(mail == ""){
        alert("E-mail is required");
        return false;
    }
    if(password == ""){
        alert("Password is required");
        return false;
    }
}