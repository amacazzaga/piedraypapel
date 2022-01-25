const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("computer-choice");
const arrayUserButton = document.querySelectorAll(".userButton");
const arrayValues = ["piedra", "papel", "tijera"];
const modalEmpate = document.getElementById("myModal-empate");
const modalGanaste = document.getElementById("myModal-ganaste");
const modalPerdiste = document.getElementById("myModal-perdiste");
arrayUserButton.forEach((nodo) => {
  nodo.addEventListener("click", () => {
    userChoice.innerText = nodo.id; //userButton.id//
    const randomNumber = Math.floor(Math.random() * arrayValues.length);
    pcChoice.innerText = arrayValues[randomNumber];
    //empieza empate
    function tie(userPick, pcPick) {
      if (userPick.innerText === pcPick.innerText) {
        modalEmpate.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalEmpate) {
            modalEmpate.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      }
    }
    tie(userChoice, pcChoice);

    //PIEDRA//
    function rock(userPick, pcPick) {
      if (
        userPick.innerText === "piedra" &&
        pcPick.innerText != "papel" &&
        pcPick.innerText != "piedra"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      } else if (
        userPick.innerText === "piedra" &&
        pcPick.innerText != "tijera" &&
        pcPick.innerText != "piedra"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      }
    }
    rock(userChoice, pcChoice);

    //PAPEL//
    function paper(userPick, pcPick) {
      if (
        userPick.innerText === "papel" &&
        pcPick.innerText != "tijera" &&
        pcPick.innerText != "papel"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      } else if (
        userPick.innerText === "papel" &&
        pcPick.innerText != "piedra" &&
        pcPick.innerText != "papel"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      }
    }
    paper(userChoice, pcChoice);

    //TIJERA//
    function scissor(userPick, pcPick) {
      if (
        userPick.innerText === "tijera" &&
        pcPick.innerText != "piedra" &&
        pcPick.innerText != "tijera"
      ) {
        modalGanaste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalGanaste) {
            modalGanaste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      } else if (
        userPick.innerText === "tijera" &&
        pcPick.innerText != "papel" &&
        pcPick.innerText != "tijera"
      ) {
        modalPerdiste.style.display = "block";
        window.onclick = function (event) {
          if (event.target == modalPerdiste) {
            modalPerdiste.style.display = "none";
            userPick.innerText = "";
            pcPick.innerText = "";
          }
        };
      }
    }
    scissor(userChoice, pcChoice);
  });
});
