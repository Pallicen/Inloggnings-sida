document.getElementById("välkommensida").style.display = "none";

const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

loginButton.addEventListener("click", function (){
  const användarnamn = document.getElementById("användarnamn").value;
  const lösenord = document.getElementById("lösenord").value;
  const fel = document.getElementById("fel");

  const rättAnvändarnamn = "test";
  const rättLösenord = "1234";

  if (användarnamn === rättAnvändarnamn && lösenord === rättLösenord) {

    document.getElementById("inloggningssida").style.display = "none";
    document.getElementById("välkommensida").style.display = "block";

  } else {
    fel.textContent = "Fel användarnamn eller lösenord";
  }
});

logoutButton.addEventListener("click", function() {

    document.getElementById("inloggningssida").style.display = "block";
    document.getElementById("välkommensida").style.display = "none";

    document.getElementById("användarnamn").value = "";
    document.getElementById("lösenord").value = "";
    document.getElementById("fel").textContent = "";

});