let head = document.getElementById("header");
head.style.width = "100%";
const h1 = document.getElementsByTagName("h1")[0];
h1.innerHTML = "Javascript webpage";
h1.style.textShadow = "2px 2px";
h1.style.marginLeft = "10px"
let ggg = document.getElementById("hd");
let hhh = document.getElementsByClassName("hd-a");
head.style.backgroundColor = "rgb(20, 120, 159)";
head.style.fontFamily = "Courier new";
head.style.display = "flex";
head.style.justifyContent = "space-between";
head.style.alignItems = "center";
let butto = document.getElementsByClassName("butto")
for(i = 0; i < butto.length; i++){
    butto[i].style.backgroundColor = "rgb(20, 120, 159)"
    butto[i].style.borderRadius = "10px"
}
for(i = 0; i < hhh.length; i++){
    hhh[i].style.margin = "10px";
    hhh[i].style.textDecoration = "none";
    hhh[i].style.color = "black";
    hhh[i].style.fontWeight = "800";
}
let img = document.getElementById("img");
img.style.marginTop = "10px";
function next(){
    document.getElementById("img").src = "./images/lady.jpg" 
}
function prev(){
    document.getElementById("img").src = "./images/headerimg.png"
}
document.getElementById("butt").style.display = "flex";
document.getElementById("butt").style.justifyContent = "space-between";
let mage1 = document.getElementById("mage1");
let mage2 = document.getElementById("mage2")
let mage3 = document.getElementById("mage3");
let mmm = document.getElementById("mmm")
mage1.style.margin = "10px 0";
mage1.style.float = "left"
mage1.style.position = "relative"
mage1.style.width = "100%"
mmm.style.position = "absolute"
mmm.style.color = "white"
mage2.style.clear = "both"
mage3.innerHTML = "My name is Adekoya Boluwatife Omotola.<br> I am a recent graduate of Olabisi Onabanjo University.<br> I have a Bsc in Microbiology.<br> I have a great passion for tech skills.<br> The OSF has really given me a great opportunity to explore the horizon of Tech with the help of Equitech Education Technology"
mage3.style.backgroundColor = "rgb(20, 120, 159)"
mage3.style.height = "200px"
mage3.style.padding = "50px"
mage3.style.borderRadius = "100px"
mage3.style.display = "flex"
mage3.style.margin = "30px 0px"
let form = document.getElementById("form")
form.style. justifyItems = "center"
form.style.marginBottom = "50px"
form.style.borderRadius = "100px"
form.style.backgroundColor = "rgba(6, 143, 143, 0.493)"
function validate(){
    let fname = document.forms['pform']['name'].value;
    let mail = document.forms['pform']['email'].value;
    let number = document.forms['pform']['number'].value;
    let password = document.forms['pform']['password'].value;
    if(fname == ""){
        alert("Full name is required");
        return false;
    }
    if(mail == ""){
        alert("E-mail is required");
        return false;
    }
    if(number == ""){
        alert("Mobile number is required");
        return false;
    }
    if(password == ""){
        alert("Password is required");
        return false;
    }
    window.open("asin.html")
}
mage1.addEventListener("mouseenter", function(){
    mmm.innerHTML = "This is the world of Web design"
})
mage1.addEventListener("mouseleave", function(){
    mmm.innerHTML = ""
})
mage2.addEventListener("mouseenter", function(){
    mage2.style.transform = "scale(0.8)"
    mage2.style.transition = "all 2s"
    mage2.style.backgroundColor = "blue"
})
mage2.addEventListener("mouseleave", function(){
    mage2.style.transform = "scale(1.0)"
    mage2.style.backgroundColor = "white"
})
mage3.addEventListener("mouseenter", function(){
    mage3.innerHTML = "You can get to know more about us by signing up<br> It is all about having a vision"
})
mage3.addEventListener("mouseleave", function(){
    mage3.innerHTML = "My name is Adekoya Boluwatife Omotola.<br> I am a recent graduate of Olabisi Onabanjo University.<br> I have a Bsc in Microbiology.<br> I have a great passion for tech skills.<br> The OSF has really given me a great opportunity to explore the horizon of Tech with the help of Equitech Education Technology"
})
let pic = document.getElementsByClassName("ovv")
for(i = 0; i < pic.length; i++){
    pic[i].style.margin = "10px"
}

