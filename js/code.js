//Códigos para o site do Rubem Braga
// Cria um novo objeto da classe date
//Variavel

const tempo = new Date()

const txtData = (tempo.getFullYear() + ' - hora:' + tempo.getHours() + ' minuto: ' + tempo.getMinutes())

//ELEMENTOS DOM

const spanData = document.getElementById('data').innerText = txtData
const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')
const btHamburguer = document.getElementById('btHamburguer')
const navPhone = document.getElementById('navPhone')
const idX = document.getElementById('idX')

//Insere txtData dentro do ID "Data"

spanData.innerText = txtData


//Ações do Usuário(eventos)

//Ao clicar no id "btFechar"

btFechar.addEventListener('click', function () {
    //ocultar o modal - CSS Display:None
    divModal.style.display = 'none'
})

btHamburguer.addEventListener('click', function () {
    navPhone.style.display = 'block'

})

idX.addEventListener('click', function() {
navPhone.style.display = 'none'

})














