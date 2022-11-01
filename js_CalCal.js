var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
function validateForm() {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("All fields are required!");
        document
            .getElementById("submit")
            .removeEventListener("click", countBmr);
    } else {
        countBmr();
    }
}
document.getElementById("submit").addEventListener("click", validateForm);
function countBmr() {
    var p = [age.value, height.value, weight.value];
    if (male.checked == true) {
        p.push("male");
    } else if (female.checked == true) {
        p.push("female");
    }
    form.reset();
    if (p[3]== "male"){
    var bmr = (10*Number(p[2])) + (Number(p[1])*6.25) - (5*Number(p[0])) + 5;
    }
    else if (p[3]== "female"){
    var bmr = (10*Number(p[2])) + (Number(p[1])*6.25) - (5*Number(p[0])) - 161;
    }
    
    var h2 = document.createElement("h2");
    var b = document.createTextNode("Calorie Intake: ");
    var r = document.createTextNode(parseFloat(bmr).toFixed(2));
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmr);
    document
        .getElementById("submit")
        .removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmr);