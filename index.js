const objetivo = document.getElementById('Objetivo')
const Detalhes = document.getElementById('Detalhes')
const btn = document.getElementById('Enviar')
const ul = document.getElementById('ul')


function salvar(){
    const item = []
    ul.querySelectorAll('li').forEach(li => {
        const objetivoText = li.querySelector('h3').textContent
        const detalhesText = li.querySelector('p').textContent //pegar valor das li
        item.push({objetivo: objetivoText, detalhes: detalhesText})  
    })
    localStorage.setItem('lista', JSON.stringify(item))
}

function carregar(){
    const itemsCaregados =  JSON.parse(localStorage.getItem('lista')) || []
    itemsCaregados.forEach(item => {
        const li = document.createElement('li')
    const txtObjetivo = document.createElement('h3')
    const txtDetalhes = document.createElement('p')
    const btndelete = document.createElement('button')
    const id = Date.now()
    li.id = id
    txtObjetivo.textContent = objetivo.value
    txtDetalhes.textContent = Detalhes.value
    btndelete.textContent = "DELETAR"
    li.appendChild(txtObjetivo)
    li.appendChild(txtDetalhes)
    li.appendChild(btndelete)
    ul.appendChild(li)
    btndelete.addEventListener("click",() => {
        document.getElementById(id).remove()
        salvar()
    }) 
    })
}



btn.addEventListener("click", () => {
    const li = document.createElement('li')
    const txtObjetivo = document.createElement('h3')
    const txtDetalhes = document.createElement('p')
    const btndelete = document.createElement('button')
    const id = Date.now()
    li.id = id
    txtObjetivo.textContent = objetivo.value
    txtDetalhes.textContent = Detalhes.value
    btndelete.textContent = "DELETAR"
    li.appendChild(txtObjetivo)
    li.appendChild(txtDetalhes)
    li.appendChild(btndelete)
    ul.appendChild(li)
    btndelete.addEventListener("click",() => {
        document.getElementById(id).remove()
        salvar()
    })
    salvar()
})


carregar()