const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btntry")
const btnOther = document.querySelector("#btnother")
let luckPhrase = document.querySelector(".screen2 .phrase p")

let randomPhrase = Math.round(Math.random() * 10)



btnTry.addEventListener('click', clickPhrase)
btnOther.addEventListener('click', tryAgain)

function clickPhrase(e) {
  e.preventDefault()
  toggleScreen()

  switch (randomPhrase) {
    case 0:
      luckPhrase.textContent = `Uma bela flor é incompleta sem as suas folhas`;
    break;
    case 1:
      luckPhrase.textContent = `Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu`;
    break;
    case 2:
      luckPhrase.textContent = `Siga os bons e aprenda com eles`;
    break;
    case 3:
      luckPhrase.textContent = `Não compense na ira o que lhe falta na razão`;
    break;
    case 4:
      luckPhrase.textContent = `A maior de todas as torres começa no solo`;
    break;
    case 5:
      luckPhrase.textContent = `Não há que ser forte. Há que ser flexível`;
    break;
    case 6:
      luckPhrase.textContent = `A sorte favorece a mente bem preparada`;
     break;
    case 7:
      luckPhrase.textContent = `n tem frase trouxa`;
    break;
    case 8:
      luckPhrase.textContent = `oioioi`;
    break;
    case 9:
      luckPhrase.textContent = `tudo de bom pra ocê`;
    break;
    case 10:
      luckPhrase.textContent = `tropa do bixcoito`;
    break;
  }

}

function tryAgain() {
  toggleScreen()
  randomPhrase = Math.round(Math.random() * 10)
}




function toggleScreen() {

  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}