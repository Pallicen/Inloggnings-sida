
const ärInloggad = localStorage.getItem("ärInloggad");
const välkommensida = document.getElementById("välkommensida");
const inloggningssida = document.getElementById("inloggningssida");
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");
const fel = document.getElementById("fel");

const rättAnvändarnamn = "test";
const rättLösenord = "1234";

välkommensida.style.display = "none";

window.onload = function() {

if (ärInloggad === "true") {
inloggningssida.style.display = "none";
välkommensida.style.display = "block";
} else {
inloggningssida.style.display = "block";
välkommensida.style.display = "none";
}
};


loginButton.addEventListener("click", function (){

const användarnamn = document.getElementById("användarnamn").value;
const lösenord = document.getElementById("lösenord").value;

  if (användarnamn === rättAnvändarnamn && lösenord === rättLösenord) {
    localStorage.setItem("ärInloggad", "true");

   inloggningssida.style.display = "none";
   välkommensida.style.display = "block";

  } else {
    fel.textContent = "Fel användarnamn \neller lösenord";
  }
});

logoutButton.addEventListener("click", function() {
  localStorage.removeItem("ärInloggad");

  const användarnamn = document.getElementById("användarnamn");
  const lösenord = document.getElementById("lösenord");
  
  välkommensida.style.display = "none";
  inloggningssida.style.display = "block";
  
  användarnamn.value = "";
  lösenord.value = "";  
  fel.textContent = "";

});


