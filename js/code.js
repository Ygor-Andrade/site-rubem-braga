//Códigos para o site do Rubem Braga
// Cria um novo objeto da classe date
//Variavel

const tempo = new Date()

const txtData = (tempo.getFullYear() + ' - hora:' + tempo.getHours() + ' minuto: ' + tempo.getMinutes())

//ELEMENTOS DOM

const spanData = document.getElementById('data').innerText = txtData
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const idX = document.getElementById('idX')

//Insere txtData dentro do ID "Data"

spanData.innerText = txtData

//Ações do Usuário(eventos)

btHamburguer.addEventListener('click', function () {
    navPhone.style.display = 'block'

})

idX.addEventListener('click', function () {
    navPhone.style.display = 'none'

})














