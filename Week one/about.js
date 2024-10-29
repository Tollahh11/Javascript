document.getElementById("head").innerHTML = "About Myself"
document.getElementById("pass").innerHTML = "My name is Adekoya Boluwatife Omotola. I am a recent graduate of Olabisi Onabanjo University. I have a Bsc in Microbiology. I have a great passion for tech skills. The OSF has really given me a great opportunity to explore the horizon of Tech with the help of Equitech Education Technology <br>"
function addition() {
    let larn = "I am just learning";
    document.getElementById("learn").innerHTML = larn;
}
addition();
const about = {
    name: "Exquitech",
    about: "learning facility"
}
document.getElementById("demo").innerHTML = about.name + " is " + " a " + " great " + about.about;