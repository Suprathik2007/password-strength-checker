const password = document.getElementById("password");
const strengthFill = document.getElementById("strength-fill");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", checkStrength);

function checkStrength(){

let value = password.value;

let score = 0;

if(value.length >= 8){
score++;
document.getElementById("len").style.color="green";
}else{
document.getElementById("len").style.color="red";
}

if(/[A-Z]/.test(value)){
score++;
document.getElementById("upper").style.color="green";
}else{
document.getElementById("upper").style.color="red";
}

if(/[0-9]/.test(value)){
score++;
document.getElementById("num").style.color="green";
}else{
document.getElementById("num").style.color="red";
}

if(/[!@#$%^&*]/.test(value)){
score++;
document.getElementById("special").style.color="green";
}else{
document.getElementById("special").style.color="red";
}

if(score<=1){
strengthFill.style.width="30%";
strengthFill.style.background="red";
strengthText.innerText="Weak Password";
}

else if(score<=3){
strengthFill.style.width="65%";
strengthFill.style.background="orange";
strengthText.innerText="Medium Password";
}

else{
strengthFill.style.width="100%";
strengthFill.style.background="green";
strengthText.innerText="Strong Password";
}

const globe = document.querySelector('.globe');
if(score <= 1){
globe.style.background = 'radial-gradient(circle at 30% 30%, #ff6b6b, #ee5a52, #ff6b6b, #d63031)';
} else if(score <= 3){
globe.style.background = 'radial-gradient(circle at 30% 30%, #ffa726, #fb8c00, #ffa726, #f57c00)';
} else {
globe.style.background = 'radial-gradient(circle at 30% 30%, #4facfe, #00f2fe, #4facfe, #1e3c72)';
}
globe.style.animationDuration = score === 4 ? '5s' : score >= 2 ? '10s' : '20s';

}

function togglePassword(){

if(password.type==="password"){
password.type="text";
}
else{
password.type="password";
}

}